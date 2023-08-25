import '../src/StaticReactComponent/CSS/App.css';
import Dashboard from './DashBord/Dashboard';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddCourse from './course/AddCourse';
import ViewCourse from './course/ShowCourse';
import EditCourse from './course/EditCourse';


// import Demo from './Demo';
function App() {
  return (
    <>
       <Router>

        <Routes>
      
            {/* <Route exact path='/' Component={Demo} /> */}
            <Route exact path='/:id' Component={Dashboard}/>
            <Route exact path='/addCourse' Component={AddCourse}/>
            <Route exact path='/viewCourse' Component={ViewCourse}/>
            <Route exact path='/editPage/:id' Component={EditCourse}/>

           
        </Routes>
       </Router>
    </>
  );
}

export default App;
