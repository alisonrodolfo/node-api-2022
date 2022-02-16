import { Challenge } from "../../domain/entities/chanllege";

export interface ChallengesRepository{
  findById(id: String): Promise<Challenge | null>;
}