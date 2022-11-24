import app from './app'

import sendMessageRoutes from './routes/sendMessage.routes'
import ExpressStack from './types/expressStack'

app.listen(app.get('port'), () =>
  console.log(`[server] enabled on http://localhost:${app.get('port')}`)
)

app.post('/send-message', sendMessageRoutes)

app.get('/', (req, res) => {
  const routerStack: ExpressStack = app._router.stack
  const rawRoutesInUse = routerStack.filter(
    ({ name }) => name === 'bound dispatch'
  )
  const routesInUse = rawRoutesInUse.map(({ route }) => ({
    path: route?.path,
    methods: route?.methods
  }))

  return res.send({
    name: 'Welcome to Velandia Abogados API',
    content: {
      name: 'Current paths availables',
      paths: routesInUse
    }
  })
})
