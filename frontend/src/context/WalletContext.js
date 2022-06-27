import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const walletReducer = (state, action) => {
  switch (action.type) {
    case 'get_wallets':
      return action.payload;
    case 'add_wallet':
      return [
        ...state,
        {
          wallet_address: action.payload.id,
          name: action.payload.name,
        },
      ];
    case 'edit_wallet':
      return state.map(wallet => {
        if (wallet.id === action.payload.id) {
          wallet.selected = action.payload.selected;
          return action.payload;
        } else {
          if (action.payload.selected) {
            wallet.selected = false;
          }

          return wallet;
        }
      });
    case 'delete_wallet':
      return state.filter(wallet => wallet.wallet_address !== action.payload);
    default:
      return state;
  }
};

const getWallets = dispatch => {
  return async () => {
    const response = await jsonServer.get('/wallets');

    dispatch({ type: 'get_wallets', payload: response.data });
  };
};

const addWallet = dispatch => {
  return async (wallet_address, name) => {
    await jsonServer.post('/wallets', { wallet_address, name, selected: true });

    dispatch({
      type: 'add_wallet',
      payload: { wallet_address, name },
    });
  };
};

const deleteWallet = dispatch => {
  return async (id, callBack) => {
    await jsonServer.delete(`/wallets/${id}`);
    callBack();
  };
};

const editWallet = dispatch => {
  return async (id, wallet_address, name, selected) => {
    await jsonServer.put(`/wallets/${id}`, { wallet_address, name, selected });

    dispatch({
      type: 'edit_wallet',
      payload: { id, wallet_address, name, selected },
    });
  };
};

export const { Context, Provider } = createDataContext(
  walletReducer,
  { addWallet, deleteWallet, getWallets, editWallet },
  []
);
