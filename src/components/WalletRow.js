import { Button, Td, Tr } from '@chakra-ui/react';
import { MdEdit, MdDelete, MdDone } from 'react-icons/md';

const WalletRow = ({ walletId, name, openEdit, openDelete }) => {
  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{walletId}</Td>
      <Td>
        <MdDone color="blue" />
      </Td>
      <Td>
        <Button onClick={openEdit}>
          <MdEdit color="green" />
        </Button>
      </Td>
      <Td>
        <Button onClick={openDelete}>
          <MdDelete color="red" />
        </Button>
      </Td>
    </Tr>
  );
};

export default WalletRow;
