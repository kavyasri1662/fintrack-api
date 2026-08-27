# Tool Strategy Reflection

# Feature Usage Log

## Entry 1

Feature:
Copilot Chat

Purpose:
Generate initial Transaction module.

Outcome:
Produced working code that required remediation.

---

## Entry 2

Feature:
Explain Code

Purpose:
Understand generated transaction logic.

Outcome:
Accelerated review process.

---

## Entry 3

Feature:
Fix This

Purpose:
Improve error handling.

Outcome:
Generated exception handling candidates.

---

## Entry 4

Feature:
Inline Completion

Purpose:
Generate DTO classes.

Outcome:
Reduced repetitive coding.

---

## Entry 5

Feature:
Copilot Chat

Purpose:
Generate expense-splitting calculations.

Outcome:
Provided business-logic baseline.

---

## Entry 6

Feature:
Custom Instructions

Purpose:
Enforce project-wide standards.

Outcome:
More consistent generated output.

---

# Scenario Responses

## 1. Understanding a 500-line function

Use: Explain Code

Reason:
Provides a summarized breakdown of large functions and identifies key execution paths before modifications.

---

## 2. Add consistent error handling across routes

Use: Fix Code

Reason:
Allows batch remediation of repeated patterns while maintaining consistency.

---

## 3. Verify regex for international phone numbers

Use: Copilot Chat

Reason:
Enables rapid feedback and explanation of regex coverage and edge cases.

---

## 4. Enforcing automated code quality checks

Use: GitHub Actions with Copilot-generated workflow

Reason:
Automation should run in CI/CD rather than relying on manual reviews.

---

## 5. Reviewing an AI-generated authentication module

Use: Copilot Chat + Manual Review

Reason:
Copilot can identify issues but human security judgment remains necessary.

---

## 6. Enforcing project conventions

Use: Repository Custom Instructions

Reason:
Provides consistent AI guidance for all contributors.

---

# Limitations Encountered

## Limitation 1

Prompt:
Generate transaction service.

Issue:
Authorization checks were missing.

Detection:
Security review.

Resolution:
Added ownership validation.

---

## Limitation 2

Prompt:
Generate balance calculations.

Issue:
Did not validate custom split totals.

Detection:
Business-rule testing.

Resolution:
Added total validation logic.

---

## Limitation 3

Prompt:
Generate repository code.

Issue:
Mixed persistence and business logic.

Detection:
Architecture review.

Resolution:
Introduced repository layer.

---

# Key Lesson

GitHub Copilot significantly increases development speed but cannot replace developer judgment for security, authorization, financial correctness, and architecture decisions.
