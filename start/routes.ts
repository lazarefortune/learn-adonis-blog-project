/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

// router.on('/').render('pages/home')
router.get('/', '#controllers/posts_controller.index').as('home')
router.get('/posts/:id', '#controllers/posts_controller.show').as('posts.show')
