import { Router } from 'express'
import globPromise from './globPromise'

// Hoist global html template string function
global.html = (templateStrings, ...values) => String.raw(templateStrings, ...values)

export default async () => {
    let handler = Router()

    let dirArray = await globPromise('./pages/')
    let dynamicRoutesRegExp = /\[.+\]/

    dirArray.forEach(async (fsPath, i, arr) => {
        let segmentedRoute = fsPath.split('/')
        segmentedRoute.shift()
        let lastSegmentedRoute = segmentedRoute[segmentedRoute.length - 1]
        segmentedRoute[segmentedRoute.length - 1] = lastSegmentedRoute.replace('.page.js', '')
        let mountPath = ''

        segmentedRoute.forEach((route, i, arr) => {
            if (i == arr.length - 1 && route == 'index') {
                mountPath += '/'
            } else if (dynamicRoutesRegExp.test(route)) {
                mountPath += '/:' + route.replace('[', '').replace(']', '').trim()
            } else {
                mountPath += '/' + route.trim()
            }
        })

        handler.all(mountPath, async (req, res, next) => {
            try {
                return res.send(await (await import('./' + fsPath)).default({
                    req: req,
                    res: res,
                    params: req.params
                }))
            } catch (err) {
                next(err)
            }
        })
    })

    return handler
}
