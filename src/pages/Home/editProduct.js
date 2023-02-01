import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { getProduct, editProduct } from "../../services/productService"

export default function EditProduct() {
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
    const handleOnchange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setProduct({ ...product, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(id)
        console.log(product);
        editProduct(id, product).then(() => {
            navigate('/')
        })
    }

    return (
        <div>
            <h1>Cập nhật sản phẩm</h1>
            <form onSubmit={handleSubmit} >
                <label> Tên sản phẩm:
                    <input
                        type='text'
                        placeholder="Enter Name"
                        name="name"
                        value={product.name}
                        onChange={handleOnchange}
                    />
                </label>

                <br />
                <label> Giá sản phẩm:
                    <input
                        type='text'
                        placeholder="Enter Price"
                        name="price"
                        value={product.price}
                        onChange={handleOnchange}
                    />
                </label>
                <br />
                <label> Tồn kho:
                    <input
                        type='text'
                        placeholder="Enter Stock"
                        name="stock"
                        value={product.stock}
                        onChange={handleOnchange}
                    />
                </label>

                <br />
                <label> Mô tả:
                    <input
                        type='text'
                        placeholder="Enter Description"
                        name="description"
                        value={product.description}
                        onChange={handleOnchange}
                    />
                </label>

                <br />
                <button type="submit" className="btn btn-outline-primary"  >
                    Cập nhật
                </button>
            </form>

        </div >
    )
}