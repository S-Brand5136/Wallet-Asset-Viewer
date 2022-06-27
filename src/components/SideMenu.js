import { Box, Divider, Flex, useColorMode } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../theme/ColorModeSwitcher';
import { IoIosWallet, IoMdHome } from 'react-icons/io';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuButton from './MenuButton';

const SideMenu = props => {
  // eslint-disable-next-line no-unused-vars
  const { colorMode, toggleColorMode } = useColorMode();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const clickHandler = path => {
    navigate(path, { replace: true });
  };

  return (
    <Flex
      background={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
      width={'4.2rem'}
      height={'100vh'}
      position={'absolute'}
      left={'0'}
      top={'0'}
      zIndex={1}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <ColorModeSwitcher />
      <Divider />
      <Box role={'group'} width={'100%'} paddingTop={'2rem'}>
        <MenuButton
          onClick={() => clickHandler('/')}
          selected={pathname === '/'}
          title="Home"
        >
          <IoMdHome fontSize={'1.5em'} />
        </MenuButton>
        <Divider />
        <MenuButton
          title="My Wallets"
          selected={pathname === '/wallets'}
          onClick={() => clickHandler('/wallets')}
        >
          <IoIosWallet fontSize={'1.5em'} />
        </MenuButton>
      </Box>
    </Flex>
  );
};

export default SideMenu;
