import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import svgr from 'vite-plugin-svgr';
import { fileURLToPath, URL } from 'node:url';

const resolvePath = (path: string) => fileURLToPath(new URL(path, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
    }),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      '@': resolvePath('./src'),
      '@shared': resolvePath('./src/shared'),
      '@pages': resolvePath('./src/pages'),
      '@widgets': resolvePath('./src/widgets'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@shared/styles/_mixins.scss" as *;`,
      }
    }
  },
  oxc: {

  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: "https://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
      }
    }
  },
  build: {
    rolldownOptions: {
      output: {
        minify: {
          compress: {
            dropConsole: true,
          },
        },
      },
    },
  },
})
