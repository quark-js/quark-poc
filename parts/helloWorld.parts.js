
export default function HelloWorldPart({ name }) {
    let result = html`
        <p>Welcome to my fabulous website, ${ name }!</p>
    `

    return result
}
