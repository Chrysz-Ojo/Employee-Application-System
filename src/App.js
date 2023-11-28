// import './App.css';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import FooterComponent from './component/FooterComponent';
// import HeaderComponent from './component/HeaderComponent';
// import ListEmployeeComponent from './component/ListEmployeeComponent';

// function App() {
//   return (
//     <div>
      
//       <Router>
//         <HeaderComponent/>
//         <div className="container">
//           <Switch>
            
//             <Route exact path ="/" component={ListEmployeeComponent}></Route>
//             <Route path ="/employees"component={ListEmployeeComponent}></Route>
            
//           </Switch>
//         </div>
//         <FooterComponent/>
//         </Router>
        
//     </div>
//   );
// }

// export default App;








// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Route as RouteV6 } from 'react-router-dom';
// import FooterComponent from './component/FooterComponent';
// import HeaderComponent from './component/HeaderComponent';
// import ListEmployeeComponent from './component/ListEmployeeComponent';
// import AddEmployeeComponent from './component/AddEmployeeComponent';

// function App() {
//   return (
//     <div>
//       <Router>
//         <HeaderComponent />
//         <div className="container">
//           <Routes>
//             <RouteV6 path="/" element={<ListEmployeeComponent />} />
//             <RouteV6 path="/employees" element={<ListEmployeeComponent />} />
//             <RouteV6 path="/add-employee"Component={AddEmployeeComponent} />
//             <RouteV6 path="/edit-employee/:id" Component={AddEmployeeComponent}/>
//           </Routes>
//         </div>
//         <FooterComponent />
//       </Router>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route as RouteV6 } from 'react-router-dom';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import AddEmployeeComponent from './component/AddEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <RouteV6 path="/" element={<ListEmployeeComponent />} />
            <RouteV6 path="/employees" element={<ListEmployeeComponent />} />
            <RouteV6 path="/add-employee" element={<AddEmployeeComponent />} />
            <RouteV6 path="/edit-employee/:id" element={<AddEmployeeComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
