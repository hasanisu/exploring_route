import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/AboutUs/About';
import Products from './components/Products/Products';

function App() { 
  // No. 2
  const router = createBrowserRouter([
    {path:'/', element: <div>This is default page</div>},
    {path: '/home', element: <Home></Home>},
    {path: 'about', element: <About></About>},
    {path: '/products', element: <Products></Products>}
  ])
  return (
    <div className="App">
      {/* No.3 */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
