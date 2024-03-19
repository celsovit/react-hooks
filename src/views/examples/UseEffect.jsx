import { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const calculateFactorial = (n) => {
    const num = parseInt(n)

    if (num < 0) 
        throw new Error('Não existe fatorial de número negativo')

    if (num === 0 || num === 1) 
        return 1

    return num * calculateFactorial(num - 1)
}

const UseEffect = (props) => {

    const [ number, setNumber ] = useState(1)
    const [ factorial, setFactorial ] = useState(1)

    useEffect(
        () => setFactorial(calculateFactorial(number)), 
        [number]
    )

    useEffect(() => {
        if (factorial > 1000000) {
            document.title = "UM MILHÃO ATINGIDO"
        }
    }, [factorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <div className="center">
                <div>
                    <span className="text">(Fatorial) { number }! = </span>
                    <span className="text red">{ factorial }</span>
                </div>
                <input className='input'
                    min={ 0 }
                    type="number" 
                    value={ number } 
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>

        </div>
    )
}

export default UseEffect
