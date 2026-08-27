# Architecture Overview

The FinTrack API follows a layered architecture consisting of Controller, Service, Repository, and Model layers.

The Transaction module is responsible for storing and managing financial transaction records. It provides the foundational financial data used across the application.

The Expense Splitting module builds on top of the Transaction module by creating shared expenses and generating balance relationships between users.

Data Flow:

Client Request
↓
Controller
↓
Service Layer
↓
Repository Layer
↓
TypeORM ORM
↓
Database

Controllers handle request validation and responses.

Services contain business rules, balance calculations, authorization checks, and expense-splitting logic.

Repositories abstract data access, preventing business logic from depending directly on the database.

TypeORM provides type-safe persistence and eliminates the need for raw SQL.

This architecture is appropriate for fintech systems because it improves maintainability, testability, auditability, and security while ensuring financial calculations remain centralized and traceable.
