-- ============================================================
-- PROJE BAZINDA SABİT KDV İSTİSNASI
-- Amaç: BULVAR YAŞAM EVLERİ (proje kodu 16) — eski ruhsat → tüm daireler %1
-- Diğer projeler ETKİLENMEZ (sütun boş kaldıkça net m² kuralı %10/%20 geçerli).
-- Sırayla çalıştır. 2 ve 5 numaralı SELECT'ler kontrol amaçlıdır.
-- ============================================================

-- 1) projeler tablosuna sabit KDV oranı sütunu
--    Boş (NULL) ise: daire net m² kuralı (<150 → %10, ≥150 → %20) geçerli.
--    Dolu ise: o projedeki TÜM daireler bu oranı kullanır.
ALTER TABLE projeler ADD COLUMN IF NOT EXISTS sabit_kdv_orani TEXT DEFAULT NULL;

-- 2) KONTROL: doğru projeyi hedeflediğimizden emin ol.
--    Tek satır ve "BULVAR YAŞAM EVLERİ" dönmeli. Dönmüyorsa AŞAĞIYI ÇALIŞTIRMA, bana haber ver.
SELECT id, proje_kodu, ad FROM projeler WHERE proje_kodu = '16';

-- 3) Projeye sabit %1 oranını işle (kuralın kaynağı — kalıcı).
UPDATE projeler SET sabit_kdv_orani = '1' WHERE proje_kodu = '16';

-- 4) Mevcut dairelerin kayıtlı KDV oranını %1'e düzelt (eski %10/%20 snapshot'larını onar).
UPDATE bolumler SET kdv_orani = '1'
WHERE proje_id = (SELECT id FROM projeler WHERE proje_kodu = '16');

-- 5) DOĞRULAMA: artık bu projenin tüm dairelerinde kdv_orani '1' olmalı.
SELECT kdv_orani, COUNT(*) AS daire_sayisi FROM bolumler
WHERE proje_id = (SELECT id FROM projeler WHERE proje_kodu = '16')
GROUP BY kdv_orani;
