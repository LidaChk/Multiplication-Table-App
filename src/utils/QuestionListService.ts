import { Question } from "@/types/types";


export default class QuestionListService {
  private static instance: QuestionListService;

  private constructor() {
  }

  public static getInstance(): QuestionListService {
    if (!QuestionListService.instance) {
      QuestionListService.instance = new QuestionListService();
    }
    return QuestionListService.instance;
  }

  public generateQuestionList(multiplicands: number[]): Question[] {
    const list: Question[] = [];
    multiplicands.forEach((i) => {
      for (let j = 1; j <= 10; j++) {
          list.push({multiplicand: i, multiplier: j});
      }
    });
    return list;
  }
  public getRandomElement<T>(list: T[]): T | undefined {
    return list[Math.floor((Math.random()*list.length))];
  }

}
