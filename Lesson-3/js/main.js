const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// 1. Создаём Каталог товаров
class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = []; //массив товаров
        this.allProducts = []; //массив объектов
        this.getProducts()
            .then(data => { //data - объект js
                this.goods = [...data];
                this.render()
            });
    }

    getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    getSum() {
        let sum = 0;
        for (let product of this.goods) {
            sum += product.price;
        }
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product, img = 'img/no-photo.png') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="${this.title}">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();

// 2. Создаём корзину товаров
class Basket {
    constructor(container = '.cart-block') {
        this.container = container;
        this.goods = [];//массив товаров

        this._clickBasketButton()
        this._getBasketItem()
            // 5. и вернём Промис
            .then(data => { //data - это объект js
                //6. и получаем Массив товаров
                this.goods = [...data.contents];
                //7. Запускаем метод render
                this.render()
            });
    }

    // 4. Парсим наш файлик, создаём коннект к нашему внешнему API 
    _getBasketItem() {
        // fetch вернёт Промис, при создании промиса всегда должны быть .then либо .catch
        return fetch(`${API}/getBasket.json`)
            // Мы превращаем наш исходник, в js объект
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    // в этом методе мы получаем элемент по селектору .cart-block
    render() {
        const block = document.querySelector(this.container);
        // в цикле обходим каждый товар
        for (let product of this.goods) {
            // и создаём объект BasketItem, так как мы создаём объект, всегда вызывается конструктор этого класса!
            // если мы его явно не пишем, то он используется по умолчанию
            const productObj = new BasketItem();
            // с помощью объекта вызываем метод render, и вставим разметку которая написана в классе BasketItem
            block.insertAdjacentHTML('beforeend', productObj.render(product));
        }

    }

    // 3. Создаём метод клик по кнопке Корзина, и добавляем/удаляем класс у cart-block
    _clickBasketButton() {
        document.querySelector(".btn-cart").addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('hidden');
        });
    }
}
//8. Отрисовываем наши товары в .cart-block  
class BasketItem {

    render(product, img = 'img/no-photo.png') {
        return `<div class="cart-item" data-id="${product.id_product}">
                <div class="product-info">
                <img src="${img}" alt="${product.product_name}">
                <div class="product-desc">
                <p class="product-title">${product.product_name}</p>
                <p class="product-quantity">кол-во: ${product.quantity}</p>
            <p class="product-single-price">$${product.price} за шт</p>
            </div>
            </div>
            <div class="right-block">
                <p class="product-price">$${product.quantity * product.price}</p>
                <button class="del-btn" data-id="${product.id_product}">&times;</button>
            </div>
            </div>`
    }
}
//9. Вызываем нашу функцию конструктор
let bask = new Basket();