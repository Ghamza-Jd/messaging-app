interface ResError {
  message?: string;
  status?: number;
}

export const makeError = (resError: ResError = {}) => {
  const error = { status: resError.status || 500, ...new Error() };
  error.message = resError.message || 'Internal Server Error';
  return error;
};
