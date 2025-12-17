import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isVercel = !!process.env.VERCEL

export default defineConfig({
    plugins: [react()],
    // Use root base on Vercel; keep GitHub Pages base when not on Vercel
    base: isVercel ? '/' : '/Sifat-portfolio1/',
})