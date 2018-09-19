const fs = require('fs')
const express = require('express')
const yaml = require('js-yaml')

module.exports = (specPath, options) => {
  const spec = yaml.safeLoad(fs.readFileSync(specPath, 'utf8'))
  spec.info.version = options.version || spec.info.version
  spec.basePath = options.basePath || spec.basePath

  const specJson = JSON.stringify(spec)
  const specYaml = yaml.safeDump(spec, { noRefs: true, skipInvalid: true })
  const name = (options && options.name) || 'spec'

  return express.Router()
    .get(`/${name}.yaml`, (req, res) =>
      res.type('application/x-yaml').send(specYaml)
    )
    .get(`/${name}.json`, (req, res) =>
      res.type('application/json').send(specJson)
    )
}
