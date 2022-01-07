import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetUniversitiesArgs {
  @Field(() => [String])
  id: string[];
}
