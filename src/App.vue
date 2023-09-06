<script setup>
import { computed, ref } from 'vue';
import ContentBlock from './components/ContentBlock.vue';
import ContentFilter from './components/ContentFilter.vue';
import Footer from './components/Footer.vue';

import { useListStore } from '@/stores/List';
import { storeToRefs } from 'pinia';

const store = useListStore();
const { users, country, ages } = storeToRefs(store);

const selectedCountry = ref('all');

const list = computed(() =>
	store.getUsersPerCountry(selectedCountry.value),
);
</script>

<template>
	<div>
		<ContentFilter
			:params="country"
			:ages="ages"
			v-model:value="selectedCountry" />
		<ContentBlock :users="list" />

		app v-bind="localAttrs">
		<Footer />
	</div>
</template>

<style scoped></style>
