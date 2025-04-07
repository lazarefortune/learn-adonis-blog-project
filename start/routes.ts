/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', '#controllers/posts_controller.index').as('home')
router.get('/posts/create', '#controllers/posts_controller.create').as('posts.create')
router.get('/posts/:id/edit', '#controllers/posts_controller.edit').as('posts.edit')
router.post('/posts/:id/update', '#controllers/posts_controller.update').as('posts.update')
router.post('/posts', '#controllers/posts_controller.store').as('posts.store')
router.post('/posts/:id/delete', '#controllers/posts_controller.destroy').as('posts.destroy')

router.on('/about').render('pages/about')
