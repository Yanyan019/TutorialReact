import './App.css';
import * as React from 'react';
import Loading from './components/Loading';
import Densityx from './pages/Densityx';
import { useEffect } from 'react';



function App() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {clearTimeout(timer);}
  }, [])
  
  return (
    <>
      {loading ? <Loading /> : <Densityx />}
    </>
  )
}

export default App
