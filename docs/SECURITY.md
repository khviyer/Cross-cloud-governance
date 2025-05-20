# Security Design

## Identity & Access

- OAuth2 / OpenID Connect authentication, with integration to Azure AD or enterprise IdP
- RBAC enforced at API and frontend layers
- Audit logging for all sensitive operations

## Data Protection

- All data encrypted at rest (using Azure Key Vault, Storage Service Encryption)
- All traffic encrypted in transit (TLS 1.2+)
- Secrets managed with Azure Key Vault

## Infrastructure

- Network policies isolate services
- Only essential ports exposed
- Regular vulnerability scans (Snyk, Trivy, etc.)
- Follows Azure Security Baseline and CIS benchmarks

---

## Incident Response

- Alerts via Prometheus/Grafana and Azure Monitor
- Centralized logging for post-incident analysis

---

## Compliance

- GDPR consent architecture in place (see [COMPLIANCE.md](COMPLIANCE.md))
- Regular security reviews and pen testing