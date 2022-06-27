import { Box, SimpleGrid, Flex, Image } from '@chakra-ui/react';

const NftCards = ({ nfts }) => {
  return (
    <SimpleGrid
      m="2rem"
      w="75%"
      justifyItems="center"
      spacing={10}
      columns={[1, 1, 1, 2, 2]}
    >
      {nfts.map(nft => (
        <Box
          key={nfts.indexOf(nft)}
          maxW="lg"
          w="100%"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Image
            width="30rem"
            height="15rem"
            src={nft?.image_url}
            alt="NFT image"
          />

          <Flex p="1rem" alignItems="center" flexDir="column">
            <Box
              mt="1"
              fontWeight="bold"
              lineHeight="tight"
              fontSize="20"
              m="0.5rem"
            >
              {nft.name}
            </Box>

            <Box fontSize="16" m="0.5rem">
              {nft.description}
            </Box>
            <Box fontSize="16" m="0.5rem">
              {nft.price}
            </Box>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default NftCards;
