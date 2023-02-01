import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { getProducts, deleteProducts } from "../../services/productService"

export default function HomePage() {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts().then((res)=>{
            setProducts(res.data)
        })
    }, [])
    const handleDeleteProduct = (id)=>{
        deleteProducts(id)
        .then(()=>{
            getProducts().then((res)=>{
                setProducts(res.data)
            })
        })
    }
    return(
        <div>
            <h1>Danh sách sản phẩm</h1>
            <button type="button" className="btn btn-outline-primary" onClick={()=>{navigate('/add')}}>Thêm sản phẩm</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Tên Sản Phẩm</th>
                        <th scope="col">Giá Sản Phẩm</th>
                        <th scope="col">Tồn Kho</th>
                        <th scope="col">Mô tả</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.stock}</td>
                            <td>{item.description}</td>
                            <td><button type="button" className="btn btn-outline-danger" onClick={()=>{handleDeleteProduct(`${item.id}`)}}>Xoá</button></td>
                            <td><button type="button" className="btn btn-outline-info" onClick={()=>{navigate(`/product/${item.id}`)}} >Cập Nhật</button></td>
                            <td><button type="button" className="btn btn-outline-primary" onClick={()=>{navigate(`/product/detail/${item.id}`)}} >Chi tiết</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}