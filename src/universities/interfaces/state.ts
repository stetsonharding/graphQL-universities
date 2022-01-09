import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class State {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
