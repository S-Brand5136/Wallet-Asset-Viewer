import { useState } from 'react';
import { Divider, Flex } from '@chakra-ui/react';
import WalletForm from '../components/WalletForm';
import NftCards from '../components/NftCards';

const Home = () => {
  const [walletContents, setWalletContents] = useState([]);

  return (
    <Flex
      as="main"
      justifyContent={'center'}
      alignItems="center"
      flexDirection={'column'}
      w="100%"
      padding={10}
      gap={5}
    >
      <WalletForm setWalletContents={setWalletContents} />
      <Divider />
      {walletContents && <NftCards nfts={walletContents} />}
    </Flex>
  );
};

export default Home;
