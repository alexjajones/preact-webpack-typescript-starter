module.exports = function(env) {
    return require('./config/webpack.' + env.build + '.js')(env)
};