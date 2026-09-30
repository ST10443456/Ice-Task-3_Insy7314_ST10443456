function validateUser(user) {
  if (!user.name || !user.email || !user.password) {
    return "Name, email and password are required";
  }

  if (!user.email.includes("@")) {
    return "Enter a valid email address";
  }

  if (user.password.length < 6) {
    return "Password must be at least 6 characters";
  }

  return null;
}

module.exports = validateUser;