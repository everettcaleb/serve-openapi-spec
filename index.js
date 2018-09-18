const fs = require('fs')
const express = require('express')
const yaml = require('js-yaml')

module.exports = (specPath, options) => {
  const specYaml = fs.readFileSync(specPath, 'utf8')
  const specJson = JSON.stringify(yaml.safeLoad(specYaml))
  const name = (options && options.name) || 'spec'

  return express.Router()
    .get(`/${name}.yaml`, (req, res) =>
      res.type('application/x-yaml').send(specYaml)
    )
    .get(`/${name}.json`, (req, res) =>
      res.type('application/json').send(specJson)
    )
}
