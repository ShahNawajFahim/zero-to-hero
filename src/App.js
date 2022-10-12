
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Mcq from './Components/Mcq/Mcq';
import Rechart from './Components/Rechart/Rechart';

function App() {

  const router = createBrowserRouter([

    {
      path: '/',

      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },

        {
          path: 'rechart',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Rechart></Rechart>
        },

        {
          path: '/:quizId',
          loader: async ({ params }) => {
            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },

          element: <Mcq></Mcq>
        }


      ]

    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
