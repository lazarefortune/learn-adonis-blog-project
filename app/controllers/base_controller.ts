import type { HttpContext } from '@adonisjs/core/http'

export default class BaseController {
  protected notify(
    session: HttpContext['session'],
    message: string,
    type: 'success' | 'error' | 'info' = 'success'
  ) {
    session.flash('notification', { type, message })
  }
}
