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

const WalletForm = () => {
  const [walletId, setWalletId] = useState('');
  const [walletName, setWalletName] = useState('');
  const { addWallet, state } = useContext(Context);

  const viewContentsHandler = () => {};

  const addToWalletsHandler = async () => {
    await addWallet(walletId, walletName);
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

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
              placeholder="wallet ID"
              value={walletId}
              onChange={event => setWalletId(event.target.value)}
            />
          </InputGroup>

          <InputGroup width="50%">
            <Input
              placeholder="wallet Name"
              value={walletName}
              onChange={event => setWalletName(event.target.value)}
            />
          </InputGroup>
        </Flex>
      </GridItem>

      <Button onClick={() => viewContentsHandler()}>View Contents</Button>
      <Button onClick={() => addToWalletsHandler()}>Add to My Wallets</Button>

      <GridItem colSpan={2}>
        <Text>Currently Selected ID:</Text>
        <InputGroup>
          <Input
            placeholder="wallet Name"
            value={walletName}
            onChange={event => setWalletName(event.target.value)}
          />
        </InputGroup>
      </GridItem>
    </Grid>
  );
};

export default WalletForm;
