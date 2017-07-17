const {
    FuseBox,
    SVGPlugin,
    StylusPlugin,
    CSSPlugin,
    CSSResourcePlugin,
    BabelPlugin,
    QuantumPlugin,
    WebIndexPlugin,
    Sparky,
    HTMLPlugin,
    EnvPlugin,
    UglifyJSPlugin
} = require('fuse-box')

const express = require('express')
const path = require('path')

let fuse, app
let isProduction = false

Sparky.task('config', () => {
  fuse = new FuseBox({
    homeDir: 'app/',
    output: '.dist/app/$name.js',
    sourceMaps: !isProduction,
    log: true,
    hash: isProduction,
    debug: true,
    cache: false,
    plugins: [
      EnvPlugin({ NODE_ENV: isProduction ? 'production' : 'development' }),
      SVGPlugin(),
      ['.styl',
        StylusPlugin({
          compress: isProduction,
          paths: [
            path.join(__dirname, 'app/styles/common/'),
            path.join(__dirname, 'app/styles/components/'),
            path.join(__dirname, 'app/styles/fonts/')
          ]
        }),
        CSSResourcePlugin({
          resolve: file => `/static/${file}`,
          macros: {
            static: `${__dirname}/app/`
          },
          dist: `${__dirname}/.dist/app/static`
        }),
        CSSPlugin()
      ],
      // CSSPlugin(),
      BabelPlugin(),
      WebIndexPlugin({
        title: 'FuseBox + React',
        template: 'app/index.html'
      }),
      isProduction && QuantumPlugin({
        removeExportsInterop: false,
        uglify: true
      })
    ]
  })

  // vendor
  fuse.bundle('vendor').target('browser').instructions('~ index.jsx')

  // bundle app
  app = fuse.bundle('app').target('browser').instructions('!> [index.jsx]')
})

Sparky.task('default', ['clean', 'config'], () => {
  // Configure development server
  fuse.dev({ root: false, port: 9005 }, server => {
    const app = server.httpServer.app
    const dist = path.join(__dirname, '.dist/app')
    app.use('/', express.static(path.join(dist, '')))
    app.get('*', (req, res) => {
      res.sendFile(path.join(dist, 'index.html'))
    })
  })

  // add dev instructions
  app.watch().hmr()
  return fuse.run()
})

Sparky.task('clean', () => Sparky.src('.dist/app/').clean('.dist/app/'))
Sparky.task('prod-env', ['clean'], () => { isProduction = true })
Sparky.task('dist', ['prod-env', 'config'], () => {
  // comment out to prevent dev server from running (left for the demo)
  fuse.dev()
  return fuse.run()
})
