import { useSelector } from "react-redux";
import { getListQuantityProductPername } from "../../app/selector";

export const Cart = () => {
    const list = useSelector(getListQuantityProductPername)
    console.log(list)
   return <div className="Selection">
    {
        list?.map(
            (item, index) => <span key={index} className="SelectedProduct">{item.quantity} x {item.title} </span>
        )
    }
    </div>
};