import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 2000,
  headers: { 'X-Custom-Header': 'absence-manager-custom-header' },
});

const API_ENDPOINTS = {
  members: 'members',
  absences: 'absences',
};

const getMembers = async () => {
  try {
    const res = await axiosInstance.get(API_ENDPOINTS.members);
    if (res?.status === 200) {
      return res?.data?.payload;
    }
  } catch (err) {
    // TODO: Log the error to Sentry or logging service.
    console.log('err: ', err);
  }
};

const getAbsences = async () => {
  try {
    const res = await axiosInstance.get(API_ENDPOINTS.absences);
    if (res?.status === 200) {
      return res?.data?.payload;
    }
  } catch (err) {
    // TODO: Log the error to Sentry or logging service.
    console.log('err: ', err);
  }
};

const httpService = { getMembers, getAbsences };
export default httpService;
