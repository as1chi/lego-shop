class Basket {

    handlerClear() {
        ROOT_PRODUCT_BASKET.innerHTML = ''
    }

    render() {

        const productStore = localStorageUtil.getProducts();
        let htmlCatalog = ''
        let sumCatalog = 0

        CATALOG.forEach(({ id, name, price }) => {
            if (productStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class='basket-element__name'>🟢 ${name}</td>
                        <td class='basket-element__price'>${price.toLocaleString()} ₽</td>
                    </tr>
                `
                sumCatalog += price
            }
        })

        const html = `
            <div class='basket-container'>
                <div class = 'basket-close' onclick = 'productBasket.handlerClear()'>

                </div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class='basket-element__name'>🛒 Сумма</td>
                        <td class='basket-element__price'>${sumCatalog.toLocaleString()} ₽</td>
                    </tr>
                </table>
            </div>
        `
        ROOT_PRODUCT_BASKET.innerHTML = html
    }
}

const productBasket = new Basket()