import { useDispatch } from "react-redux";
import { addProd } from "../reducers/ProductSlice";
import { useState } from "react";

export default function AddProduct ({products}) {
    const dispatch = useDispatch();
    const [prod, setProd] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");



    function inputHandlerProd (e) {
        setProd(e.target.value);
    }
    function inputHandlerDesc (e) {
        setDesc(e.target.value);
    }
    function inputHandlerPrice (e) {
        setPrice(e.target.value);
    }


    function addNewProd (e) {
        dispatch(addProd({id: +products.length + 1, name: `${prod}`, description: `${desc}`, price : `${price}`, available: "Доступен"}));
        e.target.closest("div").querySelector("input").value = "";
    }



    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
            margin: "20px",
            border: "1px solid black",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)"
        }}>
            <h3>Новый товар</h3>
            <input id="prod"
            type="text"
            value={prod}
             onChange={(e) => inputHandlerProd(e)}/>
             <input id="desc"
            type="text"
            value={desc}
             onChange={(e) => inputHandlerDesc(e)}/>
             <input id="price"
            type="text"
            value={price}
             onChange={(e) => inputHandlerPrice(e)}/>

            <button onClick={(e) => addNewProd(e)}>Add Product</button>
        </div>
    );
}