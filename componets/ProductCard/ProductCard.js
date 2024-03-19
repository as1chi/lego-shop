class Product {

    render() {
        let htmlCatalog = ''

        CATALOG.forEach(({ id, name, img, price }) => {

            htmlCatalog += `
                <li class = 'products-element'> 
                    <span class = 'products-element__name'>${name}</span>
                    <img class = 'products-element__img' src ="${img}">
                    <span class = 'products-element__price'>${price.toLocaleString()} ₽/шт</span>
                    <button class = 'products-element__btn'>Добавть в корзину</button>
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