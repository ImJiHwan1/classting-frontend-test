import {loadQuizItems} from '@interfaces/QuizInfo';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const axiosInstance = axios.create();

export const getQuizData = async ({_amount, _type}: {_amount: string; _type: string}): Promise<any> => {
  const params = {
    amount: _amount,
    type: _type,
  };
  const response = await ajaxGet(`${process.env.NEXT_PUBLIC_SERVER_URL}`, {
    params,
  });
  if (response && response.data.response_code === 0) {
    return loadQuizItems(response.data);
  } else {
    return undefined;
  }
};

export const ajaxGet = <T = any>(subURL: string, ownConfig?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  // TODO 파라미터 구성
  const params = ownConfig && ownConfig.params ? Object.assign({}, ownConfig.params) : {};
  const url = `${subURL}`;
  const config = ownConfig ? Object.assign({}, ownConfig, {params}) : {params};
  config.headers = {Accept: '*/*', 'Content-Type': 'application/json'};
  config.timeout = 5000;
  return axiosInstance.get(url, config);
};
