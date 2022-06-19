<script lang="ts">
    import {DynamicPage, DynamicPageHeader, DynamicPageContent, Toolbar, Spacer, Button, DataTable} from "$component"
    import SourceDialog from "./SourceDialog.svelte";

    let create = false;

</script>

<DynamicPage>
    <DynamicPageHeader title="警报源" subTitle="警报源管理">
    </DynamicPageHeader>

    <DynamicPageContent>
        <Toolbar title="警报源列表">
            <Spacer/>
            <Button icon="create" kind="transparent" compact on:click={()=> {create = true}}/>
            <Button icon="filter" kind="transparent" compact/>
            <Button icon="action-settings" kind="transparent" compact/>
        </Toolbar>

        <DataTable title="警报源列表" filterable
                   headers={[
				{ key: 'name', value: 'Name' },
				{ key: 'protocol', value: 'State' },
				{ key: 'port', value: 'Comment' }
			]}

                   rows={[
    {
      id: "a",
      name: "Load Balancer 3",
      protocol: "HTTP",
      port: 3000,
      rule: "Round robin",
    },
    {
      id: "b",
      name: "Load Balancer 1",
      protocol: "HTTP",
      port: 443,
      rule: "Round robin",
    },
    {
      id: "c",
      name: "Load Balancer 2",
      protocol: "HTTP",
      port: 80,
      rule: "DNS delegation",
    },
    {
      id: "d",
      name: "Load Balancer 6",
      protocol: "HTTP",
      port: 3000,
      rule: "Round robin",
    },
    {
      id: "e",
      name: "Load Balancer 4",
      protocol: "HTTP",
      port: 443,
      rule: "Round robin",
    },
    {
      id: "f",
      name: "Load Balancer 5",
      protocol: "HTTP",
      port: 80,
      rule: "DNS delegation",
    },
  ]}
        />
    </DynamicPageContent>
</DynamicPage>

<SourceDialog bind:create>

</SourceDialog>

