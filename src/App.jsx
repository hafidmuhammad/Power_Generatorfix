import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import MainRouter from './routes/MainRouter';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const noLayoutRoutes = ["/login", "/register"];

  return (
    noLayoutRoutes.includes(path) ? (
      <MainRouter />
    ) : (
      <MainLayout>
        <MainRouter />
      </MainLayout>
    )
  );
}

export default App;
