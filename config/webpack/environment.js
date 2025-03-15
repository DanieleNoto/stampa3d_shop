const { environment } = require('@rails/webpacker')

environment.config.merge({
  node: {
    // Assicurati che questi siano settati correttamente
    __dirname: false, // per evitare l'inclusione di __dirname
    __filename: false, // per evitare l'inclusione di __filename
    global: false, // disabilitare il global
  },
})

module.exports = environment
