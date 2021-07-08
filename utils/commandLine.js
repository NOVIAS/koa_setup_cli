import inquirer from 'inquirer'
import packageName from '../questions/packageName.js'
import applicationPort from '../questions/applicationPort.js'
import middlewares from '../questions/middlewares.js'
import packageTool from '../questions/installTool.js'

export async function generateConfig () {
  return await inquirer.prompt([
    packageName, applicationPort, middlewares, packageTool
  ])
}
