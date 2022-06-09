import createDataContext from './createDataContext';

const walletReducer = (state, action) => {
  switch (action.type) {
    case 'add_wallet':
      return [
        ...state,
        {
          walletId: action.payload.id,
          name: action.payload.name,
        },
      ];
    case 'deleteWallet':
      return state.filter(entry => entry.walletId !== action.payload);
    default:
      return state;
  }
};

const addWallet = dispatch => {
  return (walletId, name) => {
    dispatch({ type: 'add_wallet', payload: { walletId, name } });
  };
};

const deleteWallet = dispatch => {
  return id => {
    dispatch({ type: 'delete_wallet', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  walletReducer,
  { addWallet, deleteWallet },
  [
    {
      walletId: '0x3beb173F2953476b9Bd303E1AAAd410590380FbC',
      name: 'Wallet 1',
    },
  ]
);
