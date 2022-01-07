import { Field, Int, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
class State {
  id: string;
  @Field()
  name: string;
}

@ObjectType()
class City {
  id: string;
  @Field()
  name: string;
  State: State;
}

@ObjectType()
export abstract class University {
  @Field()
  id: string;
  @Field()
  name: string;
  City: City;
}

// @ObjectType()
// export class University {
//   @Field()
//   id: string;

//   @Field()
//   email: string;

//   @Field(() => Int)
//   age: number;

//   @Field({ nullable: true })
//   isSubscribed?: boolean;
// }
