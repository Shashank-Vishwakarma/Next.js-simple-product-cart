import { getProductById } from "@/actions/actions"
import AddToCartButton from "@/components/AddToCartButton";

async function ProductById({ params }) {
    const data = await getProductById(params.details);

    return (
        <div className="flex items-center w-full p-10">
            <img src={data?.product?.thumbnail} alt={data?.product?.title} className="h-96" />
            <div className="flex flex-col gap-4">
                <p><b>{data?.product?.title}</b></p>
                <p>{data?.product?.price}</p>
                <p>{data?.product?.description}</p>

                <AddToCartButton product={data} />
            </div>
        </div>
    )
}

export default ProductById
