import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0ef88b25 = () => interopDefault(import('../pages/Category.vue' /* webpackChunkName: "pages/Category" */))
const _4cbfb76d = () => interopDefault(import('../pages/Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _5668f88e = () => interopDefault(import('../pages/Checkout/Billing.vue' /* webpackChunkName: "pages/Checkout/Billing" */))
const _737ad5c4 = () => interopDefault(import('../pages/Checkout/Payment.vue' /* webpackChunkName: "pages/Checkout/Payment" */))
const _045f29e0 = () => interopDefault(import('../pages/Checkout/Shipping.vue' /* webpackChunkName: "pages/Checkout/Shipping" */))
const _242614f2 = () => interopDefault(import('../pages/Checkout/ThankYou.vue' /* webpackChunkName: "pages/Checkout/ThankYou" */))
const _32bb7c72 = () => interopDefault(import('../pages/ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _f8f0ebf4 = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "" */))
const _f35d076c = () => interopDefault(import('../pages/MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _08015eb4 = () => interopDefault(import('../pages/MyAccount/AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _17c178fc = () => interopDefault(import('../pages/MyAccount/BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _07ac2ade = () => interopDefault(import('../pages/MyAccount/LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _361d850c = () => interopDefault(import('../pages/MyAccount/MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _39c04490 = () => interopDefault(import('../pages/MyAccount/MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _2aa2bf2a = () => interopDefault(import('../pages/MyAccount/MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _7f93424a = () => interopDefault(import('../pages/MyAccount/OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _df6de362 = () => interopDefault(import('../pages/MyAccount/ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _09c99798 = () => interopDefault(import('../pages/Product.vue' /* webpackChunkName: "pages/Product" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _0ef88b25,
    name: "Category___en"
  }, {
    path: "/Checkout",
    component: _4cbfb76d,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _5668f88e,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _737ad5c4,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _045f29e0,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _242614f2,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/checkout",
    component: _4cbfb76d,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _5668f88e,
      name: "billing___en"
    }, {
      path: "payment",
      component: _737ad5c4,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _045f29e0,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _242614f2,
      name: "thank-you___en"
    }]
  }, {
    path: "/ContactUs",
    component: _32bb7c72,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _f8f0ebf4,
    name: "home___de"
  }, {
    path: "/Home",
    component: _f8f0ebf4,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _f35d076c,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _08015eb4,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _17c178fc,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _07ac2ade,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _361d850c,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _39c04490,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _2aa2bf2a,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _7f93424a,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _df6de362,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _09c99798,
    name: "Product___en"
  }, {
    path: "/de/Category",
    component: _0ef88b25,
    name: "Category___de"
  }, {
    path: "/de/Checkout",
    component: _4cbfb76d,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _5668f88e,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _737ad5c4,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _045f29e0,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _242614f2,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/checkout",
    component: _4cbfb76d,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _5668f88e,
      name: "billing___de"
    }, {
      path: "payment",
      component: _737ad5c4,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _045f29e0,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _242614f2,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _32bb7c72,
    name: "ContactUs___de"
  }, {
    path: "/de/Home",
    component: _f8f0ebf4,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _f35d076c,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _08015eb4,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _17c178fc,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _07ac2ade,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _361d850c,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _39c04490,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _2aa2bf2a,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _7f93424a,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _df6de362,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _09c99798,
    name: "Product___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _f35d076c,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _09c99798,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _0ef88b25,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _f35d076c,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _09c99798,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _0ef88b25,
    name: "category___en"
  }, {
    path: "/",
    component: _f8f0ebf4,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
