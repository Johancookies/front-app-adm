import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound.component';
import Auth from './pages/Auth/Auth.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
