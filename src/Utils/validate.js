export const checkData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPassValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isEmailValid) return "Email not valid";
  if (!isPassValid) return "Invalid password";
  return null;
};
