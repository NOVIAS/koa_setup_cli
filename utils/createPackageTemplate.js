import ejs from 'ejs'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { formatCode } from './prettierCode.js'

export default (config) => {
  const __dirname = fileURLToPath(import.meta.url)
  const template = fs.readFileSync(
    path.resolve(__dirname, '../../template/packageTemplate.ejs'))
  const code = ejs.render(template.toString(), {
    projectName: config.packageName,
    middleware: config.middleware
  })
  return formatCode(code, { parser: 'json' })
}
