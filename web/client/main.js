var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');
var VueJwtMongo = require('vue-jwt-mongo');

Vue.use(VueResource);
Vue.use(VueJwtMongo.Client);
// Устаналиваем плагин маршрутизации.
Vue.use(VueRouter);

// Подключаем компоненту-страницу регистрации.
var Register = require('./register.vue');

var login = require('./login.vue');

var feed = require('./feed.vue');

var index = require('./index.vue');

// Создаём новый объект маршрутизации.
var router = new VueRouter();

// Задаём соответствия между путями и страницами.
router.map({
    '/register': { component: Register },
    '/login': { component: login },
    '/feed': { component: feed },
    '/': { component: index }
});

// Указываем, что тег router-view находится
// в теге с идентификатором app.
router.start(Vue.extend({}), '#app');
