<script lang="ts">
    export let primaryTitle: string | undefined = undefined;
    export let secondaryTitle: string | undefined = undefined;
</script>

<div class:fd-shellbar={true} {...$$restProps}>
    {#if $$slots.startButton}
        <slot name="startButton"/>
    {/if}

    {#if primaryTitle != null}
        <span class="fd-shellbar__title">{primaryTitle}</span>
    {/if}
</div>
