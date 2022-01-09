import { Field, Int, ObjectType } from '@nestjs/graphql';

import { State } from '../interfaces/state';

@ObjectType()
export class City {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => State)
  State: State;
}
