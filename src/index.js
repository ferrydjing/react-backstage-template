import 'react-app-polyfill/ie9'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const renderDom = document.getElementById('root')

ReactDOM.render(<App />, renderDom)
