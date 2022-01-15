## cd server:
npm i 

npm run server

kill -9 $(lsof -t -i:4242)

## cd client:
npm i 

npm run start

kill -9 $(lsof -t -i:3000)

## cd client for tests:
npm run test

npm test -- --coverage


