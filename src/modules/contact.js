export default function() {
    const contactContentDiv = document.createElement('div');
    contactContentDiv.classList.add('contact-content');
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Contact Us'

    const addressHeader = document.createElement('h4');
    addressHeader.textContent = 'Our address:';
    const address = document.createElement('p');
    address.textContent = '55 Albert St. , 12356 Jacksonville, Florida, FL';
    
    const emailHeader = document.createElement('h4');
    emailHeader.textContent = 'Our email:';
    const email = document.createElement('p');
    email.textContent = 'bestnoodles@realemail.yumm';
    
    const phoneHeader = document.createElement('h4');
    phoneHeader.textContent = 'Our phone number:';
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '00111 - 125125125';

    contactContentDiv.appendChild(contactHeader);
    contactContentDiv.appendChild(addressHeader);
    contactContentDiv.appendChild(address);
    contactContentDiv.appendChild(emailHeader);
    contactContentDiv.appendChild(email);
    contactContentDiv.appendChild(phoneHeader);
    contactContentDiv.appendChild(phoneHeader);
    contactContentDiv.appendChild(phoneNumber);

    return contactContentDiv;
}