import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name: "productList",
    initialState: {
        products: [
            {
                id: 1,
                name: "Product 1",
                description: "Description prod #1",
                price: 1000,
                available: "Доступен",
              },
              {
                id: 2,
                name: "Product 2",
                description: "Description prod #2",
                price: 100,
                available: "Доступен",
              },
              {
                id: 3,
                name: "Product 3",
                description: "Description prod #3",
                price: 10000,
                available: "Доступен",
              },
        ],
    },
    reducers: {
        addProd: (state, { payload: newProdItem}) => { 
            if (state.products.some((item) => item.id === newProdItem.id)) {
                return;
            }
            state.products.push(newProdItem);
        },
        deleteProd: (state, { payload: ProdItem}) => {
            const filtered = state.products.filter((item) => item.id !== ProdItem.id);
            state.products = filtered;

        },
        changeAvailable: (state, { payload: ProdItem}) => {
            if (state.products.some((item) => item.id === ProdItem.id)) {
                const changedAv = ProdItem;
                // changedAv.available = changedAv.available === "Доступен"? "Недоступен" : "Доступен";
                console.log(changedAv.available);
                return;
            }
            // state.products = changedAv;
            // return;
            // if (state.products.some((item) => item.id === ProdItem.id
            // ? {
            //     ...item,
            //     available: ProdItem.available 
            //     === "Доступен"? "Доступен" : "Недоступен",
            //   } : item )) {
            //     console.log(ProdItem);
            //     return;
            // }
        },

    },
});

export const { addProd, deleteProd, changeAvailable } = ProductSlice.actions;

export default ProductSlice.reducer;