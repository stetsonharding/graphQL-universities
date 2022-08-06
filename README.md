<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest





## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```



## GraphQl Playground Queries 

http://localhost:3000/graphql

Get a University:

query {
  university(id: 1){
    id
    name
    city{
      id
      name
      state{
        id 
        name
      }
    }
  }
}


Get a list Universities:

query{
  universities(id:[1,2,3]){
    id
    name
    city{
      id
      name
      state{
        id
        name
      }
    }
  }
}


Create a University:

mutation{
  createUniversity(createUniversityData:{name:"University of Washington", city:"Seattle", state:"Washington"}){
    id
    name
  	city{
      id
      name
      state{
        id
        name
      }
    }
  }
}


Update a University:

mutation {
  updateUniversity(updateUniversityData: {id:1, name: "University of Idaho", city: "Moscow", state: "Idaho"}){
  id
    name
    city{
      id
      name
      state{
        id
        name
      }
    }
  }
}



