import React, { useState } from 'react';
import './App.css';
import './service/firebase';
import Header from './components/Header';
import AuthProvider from './providers/AuthProvider';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  const [value, setValue] = useState([]);
  return (
    <AuthProvider>
      <Header/>
      <Dashboard />
      <Footer />
    </AuthProvider>
  );
}

export default App;
