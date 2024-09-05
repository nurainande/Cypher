import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
// import router from './routes/routes';
// import App from './App';
import './index.css'
import router from './routes/routes';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </StrictMode>
);
