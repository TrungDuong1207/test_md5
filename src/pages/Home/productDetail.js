import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { getProduct, editProduct } from "../../services/productService"

export default function ProductDetail() {
    const { id } = useParams()
    console.log(id);
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        name: '',
        price: '',
        stock: '',
        description: '',
    })
    useEffect(() => {
        getProduct(id).then((res) => {
            setProduct(res.data)
            console.log(res.data);
        })
    }, [])

    return (
        <div className={"container"}>
            <div>
                <h1>Chi tiết sản phẩm!</h1>
                <button type="button" className="btn btn-primary" onClick={() => { navigate("/") }}>Trang chủ</button>
            </div>
            <h4>Tên sản phẩm: <i> {product.name}</i> </h4>
            <h4>Giá sản phẩm: <i> {product.price}</i></h4>
            <h4>Tồn kho: <i> {product.stock} </i></h4>
            <hr />
            <h4>Mô tả:</h4>
            <h4> <i> {product.description} </i></h4>

        </div>
    );
}