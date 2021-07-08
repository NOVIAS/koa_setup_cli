import prettier from 'prettier'

export function formatCode (code, options) {
  return prettier.format(code, {
    ...options
  })
}
