import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUniversityInput {
  @Field()
  name: string;

  @Field()
  City: string;

  @Field()
  State: string;
}
