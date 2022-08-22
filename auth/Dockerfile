# FROM specifies parent image from which you are building
# Starting from node image
FROM node:12
# Creating working directory in the image
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY server.js ./
CMD ["npm", "start"]