<script lang="ts">
    export let collapsed = false;
    export const actions = false;
</script>

<div class="fd-dynamic-page__collapsible-header-container">
    {#if !collapsed}
        <div class="fd-dynamic-page__collapsible-header" role="region" aria-label="Collapsed header">
            <slot/>
        </div>
    {/if}

    <div class:fd-dynamic-page__collapsible-header-visibility-container={true}>
        {#if actions}
            <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"/>
            <div
                    role="toolbar"
                    aria-label="Header actions"
                    class="fd-dynamic-page__collapsible-header-visibility-container--button-group"
            >
                <button
                        class="fd-dynamic-page__collapse-button fd-button fd-button--compact"
                        aria-label="See More"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-controls="fddplhvc2"
                        on:click={() => {
						collapsed = !collapsed;
					}}
                >
                    {#if collapsed}
                        <i class="sap-icon--slim-arrow-down"/>
                    {:else}
                        <i class="sap-icon--slim-arrow-up"/>
                    {/if}
                </button>
                <button
                        class="fd-dynamic-page__pin-button fd-button fd-button--compact"
                        aria-label="Pin this"
                >
                    <i class="sap-icon--pushpin-off"/>
                </button>
            </div>
            <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"/>
        {/if}
    </div>
</div>
