import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api-staging.rarible.org/v0.1/items/byOwner';

export const useAxios = axiosParams => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async params => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []); // execute once only

  return { response, error, loading };
};
