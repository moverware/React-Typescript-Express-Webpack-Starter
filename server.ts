import * as path from 'path'
import * as express from 'express'
import * as webpack from 'webpack'
import config from './webpack.config'

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})

app.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'frontEnd', 'index.html'))
})

let compiler = webpack(config)
app.use(
    require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath,
        stats: { colors: true }
    })
)

app.use(require('webpack-hot-middleware')(compiler))
app.use(express.static(path.resolve(__dirname, 'dist')))
