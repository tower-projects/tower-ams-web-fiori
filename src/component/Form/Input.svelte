<script lang="ts">
    export let placeholder: string;

    export let value;
</script>

<input class="fd-input" bind:value type="text" {...$$restProps} placeholder={placeholder}>