FROM mhart/alpine-node:10
MAINTAINER Aurélien Hervé <mail@aurelien-herve.com>

RUN npm install -g yarn && \
      yarn global add @angular/cli && \
      mkdir -p /app /app/node_modules

WORKDIR /app

ADD ./package.json .
ADD ./yarn.lock .
RUN yarn
