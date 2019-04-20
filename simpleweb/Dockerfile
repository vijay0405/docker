
# node alpine image from dockerhub
FROM node:alpine

# set working directory to /user/app
WORKDIR /user/app

# copy package.json only file to workingDir inside container to prevent unnecessary dependencies installation on each image build
COPY ./package.json ./

# install dependencies
RUN npm install

# copy files containing application code to workingDir inside container
COPY ./ ./

# upstart command for the container
CMD [ "npm", "start" ]
