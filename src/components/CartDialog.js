"use client"

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useEffect, useState } from "react"
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { IoIosRemoveCircle } from "react-icons/io";
import { removeFromCart } from "@/redux/cartSlice";

function CartDialog() {
    const [openDialog, setOpenDialog] = useState(false);

    const dispatch = useDispatch();

    const { products } = useSelector(state => state);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let price = 0;
        for (let i = 0; i < products.length; i++) {
            price += Number(products[i].product.price);
        }

        setTotalPrice(price);
    }, [products]);

    return (
        <Dialog open={openDialog}>
            <DialogTitle ></DialogTitle>
            <DialogTrigger asChild>
                <FaShoppingCart className="cursor-pointer" onClick={() => setOpenDialog(!openDialog)} />
            </DialogTrigger>
            <DialogContent>
                <h1 className="text-center text-lg font-bold">Your Products</h1>
                <div className="flex flex-col gap-4 overflow-y-auto max-h-64">
                    {
                        products?.map((pdt) => (
                            <div className="p-2 flex justify-around items-center border-2">
                                <img className="w-16" src={pdt.product.thumbnail} />
                                <p>{pdt.product.title}</p>
                                <p>{pdt.product.price}</p>
                                <IoIosRemoveCircle onClick={() => dispatch(removeFromCart(pdt.product.id))} className="cursor-pointer" />
                            </div>
                        ))
                    }
                </div>
                <h1 className="text-center"><b>Total:</b> ${totalPrice}</h1>
                <DialogFooter>
                    <Button onClick={() => setOpenDialog(!openDialog)}>Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CartDialog
