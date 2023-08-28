const { query } = require("@simpleview/sv-graphql-client");
const client_query = query;

module.exports.People = class People{
	constructor({ graphUrl, graphServer }) {
		this._graphUrl = graphUrl;
		this._graphServer = graphServer;
	}


	// Find
	async find({ fields='', context, filter, headers }) {
		const query = `
			query FindPeopleQuery($filter: training_people_find_filter_input) {
				training {
					find_person(filter: $filter) {
						${fields}
					}
				}
			}
		`;

		return await client_query({
			query,
			variables:{filter},
			headers,
			url: this._graphUrl,
			clean: true // automatically run nullToUndefined
		})
	};


	// Insert
	async insert({ fields='', context, input, headers }) {
		const query = `
			mutation InsertPersonMutationVar($input: [training_people_insert_input]) {
				training {
					insert_person(input: $input) {
						${fields}
					}
				}
			}
		`;

		return await client_query({
			query,
			variables:{input},
			headers,
			url: this._graphUrl,
			clean: true
		})
	};


	// Remove
	async remove({ fields='', context, filter, headers }) {
		const query = `
			mutation RemovePersonMutation($filter: training_people_remove_filter_input) {
				training {
					remove_person(filter: $filter) {
						${fields}
					}
				}
			}
		`;

		return await client_query({
			query,
			variables:{filter},
			headers,
			url: this._graphUrl,
			clean: true
		})
	};
};