const createMenu = () => {

    let content = document.querySelector('#content')
    content.innerHTML = ''

    let menuHeader = document.createElement('h2')
    menuHeader.classList.add('menu-title')
    menuHeader.textContent = 'Menu'
    let menuPara = document.createElement('para')
    menuPara.textContent = `Each day, before midday we upload the day's menus, it's always nice to whet your appetite before you even get to us. We also add in more detail about each dish in case you need to check out the ingredients for allergen information.`

    let row1 = document.createElement('div')
    row1.classList.add('menu-row')
    let item1 = document.createElement('div')
    item1.classList.add('menu-item')
    let text1 = document.createElement('div')
    text1.classList.add('menu-text')
    let title1 = document.createElement('h3')
    title1.textContent = 'Pizza'
    let para1 = document.createElement('p')
    para1.textContent = 'pizza is very good'
    text1.append(title1, para1)
    let pricediv1 = document.createElement('div')
    pricediv1.classList.add('menu-price')
    let price1 = document.createElement('p')
    price1.textContent = '12.0'
    pricediv1.appendChild(price1)
    item1.append(text1, price1)

    let item2 = document.createElement('div')
    item2.classList.add('menu-item')
    let text2 = document.createElement('div')
    text2.classList.add('menu-text')
    let title2 = document.createElement('h3')
    title2.textContent = 'Burger'
    let para2 = document.createElement('p')
    para2.textContent = 'burger is very good'
    text2.append(title2, para2)
    let pricediv2 = document.createElement('div')
    pricediv2.classList.add('menu-price')
    let price2 = document.createElement('p')
    price2.textContent = '14.0'
    pricediv2.appendChild(price2)
    item2.append(text2, price2)

    row1.append(item1, item2)

    content.append(menuHeader, menuPara, row1)


    let row2 = document.createElement('div')
    row2.classList.add('menu-row')
    item1 = document.createElement('div')
    item1.classList.add('menu-item')
    text1 = document.createElement('div')
    text1.classList.add('menu-text')
    title1 = document.createElement('h3')
    title1.textContent = 'Steak'
    para1 = document.createElement('p')
    para1.textContent = 'steak is very good'
    text1.append(title1, para1)
    pricediv1 = document.createElement('div')
    pricediv1.classList.add('menu-price')
    price1 = document.createElement('p')
    price1.textContent = '18.0'
    pricediv1.appendChild(price1)
    item1.append(text1, price1)

    item2 = document.createElement('div')
    item2.classList.add('menu-item')
    text2 = document.createElement('div')
    text2.classList.add('menu-text')
    title2 = document.createElement('h3')
    title2.textContent = 'Pasta'
    para2 = document.createElement('p')
    para2.textContent = 'pasta is very good'
    text2.append(title2, para2)
    pricediv2 = document.createElement('div')
    pricediv2.classList.add('menu-price')
    price2 = document.createElement('p')
    price2.textContent = '13.0'
    pricediv2.appendChild(price2)
    item2.append(text2, price2)

    row2.append(item1, item2)
    content.appendChild(row2)




    let row3 = document.createElement('div')
    row3.classList.add('menu-row')
    item1 = document.createElement('div')
    item1.classList.add('menu-item')
    text1 = document.createElement('div')
    text1.classList.add('menu-text')
    title1 = document.createElement('h3')
    title1.textContent = 'Sea Bass'
    para1 = document.createElement('p')
    para1.textContent = 'sea bass is very good'
    text1.append(title1, para1)
    pricediv1 = document.createElement('div')
    pricediv1.classList.add('menu-price')
    price1 = document.createElement('p')
    price1.textContent = '16.0'
    pricediv1.appendChild(price1)
    item1.append(text1, price1)

    item2 = document.createElement('div')
    item2.classList.add('menu-item')
    text2 = document.createElement('div')
    text2.classList.add('menu-text')
    title2 = document.createElement('h3')
    title2.textContent = 'Curry'
    para2 = document.createElement('p')
    para2.textContent = 'curry is very good'
    text2.append(title2, para2)
    pricediv2 = document.createElement('div')
    pricediv2.classList.add('menu-price')
    price2 = document.createElement('p')
    price2.textContent = '12.0'
    pricediv2.appendChild(price2)
    item2.append(text2, price2)

    row3.append(item1, item2)
    content.appendChild(row3)
    
    
}

export {createMenu}