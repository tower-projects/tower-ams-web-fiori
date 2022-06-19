<script lang="ts">
    /**
     * Specify the kind of button
     * @type {"primary" | "transparent" | "ghost" | "positive" | "negative" | "attention"}
     */
    export let kind;

    export let compact = false;

    export let icon;
</script>

<button
        {...$$restProps}
        on:click
        class:fd-button={true}
        class:fd-button--compact={compact}
        class:fd-button--emphasized={kind === 'primary'}
        class:fd-button--transparent={kind === 'transparent'}
        class:fd-button--ghost={kind === 'ghost'}
        class:fd-button--positive={kind === 'positive'}
        class:fd-button--negative={kind === 'negative'}
        class:fd-button--attention={kind === 'attention'}
>
    {#if icon != null}
        <i class="sap-icon--{icon}"/>
    {:else}
        <slot/>
    {/if}
</button>
