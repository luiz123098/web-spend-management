import axios from 'axios';

export const fetchTransactions = async () => {
  const response = await axios.get('URL_DA_SUA_API');
  return response.data;
};
