import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Drawer: {
      variants: {
        permanent: {
          dialog: {
            pointerEvents: 'auto',
          },
          dialogContainer: {
            pointerEvents: 'none',
          },
        },
      },
    },
    Button: {
      variants: {
        round: {
          aspectRatio: 1,
          display: 'grid',
          placeItems: 'center',
          borderRadius: '50%',
          height: '4rem',
          width: '4rem',
          padding: '0',
          textAlign: 'center',
          textDecoration: 'none',
          _hover: { border: '1px solid black' },
          _focus: { border: '1px solid black', boxShadow: 'none' },
        },
      },
    },
  },
});

export default theme;
