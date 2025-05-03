export const validate = (email, password) => {
  if (!email.match(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/))
    return "Email is not valid";
  if (!password.match(/^.{6,}$/))
    return "Password is not valid, Must be of 6 charater";

  return null;
};
