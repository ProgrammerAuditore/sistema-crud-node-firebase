FROM node:14-alpine 

RUN mkdir -p /app

WORKDIR /app 

COPY package*.json /app

RUN npm install 

COPY . .

EXPOSE 3078

CMD ["npm", "run", "dev"]