import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  Button,
  Text,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { Context } from '../context/WalletContext';

const EditModal = ({ isOpen, onClose, wallet }) => {
  const { deleteWallet, getWallets } = useContext(Context);

  const deleteHandler = () => {
    deleteWallet(wallet.id, () => getWallets());
    onClose();
  };

  return (
    <Modal size={'lg'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            gap={5}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Heading>Are you sure ?</Heading>
            <Text>Delete Wallet: {wallet.name}</Text>
            <Button variant="solid" colorScheme={'red'} onClick={deleteHandler}>
              Delete
            </Button>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditModal;
