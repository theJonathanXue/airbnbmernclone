import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ViewListings from './Pages/ViewListings';
import Navbar from './components/Navbar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<ViewListings />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

      </Route>
    </Routes>
  );
}

export default App;
