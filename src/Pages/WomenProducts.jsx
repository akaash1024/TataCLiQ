import { useParams } from "react-router-dom"
import { CreateProductComponent } from "./CreateProductComponent";


export const WomenProducts = () => {
    const params = useParams();
    console.log('akash', params)


    return (
        <CreateProductComponent params= {params.mensID} />
    )
}