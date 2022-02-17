import express from 'express'
import quark from './index.js'

(async () => {
    let app = express()

    let quarkHandler = await quark()

    app.use('/', quarkHandler)

    app.listen(3050, () => {
        console.log('Test server online at port 3050')
    })

})()
