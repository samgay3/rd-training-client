const { query } = require("@simpleview/sv-graphql-client");


class People{
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
    console.log("headers:", headers);

    const query = `
      query FindPeopleQuery($filter: training_people_find_filter_input) {
        training {
          find_person(filter: $filter) {
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
      mutation InsertPersonMutationVar($input: [training_people_insert_input]) {
        training {
          insert_person(input: $input) {
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
      mutation RemovePersonMutation($filter: training_people_remove_filter_input) {
        training {
          remove_person(filter: $filter) {
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
  People
};
