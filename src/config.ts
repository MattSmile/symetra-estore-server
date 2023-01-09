require('dotenv').config();

interface Config {
  PORT: number | string;
  NODE_ENV: string;
  CLIENT_ORIGIN: string;
};

const config: Config = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'https://symetra-store.vercel.app'
};

export default config;
