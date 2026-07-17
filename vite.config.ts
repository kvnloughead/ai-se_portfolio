import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Must match the GitHub repo name for GitHub Pages project sites, e.g.
  // https://<username>.github.io/<repo-name>/. Update this if the repo is renamed.
  base: '/ai-se_project_portfolio/',
})
