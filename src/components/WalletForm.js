import {
  Button,
  Grid,
  GridItem,
  Input,
  InputGroup,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

const WalletForm = () => {
  const [walletId, setWalletId] = useState('');

  const viewContentsHandler = () => {};

  const addToWalletsHandler = () => {};

  return (
    <Grid
      width={'50%'}
      templateColumns={'repeat(2, 1fr)'}
      templateRows={'repeat(2, 1fr)'}
      gap="5"
    >
      <GridItem colSpan={2}>
        <Text mb="2" textAlign="left">
          Wallet ID:
        </Text>
        <InputGroup>
          <Input
            placeholder="wallet ID"
            value={walletId}
            onChange={event => setWalletId(event.target.value)}
          />
        </InputGroup>
      </GridItem>
      <Button onClick={() => viewContentsHandler()}>View Contents</Button>
      <Button onClick={() => addToWalletsHandler()}>Add to My Wallets</Button>
    </Grid>
  );
};

export default WalletForm;
