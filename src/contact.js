const createContact = () => {
    
    let content = document.querySelector('#content')
    content.innerHTML = ''

    let hoursDiv = document.createElement('div')
    let openingHours = document.createElement('h2')
    openingHours.classList.add('hours-title')
    openingHours.textContent = 'Opening Hours'

    let wedHours = document.createElement('p')
    wedHours.classList.add('contact-para')
    wedHours.textContent = 'Wednesday: 12:00 - 22:00'
    let thurHours = document.createElement('p')
    thurHours.classList.add('contact-para')
    thurHours.textContent = 'Thursday: 12:00 - 22:00'
    let friHours = document.createElement('p')
    friHours.classList.add('contact-para')
    friHours.textContent = 'Friday: 12:00 - 24:00'
    let satHours = document.createElement('p')
    satHours.classList.add('contact-para')
    satHours.textContent = 'Saturday: 12:00 - 24:00'
    let sunHours = document.createElement('p')
    sunHours.classList.add('contact-para')
    sunHours.textContent = 'Sunday: 12:00 - 24:00'

    hoursDiv.append(openingHours, wedHours, thurHours, friHours, satHours, sunHours)


    let contactHeader = document.createElement('h2')
    contactHeader.classList.add('contact-title')
    contactHeader.textContent = 'Contact Us'
    
    let contactNo = document.createElement('p')
    contactNo.classList.add('contact-para')
    contactNo.textContent = 'Contact Number: +456 859 475 1'
    let contactEmail = document.createElement('p')
    contactEmail.classList.add('contact-para')
    contactEmail.textContent = 'Email: randomEmail@random.com'
    let contactDiv = document.createElement('div')
    contactDiv.append(contactHeader, contactNo, contactEmail)

    content.append(hoursDiv, contactDiv)
}

export {createContact}