/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts"/>

interface ImportMetaEnv {
    VITE_MAIN_SERVER_API: string
  }

interface ImportMeta{
    readonly env: ImportMetaEnv
}