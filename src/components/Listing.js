import React from 'react';
import ItemCard from "./ItemCard";

const Listing = ({items}) => {
    return (
        <div className="flex flex-row flex-wrap">
            {items.map((item) => {
                return (
                    <ItemCard
                    img={item.MainImage && item.MainImage.url_570xN}
                    url={item.url}
                    title={item.title}
                    currency={item.currency_code}
                    price={item.price}
                    quantity={item.quantity}
                    key={item.listing_id}
                    />
                )
            })}
        </div>
    );
};

export default Listing;