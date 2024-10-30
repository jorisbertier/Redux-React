import { useEffect, useState } from "react";
import { useStore } from "react-redux";

export const Total = () => {
    const store = useStore();

    const [list, setList] = useState(store.getState().list)
    
    useEffect(()=> {
        store.subscribe(() => setList(store.getState().list))
    })
    const totalCommand = list.reduce((prev, cure) => cure.price + prev, 0)
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