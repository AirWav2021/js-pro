const products = [
    {
        id: 1,
        title: 'Notebook',
        price: 2000,
        image: 'img/notebook.jpg'
    },
    {
        id: 2,
        title: 'Mouse',
        price: 20,
        image: 'img/mouse.jpg'
    },
    {
        id: 3,
        title: 'Keyboard',
        price: 200,
        image: 'img/keyboard.jpg'
    },
    {
        id: 4,
        title: 'Gamepad',
        price: 50,
        image: 'img/gamepad.jpg'
    },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение

const renderProduct = (title = 'unnamed', price = 0, image = 'img/nophoto.jpg') =>  // Параметры по умолчанию
    `<div class="product-item">
        <img src="${image}" alt="${title}" />
        <h3>${title}</h3>
        <p>${price}</p>
        <button class="buy-btn">Купить</button>
    </div>`

//Запятая означает перечисление объектов, элементов
//С помощью метода join мы убераем разделитель в виде запятой, и ставим вместо них пробел
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.image)).join(' ');
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);