FROM python:3.11-slim

WORKDIR /app
RUN pip install mlflow[azure]
EXPOSE 5000

CMD ["mlflow", "server", "--host", "0.0.0.0", "--port", "5000"]