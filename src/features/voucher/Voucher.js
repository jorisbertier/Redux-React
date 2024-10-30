import { useSelector, useStore } from "react-redux";
import { useEffect, useState } from "react";
import { isVoucherAvailable } from "../../app/selector";



export const Voucher = () => {
    const store = useStore();
    const available = useSelector(isVoucherAvailable)

    return <div className="Voucher">
            {available && <button onClick={() => store.dispatch({type: 'APPLY_VOUCHER', payload: { price: 2 }})}>Appliquer ma promo Super crémeux à 2 euros</button>}
    </div>
};