import { Field, Int, ObjectType, ID } from '@nestjs/graphql';

import { State } from '../interfaces/state';

@ObjectType()
export class City {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => State)
  State: State;
}
