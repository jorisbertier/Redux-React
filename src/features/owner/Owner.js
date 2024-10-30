import { useEffect, useState } from "react"
import { useStore } from "react-redux"

export default function Owner() {
    const store = useStore()
    const [owner, setOwner] = useState(store.getState().owner);

    useEffect(() => {
        store.subscribe(() => setOwner(store.getState().owner))
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        const firstName = event.currentTarget.firstName.value;
        store.dispatch({
            type: 'UPDATE_FIRSTNAME',
            payload: firstName
        })
    }
    console.log(owner?.firstName)
    return (
        <>{owner?.firstName ? <div>Connecté en tant que {owner?.firstName}</div>
            :
            <div id="header">
                Aucun propriétaire configuré
            </div>
            }
            <form id="addForm" onSubmit={handleSubmit}>
                <input name="firstName" />
                <button>Enregistrer</button>
            </form></>
    )
}