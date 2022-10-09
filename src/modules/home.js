import homeImage from '../images/bon-vivant-qom5MPOER-I-unsplash.jpg';

export default function() {
    const homeContentDiv = document.createElement('div');
    homeContentDiv.setAttribute('id','home-content');

    const homeImageContainerDiv = document.createElement('div');
    homeImageContainerDiv.classList.add('home-image-container');

    const img = new Image();
    img.src = homeImage;
    img.setAttribute('alt', 'A bowl of noodles');
    img.classList.add('home-image');

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');

    const descriptionTitle = document.createElement('h1');
    descriptionTitle.textContent = 'Noodles of the World';

    const descriptionText = document.createElement('p');
    descriptionText.textContent = 'We take pride in making freshest and the most delicious noodles from around the world!';

    homeImageContainerDiv.appendChild(img);
    descriptionDiv.appendChild(descriptionTitle);
    descriptionDiv.appendChild(descriptionText);

    homeContentDiv.appendChild(homeImageContainerDiv);
    homeContentDiv.appendChild(descriptionDiv);

    return homeContentDiv;
}