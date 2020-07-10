const urlJoin = require('url-join');
const { WebfingerService } = require('@semapps/webfinger');

module.exports = {
  mixins: [WebfingerService],
  settings: {
    usersContainer: urlJoin(process.env.SEMAPPS_HOME_URL, 'actors')
  }
};
