FROM mhart/alpine-node:8.11.4

WORKDIR /app/api

COPY package*.json /app/api/

RUN npm install

COPY . /app/api/

EXPOSE 80

CMD ["npm", "start"]