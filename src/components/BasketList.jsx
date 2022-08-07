import { BasketItem } from "./BasketItem";
function BasketList(props) {
    const {
        order = [],
        removeFromBasket = Function.prototype,
        handleBasketShow = Function.prototype,
        incQuantity,
        decQuantity,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);
    return (
        <ul className="collection  basket-list">
            <li class="collection-item active">Корзина</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.mainId}
                        {...item}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        removeFromBasket={removeFromBasket}
                    />
                ))
            ) : (
                <li className="collection-item">Корзина пуста: </li>
            )}

            <li class="collection-item active">
                Общая стоимость! {totalPrice} $
                <i
                    className="material-icons basket-close"
                    onClick={handleBasketShow}
                >
                    close
                </i>
            </li>
            <li class="collection-item ">
                <button className=" btn btn-small">Оформить</button>
            </li>
        </ul>
    );
}
export { BasketList };
