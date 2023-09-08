
//create home page
const createHomePage = () => {
    const content = document.querySelector('#content');
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('page-content');
    contentDiv.setAttribute('id','contentDiv');

    //add a head Title
    const headTitle = document.createElement('h1');
    headTitle.textContent = 'Welcome to Sunny Coffee';
    contentDiv.appendChild(headTitle);

    //add a image
    const mainImage = document.createElement('img');
    mainImage.src = 'https://perfectdailygrind.com/es/wp-content/uploads/sites/2/2019/03/coffee-bar.jpg'
    mainImage.height = "300";
    contentDiv.appendChild(mainImage);

    //div for background img
    const backgroundImg = document.createElement('div');
    backgroundImg.classList.add('backgroundImg');
    contentDiv.appendChild(backgroundImg);


    content.appendChild(contentDiv);
}

export default createHomePage;