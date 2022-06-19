<script lang="ts">
    export let verticalPadding = true;
</script>

<div class="fd-dialog__body" class:fd-dialog__body--no-vertical-padding={!verticalPadding}>
    <slot/>
</div>