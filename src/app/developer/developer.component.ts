import { Component } from '@angular/core';
import { Person } from '../model/Person.model';
import { Skill } from '../model/Skill.model';
import { SkillComponent } from '../skill/skill.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [SkillComponent,CommonModule],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css'
})
export class DeveloperComponent {
  person = new Person(
    'Doe',
    'John',
    30,
    'Male',
    'Software developer with 10 years of experience.',
    [
      new Skill('TypeScript', 'https://example.com/logos/typescript.png',""),
      new Skill('JavaScript', 'https://example.com/logos/javascript.png',""),
    ]
  );
  constructor() { }
}
