import { useState , useEffect} from "react"
import axios from "axios"

function Products() {

    const endpoint = "https://fakestoreapi.com/products"

    //var d stato per i prodotti
    const [prodotti, setProdotti] = useState([])

    //funzione con axios per recuperare i dati

    function getProducts() {
        axios.get(endpoint)
            .then((resp) => setProdotti(resp.data))
    }

    //stampo solo al caricamento della pagina

    useEffect(getProducts, [])
    return (
        <>
            <h3>i nostri prodotti</h3>
            <div>
                {prodotti.map(prod => (
                    <div key={prod.id}>
                        <h3>{prod.title}</h3>
                       <img src= {prod.image} alt={prod.title} width="100" />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products