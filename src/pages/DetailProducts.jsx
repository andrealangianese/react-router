import { useParams, Link } from "react-router-dom"



export default function DetailProducts() {

    const { id } = useParams()

    return (
        <>
            <h3>Dettagli prodotto {id}</h3>
            <Link to="/our-products">Torna ai prodotti</Link>
        </>)
}

