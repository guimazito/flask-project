FROM python:3.8

WORKDIR /app

COPY . /app

RUN pip install Flask
# RUN pip install pywin32

CMD flask run --host 0.0.0.0

EXPOSE 5000