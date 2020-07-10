const { ActivityPubService } = require('@semapps/activitypub');

module.exports = {
  mixins: [ActivityPubService],
  settings: {
    baseUri: process.env.SEMAPPS_HOME_URL,
  }
};
