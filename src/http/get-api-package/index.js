const inventory = require('@architect/inventory')
const pkg = require('@architect/package')

// serialize ?arc=base64arcfile into cloudformation
exports.handler = async function http (req) {
  let statusCode = 200
  let body

  try {
    let rawArc = Buffer.from(req.queryStringParameters.arc, 'base64').toString()
    let inv = await inventory({ rawArc, deployStage: 'staging' })
    body = JSON.stringify(pkg(inv))
  }
  catch (e) {
    statusCode = 500
    body = JSON.stringify({
      name: e.name,
      message: e.message,
      stack: e.stack
    })
  }

  return {
    statusCode,
    body
  }
}
