import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/AboutUs/About';
import Products from './components/Products/Products';
import Main from './layout/Main';
import Friends from './components/Friends/Friends';

function App() {
  // No. 2
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        { path: '/home', element: <Home></Home> },
        { path: '/products', element: <Products></Products> },
        {path: '/friends', element: <Friends></Friends>}
      ]

    },
    
    { path: 'about', element: <About></About> },
    
  ])
  return (
    <div className="App">
      {/* No.3 */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
