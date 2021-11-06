FROM node:alpine

WORKDIR /usr/app

COPY ./packege.json .
RUN npm install
COPY . .

# EXPOSE 8080

CMD ["npm", "start"]
