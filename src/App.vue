<script setup>
import ContentBlock from './components/ContentBlock.vue';
import ContentFilter from './components/ContentFilter.vue';
import Footer from './components/Footer.vue';
</script>

<template>
	<div>
		<ContentFilter />
		<ContentBlock />

		app v-bind="localAttrs">
		<Footer />
	</div>
</template>

<style scoped></style>
