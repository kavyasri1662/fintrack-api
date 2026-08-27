# Copilot project instructions for FinTrack

This file tells GitHub Copilot how to generate code for this repository. It also instructs developers to save all Copilot prompts and outputs to /prompts/COPILOT_PROMPTS.md.

Technology stack
- Language: TypeScript
- HTTP framework: Express
- ORM: TypeORM
- DB: PostgreSQL (production), SQLite (tests/dev)
- Testing: Jest + supertest
- Logging: winston

Architecture conventions
- Layered architecture: controller -> service -> repository -> model(entity)
- Each public service method must have JSDoc comments describing inputs, outputs, errors, and side-effects.
- Repositories must use TypeORM repositories; do not use raw DB drivers.

Coding standards
- Use async/await. Prefer explicit error handling over swallowing exceptions.
- Validate inputs at controller/service boundary. Use lightweight validation (manual or library).
- Type-safe DTOs for API inputs and outputs.
- No secrets in code. Use environment variables for configuration.

Security rules
- Always check authorization: users can only access their own resources.
- Sanitize and validate external inputs to avoid injection.
- Log security-relevant events at info or warn level, never log secrets.

Testing expectations
- Unit tests for services and repositories. Integration tests for controllers.
- Use SQLite in-memory for tests where DB needed.
- Aim for meaningful assertions, not just happy-paths.

Copilot guidance
- Save all Copilot prompts and outputs to prompts/COPILOT_PROMPTS.md.
- Prefer Copilot suggestions that follow layered architecture and TypeORM patterns.
- When Copilot suggests raw DB drivers or overly permissive access, replace with repository patterns.
