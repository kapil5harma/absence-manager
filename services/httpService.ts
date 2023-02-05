import axios from 'axios';

const BASE_URL = process.env.BASE_URL;

export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  timeout: 2000,
  headers: { 'X-Custom-Header': 'absence-manager-custom-header' },
});

const API_ENDPOINTS = {
  member: 'member',
  absence: 'absence',
};

const getMembers = async () => {
  try {
    const res = await axiosInstance.get(API_ENDPOINTS.member);
    if (res?.status === 200) {
      return res?.data;
    }
  } catch (err) {
    // TODO: Log the error to Sentry or logging service.
    console.log('err: ', err);
  }
};

const getAbsences = async () => {
  try {
    const res = await axiosInstance.get(API_ENDPOINTS.absence);
    if (res?.status === 200) {
      return res?.data;
    }
  } catch (err) {
    // TODO: Log the error to Sentry or logging service.
    console.log('err: ', err);
  }
};

const httpService = { getMembers, getAbsences };
export default httpService;
