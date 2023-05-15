const { query } = require("@simpleview/sv-graphql-client");


class Movies{
  constructor({ graphUrl, graphServer }) {
    this._graphUrl = graphUrl;
    this._graphServer = graphServer;
  }


  // Find
  async find({ fields, context, filter, headers }) {
    console.log("find_movie");
    console.log("fields:", fields);
    console.log("context:", context);
    console.log("filter:", filter);

    const query = `
      query FindMoviesQuery($filter: training_movies_find_filter_input) {
        training {
          find_movie(filter: $filter) {
            ${fields}
          }
        }
      }
    `;

    // TODO: Is the url automatically included without designating it? (sv-graphql-client)
    return await query({
      query,
      variables:{filter},
      headers,
      url: this._graphUrl,
      clean: true // automatically run nullToUndefined
    });
  };



  // Insert
  async insert({ fields, context, input, headers }) {
    console.log("insert_movie");
    console.log("fields:", fields);
    console.log("context:", context);
    console.log("input:", input);

    const query = `
          mutation InsertMovieVarMutation($input: [training_movies_insert_input]) {
            training {
              insert_movie(input: $input) {
                ${fields}
              }
            }
          }
        `;

    return await query({
      query,
      variables:{input},
      headers,
      url: this._graphUrl,
      clean: true // automatically run nullToUndefined
    });
  };


  // Remove
  async remove({ fields, context, filter, headers }) {
    console.log("remove_movie");
    console.log("fields:", fields);
    console.log("context:", context);
    console.log("filter:", filter);

    const query = `
          mutation RemoveMovieMutation($filter: training_movies_remove_filter_input) {
            training {
              remove_movie(filter: $filter) {
                ${fields}
              }
            }
          }
        `;

    return await query({
      query,
      variables:{filter},
      headers,
      url: this._graphUrl,
      clean: true // automatically run nullToUndefined
    });
  };
};


module.exports = {
  Movies
};
