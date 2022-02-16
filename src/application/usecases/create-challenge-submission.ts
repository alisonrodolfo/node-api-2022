
import { Submission } from '../../domain/entities/submission'
import { ChallengesRepository } from '../repositories/ChallengesRepository';
import { StudentRepository } from '../repositories/StudentsRepository';

type CreateChallengeSubmissionRequest = {
  studentId: string;
  challengeId: string;
}


export class CreateChallengeSubmission {
  constructor(
    private studentRepository: StudentRepository,
    private challengesRepository: ChallengesRepository
  ){}

  async execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) {
    const student =  await this.studentRepository.findById(studentId)
    if(!student){
     throw new Error('Students does not exists')
    }
    const challenge =  await this.challengesRepository.findById(challengeId)
    if(!challenge){
     throw new Error('Challenge does not exists')
    }

    const submission = Submission.create({
      studentId,
      challengeId,
    })
    return submission;
  }
}