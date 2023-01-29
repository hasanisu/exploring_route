import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/AboutUs/About';
import Products from './components/Products/Products';
import Main from './layout/Main';
import Friends from './components/Friends/Friends';
import BondhuDetail from './components/BondhuDetail/BondhuDetail';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  // No. 2
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        { path: '/home', element: <Home></Home> },
        { path: '/products', element: <Products></Products> },
        {path: '/friends', 
          loader: async ()=>{
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
        element: <Friends></Friends>},

        {
          path:'/bondhu/:friendId',
          loader: async({params})=>{
            // console.log(params);
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <BondhuDetail></BondhuDetail>
        },

        {
          path:'/posts',
          loader: async()=>{
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element: <Posts></Posts>
        },

        {
          path: '/post/:postId',
          loader: async({params})=>{
            
              return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetails></PostDetails>
        }

      ]
      

    },

  
    
    { path: 'about', element: <About></About> },
    {path: '*', element: <div> Not found the path: Error 404</div>}
    
  ])



  return (
    <div className="App">
      {/* No.3 */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
