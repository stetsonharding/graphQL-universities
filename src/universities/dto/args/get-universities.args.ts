import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetUniversitiesArgs {
  @Field(() => [Int])
  ids: number[];
}
