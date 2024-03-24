import { QuestionListParams } from '@/types/types';
import { QuestionList } from './QuestionList';

describe('QuestionList', () => {
  it('generateQuestionList', () => {
    const questionListParams: QuestionListParams = {
      minMultiplier: 2,
      maxMultiplier: 4,
    };
    const questionList = new QuestionList(questionListParams);

    expect(questionList.getQuestionList().length).toBe(20);
    expect(questionList.getQuestionList()[0].multiplicand).toBe(2);
    expect(questionList.getQuestionList()[0].multiplier).toBe(1);
    expect(questionList.getQuestionList()[1].multiplicand).toBe(2);
    expect(questionList.getQuestionList()[1].multiplier).toBe(2);
    expect(questionList.getQuestionList()[19].multiplicand).toBe(4);
    expect(questionList.getQuestionList()[19].multiplier).toBe(10);
  });

  it('getCurrent', () => {
    const questionListParams: QuestionListParams = {
      minMultiplier: 2,
      maxMultiplier: 4,
    };
    const questionList = new QuestionList(questionListParams);

    expect(questionList.getCurrent()).not.toBeNull();
  });

  it('getNextOnUnKnown', () => {
    const questionListParams: QuestionListParams = {
      minMultiplier: 2,
      maxMultiplier: 4,
    };
    const questionList = new QuestionList(questionListParams);
    const current = questionList.getCurrent()!;
    const next = questionList.getNextOnUnKnown()!;

    expect(next).not.toBeNull();
    expect(next!.multiplicand).not.toBe(current.multiplicand);
    expect(next!.multiplier).not.toBe(current.multiplier);
    expect(
      questionList
        .getQuestionList()
        .some(
          (question) =>
            question.multiplicand === current.multiplicand &&
            question.multiplier === current.multiplier
        )
    ).toBe(true);
  });

  it('getNextOnKnown', () => {
    const questionListParams: QuestionListParams = {
      minMultiplier: 2,
      maxMultiplier: 4,
    };

    const questionList = new QuestionList(questionListParams);
    const current = questionList.getCurrent()!;
    const next = questionList.getNextOnKnown()!;

    expect(next).not.toBeNull();
    expect(next!.multiplicand).not.toBe(current.multiplicand);
    expect(next!.multiplier).not.toBe(current.multiplier);
    expect(
      questionList
        .getQuestionList()
        .some(
          (question) =>
            question.multiplicand === current.multiplicand &&
            question.multiplier === current.multiplier
        )
    ).toBe(false);
  });
});
