function customRender(reactElement, contsiner){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    contsiner.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: {
        href:'google.com',
        target:'_blank'
    },
    children: 'Click me to Visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)