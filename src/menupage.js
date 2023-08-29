
//create menu page
const createMenuPage = () => {

    const content = document.querySelector('#content');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('page-content');
    menuDiv.setAttribute('id', 'menuDiv');
    
    //make coffee menu
    const coffeeDiv = document.createElement('div');
    const coffeeTitle = document.createElement('h4');
    coffeeTitle.textContent = 'COFFEE';
    //make list of coffee
    const coffeeList = document.createElement('ul');
    const coffee1 = document.createElement('li')
    coffee1.textContent = 'Espresso';
    const coffee2 = document.createElement('li')
    coffee2.textContent = 'Americano'
    const coffee3 = document.createElement('li')
    coffee3.textContent = 'Cafe Latte'
   
    //make dessert menu
    const dessertDiv = document.createElement('div');
    const desertTitle = document.createElement('h4')
    desertTitle.textContent = 'DESSERT';
    //make list of dessert
    const dessertList = document.createElement('ul');
    const dessert1 = document.createElement('li');
    dessert1.textContent = 'Crepe';
    const dessert2 = document.createElement('li');
    dessert2.textContent = 'Waffle'
    const dessert3 = document.createElement('li');
    dessert3.textContent = 'Cake'

    //append title and list 
    dessertDiv.appendChild(desertTitle);
    dessertList.appendChild(dessert1);
    dessertList.appendChild(dessert2);
    dessertList.appendChild(dessert3);
    dessertDiv.appendChild(dessertList);
    
    
    coffeeDiv.appendChild(coffeeTitle);
    coffeeList.appendChild(coffee1);
    coffeeList.appendChild(coffee2);
    coffeeList.appendChild(coffee3);
    coffeeDiv.appendChild(coffeeList);
    
    

    //append menuDiv into #content
    menuDiv.appendChild(coffeeDiv);
    menuDiv.appendChild(dessertDiv);
    content.appendChild(menuDiv);
};

export default createMenuPage;