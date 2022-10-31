FROM node:17
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]
RUN mkdir -p /app
RUN useradd -ms /bin/bash app
WORKDIR /app
COPY . /app
RUN npm install --force
RUN chown -R app /app
USER app
EXPOSE 3000

CMD [ "node", "app.js" ]