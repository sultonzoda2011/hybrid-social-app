import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ChatPage from './pages/ChatPage';
import Navbar from './components/Shared/Navbar';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/chat" component={ChatPage} />
      </Switch>
    </Router>
  );
};

export default App;