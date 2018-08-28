const path = require('path'),
    express = require('express'),
    webpack = require('webpack'),
    app = express(),
    port = process.env.PORT || 3000,
    config = require('./webpack.config')

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})

app.get('/', (req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
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
