'use strict'

const fs = require('fs')
const path = require('path')
const legacySecretsPath = path.join(__dirname, '..', 'private', 'secret.json')
if (fs.existsSync(legacySecretsPath)) {
  console.error(
    `Legacy secrets file found at ${legacySecretsPath}. It should be deleted and secrets replaced with environment variables or config/local.yml`
  )
  process.exit(1)
}

const config = require('config').util.toObject()

module.exports = config.private
