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
  const [wallet_address, setWallet_Address] = useState('');

  const editHandler = () => {
    setWallet_Address('');
    setWalletName('');
    onClose();
    editWallet(wallet.id, wallet_address, walletName, () => getWallets());
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
              placeholder={wallet.wallet_address}
              value={wallet_address}
              onChange={e => setWallet_Address(e.target.value)}
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
