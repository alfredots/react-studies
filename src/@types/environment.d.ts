declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_USER_TYPE: string;
      NEXT_PUBLIC_USER_TOKEN_EXPIRES_IN: string;
      NEXT_PUBLIC_USER_TOKEN: string;
      NEXT_NODE_ENV: string;
      NEXT_PUBLIC_SUPABASE_URL: string;
      NEXT_PUBLIC_SUPABASE_PASSWORD: string;
    }
  }
}

export {};
