"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter
} from "@/components/ui/card"
import { useRouter } from "next/navigation"

function Product({ product }) {
    const router = useRouter();

    return (
        <Card className="w-[350px] p-2">
            <CardContent>
                <img src={product.thumbnail} className="w-full h-full" />
            </CardContent>
            <CardDescription className="text-black flex justify-between">
                <span>{product.title}</span>
                <span>${product.price}</span>
            </CardDescription>
            <CardFooter className="mt-4">
                <Button onClick={() => router.push(`/${product.id}`)}>Details</Button>
            </CardFooter>
        </Card>
    )
}

export default Product
