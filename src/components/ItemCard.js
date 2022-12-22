import React from 'react';
import clsx from 'clsx';

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

    if (!title || !price || !currency) {
        return null;
    }

    const quantityIndicatorStyles = clsx('text-xl','font-bold','text-white','p-2','shadow-md','rounded-lg', {
            'bg-red-600' : quantity <= 10,
            'bg-yellow-400': quantity > 10 && quantity <= 20,
            'bg-green-700': quantity > 20
        }
    );

    return (
        <div className={clsx('max-w-2xl', 'mx-auto', 'm-1')}>
            <div className={clsx('bg-white','shadow-md', 'rounded-lg', 'max-w-sm')}>
                <a href={url}>
                    <img className={clsx('rounded-t-lg', 'p-8')} src={img}
                         alt="product" />
                </a>
                <div className={clsx('px-5', 'pb-5')}>
                    <h3 className={clsx('text-gray-900', 'text-sm', 'tracking-tight', 'p-1')}>
                        {formatTitle(title)}
                    </h3>
                    <div className={clsx('flex', 'items-center', 'justify-between')}>
                        <span className={clsx('text-2xl', 'text-green-800', 'font-bold', 'text-gray-900')}>
                            {formatPrice(price, currency)}
                        </span>
                        <span className={quantityIndicatorStyles}>{quantity + " left"}</span>
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