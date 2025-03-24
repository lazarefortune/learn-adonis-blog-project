// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import Post from '#models/post'

export default class PostsController {
  async index() {
    return await Post.all()
  }

  async show({ params }: HttpContext) {
    const post = Post.find(params.id)

    if (!post) {
      return { message: 'Aucun article' }
    }

    return post
  }
}
