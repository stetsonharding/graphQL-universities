import { Injectable } from '@nestjs/common';

import { University } from './interfaces/university';

import * as fs from 'fs';
import { CreateUniversityInput } from './dto/args/input/create-university.input';

// Injectable allows us to import providers into this service
@Injectable()
export class UniversitiesService {
  //Reading JSON file
  // private readonly universities = JSON.parse(
  //   fs.readFileSync(
  //     __dirname + '\\..\\..\\src\\files\\universities.json',
  //     'utf8',
  //   ),
  // );

  private universities: University[] = [];

  public getUniversities(): University {}

  public getUniversity(): University[] {}

 
  public createUniversity(createUniversityData: CreateUniversityInput): University {
      const indexID = this.universities.length + 1
      
    const univeristy: University ={
      id: indexID;
    }

    this.universities.push(univeristy)

    return univeristy
  }

  public updateUniversity(): University {}
}
