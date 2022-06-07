import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Home from './pages/Home';
import Wallets from './pages/Wallets';
import SideMenu from './components/Menus/SideMenu';

function App() {
  return (
    <Box textAlign="center" fontSize="xl">
      <BrowserRouter>
        <SideMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wallets" element={<Wallets />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
