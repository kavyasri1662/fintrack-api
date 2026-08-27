# GitHub Copilot Prompt Engineering Documentation

## Prompt 1

Feature:
Copilot Chat

Prompt:
Generate a Transaction model and a Transaction service with create, get-by-user, and delete-all functions. Use a database.

Technique:
Baseline Generation

Rationale:
Used exactly as specified by the case study to simulate inherited AI-generated code.

---

## Prompt 2

Feature:
Copilot Chat

Prompt:
Review this Transaction service and identify security, validation, architecture, and fintech risks.

Technique:
Role-Based Prompting

Rationale:
Instructed Copilot to act as a senior software engineer.

---

## Prompt 3

Feature:
Copilot Chat

Prompt:
Refactor this Transaction implementation into controller, service, repository, and model layers using TypeORM.

Technique:
Decomposition

Rationale:
Broke the architecture redesign into clear responsibilities.

---

## Prompt 4

Feature:
Inline Completion

Prompt:
Generate DTO validation rules for Transaction creation.

Technique:
Constraint-Based Prompting

Rationale:
Required strict validation and TypeScript typing.

---

## Prompt 5

Feature:
Copilot Chat

Prompt:
Generate a SharedExpense entity supporting equal and custom splits with participant relationships.

Technique:
Specificity

Rationale:
Provided explicit business requirements.

---

## Prompt 6

Feature:
Copilot Chat

Prompt:
Generate balance calculation logic that supports equal splits, custom splits, validation, and net balance aggregation.

Technique:
Iterative Refinement

Rationale:
Built incrementally on previously generated entities.

---

## Prompt 7

Feature:
Inline Completion

Prompt:
Generate Jest tests covering shared expense validation and authorization scenarios.

Technique:
Few-Shot + Constraints

Rationale:
Used existing test patterns to maintain consistency.

---

# Prompting Techniques Used

1. Specificity
2. Decomposition
3. Constraint-Based Prompting
4. Role-Based Prompting
5. Iterative Refinement

---

# Copilot Features Used

1. Copilot Chat
2. Inline Completion
3. Explain Code
4. Fix Code Suggestions

---

# Post-Generation Corrections

| Issue | Problem | Fix |
|---------|----------|------|
| Authorization | Users could access other users' data | Added ownership checks |
| Validation | Amount validation missing | Added DTO validation |
| Database Access | Direct DB operations | Implemented repositories |
| Logging | No structured logs | Added Winston logging |
| Error Handling | Generic errors | Added domain exceptions |
| Testing | Missing negative tests | Added validation and auth tests |
| Architecture | Service-model coupling | Created repository layer |
