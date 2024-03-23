import React, { useState } from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import { DataContext, data } from '../data/DataContext'

import './App.css'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

const App = props => {

    const [ state, setState ] = useState(data)

    return (
        <DataContext.Provider value={{
            state: state, setState: setState
         }}>
            <div className="App">
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </div>
        </DataContext.Provider>
    )
}

export default App