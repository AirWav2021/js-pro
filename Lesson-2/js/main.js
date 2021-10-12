class ProductsList {
    constructor(div_products = '.products') {
        this.div_products = div_products;
        this.goods = [];
        this.allProducts = [];
        this._mainProducts();
    }

    _mainProducts() {
        this.goods = [
            {
                id: 1,
                title: 'Notebook',
                price: 2000,
                image: 'img/notebook.jpg',
            },
            {
                id: 2,
                title: 'Mouse',
                price: 20,
                image: 'img/mouse.jpg',
            },
            {
                id: 3,
                title: 'Keyboard',
                price: 200,
                image: 'img/keyboard.jpg',
            },
            {
                id: 4,
                title: 'Gamepad',
                price: 50,
                image: 'img/gamepad.jpg',
            },
            { title: 5, },
        ];
    }
    render() {
        const block = document.querySelector(this.div_products);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }
    getSum() {
        let sum = 0;
        for (let product of this.goods) {
            sum += product.price;
        }
    }
}


class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.image = product.image;

    }

    render() {
        return `<div class="product-item">
         <img src="${this.image}" alt="${this.title}" />
        <h3>${this.title}</h3>
       <p>${this.price}</p>
         <button class="buy-btn">Купить</button>
    </div>`
    }
}

let list = new ProductsList();
list.render();
list.getSum();

class Basket {
    addProductInCart() {

    }
    removeProductInCart() {

    }
    changeProductInCart() {

    }

    render() {

    }
}

class ElemBasket {
    render() { }

}

// const products = [
//     {
//         id: 1,
//         title: 'Notebook',
//         price: 2000,
//         image: 'img/notebook.jpg'
//     },
//     {
//         id: 2,
//         title: 'Mouse',
//         price: 20,
//         image: 'img/mouse.jpg'
//     },
//     {
//         id: 3,
//         title: 'Keyboard',
//         price: 200,
//         image: 'img/keyboard.jpg'
//     },
//     {
//         id: 4,
//         title: 'Gamepad',
//         price: 50,
//         image: 'img/gamepad.jpg'
//     },
//     {

//     },
//     {

//     },
// ];
// //Функция для формирования верстки каждого товара


// const renderProduct = (title = 'Название', price = 0, image = 'img/nophoto.jpg') => {  // Параметры по умолчанию
//     return `<div class="product-item">
//         <img src="${image}" alt="${title}" />
//         <h3>${title}</h3>
//         <p>${price}</p>
//         <button class="buy-btn">Купить</button>
//     </div>`
// };

// //Запятая означает перечисление объектов, элементов
// //С помощью метода join мы убераем разделитель в виде запятой, и ставим вместо них пробел
// //list это массив товаров
// const renderPage = list => {
//     document.querySelector('.products').innerHTML = list.map(item =>
//         renderProduct(item.title, item.price, item.image)).join(' ');
//     //Пробегаемся методом map и создаём новый массив без запятых

// };

// renderPage(products);