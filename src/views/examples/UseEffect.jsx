import { useEffect, useState } from 'react'

import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const calculateFactorial = (n) => {
    const num = parseInt(n)

    if (num < 0) 
        //throw new Error('Não existe fatorial de número negativo')
        return -1

    if (num === 0 || num === 1) 
        return 1

    return num * calculateFactorial(num - 1)
}

const UseEffect = (props) => {

    const [ number, setNumber ] = useState(1)
    const [ factorial, setFactorial ] = useState(1)
    const [ status, setStatus ] = useState('Par')

    useEffect(
        () => setFactorial(calculateFactorial(number)), 
        [number]
    )

    useEffect(() => {
        if (factorial > 1000000) {
            document.title = "UM MILHÃO ATINGIDO"
        }
    }, [factorial])

    useEffect(
        () => setStatus(number % 2 === 0 ? 'Par' : 'Ímpar'), 
        [number]
    )
    
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">(Fatorial) { number }! = </span>
                    <span className="text red">{ factorial < 0 ? 'Erro' : factorial }</span>
                </div>
                <input className='input'
                    type="number" 
                    value={ number } 
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{ status }</span>
                </div>
            </div>

        </div>
    )
}

export default UseEffect
