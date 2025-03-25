
    def __init__(self, text=""):
        self.text = text

    def apply_insert(self, position, char):
        if position < 0 or position > len(self.text):
            raise ValueError("Invalid position")
        self.text = self.text[:position] + char + self.text[position:]
        return self.text

    def apply_delete(self, position):
        if position < 0 or position >= len(self.text):
            raise ValueError("Invalid position")
        self.text = self.text[:position] + self.text[position+1:]
        return self.text

    def apply_transformations(self, operations):
        for op in operations:
            if op["type"] == "insert":
                self.apply_insert(op["position"], op["char"])
            elif op["type"] == "delete":
                self.apply_delete(op["position"])
            else:
                raise ValueError("Invalid operation type")
        return self.text

if __name__ == "__main__":
    doc = OperationalTransformations("hello")
    operations = [
        {"type": "insert", "position": 5, "char": "!"},
        {"type": "delete", "position": 0},
        {"type": "insert", "position": 0, "char": "H"}
    ]
    result = doc.apply_transformations(operations)
    print(result)  # Output: "Hello!"
