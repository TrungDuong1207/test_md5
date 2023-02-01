import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001/';

export const getProducts = async ()=>{
    return axios.get("/products")
}

export const deleteProducts= async (id) =>{
    try {
        const url = `/products/${id}`
        return await axios.delete(url)
    } 
    catch(e) {
        console.log(e.response.data.message)
    };
    
}


export const addProduct = async (product) =>{
    try {
        axios.post('/products', product)
    }
    catch (e) {
        console.log(e.response.data.message)
    };
}

export const getProduct = async (id) =>{
   return await axios.get(`/products/${id}`)
}

export const editProduct = async (id, product) =>{
    axios.put(`/products/${id}`, product)
}

