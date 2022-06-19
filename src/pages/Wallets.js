import { Flex, useDisclosure } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import EditModal from '../components/EditModal';
import DeleteModal from '../components/DeleteModal';
import WalletTable from '../components/WalletTable';
import { Context } from '../context/WalletContext';

const Wallets = () => {
  const { getWallets, state } = useContext(Context);
  const [wallet, setWallet] = useState(false);
  const {
    isOpen: editOpen,
    onOpen: openEdit,
    onClose: closeEdit,
  } = useDisclosure();
  const {
    isOpen: deleteOpen,
    onOpen: openDelete,
    onClose: closeDelete,
  } = useDisclosure();

  const editHandler = wallet => {
    setWallet(wallet);
    openEdit();
  };

  const deleteHandler = wallet => {
    setWallet(wallet);
    openDelete();
  };

  useEffect(() => {
    getWallets();
  }, []);

  return (
    <Flex
      width={'100%'}
      height={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <WalletTable
        wallets={state}
        edit={wallet => editHandler(wallet)}
        delete={wallet => deleteHandler(wallet)}
      />
      <EditModal isOpen={editOpen} onClose={closeEdit} wallet={wallet} />
      <DeleteModal isOpen={deleteOpen} onClose={closeDelete} wallet={wallet} />
    </Flex>
  );
};

export default Wallets;
