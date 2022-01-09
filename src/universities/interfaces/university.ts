import { Field, Int, ObjectType } from '@nestjs/graphql';

import { City } from '../interfaces/city';

@ObjectType()
export class University {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => City)
  City: City;
}
