import React, { useState } from 'react';
import './App.css';
import './service/firebase';
import Header from './components/Header';
import AuthProvider from './providers/AuthProvider';
import Dashboard from './components/Dashboard';

function App() {
  const [value, setValue] = useState([]);
  return (
    <AuthProvider>
      <Header/>
      <Dashboard />
      フッター
    </AuthProvider>
  );
}

export default App;
