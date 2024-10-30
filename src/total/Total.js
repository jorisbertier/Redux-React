import { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { getProductList, getTotalOrder } from "../app/selector";

export const Total = () => {
    const store = useStore();

    const [list, setList] = useState(getProductList(store.getState()))
    
    const totalCommand = getTotalOrder(store.getState())
    useEffect(()=> {
        store.subscribe(() => setList(getProductList(store.getState())))
    })
    return (
        <div className="TotalCommand">
            {list.length !== 0 ? (
                <div>Total commande {totalCommand} euros</div>
            ) : (
                <div>Aucun produit sélectionné pour le moment</div>
            )}
        </div>
    )
}