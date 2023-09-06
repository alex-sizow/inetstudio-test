<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

import { useListStore } from '@/stores/List';

const store = useListStore();

const { users, items } = storeToRefs(store);

//const items = ref(['russia', 'usa', '> 20', '< 10']);

const variants = ref('default');
</script>

<template>
	<div class="list">
		<div
			class="list__item"
			v-for="(user, index) in users"
			:key="index">
			<h3
				class="list__item_header"
				v-if="user.header">
				{{ user.header }}
			</h3>

			<v-divider
				v-else-if="user.divider"
				:key="index"
				:inset="user.inset"></v-divider>

			<div
				v-if="user.title"
				class="list__item_person">
				<img
					class="item__image"
					:src="user.avatar"
					:alt="user.title" />
				<span v-html="user.title"></span>
				<span v-html="user.subtitle"></span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.list {
	display: flex;
	gap: 25px;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	&__item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;

		&_header {
			font-size: 30px;
			display: flex;
			justify-content: center;
			width: 100vw;
		}

		&_person {
			max-width: 200px;
			border-radius: 20px 20px 20px 20px;
			display: flex;
			flex-direction: column;
			gap: 10px;
			align-items: center;
			font-size: 19px;
			background: #fefdd7;
			box-shadow: 3px 3px 7px #d5d29c, -3px -3px 7px #eae5cd;
			img {
				width: 100%;
				border-radius: 20px 20px 0 0;
			}

			span {
				padding: 10px;
			}
		}
	}
}
</style>
