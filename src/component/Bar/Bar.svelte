<script lang="ts">
    export let footer = false
</script>

<div class="fd-bar" class:fd-bar--footer={footer}>
    <slot/>
</div>