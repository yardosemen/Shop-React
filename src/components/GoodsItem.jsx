function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        background,
        addToBasket = Function.prototype,
    } = props;
    return (
        <div className="card">
            <div className="card-image">
                <img src={background} alt={displayName} />
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn "
                    onClick={() =>
                        addToBasket({
                            mainId,
                            displayName,
                        })
                    }
                >
                    Купить
                </button>
                <span className="right" style={{ fontSize: "1.8rem" }}></span>
            </div>
        </div>
    );
}
export { GoodsItem };
