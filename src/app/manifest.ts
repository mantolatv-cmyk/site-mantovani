import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Betoneiras Mantovani',
    short_name: 'Mantovani',
    description: 'Locação de equipamentos para construção civil em Atibaia',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a', // Zinc-950
    theme_color: '#FFC107',      // Yellow-500
    icons: [
      {
        src: '/icons/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icons/icon.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
