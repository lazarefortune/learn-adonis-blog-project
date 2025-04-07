import type { HttpContext } from '@adonisjs/core/http'
import Post from '#models/post'
import BaseController from '#controllers/base_controller'

export default class PostsController extends BaseController {
  public async index({ view }: HttpContext) {
    const posts = await Post.all()
    return view.render('pages/home', { posts })
  }

  public async create({ view }: HttpContext) {
    return view.render('posts/edit')
  }

  public async edit({ params, view }: HttpContext) {
    const post = await Post.findOrFail(params.id)
    return view.render('posts/edit', { post })
  }

  public async store({ request, response, session }: HttpContext) {
    const { title, content } = request.only(['title', 'content'])

    await Post.create({ title, content })
    this.notify(session, 'Article créé avec succès ✅')
    return response.redirect().toRoute('home')
  }

  public async update({ params, request, response, session }: HttpContext) {
    const post = await Post.findOrFail(params.id)
    const { title, content } = request.only(['title', 'content'])

    post.merge({ title, content })
    await post.save()

    this.notify(session, 'Article mis à jour avec succès ✅')
    return response.redirect().toRoute('home')
  }

  public async destroy({ params, response, session }: HttpContext) {
    const post = await Post.findOrFail(params.id)
    await post.delete()

    this.notify(session, 'Article supprimé avec succès ❌', 'info')
    return response.redirect().toRoute('home')
  }
}
