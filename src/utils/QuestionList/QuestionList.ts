import { Question, QuestionListParams } from "@/types/types";
import { getRandomInt } from "../getRandomInt/getRandomInt";
import next from "next";

export class QuestionList {

  private questionList: Question[] = [];
  private currentIndex: number = 0;

  constructor(questionListParams: QuestionListParams) {
    this.generateQuestionList(questionListParams);
    this.currentIndex = getRandomInt(this.questionList.length, 0);
  }

  private generateQuestionList({minMultiplier, maxMultiplier}: QuestionListParams): void {
    for (let i = minMultiplier; i <= maxMultiplier; i++) {
      for (let j = 1; j <= 10; j++) {
        this.questionList.push({multiplicand: i, multiplier: j});
      }
    }
  }

  getCurrent(): Question | null {
    if (this.questionList.length === 0) {
      return null;
    }
    const question = this.questionList[this.currentIndex];
    return question;
  }


  getNextOnUnKnown(): Question | null {
    if (this.questionList.length === 1) {
      return this.questionList[0];
    }
    this.currentIndex = this.getRandomIndexExeptCurrent();
    const next = this.questionList[this.currentIndex];
    return next;
  }

  getNextOnKnown(): Question | null {
    if (this.questionList.length === 1) {
      this.questionList = [];
      return null;
    }
    const newCurrentIndex = this.getRandomIndexExeptCurrent();
    this.removeCurrent(newCurrentIndex);
    const next = this.questionList[this.currentIndex];
    return next;
  }

  private removeCurrent( newCurrentIndex: number): void {
    this.questionList.splice(this.currentIndex, 1);
    this.currentIndex = newCurrentIndex;
  }

  private getRandomIndexExeptCurrent(): number {
    return getRandomInt(this.questionList.length, this.currentIndex);
  }

  getQuestionList(): Question[] {
    return this.questionList;
  }

}
