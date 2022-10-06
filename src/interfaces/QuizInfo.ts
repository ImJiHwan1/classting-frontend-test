export interface QuizInfo {
  responseCode: number;
  result: QuizItem[];
}

export interface QuizItem {
  category: string;
  correctAnswer: string;
  difficulty: string;
  incorrectAnswer: string[];
  question: string;
  type: string;
}

export function loadQuizItems(data: any): QuizInfo {
  return {
    responseCode: data.response_code,
    result: data.results ? data.results.map(mapQuizItems) : [],
  };
}

function mapQuizItems(data: any) {
  return {
    category: data.category,
    correctAnswer: data.correct_answer,
    difficulty: data.difficulty,
    incorrectAnswer: data.incorrect_answers ? data.incorrect_answers.map(mapIncorrectAnswer) : [],
    question: data.question,
    type: data.type,
  };
}

function mapIncorrectAnswer(data: any) {
  return {
    answer: data,
  };
}
