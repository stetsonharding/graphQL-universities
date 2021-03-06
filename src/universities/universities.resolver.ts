/* eslint-disable prettier/prettier */
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UniversitiesService } from './universities.service';
import { University } from './interfaces/university';

//dto
import { GetUniversityArgs } from './dto/args/get-university.args';
import { GetUniversitiesArgs } from './dto/args/get-universities.args';
import { CreateUniversityInput } from './dto/args/input/create-university.input';
import { UpdateUniversityInput } from './dto/args/input/update-university.input';

@Resolver(() => University)
export class UniversitiesResolver {
  //allowing access to universities service
  constructor(private readonly universitiesService: UniversitiesService) {}

  @Query(() => University, { name: 'university' })
  getUniversity(@Args() getUniversityArgs: GetUniversityArgs): University {
    return this.universitiesService.getUniversity(getUniversityArgs);
  }

  @Query(() => [University], { name: 'universities' })
  getUniversities(
    @Args() getUniversitiesArgs: GetUniversitiesArgs,
  ): University[] {
    return this.universitiesService.getUniversities(getUniversitiesArgs);
  }

  @Mutation(() => University)
  createUniversity(
    @Args('createUniversityData') createUniversityData: CreateUniversityInput,
  ): University {
    return this.universitiesService.createUniversity(createUniversityData);
  }

  @Mutation(() => University)
  updateUniversity(
    @Args('updateUniversityData') updateUniversityData: UpdateUniversityInput,
  ): University {
    return this.universitiesService.updateUniversity(updateUniversityData);
  }
}
