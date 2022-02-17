
export default function Post({ params }) {
    let page = html`
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Post #${ params.post }</title>
        </head>
        
        <body>
            <h1>Post #${ params.post }</h1>
        </body>
        
        </html>
    `

    return page
}
