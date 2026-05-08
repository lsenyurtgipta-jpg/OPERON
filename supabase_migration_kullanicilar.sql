-- ============================================
-- KULLANICILAR TABLOSU + SEED
-- Katman 1: Frontend login + role gate
-- Şifre hash'leri bcryptjs ($2b$10$...) ile üretilmiş
-- Geçici şifre: degistir123 (ilk girişte değiştirilecek)
-- ============================================

CREATE TABLE IF NOT EXISTS kullanicilar (
  id BIGSERIAL PRIMARY KEY,
  kullanici_adi TEXT UNIQUE NOT NULL,
  sifre_hash TEXT NOT NULL,
  rol TEXT NOT NULL CHECK (rol IN ('admin', 'data_entry')),
  aktif BOOLEAN NOT NULL DEFAULT true,
  sifre_degistirildi BOOLEAN NOT NULL DEFAULT false,
  son_giris TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- RLS aç (Katman 1: anon erişim, Katman 2'de auth.uid() bazlı yenilenecek)
ALTER TABLE kullanicilar ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_all_kullanicilar" ON kullanicilar FOR ALL USING (true) WITH CHECK (true);

-- ============================================
-- SEED: admin + OPRN
-- İkisinin de geçici şifresi: degistir123
-- sifre_degistirildi=false → ilk girişte zorunlu değişim
-- ============================================

INSERT INTO kullanicilar (kullanici_adi, sifre_hash, rol, sifre_degistirildi)
VALUES
  ('admin', '$2b$10$NGfmKIQ9pguOSPP0Y5DFq.xssCWh/XzWh3ue.41.7MPITO1fS6jHu', 'admin', false),
  ('OPRN',  '$2b$10$oanbg9OKmP27QZ.WhdsMlu6Z5y083TS1UEHt/czVagHXXaIpe066y', 'data_entry', false)
ON CONFLICT (kullanici_adi) DO NOTHING;
