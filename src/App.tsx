import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Devices } from './pages/Devices';
import { Settings } from './pages/Settings';
import { ShareApp } from './pages/ShareApp';
import { Manual } from './pages/Manual';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/devices',
    element: <Devices />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/share',
    element: <ShareApp />,
  },
  {
    path: '/manual',
    element: <Manual />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
