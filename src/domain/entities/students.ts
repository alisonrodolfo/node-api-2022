import { Entity } from "../../core/domain/entity";

type SubmissionProps = {
  name: string;
  email: string;
}

export class Student extends Entity<SubmissionProps>{
    private constructor(props: SubmissionProps, id?: string){
      super(props, id);
    }
    static create(props: SubmissionProps, id?: string){
        const student = new Student(props);
        
        return student;
    }
}

