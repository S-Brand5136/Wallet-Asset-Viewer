import { useState } from 'react';
import axios from 'axios';

export const useAxios = () => {
  const [loading, setLoading] = useState(true);

  const fetchData = async params => {
    setLoading(true);
    try {
      const result = await axios.request(params);
      return result.data;
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, loading };
};
