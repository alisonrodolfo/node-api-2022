import { Student } from "../../domain/entities/students";

export interface StudentRepository{
  findById(id: String): Promise<Student | null>;
}