export class InitialQuestion {
  constructor(
    public question_number: number,
    public topic: string,
    public question: string,
    public correct: string,
    public wrong_1: string,
    public wrong_2: string,
    public wrong_3: string
  ) {}
}
