import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetUniversityArgs {
  @Field()
  id: string;
}
