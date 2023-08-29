//create contact page

const createContactPage = () => {
    const content = document.querySelector('#content');
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('page-content');
    contactDiv.setAttribute('id','contactDiv')

    //contact information
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('infoDiv');

    const phoneNumber = document.createElement('div');
    phoneNumber.textContent = '☎️Tell 123 456 789';
    phoneNumber.classList.add('phoneNumber');
    infoDiv.appendChild(phoneNumber)

    const email = document.createElement('div');
    email.textContent = '📧 Email. sunnycoffee@gmail.com';
    email.classList.add('email');
    infoDiv.appendChild(email)

    const address = document.createElement('div');
    address.textContent = '🏡 Address. Calle Vincente Carmen 5 21';
    address.classList.add('address');
    infoDiv.appendChild(address);


    //make a form 
    const formDiv =document.createElement('div');
    const contactForm = document.createElement('form');
    contactForm.classList.add('contactForm');

    const nameTitle = document.createElement('div');
    nameTitle.textContent = 'Name';
    nameTitle.classList.add('formTitles');
    formDiv.appendChild(nameTitle);

    const nameInput = document.createElement('input');
    nameInput.type = 'text'
    formDiv.appendChild(nameInput);

    const emailTitle = document.createElement('div');
    emailTitle.textContent = 'Email';
    emailTitle.classList.add('formTitles');
    formDiv.appendChild(emailTitle);

    const emailInput = document.createElement('input');
    emailInput.type = 'text'
    formDiv.appendChild(emailInput);

    const textTitle = document.createElement('div')
    textTitle.textContent = 'Write your request';
    textTitle.classList.add('formTitles');
    formDiv.appendChild(textTitle);

    const textInput = document.createElement('input');
    textInput.type = 'text'
    formDiv.appendChild(textInput);
    
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    submitButton.classList.add('submitBtn');
    formDiv.appendChild(submitButton);



    //append 

    contactDiv.appendChild(infoDiv);
    contactDiv.appendChild(formDiv);


    content.appendChild(contactDiv);
}

export default createContactPage;