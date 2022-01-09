import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUniversityInput {
  @Field()
  id: string;
  @Field()
  name: string;

  @Field()
  City: string;

  @Field()
  State: string;
}
