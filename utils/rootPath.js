import path from 'path'

export function generatePath (name, filename = '') {
  return path.resolve('./', name, filename)
}
