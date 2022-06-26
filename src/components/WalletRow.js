import { Button, Td, Tr } from '@chakra-ui/react';
import { useContext } from 'react';
import { MdEdit, MdDelete, MdDone, MdClear } from 'react-icons/md';
import { Context } from '../context/WalletContext';

const WalletRow = ({
  wallet_address,
  name,
  openEdit,
  openDelete,
  selected,
  walletId,
}) => {
  const { editWallet } = useContext(Context);

  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{wallet_address}</Td>
      <Td>
        <Button
          onClick={() => editWallet(walletId, wallet_address, name, !selected)}
        >
          {selected ? <MdDone color="blue" /> : <MdClear color={'red'} />}
        </Button>
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
