-- ============================================================
-- SATIŞ FATURALARI — Faz 1  (2026-05-29)
-- ------------------------------------------------------------
-- Amaç: Satılmış (durum='satildi') bir daireden ÜRETİLEN satış faturası.
--   • 1 daire = 1 fatura. Rakamlar daireden gelir; elle yeniden girilmez.
--   • Fatura kesildiği anda rakamlar SNAPSHOT'lanır (daire sonradan değişse de
--     kesilmiş fatura değişmez; UI "yeniden kes" uyarısı verir).
--   • R  = resmi   → satis_bedeli + KDV. Yazdırılabilir / paylaşılabilir.
--   • plus = gayri resmi (RR) → YALNIZ admin görür, hiçbir çıktısı YOKTUR.
--   • ozel_kod: plus > 0 ise 'RR', değilse 'R'.
--   • Bu program muhasebe tutmaz; amaç satış karlılığı + satış rakamı.
--     Resmi kayıt Logo Wings'te ayrıca düzenlenir.
-- ============================================================

CREATE TABLE satis_faturalari (
  id              BIGSERIAL PRIMARY KEY,
  sf_no           TEXT DEFAULT '',                                   -- SF-2026-001
  bolum_id        BIGINT REFERENCES bolumler(id)  ON DELETE SET NULL,-- kaynak daire
  proje_id        BIGINT REFERENCES projeler(id)  ON DELETE SET NULL,
  proje_ad        TEXT DEFAULT '',                                   -- snapshot
  blok            TEXT DEFAULT '',                                   -- snapshot
  daire_no        TEXT DEFAULT '',                                   -- snapshot
  malzeme_kodu    TEXT DEFAULT '',                                   -- daire BB malzeme kartı kodu — snapshot
  malzeme_ad      TEXT DEFAULT '',                                   -- daire BB malzeme kartı adı — snapshot
  alici_firma_id  BIGINT REFERENCES firmalar(id)  ON DELETE SET NULL,
  alici_firma_ad  TEXT DEFAULT '',                                   -- snapshot
  fatura_tarihi   DATE,
  sozlesme_tarihi DATE,                                              -- snapshot
  satis_bedeli    NUMERIC,                                           -- R matrah (KDV hariç) — snapshot
  kdv_orani       TEXT DEFAULT '',                                   -- daire kuralından — snapshot
  plus            NUMERIC,                                           -- RR / gayri resmi — ADMIN-ONLY — snapshot
  ozel_kod        TEXT DEFAULT 'R',                                  -- 'R' | 'RR'
  para_birimi     TEXT DEFAULT 'TL',
  aciklama        TEXT DEFAULT '',
  durum           TEXT DEFAULT 'kesildi',                            -- kesildi | iptal
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- RLS — anon key erişimi (diğer tablolarla aynı politika)
ALTER TABLE satis_faturalari ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_all_satis_faturalari" ON satis_faturalari FOR ALL USING (true) WITH CHECK (true);

-- Data API GRANT — yeni tabloda zorunlu (2026-10-30 sonrası)
GRANT ALL ON satis_faturalari TO anon, authenticated;
GRANT USAGE, SELECT ON SEQUENCE satis_faturalari_id_seq TO anon, authenticated;

-- Realtime yayını
ALTER PUBLICATION supabase_realtime ADD TABLE satis_faturalari;
