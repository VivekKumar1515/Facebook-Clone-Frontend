import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import LoginButton from './Components/Login';
import LogoutButton from './Components/Logout';
import UserPage from './Components/UserPage';
import { Provider } from 'react-redux';
import { store } from './app/store/store';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="login" element={<LoginButton />} />
      <Route path="main" element={<UserPage />} />
      <Route path="logout" element={<LogoutButton />} />
      <Route path="" element={<LoginButton />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Auth0Provider
      domain="dev-ka120uvahgvywjnm.us.auth0.com"
      clientId="whM1pCfIuWpKskxCflrZtrAtyXxGngU1"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/main"
      }}
    >
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </Auth0Provider>,
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
