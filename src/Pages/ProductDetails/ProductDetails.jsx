import React from "react";
import { productData } from "../../faker";
import { useParams } from "react-router-dom";

export function ProductDetails() {
    const { bookId } = useParams();

    function getBook() {
        return productData.find((book) => book.id === bookId);
    }
    const book = getBook();

    return (
        <div className="card card-hz">
            <img src={book.image} alt="" className="card-cover" />
            <div className="card-text">
                <div className="card-text">
                    <div className="card-heading">{book.name}</div>
                    <div className="card-sub-heading">{book.author}</div>
                    <div className="card-seller">Sold by: Bookscape</div>

                    <div className="card-price">
                        <span className="price">₹{book.priceDiscounted}</span>
                        <span className="price-original">₹{book.price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
