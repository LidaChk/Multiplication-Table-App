import { QuestionListParams, Question } from '@/types/types';
import QuestionBox from '../QuestionBox/QuestionBox';
import { useEffect, useState } from 'react';
import { QuestionList } from '@/utils/QuestionList/QuestionList';
import { Box, Button, Flex, Group } from '@mantine/core';

const Carousel: React.FC<QuestionListParams> = (
  questionListParams: QuestionListParams
) => {
  const [questionList, setQuestionList] = useState<QuestionList | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);

  useEffect(() => {
    const questionList = new QuestionList(questionListParams);
    setQuestionList(questionList);
    setCurrentQuestion(questionList.getCurrent());
  }, [questionListParams]);

  if (questionList === null) {
    return <div>Loading...</div>;
  }

  if (!currentQuestion?.multiplicand ||!currentQuestion?.multiplier) {
    return <div>Congratulations!</div>;
  }

  const handleKnown = () => {
    setCurrentQuestion(questionList.getNextOnKnown());
  };

  const handleUnknown = () => {
    setCurrentQuestion(questionList.getNextOnUnKnown());
  };

  return (
    <Box miw={'100%'}>
      <Flex
        miw={'100%'}
        mih={50}
        gap="xs"
        justify="center"
        align="center"
        direction="row"
        wrap="nowrap"
      >
        <Button onClick={handleUnknown} miw={'50%'} color="#f978d4">I don&apos;t know</Button>
        <Button onClick={handleKnown} miw={'50%'} color="#16f435">I know</Button>
      </Flex>
      <QuestionBox
        question={`${currentQuestion.multiplicand} x ${currentQuestion.multiplier}`}
        answer={`${currentQuestion.answer}`}
      />
    </Box>
  );
};

export default Carousel;
