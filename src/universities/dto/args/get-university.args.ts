import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetUniversityArgs {
  @Field(() => Int)
  id: number;
}
