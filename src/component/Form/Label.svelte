<script lang="ts">
    export let required = false;
</script>
<label class="fd-form-label" class:fd-form-label--required={required} {...$$restProps}>
    <slot/>
</label>