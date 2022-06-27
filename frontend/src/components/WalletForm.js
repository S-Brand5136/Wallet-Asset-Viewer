import { useState, useContext, useEffect } from 'react';
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  Text,
} from '@chakra-ui/react';
import { Context } from '../context/WalletContext';
import { useAxios } from '../hooks/useAxios';

const WalletForm = ({ setWalletContents }) => {
  const [wallet_address, setWallet_Address] = useState('');
  const [walletName, setWalletName] = useState('');
  const [selectedWallet, setSelectedWllet] = useState();
  const { addWallet, state } = useContext(Context);
  const { fetchData, loading } = useAxios();

  const viewContentsHandler = async walletAddress => {
    // Fetch wallet contents
    const contents = await fetchData({
      url: `https://testnets-api.opensea.io/api/v1/assets?owner=${walletAddress}`,
      method: 'GET',
    });

    setWalletContents(contents.assets);
  };

  const addToWalletsHandler = async () => {
    // Add wallet to DB
    await addWallet(wallet_address, walletName);

    // Fetch wallet contents
    const contents = await fetchData({
      url: `https://testnets-api.opensea.io/api/v1/assets?owner=${wallet_address}`,
      method: 'GET',
    });

    setWalletContents(contents);

    // reset state
    setWallet_Address('');
    setWalletName('');
  };

  useEffect(() => {
    const selected = state.findIndex(wallet => wallet.selected === true);

    if (selected !== -1) {
      setSelectedWllet(state[selected]);

      viewContentsHandler(state[selected]?.wallet_address);
    }
  }, []);

  return (
    <Grid
      width={'50%'}
      templateColumns={'repeat(2, 1fr)'}
      templateRows={'repeat(2, 1fr)'}
      gap="5"
    >
      <GridItem colSpan={2}>
        <Heading width="100%">Wallet Contents Viewer</Heading>
      </GridItem>
      <GridItem colSpan={2}>
        <Flex gap={'5'} justifyContent={'center'} alignItems="center">
          <InputGroup width="50%">
            <Input
              placeholder="Wallet address"
              value={wallet_address}
              onChange={event => setWallet_Address(event.target.value)}
            />
          </InputGroup>

          <InputGroup width="50%">
            <Input
              placeholder="Wallet name"
              value={walletName}
              onChange={event => setWalletName(event.target.value)}
            />
          </InputGroup>
        </Flex>
      </GridItem>

      <Button onClick={() => viewContentsHandler(wallet_address)}>
        View Contents
      </Button>
      <Button onClick={() => addToWalletsHandler()}>Add to My Wallets</Button>

      <GridItem colSpan={2}>
        <Text>Currently selected wallet address:</Text>
        <InputGroup>
          <Input
            placeholder="Selected, or add wallet"
            value={selectedWallet?.wallet_address}
            isDisabled
            type={'text'}
          />
        </InputGroup>
      </GridItem>
    </Grid>
  );
};

export default WalletForm;
