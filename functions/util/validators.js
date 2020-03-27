const isEmail = email => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

const isEmpty = string => {
  if (string.trim() === "") return true;
  else return false;
};

exports.validateSignUpData = data => {
  let errors = {};

  if (isEmpty(data.email)) errors.email = "Can not be empty.";
  else if (!isEmail(data.email))
    errors.email = "Must be a valid email address.";

  if (isEmpty(data.password)) errors.password = "Can not be empty.";

  if (data.password !== data.confirmPassword)
    errors.confirmPassword = "Password didn't match. ";

  if (isEmpty(data.handle)) errors.handle = "Can not be empty.";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

exports.validateLogin = data => {
  let errors = {};

  if (isEmpty(data.email)) errors.email = "Can not be empty.";
  if (isEmpty(data.password)) errors.password = "Can not be empty.";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

exports.reduceUserDetails = data => {
  let userDetails = {};

  if (data.nim !== undefined) userDetails.nim = data.nim.trim();
  if (data.fullName !== undefined) userDetails.fullName = data.fullName.trim();
  if (data.year !== undefined) userDetails.year = data.year.trim();
  if (data.sex !== undefined) userDetails.sex = data.sex.trim();
  if (data.email !== undefined && isEmail(data.email))
    userDetails.email = data.email.trim();

  if (data.phone !== undefined) userDetails.phone = data.phone.trim();

  return userDetails;
};
