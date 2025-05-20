from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import logging

app = FastAPI(
    title="ML Inference API",
    version="0.1.0",
    description="Serves ML model inferences, integrates with Azure ML."
)

class InferenceRequest(BaseModel):
    model_name: str
    data: dict

@app.post("/infer")
def infer(request: InferenceRequest):
    # Placeholder for Azure ML integration
    logging.info(f"Inference requested for model {request.model_name}")
    return {"model": request.model_name, "result": "prediction_stub"}

@app.get("/healthz")
def health_check():
    return {"status": "ok"}