FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

USER node

COPY --chown=node:node ./src .

CMD [ "npm", "start"]