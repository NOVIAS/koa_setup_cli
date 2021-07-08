#!/usr/bin/env node
import renderIndexTemplate from '../utils/createIndexTemplate.js'
import renderPackageTemplate from '../utils/createPackageTemplate.js'
import { createDir, createFile } from '../utils/createProject.js'
import { generatePath } from '../utils/rootPath.js'
import { mergeConfig } from './config.js'
import runCommand from '../utils/execaCommand.js'

// 1 获取到用户配置
const userConfig = mergeConfig()
// 2 判断目录是否存在, 如果存在则清空目录, 不存在则创建目录
await createDir(generatePath(userConfig.packageName))
// 3 根据配置,创建入口文件
await createFile(`${generatePath(userConfig.packageName, 'index.js')}`,
  renderIndexTemplate(userConfig),
  '创建入口文件失败')
// 4 根据配置,创建 package.json
await createFile(`${generatePath(userConfig.packageName, 'package.json')}`,
  renderPackageTemplate(userConfig),
  '创建 package.json 失败')
// 5 安装依赖
await runCommand(userConfig.installTool, generatePath(userConfig.packageName))
