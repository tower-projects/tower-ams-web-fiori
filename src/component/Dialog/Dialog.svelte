<script lang="ts">
    export let active = false;

</script>

<div class="fd-dialog" class:fd-dialog--active={active}>
    <div class="fd-dialog__content" role="dialog">
        <slot/>
    </div>

</div>