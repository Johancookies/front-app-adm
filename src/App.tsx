import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth/Auth.component';
import Layout from './components/Layout/Layout.component';
import Landings from './pages/Landings/Landings.component';
import NotFound from './pages/NotFound/NotFound.component';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Layout />}>
        <Route path="landings" element={<Landings />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;