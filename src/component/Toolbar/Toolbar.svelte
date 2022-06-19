<script lang="ts">
    export let overflow = false;

    export let dynamicPage = false;
    export let title: string;
</script>

<div
        class:fd-dynamic-page__toolbar={dynamicPage}
        class:fd-toolbar--title={title != null}
        class:fd-toolbar={!overflow}
        class:fd-toolbar__overflow={overflow}
        {...$$restProps}
>
    {#if title != null}
        <h4 style="margin: 0;">{title}</h4>
    {/if}

    <slot/>
</div>
