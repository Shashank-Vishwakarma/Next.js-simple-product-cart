"use server";

// get all products
export async function getAllProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products", {
            method: "GET",
            cache: 'no-store'
        });

        const data = await response.json();

        return { products: data?.products }
    } catch (err) {
        console.log(err);
        return { error: "Some error occurred" }
    }
}

export async function getProductById(id) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`, {
            method: "GET",
            cache: "no-store"
        });
        const data = await response.json();

        return { product: data }
    } catch (err) {
        console.log(err);
        return { error: "Some error occurred" }
    }
}