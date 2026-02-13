# 📚 Panduan Deploy Portfolio ke GitHub

Dokumentasi lengkap cara meng-upload dan deploy website portfolio ke GitHub menggunakan **Termux** dan **SPCK Editor** di Android.

---

## 📱 Persiapan Alat

### 1. Install Termux
Download dari F-Droid (rekomendasi) atau Play Store:
- F-Droid: https://f-droid.org/packages/com.termux/
- Play Store: Bisa ketinggalan versi

### 2. Install SPCK Editor
Download dari Play Store:
- SPCK Editor - Code Editor / IDE

---

## 🔧 Setup Termux

### Langkah 1: Update & Install Git
Buka Termux dan jalankan:

```bash
# Update package list
pkg update && pkg upgrade -y

# Install git
pkg install git -y

# Install nodejs (untuk menjalankan Next.js)
pkg install nodejs -y

# Install code editor (opsional)
pkg install nano vim
```

### Langkah 2: Konfigurasi Git
```bash
# Set nama dan email (gunakan email GitHub)
git config --global user.name "Muhammad Arivito"
git config --global user.email "email_kamu@gmail.com"

# Verifikasi
git config --global user.name
git config --global user.email
```

---

## 🔑 Setup SSH Key untuk GitHub

### Langkah 1: Generate SSH Key
```bash
# Generate SSH key baru
ssh-keygen -t ed25519 -C "email_kamu@gmail.com"

# Tekan Enter untuk semua prompt (lokasi default, tanpa passphrase)
```

### Langkah 2: Tambahkan SSH Key ke GitHub
```bash
# Tampilkan public key
cat ~/.ssh/id_ed25519.pub
```

Copy outputnya, lalu:
1. Buka GitHub.com
2. Klik foto profil → **Settings**
3. Pilih **SSH and GPG keys**
4. Klik **New SSH key**
5. Paste key tersebut
6. Klik **Add SSH key**

### Langkah 3: Test Koneksi
```bash
ssh -T git@github.com
```
Jika berhasil, akan muncul: "Hi username! You've successfully authenticated..."

---

## 📂 Membuat Repository di GitHub

1. Buka https://github.com/new
2. Isi informasi:
   - **Repository name**: `portfolio` atau `my-portfolio`
   - **Description**: Portfolio website Muhammad Arivito
   - **Public** atau **Private** (pilih sesuai kebutuhan)
   - **Jangan** centang "Initialize this repository with a README"
3. Klik **Create repository**

---

## 📤 Upload Project dengan Termux

### Metode 1: Dari Folder Lokal

```bash
# Masuk ke folder project
cd /sdcard/Download/portfolio  # Sesuaikan path

# Inisialisasi git (jika belum)
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial commit: Portfolio website"

# Tambahkan remote repository (ganti username)
git remote add origin git@github.com:username/portfolio.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

### Metode 2: Clone dari Repository Lain

```bash
# Clone repository
git clone git@github.com:username/portfolio.git

# Masuk ke folder
cd portfolio

# Copy file project ke folder ini
# Bisa menggunakan SPCK Editor atau file manager

# Add, commit, dan push
git add .
git commit -m "Update portfolio"
git push
```

---

## 📱 Deploy dengan SPCK Editor

### Langkah 1: Setup Project di SPCK Editor

1. Buka **SPCK Editor**
2. Klik **+** untuk membuat project baru
3. Pilih **Web Project**
4. Beri nama: `portfolio`

### Langkah 2: Copy File Project

Cara copy file dari project ini ke SPCK Editor:

```bash
# Di Termux, copy folder project ke lokasi yang mudah diakses
cp -r /path/ke/portfolio ~/storage/downloads/portfolio
```

Atau gunakan **Integrated Terminal** di SPCK Editor:

1. Di SPCK Editor, buka Terminal (icon terminal di bawah)
2. Jalankan:
```bash
# Clone project
git clone https://github.com/username/portfolio.git

# Atau copy dari folder lokal
cp -r /sdcard/Download/portfolio/* ./
```

### Langkah 3: Push dari SPCK Editor

Di SPCK Editor Terminal:

```bash
# Pastikan di folder project
cd portfolio

# Lihat status file
git status

# Tambahkan semua perubahan
git add .

# Commit
git commit -m "Update portfolio from SPCK Editor"

# Push ke GitHub
git push
```

---

## 🌐 Deploy ke Vercel (Gratis)

### Option 1: Via Vercel Website

1. Buka https://vercel.com
2. Login dengan GitHub
3. Klik **New Project**
4. Import repository portfolio
5. Klik **Deploy**
6. Tunggu proses deploy selesai
7. Website akan live di: `https://portfolio-username.vercel.app`

### Option 2: Via Termux

```bash
# Install Vercel CLI
npm install -g vercel

# Login ke Vercel
vercel login

# Deploy
cd /path/ke/portfolio
vercel

# Untuk production
vercel --prod
```

---

## 🔄 Workflow Update Project

### Setiap kali ada perubahan:

```bash
# 1. Lihat file yang berubah
git status

# 2. Tambahkan file yang diinginkan
git add .

# 3. Commit dengan pesan yang jelas
git commit -m "Deskripsi perubahan"

# 4. Push ke GitHub
git push
```

---

## 📋 Checklist Sebelum Deploy

- [ ] Semua halaman berfungsi dengan baik
- [ ] Responsive di semua device
- [ ] Tidak ada console error
- [ ] Gambar dan aset sudah di-optimasi
- [ ] Meta tags sudah diisi
- [ ] Link GitHub dan social media sudah benar

---

## 🛠️ Troubleshooting

### Error: Permission denied (publickey)
```bash
# Pastikan SSH key sudah ditambahkan ke GitHub
cat ~/.ssh/id_ed25519.pub

# Test koneksi
ssh -T git@github.com
```

### Error: Repository not found
```bash
# Pastikan remote URL benar
git remote -v

# Update jika salah
git remote set-url origin git@github.com:username/portfolio.git
```

### Error: Failed to push some refs
```bash
# Pull dulu, lalu push lagi
git pull origin main --rebase
git push
```

### Termux: Storage permission denied
```bash
# Berikan permission akses storage
termux-setup-storage
# Klik "Allow" di dialog yang muncul
```

---

## 📞 Support

Jika ada pertanyaan atau masalah:
- GitHub Docs: https://docs.github.com
- Termux Wiki: https://wiki.termux.com
- Vercel Docs: https://vercel.com/docs

---

## 🎉 Selesai!

Website portfolio Anda sekarang sudah:
1. ✅ Di-upload ke GitHub
2. ✅ Bisa di-deploy ke Vercel gratis
3. ✅ Bisa diakses dari mana saja

Selamat! Portfolio Anda sudah online! 🚀
