import { Flex } from '@chakra-ui/react';
import WalletForm from '../components/WalletForm';

const Home = () => {
  return (
    <Flex
      as="main"
      justifyContent={'center'}
      alignItems="center"
      w="100%"
      padding={10}
    >
      <WalletForm />
    </Flex>
  );
};

export default Home;
