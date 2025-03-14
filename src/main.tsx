import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import Auth0ProviderWithNavigate from './components/Auth0Provider.tsx';

createRoot(document.getElementById('root')!).render(
  <Auth0ProviderWithNavigate>
    <StrictMode>
      <App />
    </StrictMode>
  </Auth0ProviderWithNavigate>,
)
