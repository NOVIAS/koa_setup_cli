import execa from 'execa'

export default async (command, cwd) => {
  if (command === 'npm') {
    execa('npm install', {
      cwd: cwd,
      stdio: [2, 2, 2]
    })
  } else {
    execa('yarn', {
      cwd: cwd,
      stdio: [2, 2, 2]
    })
  }
}
