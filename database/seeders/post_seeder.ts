import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Post from '#models/post'

export default class extends BaseSeeder {
  async run() {
    await Post.createMany([
      {
        title: 'Bienvenue sur le blog',
        content: 'Ceci est mon tout premier post avec AdonisJS + MySQL 🎉',
      },
      {
        title: 'Un second article',
        content: 'On continue d’apprendre étape par étape.',
      },
    ])
  }
}
