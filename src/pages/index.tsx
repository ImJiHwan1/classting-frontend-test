import {getQuizData} from '@api/QuizApi';
import {QuizInfo} from '@interfaces/QuizInfo';
import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {useQuery} from 'react-query';

const Home: NextPage = () => {
  const router = useRouter();

  const onClickQuiz = () => {
    router.replace('/quiz');
  };

  return (
    <>
      <Head>
        <title>CLASSTING | HOME</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        안녕하세요
        <button type="button" onClick={onClickQuiz}>
          문제 풀기
        </button>
      </div>
    </>
  );
};

export default Home;
