export function checkMiddleware (config, name) {
  return !!config.middleware.includes(name)
}
