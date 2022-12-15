FROM node:19-alpine3.16
WORKDIR /ServerInstance/
COPY . /ServerInstance/
RUN npm install
EXPOSE 5000
CMD ["npm", "start"]