// router/index.js

import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

// Create Router
export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  // ...
  return next()
})