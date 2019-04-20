#existing image as base
FROM alpine

#download and install redis
RUN apk add --update redis

#command to run in a container created from the resulting image
CMD [ "redis-server" ]