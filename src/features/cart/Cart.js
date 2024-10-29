import { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { SuperCremeux } from "../../common/models";

export const Cart = () => {
    const store = useStore();
    const [list, setList] = useState(store.getState().list)
    
    useEffect(()=> {
        store.subscribe(() => { setList(store.getState().list) })
    })

    let totalList = list.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0,
      );
    
    return (
        <div className="Selection">
            <h1>Vos produits sélectionnées</h1>
            {list.map(
                (item, index) => 
                <span key={index} className="SelectedProduct">{item.title} {item.price} €</span>
                )}
            {list.length !== 0 ? (
                <div>Total commande {totalList} euros</div>
            ) : (
                <div>Aucun produit sélectionné pour le moment</div>
            )}
            <div className="CartNavBar">
                <button onClick={() => store.dispatch({type: 'ADD_PRODUCT', payload: SuperCremeux})}>Ajouter un super crémeux</button>
            </div>
        </div>
    )
};