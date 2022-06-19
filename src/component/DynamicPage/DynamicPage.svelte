<script lang="ts">
    export let size = 'xl';
</script>

<section class="fd-dynamic-page" class:fd-dynamic-page--xl={size === 'xl'} {...$$restProps}>
    <slot/>
</section>
