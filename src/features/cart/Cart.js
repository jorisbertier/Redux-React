import { useEffect, useState } from "react";
import { useSelector, useStore } from "react-redux";
import { SuperCremeux } from "../../common/models";
import { getProductList } from "../../app/selector";

export const Cart = () => {
    const store = useStore();
    const list = useSelector(getProductList)
    
    return (
        <div className="Selection">
            <h1>Vos produits sélectionnées</h1>
            {list.map(
                (item, index) => 
                <span key={index} className="SelectedProduct">{item.title} {item.price} €</span>
                )}
            <div className="CartNavBar">
                <button onClick={() => store.dispatch({type: 'ADD_PRODUCT', payload: SuperCremeux})}>Ajouter un super crémeux</button>
            </div>
        </div>
    )
};