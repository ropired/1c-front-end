var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

var Register = require('./register.vue');

var router = new VueRouter();

router.map({
  '/register': { component : Register }
});

router.start(Vue.extend({}), '#app');
