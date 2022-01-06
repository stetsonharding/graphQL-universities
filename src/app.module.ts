import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { UniversitiesModule } from './universities/universities.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      //file location for auto generated schemas
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UniversitiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
