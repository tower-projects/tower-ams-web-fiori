<script lang="ts">
    export let compact = false

    export let counter: string;

    /** Specify the textarea value */
    export let value = "";
</script>

<textarea class="fd-textarea" bind:value class:fd-textarea--compact={compact} {...$$restProps}></textarea>
{#if counter}
    <div class="fd-textarea-counter">{counter}</div>
{/if}
