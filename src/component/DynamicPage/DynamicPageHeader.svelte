<script lang="ts">
    export let breadcrumbs: Array<unknown>;

    export let title: string;
    export let titleContent: string;
    export let subTitle: string;
</script>

<header class="fd-dynamic-page__header">
    <div
            class:fd-dynamic-page__title-area={true}
            class:fd-dynamic-page__title-area--collapsed={true}
            tabindex="0"
    >
        <div class:fd-dynamic-page__main-container={true}>
            <div class:fd-dynamic-page__breadcrumb-title-container={true}>
                {#if breadcrumbs != null && breadcrumbs.length > 0}
                    <div class:fd-dynamic-page__breadcrumb-container={true}/>
                {/if}

                <div class:fd-dynamic-page__title-container={true}>
                    {#if title != null}
                        <h1 class="fd-title fd-dynamic-page__title" {title}>{title}</h1>
                    {/if}
                    {#if titleContent != null}
                        <div class="fd-dynamic-page__title-content" title={titleContent}>{titleContent}</div>
                    {/if}

                    {#if $$slots.toolbar}
                        <div class="fd-dynamic-page__toolbar-container">
                            <slot name="toolbar"/>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
        {#if subTitle}
            <div class="fd-dynamic-page__subtitle">{subTitle}</div>
        {/if}
    </div>
    <slot/>
</header>
