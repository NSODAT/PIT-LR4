FROM node:18-alpine

WORKDIR /app
COPY package.json app.js ./

RUN npm init -y && npm install
EXPOSE ${PORT}

CMD ["node", "app.js"]
