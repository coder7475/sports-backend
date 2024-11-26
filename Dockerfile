FROM node:20-alpine

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package*.json ./

RUN --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm ci --only=production

USER node

COPY --chown=node:node tsconfig.json .
COPY --chown=node:node ./dist ./dist

EXPOSE 5003

CMD [ "npm", "start" ]