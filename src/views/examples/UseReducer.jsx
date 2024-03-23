import { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    featuredProducts: [],
    user: null,
    number: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'number_add2':
            return {...state, number: state.number + 2 }
        case 'login':
            return {...state, user: { name: action.payload }}
        case 'multiply_by7':
            return {...state, number: state.number * 7 }
        case 'divide_by25':
            return {...state, number: state.number / 25}
        case 'truncate':
            return {...state, number: parseInt(state.number) }
        case 'number_addN':
            return {...state, number: state.number + action.numberToAdd }

        default:
            return state    
    }
}

const UseReducer = (props) => {

    const [ state, dispatch ] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"/>

            <div className="center">
                {state.user
                    ? <span className="text">{ state.user.name }</span>
                    : <span className="text">Sem Usuário</span>
                }
                <span className="text"></span>
                <span className="text">{ state.number }</span>
                <div>
                    <button className="btn"
                        onClick={ () => dispatch({type: 'login', payload: 'Maria' }) }> Login </button>
                    <button className="btn"
                        onClick={ () => dispatch({type: 'number_add2' }) }> +2 </button>
                    <button className="btn"
                        onClick={ () => dispatch({type: 'multiply_by7' }) }> *7 </button>
                    <button className="btn"
                        onClick={ () => dispatch({type: 'divide_by25' }) }> /25 </button>
                    <button className="btn"
                        onClick={ () => dispatch({type: 'truncate' }) }> Truncate </button>
                    <button className="btn"
                        onClick={ () => dispatch({type: 'number_addN', numberToAdd: -9 }) }> -9 </button>
                    <button className="btn"
                        onClick={ () => dispatch({type: 'number_addN', numberToAdd: 11 }) }> +11 </button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
