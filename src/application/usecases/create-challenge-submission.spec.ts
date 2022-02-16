import { Challenge } from "../../domain/entities/chanllege";
import { Student } from "../../domain/entities/students";
import { InMemoryChallengesRepository } from "../../tests/repositories/in-memory-test-challenge";
import { InMemoryStudentsRepository } from "../../tests/repositories/in-memory-test-students";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe('Create challenge submission use case', () => {
  it('shoud be able to create a new challenge submission', async () =>{
    const studentsRepository = new InMemoryStudentsRepository();
    const challengesRepository = new InMemoryChallengesRepository();

    const student = Student.create({
      name: 'Alison',
      email: 'email@example.com'
    })
    const challenge = Challenge.create({
      title: 'Challenge 01',
      instructionUrl: 'https://example'
    })
    studentsRepository.items.push(student)
    challengesRepository.items.push(challenge)

    const createChallengeSubmissionTest = new CreateChallengeSubmission(
      studentsRepository,
      challengesRepository
    );
    const response = await createChallengeSubmissionTest.execute({
       studentId: student.id,
      challengeId: challenge.id
    })
    expect(response).toBeTruthy()
  });
});