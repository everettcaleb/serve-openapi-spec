const fs = require('fs')
const express = require('express')
const yaml = require('js-yaml')

module.exports = specPath => {
  const specYaml = fs.readFileSync(specPath, 'utf8')
  const specJson = JSON.stringify(yaml.safeLoad(specYaml))

  return express.Router()
    .get('/spec.yaml', (req, res) =>
      res.type('application/x-yaml').send(specYaml)
    )
    .get('/spec.json', (req, res) =>
      res.type('application/json').send(specJson)
    )
}
