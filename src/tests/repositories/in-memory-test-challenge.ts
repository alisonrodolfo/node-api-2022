import { ChallengesRepository } from "../../application/repositories/ChallengesRepository";
import { Challenge } from "../../domain/entities/chanllege";

export class InMemoryChallengesRepository implements ChallengesRepository {
  public items: Challenge[] = [];

  async findById(id: String): Promise<Challenge | null> {
    const challenge = this.items.find(challenge => challenge.id === id);
    if (!challenge) {
      return null;
    } else {
      return challenge;
    }

  }

}