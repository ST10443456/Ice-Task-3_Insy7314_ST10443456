const validateUser = require("../utils/validateUser");

test("returns error when fields are missing", () => {
  const result = validateUser({
    name: "",
    email: "",
    password: "",
  });

  expect(result).toBe("Name, email and password are required");
});

test("returns error for invalid email", () => {
  const result = validateUser({
    name: "Ali",
    email: "invalidemail",
    password: "Password123",
  });

  expect(result).toBe("Enter a valid email address");
});

test("returns error for short password", () => {
  const result = validateUser({
    name: "Ali",
    email: "ali@example.com",
    password: "123",
  });

  expect(result).toBe("Password must be at least 6 characters");
});

test("returns null for valid user", () => {
  const result = validateUser({
    name: "Ali",
    email: "ali@example.com",
    password: "Password123",
  });

  expect(result).toBeNull();
});