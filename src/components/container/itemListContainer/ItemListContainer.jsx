
import { useState, useEffect } from "react";
import { gFetch } from "../../../helpers/BD";
import ItemsList from "../../ItemsList/ItemsList";

import { Spinner } from "react-bootstrap";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
   gFetch
     .then((resp) => setProducts(resp))
     .catch((err) => console.log(err))
     .finally(() => setLoading(false));
 }, []);

 
    return loading ? (
        <div className="container-lg mt-5">
            <div className="d-flex flex-row justify-content-center alig-items-center gap-2">
                <h2>Cargando peliculas</h2>
                <Spinner animation="border" variant="danger" />
            </div>
        </div>
    ) : (
        <ItemsList producto={products} />
    );
}



export default ItemListContainer;
