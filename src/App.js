
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Statistic from './Components/Statistic/Statistic';
import Mcq from './Components/Mcq/Mcq';

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
          path: 'statistic',
          element: <Statistic></Statistic>
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
