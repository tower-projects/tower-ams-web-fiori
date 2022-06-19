<script lang="ts">
    import Table from './Table.svelte';
    import TableHeader from './TableHeader.svelte';
    import TableRow from './TableRow.svelte';
    import TableCell from './TableCell.svelte';
    import TableBody from './TableBody.svelte';
    import {writable} from 'svelte/store';
    import {createEventDispatcher, setContext} from 'svelte';

    type DataTableRow = { id: unknown; [key: string]: DataTableValue };

    type DataTableHeader = DataTableNonEmptyHeader | DataTableEmptyHeader;

    type DataTableEmptyHeader = {
        key: DataTableKey;
        empty: boolean;
        display?: (item: DataTableValue) => DataTableValue;
        sort?: false | ((a: DataTableValue, b: DataTableValue) => 0 | -1 | 1);
        columnMenu?: boolean;
        width?: string;
        minWidth?: string;
    };

    type DataTableNonEmptyHeader = {
        key: DataTableKey;
        value: DataTableValue;
        display?: (item: DataTableValue) => DataTableValue;
        sort?: false | ((a: DataTableValue, b: DataTableValue) => 0 | -1 | 1);
        columnMenu?: boolean;
        width?: string;
        minWidth?: string;
    };

    type DataTableKey = string;

    type DataTableRowId = unknown;

    type DataTableValue = unknown;

    /**
     * Specify the data table headers
     */
    export let headers: ReadonlyArray<DataTableHeader> = [];

    /**
     * Specify the rows the data table should render
     * keys defined in `headers` are used for the row ids
     */
    export let rows: ReadonlyArray<DataTableRow> = [];

    /** Set to `true` for the sortable variant */
    export let sortable = false;

    /**
     * Specify the header key to sort by
     */
    export let sortKey: DataTableKey = null;

    /**
     * Specify the ids for rows that should not be expandable
     */
    export let nonExpandableRowIds: ReadonlyArray<DataTableRowId> = [];

    /**
     * Specify the row ids to be selected
     */
    export let selectedRowIds: ReadonlyArray<DataTableRowId> = [];

    /**
     * Specify the ids of rows that should not be selectable
     */
    export let nonSelectableRowIds: ReadonlyArray<DataTableRowId> = [];

    /** Specify the number of items to display in a page */
    export let pageSize = 0;

    /** Set to `number` to set current page */
    export let page = 0;

    const dispatch = createEventDispatcher();
    const batchSelectedIds = writable(false);
    const tableRows = writable(rows);

    setContext('DataTable', {
        batchSelectedIds,
        tableRows,
        resetSelectedRowIds: () => {
            selectAll = false;
            selectedRowIds = [];
            if (refSelectAll) refSelectAll.checked = false;
        }
    });

    let refSelectAll = null;

    $: batchSelectedIds.set(selectedRowIds);
    $: rowIds = $tableRows.map((row) => row.id);
    $: expandableRowIds = rowIds.filter((id) => !nonExpandableRowIds.includes(id));
    $: selectableRowIds = rowIds.filter((id) => !nonSelectableRowIds.includes(id));
    $: selectAll = selectableRowIds.length > 0 && selectedRowIds.length === selectableRowIds.length;
    $: headerKeys = headers.map(({key}) => key);
    $: tableCellsByRowId = rows.reduce((rows, row) => {
        rows[row.id] = headerKeys.map((key, index) => ({
            key,
            value: resolvePath(row, key),
            display: headers[index].display,
        }));
        return rows;
    }, {});
    $: $tableRows = rows;
    $: sortedRows = [...$tableRows];

    const formatHeaderWidth = (header: DataTableHeader) => {
        const styles = [
            header.width && `width: ${header.width}`,
            header.minWidth && `min-width: ${header.minWidth}`
        ].filter(Boolean);
        if (styles.length === 0) return undefined;
        return styles.join(';');
    };

    $: thKeys = headers.reduce((a, c) => ({...a, [c.key]: c.key}), {});
    const resolvePath = (object, path) => {
        if (path in object) return object[path];
        return path
            .split(/[\.\[\]\'\"]/)
            .filter((p) => p)
            .reduce((o, p) => (o && typeof o === "object" ? o[p] : o), object);
    };
    const getDisplayedRows = (rows, page, pageSize) =>
        page && pageSize ? rows.slice((page - 1) * pageSize, page * pageSize) : rows;
    $: displayedRows = getDisplayedRows($tableRows, page, pageSize);
    $: displayedSortedRows = getDisplayedRows(sortedRows, page, pageSize);

    $: sorting = sortable && sortKey != null;
</script>

<Table>
    <TableHeader>
        <TableRow>
            {#each headers as header (header.key)}
                {#if header.empty}
                    <th scope="col" style={formatHeaderWidth(header)}></th>
                {:else}
                    <TableCell>
                        {header.value}
                    </TableCell>
                {/if}
            {/each}
        </TableRow>
    </TableHeader>
    <TableBody>
        {#each sorting ? displayedSortedRows : displayedRows as row, i (row.id)}
            <TableRow>
                {#each tableCellsByRowId[row.id] as cell, j (cell.key)}
                    <TableCell
                            on:click="{() => {
                  dispatch('click', { row, cell });
                  dispatch('click:cell', cell);
                }}"
                    >
                        <slot
                                name="cell"
                                row="{row}"
                                cell="{cell}"
                                rowIndex="{i}"
                                cellIndex="{j}"
                        >
                            {cell.display ? cell.display(cell.value) : cell.value}
                        </slot>
                    </TableCell>
                {/each}
            </TableRow>

        {/each}
    </TableBody>
</Table>
