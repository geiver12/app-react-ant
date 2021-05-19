import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';   
import { client } from './config/apollo';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
    <ApolloProvider client={client}> {/* en "client" debe ir la configuración de apollo */}
      <App />
    </ApolloProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
