import { useEffect, useState } from "react";

function CreateProduct(){
    const [product, setProduct] = useState({
        description: '',
        price: 0,
    })
    const [categories, setCategories] = useState([])

    const fetchCategories = async() => {
        try{
            const response = await fetch("http://localhost:8080/category/", {
                method: "GET",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(categories)
            });

            if(response.ok){
                const data = await response.json()
                setCategories(data)
            }else{
                console.error("Erro ao obter categorias: ", response.status)
            }
        }catch(error){
            console.error("Erro de requisição: ", error)
        }
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    const handleCreateProduct = async() =>{
        try{
            const response = await fetch("htttp://localhost:8080/products/create/", {
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(product)
            });

            if(response.ok){
                const data = await response.json();
                setProduct(data);
            }else{
                console.error("Erro de status: ", response.status)
            }
        }catch(error){
            console.error("Erro na requisição: ", error)
        }
    }

    return(
        <div>

        </div>
    );
}