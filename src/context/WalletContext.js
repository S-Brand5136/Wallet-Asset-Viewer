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
          walletId: action.payload.id,
          name: action.payload.name,
        },
      ];
    case 'edit_wallet':
      return state.map(wallet => {
        return wallet.id === action.payload.id ? action.payload : wallet;
      });
    case 'delete_wallet':
      return state.filter(entry => entry.walletId !== action.payload);
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
  return async (walletId, name) => {
    await jsonServer.post('/wallets', { walletId, name });

    dispatch({ type: 'add_wallet', payload: { id: walletId, name } });
  };
};

const deleteWallet = dispatch => {
  return async id => {
    await jsonServer.delete(`/wallets/${id}`);

    dispatch({ type: 'delete_wallet', payload: id });
  };
};

const editWallet = dispatch => {
  return async (id, walletId, name) => {
    await jsonServer.put(`/wallets/${id}`, { walletId, name });

    dispatch({ type: 'edit_blogpost', payload: { id, walletId, name } });
  };
};

export const { Context, Provider } = createDataContext(
  walletReducer,
  { addWallet, deleteWallet, getWallets, editWallet },
  []
);
