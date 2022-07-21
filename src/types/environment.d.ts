export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV: 'dev' | 'staging';
    }
  }
}
