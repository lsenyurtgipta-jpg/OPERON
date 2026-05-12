-- ============================================
-- SATICI ROLÜ + KULLANICI PROFİL ALANLARI
-- 2026-05-12 — Saha satıcısı kurgusu
-- ============================================

-- 1. kullanicilar.rol CHECK constraint'ini güncelle (satici ekle)
ALTER TABLE kullanicilar DROP CONSTRAINT IF EXISTS kullanicilar_rol_check;
ALTER TABLE kullanicilar ADD CONSTRAINT kullanicilar_rol_check
  CHECK (rol IN ('admin', 'data_entry', 'satici'));

-- 2. kullanicilar tablosuna profil alanları
ALTER TABLE kullanicilar ADD COLUMN IF NOT EXISTS ad_soyad TEXT DEFAULT '';
ALTER TABLE kullanicilar ADD COLUMN IF NOT EXISTS telefon  TEXT DEFAULT '';
ALTER TABLE kullanicilar ADD COLUMN IF NOT EXISTS eposta   TEXT DEFAULT '';

-- 3. firmalar tablosuna satıcı atama alanları
ALTER TABLE firmalar ADD COLUMN IF NOT EXISTS satici_id BIGINT
  REFERENCES kullanicilar(id) ON DELETE SET NULL;
ALTER TABLE firmalar ADD COLUMN IF NOT EXISTS atama_tarihi TIMESTAMPTZ;

-- Hızlı filtreleme için index
CREATE INDEX IF NOT EXISTS idx_firmalar_satici_id ON firmalar(satici_id);

-- 4. TEST SEED — "sales" kullanıcısı (geçici şifre: degistir123)
-- bcrypt hash admin ile aynı şifreyi temsil ediyor, ilk girişte zorunlu değişim
INSERT INTO kullanicilar (kullanici_adi, sifre_hash, rol, sifre_degistirildi, ad_soyad)
VALUES
  ('sales', '$2b$10$NGfmKIQ9pguOSPP0Y5DFq.xssCWh/XzWh3ue.41.7MPITO1fS6jHu', 'satici', false, 'Test Satıcı')
ON CONFLICT (kullanici_adi) DO NOTHING;
