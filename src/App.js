import ReactTooltip from 'react-tooltip';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/Routes/Routes';

function App() {
  return (
    <div >
      <RouterProvider router={routes}>

      </RouterProvider>
      <Toaster></Toaster>
      <ReactTooltip className='bg-info'></ReactTooltip>
    </div>
  );
}

export default App;
