-- ============================================================
-- POTANSİYEL → ALICI: eski kayıt temizliği
-- Yeni kural: alıcıya dönüşen müşteri artık "potansiyel" DEĞİL.
-- Bu script, ESKİ yöntemle hem "potansiyel" hem "alici" işaretlenmiş
-- firmalardan "potansiyel" rolünü çıkarır. (firmalar.turler = JSONB array)
-- Yeni dönüşümler kod tarafında zaten doğru çalışıyor; bu yalnızca geçmiş kayıtlar için.
-- ============================================================

-- 1) KONTROL: hem alıcı hem potansiyel görünen firmalar (kaç tane, hangileri?)
SELECT id, ad, turler FROM firmalar
WHERE turler @> '["alici"]'::jsonb AND turler @> '["potansiyel"]'::jsonb;

-- 2) TEMİZLİK: bu firmalardan 'potansiyel' rolünü çıkar (alıcı rolü kalır)
UPDATE firmalar SET turler = turler - 'potansiyel'
WHERE turler @> '["alici"]'::jsonb AND turler @> '["potansiyel"]'::jsonb;

-- 3) DOĞRULAMA: artık 0 satır dönmeli
SELECT id, ad, turler FROM firmalar
WHERE turler @> '["alici"]'::jsonb AND turler @> '["potansiyel"]'::jsonb;
