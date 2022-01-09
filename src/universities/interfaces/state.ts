import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class state {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
