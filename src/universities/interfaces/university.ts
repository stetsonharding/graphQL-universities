import { Field, Int, ObjectType } from '@nestjs/graphql';

import { city } from '../interfaces/city';

@ObjectType()
export class University {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => city)
  city: city;
}
