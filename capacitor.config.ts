import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',       // ID único de la aplicación
  appName: 'registra-app',         // Nombre de tu aplicación
  webDir: 'www',                   // Directorio donde están los archivos generados
  bundledWebRuntime: true          // Incluir el runtime web dentro de la APK
};

export default config;
