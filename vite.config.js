export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['sweetalert2']
    }
  }
}) 