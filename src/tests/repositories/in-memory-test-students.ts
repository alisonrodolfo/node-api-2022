import { StudentRepository } from "../../application/repositories/StudentsRepository";
import { Student } from "../../domain/entities/students";

export class InMemoryStudentsRepository implements StudentRepository {
  public items: Student[] = [];
  //public  items = new Map(Object.entries(Student));


  async findById(id: String): Promise<Student | null> {
    const student = this.items.find(student => student.id === id);
    if (!student) return null;
      return student;
  }

}