import { Field, Int, ObjectType, ID } from '@nestjs/graphql';

import { City } from '../interfaces/city';

@ObjectType()
export class University {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => City)
  City: City;
}
