import { MainRoutesController } from './routes-controller'
import { app } from '@/app'

export default async function routes() {
  const mainRoutesController = new MainRoutesController()

  app.get('/', mainRoutesController.hello)
}
