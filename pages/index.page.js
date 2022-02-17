import HelloWorldPart from "../parts/helloWorld.parts.js"

export default function Index() {
    let page = html`
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Homepage</title>
        </head>
        
        <body>
            <h1>Hello, World!</h1>
            ${ HelloWorldPart({
                name: 'Joe'
            }) }
        </body>
        
        </html>
    `

    return page
}
