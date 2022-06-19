import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  Button,
  InputGroup,
  Text,
  Input,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { Context } from '../context/WalletContext';

const EditModal = ({ isOpen, onClose, wallet }) => {
  const { editWallet, getWallets } = useContext(Context);
  const [walletName, setWalletName] = useState('');
  const [walletId, setWalletId] = useState('');

  const editHandler = () => {
    setWalletId('');
    setWalletName('');
    onClose();
    editWallet(wallet.id, walletId, walletName, () => getWallets());
  };

  return (
    <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <InputGroup display={'flex'} flexDirection="column" mb={5}>
            <Text>Wallet Name</Text>
            <Input
              placeholder={wallet.name}
              value={walletName}
              onChange={e => setWalletName(e.target.value)}
            />
          </InputGroup>
          <InputGroup display={'flex'} flexDirection="column">
            <Text>Wallet ID</Text>
            <Input
              placeholder={wallet.walletId}
              value={walletId}
              onChange={e => setWalletId(e.target.value)}
            />
          </InputGroup>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost" onClick={editHandler}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditModal;
