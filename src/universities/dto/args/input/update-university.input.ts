import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateUniversityInput {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;

  @Field()
  City: string;

  @Field()
  State: string;
}
