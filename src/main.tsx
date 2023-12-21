import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import WagmiProvider from './providers/WagmiProvider/WagmiProvider.tsx'

import './globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider>
      <App />
    </WagmiProvider>
  </React.StrictMode>,
)
