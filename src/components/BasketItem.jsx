function BasketItem(props) {
    const {
        mainId,
        displayName,
        quantity,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype,
        removeFromBasket = Function.prototype,
    } = props;
    return (
        <li className="collection-item">
            {displayName}
            <i
                className="material-icons basket-quantity"
                onClick={() => decQuantity(mainId)}
            >
                remove
            </i>
            X{quantity}
            <i
                className="material-icons basket-quantity"
                onClick={() => incQuantity(mainId)}
            >
                add
            </i>
            ={mainId}
            <span
                className="secondary-content"
                onClick={() => removeFromBasket(mainId)}
            >
                <i className="material-icons basket-quantity basket-delete">
                    close
                </i>
            </span>
        </li>
    );
}
export { BasketItem };
