// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  async index() {
    return [
      {
        id: 1,
        title: 'Mon premier article',
        content: 'Bienvenue dans AdonisJS 6',
      },
      {
        id: 2,
        title: 'Encore un article',
        content: 'On avance doucement !',
      },
    ]
  }

  async show({ params }: HttpContext) {
    const posts = [
      { id: 1, title: 'Mon premier article', content: 'Bienvenue dans AdonisJS 6' },
      { id: 2, title: 'Encore un article', content: 'On avance doucement !' },
    ]

    const post = posts.find((p) => p.id === Number(params.id))

    if (!post) {
      return { message: 'Aucun article' }
    }

    return post
  }
}
