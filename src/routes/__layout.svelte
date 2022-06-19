<script lang="ts">
	import ShellBar from '$component/ShellBar.svelte';

	import '@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3/css_variables.css';
	import 'fundamental-styles/dist/theming/sap_fiori_3.css';
	import 'fundamental-styles';
	import '../app.css';
</script>

<ShellBar primaryTitle="Tower AMS" secondaryTitle="secondary title" />

<slot />
