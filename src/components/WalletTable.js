import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Tfoot,
} from '@chakra-ui/react';
import WalletRow from './WalletRow';

const WalletTable = props => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption placement={'top'} fontSize={'xl'} fontWeight={600}>
          Saved Wallets
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Wallet Address</Th>
            <Th>Active</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.wallets.map((wallet, index) => {
            return (
              <WalletRow
                openEdit={() => props.edit(wallet)}
                openDelete={() => props.delete(wallet)}
                key={index}
                wallet_address={wallet.wallet_address}
                name={wallet.name}
                selected={wallet.selected}
                walletId={wallet.id}
              />
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Name</Th>
            <Th>Wallet Address</Th>
            <Th>Active</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default WalletTable;
