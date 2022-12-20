import React from 'react';

const ItemCard = ({img, url, title, currency, price, quantity}) => {
    const formatTitle = (title) => {
        return title.length > 50 ? title.slice(0, 50) + "..." : title;
    }

    const formatPrice = (price, currency) => {
        if (currency === "USD") {
            return "$" + price
        }
        else if (currency === "EUR") {
            return "€" + price
        }
        else return price + " " + currency
    }

    const getQuantityIndicatorColor = (quantity) => {
        if (quantity <= 10) {
            return "bg-red-600 "
        }
        else if (quantity <= 20) {
            return "bg-yellow-400 "
        }
        else return "bg-green-700 "
    }

    if (!title || !price || !currency) {
        return null;
    }

    return (
        <div className="max-w-2xl mx-auto m-1">
            <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                <a href={url}>
                    <img className="rounded-t-lg p-8" src={img}
                         alt="product" />
                </a>
                <div className="px-5 pb-5">
                    <h3 className="text-gray-900 text-sm tracking-tight p-1">{formatTitle(title)}</h3>
                    <div className="flex items-center justify-between">
                        <span className="text-2xl text-green-800 font-bold text-gray-900">{formatPrice(price, currency)}</span>
                        <span className={getQuantityIndicatorColor(quantity) + "text-xl font-bold text-white p-2 shadow-md rounded-lg"}>{quantity + " left"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

ItemCard.defaultProps = {
    img: "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg",
    "quantity": 0
}

export default ItemCard;