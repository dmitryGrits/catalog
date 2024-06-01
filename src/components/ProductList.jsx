import { useDispatch, useSelector } from "react-redux";
import { deleteProd, changeAvailable } from "../reducers/ProductSlice";
import AddProduct from "./AddProduct";

export default function ProductList () {
    const products = useSelector((state) => state.productList.products);
    const dispatch = useDispatch();
    return (
        <section
        style={{
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
            <h2>Товары</h2>
            <AddProduct products={products} />
            {products.map((productItem) => (
                <div key={productItem.id} style={{ display: "flex", gap: "20px"}}>
                    <p>id: {productItem.id}</p>
                    <p>name: {productItem.name}</p>
                    <p>description: {productItem.description}</p>
                    <p>price: {productItem.price}</p>
                    <p>available: {productItem.available}</p>

                    <button onClick={() => dispatch(changeAvailable(productItem))}>Поменять</button>
                    <button onClick={() => dispatch(deleteProd(productItem))}>Удалить</button>
                </div>
            ))}
        </section>
    );
}