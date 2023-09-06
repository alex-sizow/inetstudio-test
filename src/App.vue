<script setup>
import ContentBlock from './components/ContentBlock.vue';
import Footer from './components/Footer.vue';
</script>

<template>
	<div>
		<v-main>
			<ContentBlock />
		</v-main>
		<v-footer
			app
			v-bind="localAttrs">
			<Footer />
		</v-footer>
	</div>
</template>

<style scoped></style>
