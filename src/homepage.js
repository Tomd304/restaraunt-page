const createHomepage = () => {
    let content = document.querySelector('#content')
    content.innerHTML = ''

    let headerTitle = document.createElement('div')
    headerTitle.classList.add('header-title')
    let mainHeader = document.createElement('h1')
    mainHeader.textContent = 'elRestaurante'
    headerTitle.appendChild(mainHeader)
    
    let mainInfo = document.createElement('div')
    mainInfo.classList.add('main-info')
    let mainText = document.createElement('div')
    mainText.classList.add('main-text')
    let subHeader = document.createElement('h2')
    subHeader.textContent = 'The Best Restaurant in Town'
    mainText.appendChild(subHeader)
    mainInfo.appendChild(mainText)
    
    let img = document.createElement('div')
    img.classList.add('img-overlay')
    let darken = document.createElement('div')
    darken.classList.add('darken')
    let booking = document.createElement('p')
    booking.textContent = 'Book Today!'
    darken.appendChild(booking)
    img.appendChild(darken)
    mainInfo.appendChild(img)
    
    content.append(headerTitle, mainInfo)
}


export {createHomepage}

