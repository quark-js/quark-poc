
export default function Settings({ params }) {
    let page = html`
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Settings for ${ params.user }</title>
        </head>
        
        <body>
            <h1>Settings for ${ params.user }</h1>
        </body>
        
        </html>
    `

    return page
}
