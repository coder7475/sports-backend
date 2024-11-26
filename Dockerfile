FROM node:20-alpine

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci --only=production

USER node

COPY --chown=node:node ./src .

EXPOSE 5003

CMD [ "npm", "start"]