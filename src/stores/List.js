import { defineStore } from 'pinia';

export const useListStore = defineStore('List', {
	state: () => ({
		users: [
			{ header: 'List' },
			{
				avatar:
					'https://cdn.vuetifyjs.com/images/lists/1.jpg',
				title: 'Brunch this weekend?',
				subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
				country: 'russia',
				age: 31,
			},
			{ divider: true, inset: true },
			{
				avatar:
					'https://cdn.vuetifyjs.com/images/lists/2.jpg',
				title:
					'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
				subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
				country: 'russia',
				age: 11,
			},
			{ divider: true, inset: true },
			{
				avatar:
					'https://cdn.vuetifyjs.com/images/lists/3.jpg',
				title: 'Oui oui',
				subtitle:
					'<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
				country: 'usa',
				age: 19,
			},
			{ divider: true, inset: true },
			{
				avatar:
					'https://cdn.vuetifyjs.com/images/lists/4.jpg',
				title: 'Birthday gift',
				subtitle:
					'<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
				country: 'russia',
				age: 21,
			},
			{ divider: true, inset: true },
			{
				avatar:
					'https://cdn.vuetifyjs.com/images/lists/5.jpg',
				title: 'Recipe to try',
				subtitle:
					'<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
				country: 'usa',
				age: 21,
			},
		],

		country: ['russia', 'usa'],
		ages: ['> 20', '< 10'],
	}),

	getters: {
		getUsersPerCountry: (state) => (param) => {
			if (param === 'all') {
				return state.users;
			}
			return state.users.filter(
				(user) => user.country === param,
			);
		},
		getUsersPerAge: (state) => (age) => {
			if (age == 'all') {
				return state.users;
			}
			return state.users.filter((user) => {
				const number = parseInt(user.match(/\d+/)[0]);
				return user.age.includes('<')
					? age < number
					: age > number;
			});
		},
	},
});
