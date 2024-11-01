import { configureStore, createSlice } from "@reduxjs/toolkit";
import NonVeg from "./NonVeg";

const productSlice=createSlice({
    name:'products',
    initialState:{Veg:[
        { name:'Tamato',price:200},
        { name:'potato',price:200},
        { name:'bringel',price:200}
        { name:'betroot',price:200},
        { name:'carrot',price:200},
        { name:'green chill',price:200},
       
            ],
        
        NonVeg:[
            { name:'Chiken',price:200},
            { name:'potato',price:200},
            { name:'bringel',price:200},
            { name:'betroot',price:200},
            { name:'carrot',price:200},
            { name:'green chill',price:200},
            
           
                ],
            },
            reducers:{}
    });
    const store = configureStore({
          
    })