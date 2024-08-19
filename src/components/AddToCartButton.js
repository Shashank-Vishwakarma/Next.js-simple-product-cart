"use client"

import { addToCart } from "@/redux/cartSlice";
import { useDispatch } from "react-redux";

function AddToCartButton({ product }) {
    const dispatch = useDispatch();

    const changeState = () => {
        dispatch(addToCart(product));
    }

    return (
        <button
            className="p-3 bg-sky-500 rounded-lg hover:bg-sky-600"
            onClick={changeState}
        >
            Add to cart
        </button>
    )
}

export default AddToCartButton
