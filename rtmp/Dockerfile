# -------------------- TESTING -------------------
### STAGE 1:BUILD ###
# Defining a node image to be used as giving it an alias of "build"
# Which version of Node image to use depends on project dependencies
# This is needed to build and compile our code
# while generating the docker image
FROM node:18.7.0-alpine AS build
# Create a Virtual directory inside the docker image
WORKDIR /dist/src/app
# WORKDIR /streaming-angular
# Copy files to virtual directory
# COPY package.json package-lock.json ./
# Run command in Virtual directory
RUN npm cache clean --force
# Copy files from local machine to virtual directory in docker image
COPY . .
# RUN npm install
RUN npm --prefix streaming-angular install

RUN npm --prefix streaming-angular run build --prod

### STAGE 2:RUN ###
# Defining nginx image to be used
FROM nginx:latest AS ngi
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder
# COPY --from=build /dist/src/app/dist/my-docker-angular-app /usr/share/nginx/html
COPY --from=build /dist/src/app/streaming-angular /usr/share/nginx/html
# -------------------- TESTING -------------------

# Starting from this place
FROM tiangolo/nginx-rtmp
# Copying our own config file into the docker image
COPY nginx.conf /etc/nginx/nginx.conf
COPY .htpasswd /etc/nginx/.htpasswd
COPY /www/ /www/
# COPY /ssl/ /etc/nginx/ssl/