import React, { useEffect } from 'react'
import { getQuizData } from '@api/QuizApi';
import Head from 'next/head'
import { useQuery } from 'react-query';
import { QuizInfo } from '@interfaces/QuizInfo';

const quiz = () => {
  const { data: quizInfo, isLoading, isError } = useQuery<QuizInfo>(
    'contentInfo', 
    () => getQuizData({ _amount: '4', _type: 'multiple' }),
    { retry: 0, refetchOnWindowFocus: false }
  );

  useEffect(() => {
    console.log(quizInfo);
    if(quizInfo) {
      
    }
  }, [quizInfo]);
  
  return (
    <>
      <Head>
        <title>CLASSTING | QUIZ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>quiz</div>
    </>
  )
}

export default quiz