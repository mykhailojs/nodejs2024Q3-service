export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  jwtSecretKey: process.env.JWT_SECRET_KEY,
  jwtSecretRefreshKey: process.env.JWT_SECRET_REFRESH_KEY,
  tokenExpireTime: process.env.TOKEN_EXPIRE_TIME,
  tokenRefreshExpireTime: process.env.TOKEN_REFRESH_EXPIRE_TIME,
  cryptSalt: parseInt(process.env.CRYPT_SALT, 10) || 10,
});
