import './App.css';
import Dashboard from './Dashboard';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Example from './Example';
import { ToastContainer } from 'react-toastify';
import AddCourse from './course/AddCourse';
// import Demo from './Demo';
function App() {
  return (
    <>
       <Router>

        <Routes>
      
            {/* <Route exact path='/' Component={Demo} /> */}
            <Route exact path='/:id' Component={Dashboard}/>
            <Route exact path='/addCourse' Component={AddCourse}/>

           
        </Routes>
       </Router>
    </>
  );
}

export default App;
