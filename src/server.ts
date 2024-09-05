import { app } from './app'
import routes from './routes'

app.register(routes)

app.listen(
  {
    port: 3000,
  },
  () => {
    console.log('Server listening on port http://localhost:3000')
  },
)
