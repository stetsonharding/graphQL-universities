import { Injectable } from '@nestjs/common';

import { University } from './interfaces/university';

import * as fs from 'fs';
import { CreateUniversityInput } from './dto/args/input/create-university.input';
import { UpdateUniversityInput } from './dto/args/input/update-university.input';
import { GetUniversityArgs } from './dto/args/get-university.args';
import { GetUniversitiesArgs } from './dto/args/get-universities.args';

// Injectable allows us to import providers into this service
@Injectable()
export class UniversitiesService {
  //Reading JSON file
  private readonly universities = JSON.parse(
    fs.readFileSync(
      __dirname + '\\..\\..\\src\\files\\universities.json',
      'utf8',
    ),
  );

  // private universities: University[] = [
  //   {
  //     id: '1',
  //     name: 'Alabama A & M University',
  //     City: {
  //       id: '1',
  //       name: 'Huntsville',
  //       State: {
  //         id: '1',
  //         name: 'Alabama',
  //       },
  //     },
  //   },
  // ];

  public getUniversities(
    getUniversitiesArgs: GetUniversitiesArgs,
  ): University[] {
    return getUniversitiesArgs.id.map((id) => this.getUniversity({ id }));
  }

  public getUniversity(getUniversityArgs: GetUniversityArgs): University {
    return this.universities.universities.find(
      (university) => university.id === getUniversityArgs.id,
    );
  }

  public createUniversity(
    createUniversityData: CreateUniversityInput,
  ): University {
    const indexID = this.universities.universities.length + 1;

    const university = {
      id: indexID,
      name: createUniversityData.name,
      city: {
        id: indexID,
        name: createUniversityData.city,
        state: {
          id: 1,
          name: createUniversityData.state,
        },
      },
    };

    this.universities.universities.push(university);

    return university;
  }

  public updateUniversity(
    updateUniversityData: UpdateUniversityInput,
  ): University {
    const updated = this.universities.universities.find(
      (university) => university.id === updateUniversityData.id,
    );
    updated.name = updateUniversityData.name;
    updated.city.name = updateUniversityData.city;
    updated.city.state.name = updateUniversityData.state;

    return updated;
  }
}
