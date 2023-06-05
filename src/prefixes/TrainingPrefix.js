import { Movies } from "./collections/movies.js";
import { People } from "./collections/people.js";

export default class TrainingPrefix {
  constructor({ graphUrl, graphServer }) {
    this.name = 'training';
    this._graphUrl = graphUrl;
    this._graphServer = graphServer;

    // expose collections
    this.movies = new Movies({ graphUrl, graphServer });
    this.people = new People({ graphUrl, graphServer });
  }
};