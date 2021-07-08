import { checkMiddleware } from '../utils/checkMiddleware.js'
import { generateConfig } from '../utils/commandLine.js'

const userConfig = await generateConfig()

export function mergeConfig () {
  return {
    packageName: userConfig.packageName,
    port: userConfig.port,
    middleware: {
      static: checkMiddleware(userConfig, 'koa-static'),
      router: checkMiddleware(userConfig, '@koa/router')
    },
    installTool: userConfig.installTool
  }
}
