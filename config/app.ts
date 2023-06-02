import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  name: process.env.APP_NAME || 'NestJS App',
  env: 'deployment',
  debug: +process.env.APP_DEBUG || 1,
  url: '0.0.0.0',
  port: +process.env.APP_PORT || 5005,
}));
//process.env.APP_URL || 'localhost'