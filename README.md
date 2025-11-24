# Matrix Terminal Portfolyo

Matrix yağmuru ve CRT efekti olan, komut tabanlı React/Vite portfolyo.


<img width="1641" height="996" alt="resim" src="https://github.com/user-attachments/assets/d69625dd-c777-484f-b452-70c45a36b2da" />



## Özellikler
- Terminal üzerinden gezinme: `hakkinda`, `projeler`, `iletisim`, `yardim`, `temizle`.
- Proje kartları GitHub bağlantılarına tıklanabilir.
- Statik profil görseli: `public/profile.jpeg`.
- Matrix arka planı tamamen canvas üzerinde çalışır, ön yüzü bloklamaz.

## Kurulum ve Çalıştırma
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # üretim paketi
npm run preview   # build çıktısını lokalde önizle
```

## Dizin Yapısı
```
.
├─ components/
│  ├─ MatrixBackground.tsx   # Matrix yağmuru (canvas)
│  ├─ Terminal.tsx           # Ana terminal deneyimi
│  ├─ SectionAbout.tsx       # ./hakkinda çıktısı
│  ├─ SectionProjects.tsx    # ./projeler çıktısı
│  └─ CommandHelper.tsx      # Komut kısayol butonları
├─ public/profile.jpeg       # Profil fotoğrafı
├─ App.tsx                   # Sayfa iskeleti
├─ index.tsx / index.html    # Giriş noktası
└─ vite.config.ts / tsconfig.json
```

## Özelleştirme
- **Komut listesi:** `components/Terminal.tsx` içindeki `COMMAND_SUMMARY` dizisini değiştir.
- **Projeler:** `components/SectionProjects.tsx` içindeki `projects` dizisine yeni proje ekle; `url` alanı tıklandığında açılır.
- **Hakkında:** `components/SectionAbout.tsx` içindeki kimlik bilgisi, bio ve yetenek etiketlerini düzenle.
- **Görsel:** Profil fotoğrafını `public/profile.jpeg` adıyla değiştir.

## Deploy Notları
- `npm run build` çıktısı `dist/` klasöründe; Netlify, Vercel veya statik sunucuya doğrudan atılabilir.
- Farklı bir alt dizin altında servis edeceksen `vite.config.ts` içindeki `base` ayarını güncelle.

## Klavuz
- Terminal giriş alanı `aria-label` ile erişilebilir durumda.
- Linkler yeni sekmede açılır (`target="_blank"` + `rel="noreferrer"`).
- Matrix canvas opaklığı 0.4; istersen `MatrixBackground.tsx` içindeki `opacity` veya `fontSize` değerini değiştirerek yoğunluğu ayarlayabilirsin.
