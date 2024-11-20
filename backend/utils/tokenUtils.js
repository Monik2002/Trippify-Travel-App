// import jwt from "jsonwebtoken";

// export const generateToken = (payload) => {
//   const token = jwt.sign(payload, process.env.JWT_SECRET, {
//     expiresIn: "1d",
//   });
//   return token;
// };

// export const verifyToken = (value) => {
//   const decoded = jwt.verify(value, process.env.JWT_SECRET);
//   return decoded;
// };
import jwt from "jsonwebtoken";

// Function to generate a JWT token
export const generateToken = (payload) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d", // Token expires in 1 day
  });

  return token;
};

// Function to verify a JWT token
export const verifyToken = (token) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded; // Return the decoded payload
  } catch (error) {
    throw new Error("Token verification failed: " + error.message);
  }
};
