# ot-alg
operational transformations algorithms api
Operational Transformations API

This project implements a simple Operational Transformations (OT) API for managing text documents. OT is a technique used in collaborative editing systems to handle concurrent changes.

Features

Insert characters at specific positions

Delete characters at specific positions

Apply a series of transformations

Getting Started

Prerequisites

Python 3.x

Installation

Clone the repository:

git clone https://github.com/yourusername/operational-transformations.git

Navigate to the project directory:

cd operational-transformations

Usage

from operational_transformations import OperationalTransformations

doc = OperationalTransformations("hello")
operations = [
    {"type": "insert", "position": 5, "char": "!"},
    {"type": "delete", "position": 0},
    {"type": "insert", "position": 0, "char": "H"}
]
result = doc.apply_transformations(operations)
print(result)  # Output: "Hello!"

API Methods

apply_insert(position: int, char: str) -> str

Inserts a character at the specified position.

apply_delete(position: int) -> str

Deletes a character at the specified position.

apply_transformations(operations: list) -> str

Applies a list of operations (insert or delete) to the document
