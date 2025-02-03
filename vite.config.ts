import type { UserConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';

export default {
  server: {
    open: true,
  },
  preview: {
    open: true,
  },
  plugins: [react()],
} satisfies UserConfig;
