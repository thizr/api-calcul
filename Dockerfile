FROM node:lts-alpine as build

WORKDIR /app

COPY package.json .

RUN npm install

FROM node:lts-alpine

EXPOSE 3001

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY . .

COPY --from=build /app/node_modules /home/node/app/node_modules

CMD ["node", "server.js"]