var url = require('url');
var config = module.exports = {};
var redisToGoConfig;

config.server = {
  host: '0.0.0.0',
  port: process.env.PORT || 3000
};

config.redis = {
  host: 'localhost',
  port: 6379,
  options: {

  }
};

if (process.env.REDISTOGO_URL) {
  redisToGoConfig = url.parse(process.env.REDISTOGO_URL);
  config.redis.port = redisToGoConfig.port;
  config.redis.host = redisToGoConfig.hostname;
  config.redis.options.auth_pass = redisToGoConfig.auth.split(':')[1];
}
