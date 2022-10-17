const path = require('path');
const urlJoin = require('url-join');
const { CoreService } = require('@semapps/core');
const { containers } = require('@semapps/activitypub');
const CONFIG = require('../config/config');

module.exports = {
  mixins: [CoreService],
  settings: {
    baseUrl: CONFIG.HOME_URL,
    baseDir: path.resolve(__dirname, '..'),
    triplestore: {
      url: CONFIG.SPARQL_ENDPOINT,
      user: CONFIG.JENA_USER,
      password: CONFIG.JENA_PASSWORD,
      mainDataset: CONFIG.MAIN_DATASET,
    },
    containers,
    // We need this to interoperate with Mastodon, because it doesn't recognize custom contexts
    // Will be fixed with https://github.com/assemblee-virtuelle/semapps/issues/1046
    jsonContext: ['https://www.w3.org/ns/activitystreams', 'https://w3id.org/security/v1'],
    mirror: false // Disable MirrorService as we don't need it
  }
};
