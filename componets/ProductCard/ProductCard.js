class Product {

    render() {
        let htmlCatalog = ''

        CATALOG.forEach(({ id, name, img, price }) => {

            htmlCatalog += `
                <li> 
                    <span>${name}</span>
                    <img src ="${img}"
                    <span>${price}</span>
                    <button>Добавть в корзину</button>
                </li>
            `;

        })

        const html = `
            <ul>
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCT_CARD.innerHTML = html
    }
}

const productPage = new Product()
productPage.render()