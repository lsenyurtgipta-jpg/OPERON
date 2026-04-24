-- ============================================
-- G-ATLAS / OPERON - SUPABASE TABLO YAPISI
-- Tarih: 2026-04-05
-- Tüm tabloları sıfırdan oluşturur
-- ============================================

-- 1. MEVCUT TABLOLARI SİL (sıralı — foreign key bağımlılıkları)
DROP TABLE IF EXISTS firma_adresler CASCADE;
DROP TABLE IF EXISTS firma_iletisim CASCADE;
DROP TABLE IF EXISTS firma_bankalar CASCADE;
DROP TABLE IF EXISTS firma_subeler CASCADE;
DROP TABLE IF EXISTS teklif_kalemleri CASCADE;
DROP TABLE IF EXISTS teklifler CASCADE;
DROP TABLE IF EXISTS notlar CASCADE;
DROP TABLE IF EXISTS kisiler CASCADE;
DROP TABLE IF EXISTS alt_gruplar CASCADE;
DROP TABLE IF EXISTS kategoriler CASCADE;
DROP TABLE IF EXISTS malzemeler CASCADE;
DROP TABLE IF EXISTS projeler CASCADE;
DROP TABLE IF EXISTS firmalar CASCADE;

-- ============================================
-- 2. TABLOLARI OLUŞTUR
-- ============================================

-- 2.1 FİRMALAR
CREATE TABLE firmalar (
  id BIGSERIAL PRIMARY KEY,
  firma_kodu TEXT DEFAULT '',
  ad TEXT DEFAULT '',
  aciklama TEXT DEFAULT '',
  turler JSONB DEFAULT '[]',
  para_birimi TEXT DEFAULT 'TL',
  firma_kisi_tipi TEXT DEFAULT 'tuzel',
  vergi_dairesi_il TEXT DEFAULT '',
  vergi_dairesi TEXT DEFAULT '',
  vergi_no TEXT DEFAULT '',
  tc_kimlik_no TEXT DEFAULT '',
  sicil_no TEXT DEFAULT '',
  kisa_ad TEXT DEFAULT '',
  kategori TEXT DEFAULT '',
  telefon TEXT DEFAULT '',
  sabit_telefon TEXT DEFAULT '',
  telefon2 TEXT DEFAULT '',
  web_adresi TEXT DEFAULT '',
  eposta TEXT DEFAULT '',
  mahalle TEXT DEFAULT '',
  adres TEXT DEFAULT '',
  il TEXT DEFAULT '',
  ilce TEXT DEFAULT '',
  posta_kodu TEXT DEFAULT '',
  banka_adi TEXT DEFAULT '',
  iban TEXT DEFAULT '',
  aktif BOOLEAN DEFAULT TRUE,
  ilgilendigi_projeler JSONB DEFAULT '[]',
  -- Potansiyel müşteri CRM alanları (2026-04-24)
  ilgi_seviyesi TEXT DEFAULT '',        -- "yuksek" | "orta" | "dusuk"
  son_temas_tarihi TEXT DEFAULT '',     -- YYYY-MM-DD
  kaynak_kanal TEXT DEFAULT '',         -- "Tavsiye" | "Sosyal Medya" | "Tabela" | vs.
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Mevcut tabloya eklenecek alanlar (migration):
-- ALTER TABLE firmalar ADD COLUMN IF NOT EXISTS ilgilendigi_projeler JSONB DEFAULT '[]'::jsonb;
-- ALTER TABLE firmalar ADD COLUMN IF NOT EXISTS ilgi_seviyesi TEXT DEFAULT '';
-- ALTER TABLE firmalar ADD COLUMN IF NOT EXISTS son_temas_tarihi TEXT DEFAULT '';
-- ALTER TABLE firmalar ADD COLUMN IF NOT EXISTS kaynak_kanal TEXT DEFAULT '';

-- 2.2 KİŞİLER
CREATE TABLE kisiler (
  id BIGSERIAL PRIMARY KEY,
  firma_id BIGINT REFERENCES firmalar(id) ON DELETE CASCADE,
  cinsiyet TEXT DEFAULT '',
  ad TEXT DEFAULT '',
  soyad TEXT DEFAULT '',
  unvan TEXT DEFAULT '',
  departman TEXT DEFAULT '',
  telefon TEXT DEFAULT '',
  is_tel TEXT DEFAULT '',
  is_tel_dahili TEXT DEFAULT '',
  cep TEXT DEFAULT '',
  eposta TEXT DEFAULT '',
  sosyal1 TEXT DEFAULT '',
  sosyal2 TEXT DEFAULT '',
  sosyal3 TEXT DEFAULT '',
  dogum_tarihi DATE,
  notlar TEXT DEFAULT '',
  resim TEXT DEFAULT ''
);

-- 2.3 NOTLAR
CREATE TABLE notlar (
  id BIGSERIAL PRIMARY KEY,
  firma_id BIGINT REFERENCES firmalar(id) ON DELETE CASCADE,
  tarih DATE DEFAULT CURRENT_DATE,
  yazar TEXT DEFAULT 'Admin',
  metin TEXT DEFAULT ''
);

-- 2.4 MALZEMELER
CREATE TABLE malzemeler (
  id BIGSERIAL PRIMARY KEY,
  malzeme_kodu TEXT DEFAULT '',
  ad TEXT DEFAULT '',
  tip TEXT DEFAULT 'M',
  grup TEXT DEFAULT '',
  grup_ad TEXT DEFAULT '',
  alt_grup TEXT DEFAULT '',
  alt_grup_ad TEXT DEFAULT '',
  birim TEXT DEFAULT 'adet',
  birim_fiyat NUMERIC DEFAULT 0,
  para_birimi TEXT DEFAULT 'TL',
  kdv_orani TEXT DEFAULT '20',
  marka TEXT DEFAULT '',
  model TEXT DEFAULT '',
  aciklama TEXT DEFAULT '',
  tedarikci_id BIGINT,
  durum TEXT DEFAULT 'aktif',
  hesaplama_sablonu TEXT,
  omurga_proje_turleri JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2.5 GRUPLAR (İş Kalemi Bazlı Kategoriler)
CREATE TABLE kategoriler (
  id BIGSERIAL PRIMARY KEY,
  kod TEXT DEFAULT '',
  ad TEXT DEFAULT ''
);

-- 2.6 ALT GRUPLAR
CREATE TABLE alt_gruplar (
  id BIGSERIAL PRIMARY KEY,
  grup_kod TEXT DEFAULT '',
  grup_ad TEXT DEFAULT '',
  kod TEXT DEFAULT '',
  ad TEXT DEFAULT ''
);

-- 2.7 TEKLİFLER
CREATE TABLE teklifler (
  id BIGSERIAL PRIMARY KEY,
  teklif_no TEXT DEFAULT '',
  firma_id BIGINT REFERENCES firmalar(id) ON DELETE SET NULL,
  firma_ad TEXT DEFAULT '',
  teklif_tarihi DATE,
  gecerlilik_tarihi DATE,
  para_birimi TEXT DEFAULT 'TL',
  aciklama TEXT DEFAULT '',
  durum TEXT DEFAULT 'aktif'
);

-- 2.8 TEKLİF KALEMLERİ
CREATE TABLE teklif_kalemleri (
  id BIGSERIAL PRIMARY KEY,
  teklif_id BIGINT REFERENCES teklifler(id) ON DELETE CASCADE,
  malzeme_id BIGINT,
  malzeme_ad TEXT DEFAULT '',
  malzeme_kodu TEXT DEFAULT '',
  birim TEXT DEFAULT '',
  miktar NUMERIC DEFAULT 0,
  fiyat_tipi TEXT DEFAULT 'net',
  liste_fiyati NUMERIC DEFAULT 0,
  iskonto1 NUMERIC DEFAULT 0,
  iskonto2 NUMERIC DEFAULT 0,
  net_fiyat NUMERIC DEFAULT 0,
  kdv_orani TEXT DEFAULT '20',
  maliyet_esas TEXT DEFAULT 'net',
  kalem_notu TEXT DEFAULT ''
);

-- 2.9 FİRMA ŞUBELERİ
CREATE TABLE firma_subeler (
  id BIGSERIAL PRIMARY KEY,
  firma_id BIGINT REFERENCES firmalar(id) ON DELETE CASCADE,
  ad TEXT DEFAULT '',
  tipi TEXT DEFAULT 'ŞUBE',
  vergi_no TEXT DEFAULT '',
  vergi_dairesi TEXT DEFAULT '',
  vergi_dairesi_il TEXT DEFAULT '',
  ulke TEXT DEFAULT 'Türkiye',
  il TEXT DEFAULT '',
  ilce TEXT DEFAULT '',
  mahalle TEXT DEFAULT '',
  adres TEXT DEFAULT '',
  posta_kodu TEXT DEFAULT '',
  telefon TEXT DEFAULT '',
  eposta TEXT DEFAULT '',
  yetkili_kisi_id BIGINT,
  yetkili_kisi_ad TEXT DEFAULT '',
  aktif BOOLEAN DEFAULT TRUE,
  notlar TEXT DEFAULT '',
  sira_no INTEGER DEFAULT 0
);

-- 2.10 FİRMA BANKA HESAPLARI
CREATE TABLE firma_bankalar (
  id BIGSERIAL PRIMARY KEY,
  firma_id BIGINT REFERENCES firmalar(id) ON DELETE CASCADE,
  banka_adi TEXT DEFAULT '',
  sube_adi TEXT DEFAULT '',
  sube_kodu TEXT DEFAULT '',
  hesap_adi TEXT DEFAULT '',
  hesap_no TEXT DEFAULT '',
  iban TEXT DEFAULT '',
  swift TEXT DEFAULT '',
  para_birimi TEXT DEFAULT 'TL',
  varsayilan BOOLEAN DEFAULT FALSE,
  aktif BOOLEAN DEFAULT TRUE,
  notlar TEXT DEFAULT '',
  sira_no INTEGER DEFAULT 0
);

-- 2.11 FİRMA İLETİŞİM
CREATE TABLE firma_iletisim (
  id BIGSERIAL PRIMARY KEY,
  firma_id BIGINT REFERENCES firmalar(id) ON DELETE CASCADE,
  tipi TEXT DEFAULT '',
  bilgi TEXT DEFAULT '',
  aciklama TEXT DEFAULT '',
  varsayilan BOOLEAN DEFAULT FALSE,
  aktif BOOLEAN DEFAULT TRUE,
  sira_no INTEGER DEFAULT 0
);

-- 2.12 FİRMA ADRESLERİ
CREATE TABLE firma_adresler (
  id BIGSERIAL PRIMARY KEY,
  firma_id BIGINT REFERENCES firmalar(id) ON DELETE CASCADE,
  ad TEXT DEFAULT '',
  tipi TEXT DEFAULT 'MERKEZ',
  ulke TEXT DEFAULT 'Türkiye',
  il TEXT DEFAULT '',
  ilce TEXT DEFAULT '',
  mahalle TEXT DEFAULT '',
  adres TEXT DEFAULT '',
  posta_kodu TEXT DEFAULT '',
  tel TEXT DEFAULT '',
  yetkili_kisi_id BIGINT,
  yetkili_kisi_ad TEXT DEFAULT '',
  aktif BOOLEAN DEFAULT TRUE,
  notlar TEXT DEFAULT '',
  sira_no INTEGER DEFAULT 0
);

-- 2.13 PROJELER
CREATE TABLE projeler (
  id BIGSERIAL PRIMARY KEY,
  proje_kodu TEXT DEFAULT '',
  ad TEXT DEFAULT '',
  kisa_ad TEXT DEFAULT '',
  tur TEXT DEFAULT '',
  durum TEXT DEFAULT '',
  il TEXT DEFAULT '',
  ilce TEXT DEFAULT '',
  mahalle TEXT DEFAULT '',
  adres TEXT DEFAULT '',
  ada TEXT DEFAULT '',
  parsel TEXT DEFAULT '',
  baslangic_tarihi TEXT DEFAULT '',
  tahmini_teslim TEXT DEFAULT '',
  fiili_teslim TEXT DEFAULT '',
  toplam_m2 TEXT DEFAULT '',
  -- ortak_alan_m2 artık bloklar JSONB içinde her blok objesinde tutulur (ortakAlanM2)
  kat_sayisi TEXT DEFAULT '',
  toplam_bolum TEXT DEFAULT '',
  arsa_m2 TEXT DEFAULT '',
  emsal TEXT DEFAULT '',
  toplam_emsal TEXT DEFAULT '',
  anlasma_yontemi TEXT DEFAULT '',
  arsa_sahibi_pay TEXT DEFAULT '',
  muteahhit_pay TEXT DEFAULT '',
  aciklama TEXT DEFAULT '',
  bloklar JSONB DEFAULT '[]',
  bolumler JSONB DEFAULT '[]',
  firma_baglantilari JSONB DEFAULT '[]',
  tum_dosyalar JSONB DEFAULT '[]',
  dosya_kategorileri JSONB DEFAULT '[]',
  proje_notlari JSONB DEFAULT '[]',
  durum_tarihce JSONB DEFAULT '[]',
  blok_seviyeler JSONB DEFAULT '[]',
  butce_kalemleri JSONB DEFAULT '[]',
  dosya_turleri JSONB DEFAULT '[]',
  proje_turleri JSONB DEFAULT '[]',
  proje_durumlari JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- SATINALMA SİPARİŞLERİ
CREATE TABLE satinalma_siparisleri (
  id BIGSERIAL PRIMARY KEY,
  sp_no TEXT DEFAULT '',
  teklif_id BIGINT,
  teklif_no TEXT DEFAULT '',
  firma_id BIGINT REFERENCES firmalar(id) ON DELETE SET NULL,
  firma_ad TEXT DEFAULT '',
  proje_id BIGINT REFERENCES projeler(id) ON DELETE SET NULL,
  proje_ad TEXT DEFAULT '',
  siparis_tarihi DATE,
  termin_tarihi DATE,
  teslimat_adresi TEXT DEFAULT '',
  teslim_kosulu TEXT DEFAULT 'Şantiye Teslim',
  odeme_vadesi TEXT DEFAULT '',
  para_birimi TEXT DEFAULT 'TL',
  aciklama TEXT DEFAULT '',
  durum TEXT DEFAULT 'taslak',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE satinalma_siparis_kalemleri (
  id BIGSERIAL PRIMARY KEY,
  siparis_id BIGINT REFERENCES satinalma_siparisleri(id) ON DELETE CASCADE,
  malzeme_id BIGINT,
  malzeme_ad TEXT DEFAULT '',
  malzeme_kodu TEXT DEFAULT '',
  birim TEXT DEFAULT '',
  miktar NUMERIC DEFAULT 0,
  net_fiyat NUMERIC DEFAULT 0,
  kdv_orani TEXT DEFAULT '20',
  teslim_miktar NUMERIC DEFAULT 0,
  aciklama TEXT DEFAULT '',
  butce_kalemi_id BIGINT DEFAULT NULL
);

-- ALIŞ FATURALARI
CREATE TABLE alis_faturalari (
  id BIGSERIAL PRIMARY KEY,
  af_no TEXT DEFAULT '',
  siparis_id BIGINT,
  sp_no TEXT DEFAULT '',
  teklif_id BIGINT,
  teklif_no TEXT DEFAULT '',
  firma_id BIGINT REFERENCES firmalar(id) ON DELETE SET NULL,
  firma_ad TEXT DEFAULT '',
  proje_id BIGINT REFERENCES projeler(id) ON DELETE SET NULL,
  proje_ad TEXT DEFAULT '',
  fatura_no TEXT DEFAULT '',
  fatura_tarihi DATE,
  vade_tarihi DATE,
  para_birimi TEXT DEFAULT 'TL',
  aciklama TEXT DEFAULT '',
  durum TEXT DEFAULT 'beklemede',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE alis_fatura_kalemleri (
  id BIGSERIAL PRIMARY KEY,
  fatura_id BIGINT REFERENCES alis_faturalari(id) ON DELETE CASCADE,
  malzeme_id BIGINT,
  malzeme_ad TEXT DEFAULT '',
  malzeme_kodu TEXT DEFAULT '',
  birim TEXT DEFAULT '',
  miktar NUMERIC DEFAULT 0,
  net_fiyat NUMERIC DEFAULT 0,
  kdv_orani TEXT DEFAULT '20',
  aciklama TEXT DEFAULT '',
  butce_kalemi_id BIGINT DEFAULT NULL
);

-- ============================================
-- 3. RLS (Row Level Security) AYARLARI
-- Anon key ile erişim için tüm tablolarda RLS aç + policy ekle
-- ============================================

ALTER TABLE firmalar ENABLE ROW LEVEL SECURITY;
ALTER TABLE kisiler ENABLE ROW LEVEL SECURITY;
ALTER TABLE notlar ENABLE ROW LEVEL SECURITY;
ALTER TABLE malzemeler ENABLE ROW LEVEL SECURITY;
ALTER TABLE kategoriler ENABLE ROW LEVEL SECURITY;
ALTER TABLE alt_gruplar ENABLE ROW LEVEL SECURITY;
ALTER TABLE teklifler ENABLE ROW LEVEL SECURITY;
ALTER TABLE teklif_kalemleri ENABLE ROW LEVEL SECURITY;
ALTER TABLE firma_subeler ENABLE ROW LEVEL SECURITY;
ALTER TABLE firma_bankalar ENABLE ROW LEVEL SECURITY;
ALTER TABLE firma_iletisim ENABLE ROW LEVEL SECURITY;
ALTER TABLE firma_adresler ENABLE ROW LEVEL SECURITY;
ALTER TABLE projeler ENABLE ROW LEVEL SECURITY;
ALTER TABLE satinalma_siparisleri ENABLE ROW LEVEL SECURITY;
ALTER TABLE satinalma_siparis_kalemleri ENABLE ROW LEVEL SECURITY;
ALTER TABLE alis_faturalari ENABLE ROW LEVEL SECURITY;
ALTER TABLE alis_fatura_kalemleri ENABLE ROW LEVEL SECURITY;

-- Tüm tablolar için anon erişim (SELECT, INSERT, UPDATE, DELETE)
CREATE POLICY "anon_all_firmalar" ON firmalar FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_kisiler" ON kisiler FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_notlar" ON notlar FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_malzemeler" ON malzemeler FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_kategoriler" ON kategoriler FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_alt_gruplar" ON alt_gruplar FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_teklifler" ON teklifler FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_teklif_kalemleri" ON teklif_kalemleri FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_firma_subeler" ON firma_subeler FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_firma_bankalar" ON firma_bankalar FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_firma_iletisim" ON firma_iletisim FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_firma_adresler" ON firma_adresler FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_projeler" ON projeler FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_satinalma_siparisleri" ON satinalma_siparisleri FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_satinalma_siparis_kalemleri" ON satinalma_siparis_kalemleri FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_alis_faturalari" ON alis_faturalari FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_alis_fatura_kalemleri" ON alis_fatura_kalemleri FOR ALL USING (true) WITH CHECK (true);

-- ============================================
-- TAMAMLANDI
-- 17 tablo oluşturuldu + RLS politikaları ayarlandı
-- ============================================
