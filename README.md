# serve-openapi-spec
Express middleware for serving a YAML OpenAPI v3 spec as /spec.yaml and /spec.json

## Installing
Run the following command:

    npm install serve-openapi-spec

## Usage
To use, include it as a router in an express app:

    const express = require('express')
    const path = require('path')
    const serveSpec = require('serve-openapi-spec')
    const app = express()
    ...
    app.use(serveSpec(path.resolve('openapi.yaml'), { name: 'spec' }))
    ...

You can also map it to a different path:

    app.use('/api/v1', serveSpec(path.resolve('openapi.yaml')))

Options are passed as the second argument to `serveSpec(pathToYaml, options)`. Options are:
- name (default: `spec`): The name assigned to the files (ex: `spec` would result in `/spec.yaml` whereas `swagger` would result in `/swagger.yaml`)

## Contributions
Anyone who wants to contribute changes/bug reports/fixes is welcome to and pull requests will be evaluated against the following acceptance criteria:

- Does the description clearly describe the change?
- Is any affected section of this README updated?
- Does `npm run check` succeed? (See [StandardJS](https://standardjs.com))
- Is it simple?
- Is it backwards-compatible? (if it isn't, it may still be accepted but the major version will be incremented)

## License
The MIT License

Copyright 2018 Caleb Everett

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
