FROM node:18-alpine

WORKDIR /app

RUN apk add git
RUN npm install -g @angular/cli

COPY . .

RUN npm install

EXPOSE 4200