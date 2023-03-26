FROM python:3

WORKDIR /app

COPY . /app

RUN pip install Flask

CMD flask run --host 0.0.0.0

EXPOSE 5000