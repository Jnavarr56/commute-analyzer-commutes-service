# base image
FROM node:14.15.0

# set working directory
WORKDIR /app/commutes-service

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/commutes-service/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/commutes-service/package.json
RUN npm install