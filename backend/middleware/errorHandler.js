// import { ApiError } from "../utils/api.js";

// const errorHandler = (err, req, res, next) => {
//   if (err instanceof ApiError) {
//     return res.status(err.statusCode).json({
//       success: err.success,
//       message: err.message,
//       errors: err.errors,
//     });
//   }

//   res.status(500).json({
//     success: false,
//     message: "Internal Server Error",
//   });
// };

// export default errorHandler;
import { ApiError } from "../utils/api.js";

const errorHandler = (err, req, res, next) => {
  // Log the error for debugging purposes
  console.error(err);

  // Handle custom ApiError
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: err.success,
      message: err.message,
      errors: err.errors,
    });
  }

  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: "Validation Error",
      errors: err.errors, // Detailed validation errors
    });
  }

  // Handle MongoDB Duplicate Key Error
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "Duplicate value found, please check your input.",
      errors: err.keyValue, // Return the duplicate fields
    });
  }

  // For unknown errors, send a generic response
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    errorId: new Date().getTime(), // Example error ID for tracking
  });
};

export default errorHandler;
