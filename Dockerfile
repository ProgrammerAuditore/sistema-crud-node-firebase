FROM node:14-alpine 

RUN mkdir -p /home/max98/workspace

WORKDIR /home/max98/workspace 

COPY package*.json /home/max98/workspace

RUN npm install 

COPY . .

EXPOSE 3000 3000

CMD ["npm", "run", "dev"]