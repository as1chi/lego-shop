class Product {

    constructor() {
        this.addClass = 'products-element__btn_active'
    }

    handlerSetLocationStorage(e, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id)

        if (pushProduct) {
            e.classList.add(this.addClass)
            e.innerHTML = 'Удалить из корзины'
        } else {
            e.classList.remove(this.addClass)
            e.innerHTML = 'Добавить в корзину'
        }

        headerPage.render(products.length)

    }

    render() {
        const productStore = localStorageUtil.getProducts();
        let htmlCatalog = ''

        CATALOG.forEach(({ id, name, img, price }) => {
            let activeClass = ''
            let activeText = ''



            if (productStore.indexOf(id) === -1) {
                activeText = 'Добавить в корзину'
            } else {
                activeText = 'Удалить из корзины'
                activeClass = ' ' + this.addClass
            }


            htmlCatalog += `
                <li class = 'products-element'> 
                    <span class = 'products-element__name'>${name}</span>
                    <img class = 'products-element__img' src ="${img}">
                    <span class = 'products-element__price'>${price.toLocaleString()} ₽/шт</span>
                    <button class = 'products-element__btn ${activeClass}' onclick = "productPage.handlerSetLocationStorage(this, '${id}') ">
                    ${activeText}</button>
                </li>
            `;

        })

        const html = `
            <ul class = 'products-container'>
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCT_CARD.innerHTML = html
    }
}

const productPage = new Product()
productPage.render()