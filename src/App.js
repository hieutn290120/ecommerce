import './App.css';
import Index from './components/layouts/home'
import Header from './components/includes/header'
import {Layout } from 'antd';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Index />
      </Layout>
    </div>
  );
}

export default App;
