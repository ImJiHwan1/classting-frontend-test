import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// initalState 타입 정의
type StateType = {
  QuizList: any;
  curQuizNo: number;
};

// initalState 생성
const initialState: StateType = {
  QuizList: null,
  curQuizNo: 0,
};

// 슬라이스생성
export const QuizSlice = createSlice({
  name: 'quizList',
  initialState,
  reducers: {
    // action의 타입은 PayloadAction<제네릭> 으로 정의해준다.
    update: (state: StateType, action: PayloadAction<any>) => {
      // immer가 내장되어 있어서, 불변성 신경 쓰지 않고 바로 수정해주면 된다.
      const newItem = action.payload;
      state.QuizList = newItem;
    },
    incQuiz: (state: StateType, action: PayloadAction<any>) => {
      // immer가 내장되어 있어서, 불변성 신경 쓰지 않고 바로 수정해주면 된다.
      state.curQuizNo += 1;
    },
  },
});

// 액션을 export 해준다.
export const { update, incQuiz } = QuizSlice.actions;

// 슬라이스를 export 해준다.
export default QuizSlice;
