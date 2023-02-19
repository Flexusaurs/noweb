/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {faker} from '@faker-js/faker'

export function createRandomUser(){
    return{
        id: faker.datatype.uuid(),
        name: faker.internet.userName(),
        email: faker.internet.email(),
        image: `${faker.image.avatar()}?random=${Math.round(Math.random() * 100)}`,
        bannerImage: `${faker.image.nature()}?random=${Math.round(
            Math.random() * 500
          )}`,
        bio: faker.lorem.paragraph(),
        birthDate: faker.date.birthdate(),
    };
}

export function createRandomPost(authorId: string) {
    return {
      id: faker.datatype.uuid(),
      content: faker.lorem.paragraph(),
      user: authorId,
      createdAt: faker.date.birthdate({ min: 0, max: 1, mode: 'age' }),
    };
  }
  
  export function createRandomImage(postId: string) {
    return {
      id: faker.datatype.uuid(),
      url: `${faker.image.imageUrl()}?random=${Math.round(Math.random() * 500)}`,
      postId,
    };
  }