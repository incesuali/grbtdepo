# Gurbetbiz

## Teknoloji Sürümleri

- Node.js: 18.17.0 LTS (Sabit sürüm)
- Next.js: 13.5.6
- React: 18.2.0
- TypeScript: 5.0.4
- PostgreSQL: 16
- Tailwind CSS: 3.3.5

## Node.js Sürüm Kontrolü

Bu proje Node.js 18.17.0 sürümüne sabitlenmiştir. Sürüm kontrolü 3 farklı yerde yapılmaktadır:

1. `./nvmrc` dosyası - nvm için sürüm kontrolü
   ```
   18.17.0
   ```

2. `./package.json` içinde engines kısmı - npm için sürüm kontrolü
   ```json
   "engines": {
     "node": "18.17.0",
     "npm": "9.6.7"
   }
   ```

3. `./check-version.js` - runtime sürüm kontrolü
   ```javascript
   if (process.version !== 'v18.17.0') {
     console.error('🚨 HATA: Bu proje SADECE Node.js 18.17.0 ile çalışır!');
     process.exit(1);
   }
   ```

⚠️ Proje sadece Node.js 18.17.0 ile çalışır. Farklı bir sürüm kullanıldığında:
- nvm otomatik olarak 18.17.0'a geçiş yapar
- npm install sırasında uyarı verir
- npm run dev çalıştırıldığında hata verir

## Başlangıç

```bash
# Node.js sürümünü ayarla
nvm use

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Uygulama http://localhost:3000 adresinde çalışacaktır.

## License
All rights reserved © 2024

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
