import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _008af80c = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _72071ca2 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _18ca0c99 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _30bfca4e = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _c4b95e1a = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _1828ab86 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _632b43b4 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _008af80c,
    children: [{
      path: "",
      component: _72071ca2,
      name: "home"
    }, {
      path: "/login",
      component: _18ca0c99,
      name: "login"
    }, {
      path: "/register",
      component: _18ca0c99,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _30bfca4e,
      name: "profile"
    }, {
      path: "/settings",
      component: _c4b95e1a,
      name: "settings"
    }, {
      path: "/new",
      component: _1828ab86,
      name: "new"
    }, {
      path: "/editor/:slug",
      component: _1828ab86,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _632b43b4,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
