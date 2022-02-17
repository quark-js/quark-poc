import glob from 'glob'
import path from 'path'

export default async function globPromise(src) {
    // Promisify glob
    return new Promise((resolve, reject) => {
        glob(path.join(src, '/**/*.page.js'), (err, matches) => {
            if (err) {
                return reject(err)
            } else {
                return resolve(matches)
            }
        })
    })
}
