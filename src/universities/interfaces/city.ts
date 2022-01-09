import { Field, Int, ObjectType } from '@nestjs/graphql';

import { state } from '../interfaces/state';

@ObjectType()
export class city {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => state)
  state: state;
}
