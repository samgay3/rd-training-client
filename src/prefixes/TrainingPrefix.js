const { Movies } = require("./collections/movies.js");
const { People } = require("./collections/people.js");

module.exports = class TrainingPrefix {
	constructor({ graphUrl, graphServer }) {
		this.name = 'training';
		this._graphUrl = graphUrl;
		this._graphServer = graphServer;

		// expose collections
		this.movies = new Movies({ graphUrl, graphServer });
		this.people = new People({ graphUrl, graphServer });
	}
};