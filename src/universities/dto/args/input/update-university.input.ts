import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateUniversityInput {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;

  @Field()
  city: string;

  @Field()
  state: string;
}
