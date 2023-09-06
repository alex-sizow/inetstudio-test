<script setup>
import { useListStore } from '@/stores/List';
import { defineProps, ref } from 'vue';
const listStore = useListStore();
const authorId = ref(20);

const props = defineProps({
	params: { type: Array },
});

const value = ref('');

const emit = defineEmits(['update:value']);

const handleSelect = () => {
	emit('update:value', value.value);
};
</script>

<template>
	<div>
		<FormKit
			type="select"
			name="state"
			label="State"
			v-model="value"
			@change="handleSelect">
			<optgroup label="Countries">
				<option
					v-for="(item, index) in ['all'].concat(params)"
					:value="item"
					:key="index">
					{{ item }}
				</option>
			</optgroup>
		</FormKit>
	</div>
</template>

<style lang="scss" scoped></style>
