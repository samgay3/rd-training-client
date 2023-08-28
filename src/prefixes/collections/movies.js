const { query } = require("@simpleview/sv-graphql-client");
const client_query = query;

module.exports.Movies = class Movies{
	constructor({ graphUrl, graphServer }) {
		this._graphUrl = graphUrl;
		this._graphServer = graphServer;
	}


	// Find
	async find({ fields='', context, filter, headers }) {
		const query = `
			query FindMoviesQuery($filter: training_movies_find_filter_input) {
				training {
					find_movie(filter: $filter) {
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
			mutation InsertMovieVarMutation($input: [training_movies_insert_input]) {
				training {
					insert_movie(input: $input) {
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
			mutation RemoveMovieMutation($filter: training_movies_remove_filter_input) {
				training {
					remove_movie(filter: $filter) {
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