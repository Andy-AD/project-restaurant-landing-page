import menuImage from '../images/mae-mu-vjVHYlk91Vk-unsplash.jpg';

export default function() {
    const menu = [
        {
            name: 'Curry Laksa',
            description: 'Coconut Curry, Chicken, Prawns, Tofu, Fish Balls',
            price: '10'
        },
        {
            name: 'Vietnamese Pho Bo',
            description: 'Beef Broth, Rice Noodle, Green Onions, Coriander and Bean Sprouts',
            price: '8',
        },
        {
            name: 'Duck Wonton Soup',
            description: 'Roast Duck, Yakisoba Noodles, and Duck Wonton',
            price: '9'
        },
        {
            name: 'Tom Yum Goon',
            description: 'Hot and Sour Thai Soup with Vegetables, Lemongrass and Kefir Lime Leaves',
            price: '8'
        },
    ];

    const menuContentDiv = document.createElement('div');
    menuContentDiv.classList.add('menu-content');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');

    const menuHeader = document.createElement('h1');
    menuHeader.classList.add('menu-title');
    menuHeader.textContent = 'Our Menu';
    menuContainer.appendChild(menuHeader);
    menu.forEach(element => {
        let item = createMenuItem(element);
        menuContainer.appendChild(item);
    });

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('menu-image');
    const img = new Image();
    img.src = menuImage;
    img.setAttribute('alt', 'A bowl of noodles');
    imageContainer.appendChild(img);
    
    menuContentDiv.appendChild(menuContainer);
    menuContentDiv.appendChild(imageContainer);

    return menuContentDiv;
}


function createMenuItem(item) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');
    const itemName = document.createElement('h4');
    itemName.classList.add('item-name');
    itemName.textContent = item.name;
    const itemDescription = document.createElement('p');
    itemDescription.classList.add('item-description');
    itemDescription.textContent = item.description;
    const itemPrice = document.createElement('div');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = item.price;
    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemDescription);
    itemContainer.appendChild(itemPrice);

    return itemContainer;
}