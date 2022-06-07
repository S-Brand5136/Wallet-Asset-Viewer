import { Button, Tooltip } from '@chakra-ui/react';
import React from 'react';

const MenuButton = props => {
  return (
    <Tooltip bottom={2} label={props.title} placement="right-end">
      <Button
        variant={'menuButton'}
        onClick={() => props.onClick('/')}
        background={props.selected && 'blackAlpha.500'}
      >
        {props.children}
      </Button>
    </Tooltip>
  );
};

export default MenuButton;
