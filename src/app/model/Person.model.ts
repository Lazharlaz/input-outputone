import { Skill } from "./Skill.model";

export class Person {
    lastName: string;
    firstName: string;
    age: number;
    gender: string;
    bio: string;
    skills: Skill[];
  
    constructor(lastName: string, firstName: string, age: number, gender: string, bio: string, skills: Skill[]) {
      this.lastName = lastName;
      this.firstName = firstName;
      this.age = age;
      this.gender = gender;
      this.bio = bio;
      this.skills = skills;
    }
}