export const getHealthService = () => {
  return { status: 'ok', uptime: process.uptime() };
};
