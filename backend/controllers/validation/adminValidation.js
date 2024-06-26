<<<<<<< HEAD
import Admin from "../../models/admin.model.js";
export default async function ({
  adminName,
  phoneNumber,
  email,
  password,
  confirmPassword,
}) {
  if (password !== confirmPassword) {
    return { error: true, message: "Confirm password does not match" };
  }
  if (!email || !password || !confirmPassword || !phoneNumber || !adminName) {
    return { error: true, message: "All fields are required" };
  }
  if (password.length < 6) {
    return { error: true, message: "Password at least 6 character" };
  }

  if (adminName.length < 4) {
    return { error: true, message: "Admin Name at least 4 character" };
  }

  const emailAlreadyExists = await Admin.findOne({ email });
  if (emailAlreadyExists) {
    return { error: true, message: "Email already exists" };
  }
  const adminNameAlreadyExists = await Admin.findOne({ adminName });
  if (adminNameAlreadyExists) {
    return { error: true, message: "Admin Name already exists" };
  }
  const phoneNumberAlreadyExists = await Admin.findOne({ phoneNumber });
  if (phoneNumberAlreadyExists) {
    return { error: true, message: "Phone Number already exists" };
  }

  return { error: false };
}
=======
import Admin from "../../models/admin.model.js";
export default async function ({
  adminName,
  phoneNumber,
  email,
  password,
  confirmPassword,
}) {
  if (password !== confirmPassword) {
    return { error: true, message: "Confirm password does not match" };
  }
  if (!email || !password || !confirmPassword || !phoneNumber || !adminName) {
    return { error: true, message: "All fields are required" };
  }
  if (password.length < 6) {
    return { error: true, message: "Password at least 6 character" };
  }

  if (adminName.length < 4) {
    return { error: true, message: "Admin Name at least 4 character" };
  }

  const emailAlreadyExists = await Admin.findOne({ email });
  if (emailAlreadyExists) {
    return { error: true, message: "Email already exists" };
  }
  const adminNameAlreadyExists = await User.findOne({ adminName });
  if (adminNameAlreadyExists) {
    return { error: true, message: "Admin Name already exists" };
  }
  const phoneNumberAlreadyExists = await User.findOne({ phoneNumber });
  if (phoneNumberAlreadyExists) {
    return { error: true, message: "Phone Number already exists" };
  }

  return { error: false };
}
>>>>>>> 15a2524b3fa4966c4817fe7757e806ffb5c8fbc4
