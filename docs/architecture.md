# Architecture Overview

This platform is a cross-cloud, microservices-based AI analytics solution designed for secure, scalable, and compliant analytics workloads.

## Core Components

- **Microservices:** FastAPI (Python) and Express.js (Node.js) for modular backend functions:
  - `auth-service`: OAuth2/OIDC, RBAC, audit logging
  - `ingestion-service`: Document/data ingestion
  - `analytics-api`: Metrics, dashboards
  - `ml-inference-api`: Model serving with Azure ML integration
  - `model-registry`: MLflow for experiment tracking

- **Frontend:** React/Next.js web portal (TypeScript, Chakra UI)

- **Data Storage:** PostgreSQL, MongoDB, ADLS (Delta Lake), S3/GCS supported via abstraction

- **ML Stack:** Azure ML (primary), MLflow, Kubeflow pipelines optional

- **CI/CD:** GitHub Actions pipelines

- **Infrastructure:** Kubernetes manifests, Terraform (Azure-first, extensible)

- **Monitoring/Logging:** Prometheus, Grafana, ELK, Azure Monitor

## Security & Compliance

- OAuth2/OIDC authentication
- Enterprise RBAC and audit logging
- Data encrypted at rest and in transit
- GDPR-compliant logs, consent architecture
- Azure Security Baseline checks

## Typical Deployment

- Each microservice runs in its own container, orchestrated by Kubernetes (AKS, EKS, GKE)
- Services are exposed internally via ClusterIP, externally via Ingress/API Gateway
- Data storage and ML integrations are cloud-provider native, with abstraction for portability

---

See [SECURITY.md](SECURITY.md) and [COMPLIANCE.md](COMPLIANCE.md) for full details.