import './App.css';
import Details from './components/Details';
import Error from './components/Error';
import LandingPage from './components/LandingPage';
import Loading from './components/Loading';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Get_Jobs } from './GraphQlQueries';
import { Temp } from './GraphQlQueries';
import { useState } from 'react';
function App() {

  const [allJobs,setAllJobs]=useState([]);

  const {loading,error,data}=Temp();

  if(loading) return <Loading/>
  if(error) return <Error/>



  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<LandingPage data={data} jobs={allJobs} setAllJobs={setAllJobs}/>}/>
          <Route exact path="/detail/:jobSlug/:companySlug" element={<Details/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
