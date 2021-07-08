import fsE from 'fs-extra'

export async function createDir (dir) {
  try {
    await fsE.emptyDir(dir)
  } catch (err) {
    throw new Error(err)
  }
}

export async function createFile (targetDir, ctx, error = '') {
  try {
    await fsE.outputFile(targetDir, ctx)
  } catch (err) {
    throw new Error(error)
  }
}
