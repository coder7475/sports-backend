FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY  . .
RUN npm ci && npm run build

# Runtime Stage
FROM node:20-alpine
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY . .
RUN --mount=type=cache,target=/usr/src/app/.npm \
npm set cache /usr/src/app/.npm && \
npm ci --only=production
USER node
COPY --chown=node:node --from=builder /usr/src/app/dist ./dist

EXPOSE 5003

CMD [ "npm", "start" ]