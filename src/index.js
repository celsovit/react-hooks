import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './views/App'
import { DataContext, data } from './data/DataContext'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <DataContext.Provider value={ data }>
      <App />
    </DataContext.Provider>
  </React.StrictMode>
)