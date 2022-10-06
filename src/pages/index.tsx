import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

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
