import type { UserConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';

export default {
  server: {
    open: 'index.html',
  },
  plugins: [react()],
} satisfies UserConfig;
