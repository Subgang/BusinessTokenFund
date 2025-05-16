import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import BusinessesPage from './pages/BusinessesPage';
import BusinessDetailPage from './pages/BusinessDetailPage';
import IndexPage from './pages/IndexPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="businesses" element={<BusinessesPage />} />
        <Route path="businesses/:id" element={<BusinessDetailPage />} />
        <Route path="index" element={<IndexPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;