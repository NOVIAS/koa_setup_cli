import ejs from 'ejs'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { formatCode } from './prettierCode.js'

export default (config) => {
  const __dirname = fileURLToPath(import.meta.url)
  const template = fs.readFileSync(
    path.resolve(__dirname, '../../template/indexTemplate.ejs'))
  const code = ejs.render(template.toString(), {
    port: config.port,
    middleware: config.middleware
  })
  return formatCode(code, { quote: true, parser: 'babel' })
}
