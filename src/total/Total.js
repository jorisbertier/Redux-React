import { useEffect, useState } from "react";
import { useSelector, useStore } from "react-redux";
import { getProductList, getTotalOrder } from "../app/selector";

export const Total = () => {
    const store = useStore();

    const list = useSelector(getProductList)
    
    const totalCommand = useSelector(getTotalOrder)

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