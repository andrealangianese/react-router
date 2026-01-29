import { useParams, Link } from "react-router-dom"

// imp axios per chiamata

import axios from "axios"

import { useEffect } from "react"

//endpoint per aggiungere i dettagli

const endpointNew = "https://fakestoreapi.com/products"

export default function DetailProducts() {

    const { id } = useParams()

    useEffect(() => {   
        axios.get(`${endpointNew}/${id}`)
            .then((resp) => console.log(resp.data))
    }, [])

    return (
        <>
            <h3>Dettagli prodotto {id}</h3>
            <Link to="/our-products">Torna ai prodotti</Link>
        </>)
}

