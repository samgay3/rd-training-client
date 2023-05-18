// Connections are handled in this file
'use strict';
import { Movies } from "./collections/movies";
import { People } from "./collections/people";

class TrainingPrefix {
  constructor({ graphUrl, graphServer }) {
    this.name = 'training';
    this._graphUrl = graphUrl;
    this._graphServer = graphServer;
    // expose collections
    this.movies = new Movies({ graphUrl, graphServer });
    this.people = new People({ graphUrl, graphServer });
  }
};



module.exports = {
  TrainingPrefix
};