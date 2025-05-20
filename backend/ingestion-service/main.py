from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel
import logging

app = FastAPI(
    title="Data Ingestion Service",
    version="0.1.0",
    description="Handles document and data ingestion for the AI analytics platform."
)

# Example data model
class IngestRequest(BaseModel):
    doc_id: str
    content: str
    metadata: dict

@app.post("/ingest")
def ingest_document(request: IngestRequest):
    # Placeholder for actual ingestion logic (e.g., store in MongoDB, ADLS)
    logging.info(f"Ingesting doc {request.doc_id}")
    return {"status": "success", "doc_id": request.doc_id}

@app.get("/healthz")
def health_check():
    return {"status": "ok"}