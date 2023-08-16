interface AppSettings {
    serverUri: string;
    ROLE_ADMIN: string;
    STORAGE_TOKEN_KEY: string;
    STORAGE_MENU_KEY: string;
    SECRET_KEY: string;
    development: boolean;
 }
 export const environment: AppSettings = {
    serverUri: import.meta.env.VITE_BACK_END_URL || window.location.origin,
    ROLE_ADMIN: 'admin',
    STORAGE_TOKEN_KEY: 'token',
    STORAGE_MENU_KEY: 'menu',
    SECRET_KEY: import.meta.env.VITE_MY_VALUE || 'default-value',
    development: import.meta.env.VITE_NODE_ENV == 'development'
 };
 