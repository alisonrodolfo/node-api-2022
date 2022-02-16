import { Entity } from "../../core/domain/entity";

type SubmissionProps = {
  title: string;
  instructionUrl: string;
}

export class Challenge extends Entity<SubmissionProps>{
    private constructor(props: SubmissionProps, id?: string){
      super(props, id);
    }
    static create(props: SubmissionProps, id?: string){
        const challenge = new Challenge(props);
        
        return challenge;
    }
}

