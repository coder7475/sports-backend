#-------------------------------------------
# Pin specific version (use slim for reduced image size)
FROM node:19.6-bullseye-slim
#-------------------------------------------
COPY . .
RUN npm install
CMD [ "node", "dist/server.js" ]