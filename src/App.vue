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

const selectedAge = ref('all');

const list = computed(() =>
	store.getUsersPerAge(
		selectedAge.value,
		selectedCountry.value,
	),
);
</script>

<template>
	<div>
		<ContentFilter
			:params="country"
			:ages="ages"
			v-model:value="selectedCountry" />
		<ContentFilter
			:params="ages"
			:ages="ages"
			v-model:value="selectedAge" />
		<ContentBlock :users="list" />

		<Footer />
	</div>
</template>

<style scoped></style>
