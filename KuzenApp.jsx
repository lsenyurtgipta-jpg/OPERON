import React, { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { Plus, Trash2, Pencil, Save, Download, Upload, Search, ChevronDown, ChevronUp, X, FileText, Image, Folder, Building2, Package, ClipboardList, ShoppingCart, Receipt, LayoutDashboard, FolderOpen, ChevronRight, Settings, User, LogOut, Eye, Copy, Filter, MoreVertical, Check, AlertCircle, Info, ArrowLeft, RefreshCw, ExternalLink, Calendar, MapPin, Phone, Mail, Hash, Layers, HardHat, FileCheck, SquarePlus, MoveLeft, Map, SquarePen, Grid2x2Plus, FileSpreadsheet, FolderPlus, ArrowDownFromLine } from "lucide-react";
import operonLogo from "./assets/operon-logo.png";
import excelIcon from "./assets/icons8-excel-48.png";

const ILLER_ILCELER = {"Adana":["Aladağ","Ceyhan","Çukurova","Feke","İmamoğlu","Karaisalı","Karataş","Kozan","Pozantı","Saimbeyli","Sarıçam","Seyhan","Tufanbeyli","Yumurtalık","Yüreğir"],"Adıyaman":["Besni","Çelikhan","Gerger","Gölbaşı","Kahta","Merkez","Samsat","Sincik","Tut"],"Afyonkarahisar":["Başmakçı","Bayat","Bolvadin","Çay","Çobanlar","Dazkırı","Dinar","Emirdağ","Evciler","Hocalar","İhsaniye","İscehisar","Kızılören","Merkez","Sandıklı","Sinanpaşa","Sultandağı","Şuhut"],"Ağrı":["Diyadin","Doğubayazıt","Eleşkirt","Hamur","Merkez","Patnos","Taşlıçay","Tutak"],"Aksaray":["Ağaçören","Eskil","Gülağaç","Güzelyurt","Merkez","Ortaköy","Sarıyahşi","Sultanhanı"],"Amasya":["Göynücek","Gümüşhacıköy","Hamamözü","Merkez","Merzifon","Suluova","Taşova"],"Ankara":["Akyurt","Altındağ","Ayaş","Bala","Beypazarı","Çamlıdere","Çankaya","Çubuk","Elmadağ","Etimesgut","Evren","Gölbaşı","Güdül","Haymana","Kahramankazan","Kalecik","Keçiören","Kızılcahamam","Mamak","Nallıhan","Polatlı","Pursaklar","Sincan","Şereflikoçhisar","Yenimahalle"],"Antalya":["Akseki","Aksu","Alanya","Demre","Döşemealtı","Elmalı","Finike","Gazipaşa","Gündoğmuş","İbradı","Kaş","Kemer","Kepez","Konyaaltı","Korkuteli","Kumluca","Manavgat","Muratpaşa","Serik"],"Ardahan":["Çıldır","Damal","Göle","Hanak","Merkez","Posof"],"Artvin":["Ardanuç","Arhavi","Borçka","Hopa","Kemalpaşa","Merkez","Murgul","Şavşat","Yusufeli"],"Aydın":["Bozdoğan","Buharkent","Çine","Didim","Efeler","Germencik","İncirliova","Karacasu","Karpuzlu","Koçarlı","Köşk","Kuşadası","Kuyucak","Nazilli","Söke","Sultanhisar","Yenipazar"],"Balıkesir":["Altıeylül","Ayvalık","Balya","Bandırma","Bigadiç","Burhaniye","Dursunbey","Edremit","Erdek","Gömeç","Gönen","Havran","İvrindi","Karesi","Kepsut","Manyas","Marmara","Savaştepe","Sındırgı","Susurluk"],"Bartın":["Amasra","Kurucaşile","Merkez","Ulus"],"Batman":["Beşiri","Gercüş","Hasankeyf","Kozluk","Merkez","Sason"],"Bayburt":["Aydıntepe","Demirözü","Merkez"],"Bilecik":["Bozüyük","Gölpazarı","İnhisar","Merkez","Osmaneli","Pazaryeri","Söğüt","Yenipazar"],"Bingöl":["Adaklı","Genç","Karlıova","Kiğı","Merkez","Solhan","Yayladere","Yedisu"],"Bitlis":["Adilcevaz","Ahlat","Güroymak","Hizan","Merkez","Mutki","Tatvan"],"Bolu":["Dörtdivan","Gerede","Göynük","Kıbrıscık","Mengen","Merkez","Mudurnu","Seben","Yeniçağa"],"Burdur":["Ağlasun","Altınyayla","Bucak","Çavdır","Çeltikçi","Gölhisar","Karamanlı","Kemer","Merkez","Tefenni","Yeşilova"],"Bursa":["Büyükorhan","Gemlik","Gürsu","Harmancık","İnegöl","İznik","Karacabey","Keles","Kestel","Mudanya","Mustafakemalpaşa","Nilüfer","Orhaneli","Orhangazi","Osmangazi","Yenişehir","Yıldırım"],"Çanakkale":["Ayvacık","Bayramiç","Biga","Bozcaada","Çan","Eceabat","Ezine","Gelibolu","Gökçeada","Lapseki","Merkez","Yenice"],"Çankırı":["Atkaracalar","Bayramören","Çerkeş","Eldivan","Ilgaz","Kızılırmak","Korgun","Kurşunlu","Merkez","Orta","Şabanözü","Yapraklı"],"Çorum":["Alaca","Bayat","Boğazkale","Dodurga","İskilip","Kargı","Laçin","Mecitözü","Merkez","Oğuzlar","Ortaköy","Osmancık","Sungurlu","Uğurludağ"],"Denizli":["Acıpayam","Babadağ","Baklan","Bekilli","Beyağaç","Bozkurt","Buldan","Çal","Çameli","Çardak","Çivril","Güney","Honaz","Kale","Merkezefendi","Pamukkale","Sarayköy","Serinhisar","Tavas"],"Diyarbakır":["Bağlar","Bismil","Çermik","Çınar","Çüngüş","Dicle","Eğil","Ergani","Hani","Hazro","Kayapınar","Kocaköy","Kulp","Lice","Silvan","Sur","Yenişehir"],"Düzce":["Akçakoca","Cumayeri","Çilimli","Gölyaka","Gümüşova","Kaynaşlı","Merkez","Yığılca"],"Edirne":["Enez","Havsa","İpsala","Keşan","Lalapaşa","Meriç","Merkez","Süloğlu","Uzunköprü"],"Elazığ":["Ağın","Alacakaya","Arıcak","Baskil","Karakoçan","Keban","Kovancılar","Maden","Merkez","Palu","Sivrice"],"Erzincan":["Çayırlı","İliç","Kemah","Kemaliye","Merkez","Otlukbeli","Refahiye","Tercan","Üzümlü"],"Erzurum":["Aşkale","Aziziye","Çat","Hınıs","Horasan","İspir","Karaçoban","Karayazı","Köprüköy","Narman","Oltu","Olur","Palandöken","Pasinler","Pazaryolu","Şenkaya","Tekman","Tortum","Uzundere","Yakutiye"],"Eskişehir":["Alpu","Beylikova","Çifteler","Günyüzü","Han","İnönü","Mahmudiye","Mihalgazi","Mihalıççık","Odunpazarı","Sarıcakaya","Seyitgazi","Sivrihisar","Tepebaşı"],"Gaziantep":["Araban","İslahiye","Karkamış","Nizip","Nurdağı","Oğuzeli","Şahinbey","Şehitkamil","Yavuzeli"],"Giresun":["Alucra","Bulancak","Çamoluk","Çanakçı","Dereli","Doğankent","Espiye","Eynesil","Görele","Güce","Keşap","Merkez","Piraziz","Şebinkarahisar","Tirebolu","Yağlıdere"],"Gümüşhane":["Kelkit","Köse","Kürtün","Merkez","Şiran","Torul"],"Hakkari":["Çukurca","Derecik","Merkez","Şemdinli","Yüksekova"],"Hatay":["Altınözü","Antakya","Arsuz","Belen","Defne","Dörtyol","Erzin","Hassa","İskenderun","Kırıkhan","Kumlu","Payas","Reyhanlı","Samandağ","Yayladağı"],"Iğdır":["Aralık","Karakoyunlu","Merkez","Tuzluca"],"Isparta":["Aksu","Atabey","Eğirdir","Gelendost","Gönen","Keçiborlu","Merkez","Senirkent","Sütçüler","Şarkikaraağaç","Uluborlu","Yalvaç","Yenişarbademli"],"İstanbul":["Adalar","Arnavutköy","Ataşehir","Avcılar","Bağcılar","Bahçelievler","Bakırköy","Başakşehir","Bayrampaşa","Beşiktaş","Beykoz","Beylikdüzü","Beyoğlu","Büyükçekmece","Çatalca","Çekmeköy","Esenler","Esenyurt","Eyüpsultan","Fatih","Gaziosmanpaşa","Güngören","Kadıköy","Kağıthane","Kartal","Küçükçekmece","Maltepe","Pendik","Sancaktepe","Sarıyer","Silivri","Sultanbeyli","Sultangazi","Şile","Şişli","Tuzla","Ümraniye","Üsküdar","Zeytinburnu"],"İzmir":["Aliağa","Balçova","Bayındır","Bayraklı","Bergama","Beydağ","Bornova","Buca","Çeşme","Çiğli","Dikili","Foça","Gaziemir","Güzelbahçe","Karabağlar","Karaburun","Karşıyaka","Kemalpaşa","Kınık","Kiraz","Konak","Menderes","Menemen","Narlıdere","Ödemiş","Seferihisar","Selçuk","Tire","Torbalı","Urla"],"Kahramanmaraş":["Afşin","Andırın","Çağlayancerit","Dulkadiroğlu","Ekinözü","Elbistan","Göksun","Nurhak","Onikişubat","Pazarcık","Türkoğlu"],"Karabük":["Eflani","Eskipazar","Merkez","Ovacık","Safranbolu","Yenice"],"Karaman":["Ayrancı","Başyayla","Ermenek","Kazımkarabekir","Merkez","Sarıveliler"],"Kars":["Akyaka","Arpaçay","Digor","Kağızman","Merkez","Sarıkamış","Selim","Susuz"],"Kastamonu":["Abana","Ağlı","Araç","Azdavay","Bozkurt","Çatalzeytin","Cide","Daday","Devrekani","Doğanyurt","Hanönü","İhsangazi","İnebolu","Küre","Merkez","Pınarbaşı","Seydiler","Şenpazar","Taşköprü","Tosya"],"Kayseri":["Akkışla","Bünyan","Develi","Felahiye","Hacılar","İncesu","Kocasinan","Melikgazi","Özvatan","Pınarbaşı","Sarıoğlan","Sarız","Talas","Tomarza","Yahyalı","Yeşilhisar"],"Kilis":["Elbeyli","Merkez","Musabeyli","Polateli"],"Kırıkkale":["Bahşılı","Balışeyh","Çelebi","Delice","Karakeçili","Keskin","Merkez","Sulakyurt","Yahşihan"],"Kırklareli":["Babaeski","Demirköy","Kofçaz","Lüleburgaz","Merkez","Pehlivanköy","Pınarhisar","Vize"],"Kırşehir":["Akçakent","Akpınar","Boztepe","Çiçekdağı","Kaman","Merkez","Mucur"],"Kocaeli":["Başiskele","Çayırova","Darıca","Derince","Dilovası","Gebze","Gölcük","İzmit","Kandıra","Karamürsel","Kartepe","Körfez"],"Konya":["Ahırlı","Akören","Akşehir","Altınekin","Beyşehir","Bozkır","Cihanbeyli","Çeltik","Çumra","Derbent","Derebucak","Doğanhisar","Emirgazi","Ereğli","Güneysınır","Hadim","Halkapınar","Hüyük","Ilgın","Kadınhanı","Karapınar","Karatay","Kulu","Meram","Sarayönü","Selçuklu","Seydişehir","Taşkent","Tuzlukçu","Yalıhüyük","Yunak"],"Kütahya":["Altıntaş","Aslanapa","Çavdarhisar","Domaniç","Dumlupınar","Emet","Gediz","Hisarcık","Merkez","Pazarlar","Şaphane","Simav","Tavşanlı"],"Malatya":["Akçadağ","Arapgir","Arguvan","Battalgazi","Darende","Doğanşehir","Doğanyol","Hekimhan","Kale","Kuluncak","Pütürge","Yazıhan","Yeşilyurt"],"Manisa":["Ahmetli","Akhisar","Alaşehir","Demirci","Gölmarmara","Gördes","Kırkağaç","Köprübaşı","Kula","Salihli","Sarıgöl","Saruhanlı","Selendi","Soma","Şehzadeler","Turgutlu","Yunusemre"],"Mardin":["Artuklu","Dargeçit","Derik","Kızıltepe","Mazıdağı","Midyat","Nusaybin","Ömerli","Savur","Yeşilli"],"Mersin":["Akdeniz","Anamur","Aydıncık","Bozyazı","Çamlıyayla","Erdemli","Gülnar","Mezitli","Mut","Silifke","Tarsus","Toroslar","Yenişehir"],"Muğla":["Bodrum","Dalaman","Datça","Fethiye","Kavaklıdere","Köyceğiz","Marmaris","Menteşe","Milas","Ortaca","Seydikemer","Ula","Yatağan"],"Muş":["Bulanık","Hasköy","Korkut","Malazgirt","Merkez","Varto"],"Nevşehir":["Acıgöl","Avanos","Derinkuyu","Gülşehir","Hacıbektaş","Kozaklı","Merkez","Ürgüp"],"Niğde":["Altunhisar","Bor","Çamardı","Çiftlik","Merkez","Ulukışla"],"Ordu":["Akkuş","Altınordu","Aybastı","Çamaş","Çatalpınar","Çaybaşı","Fatsa","Gölköy","Gülyalı","Gürgentepe","İkizce","Kabadüz","Kabataş","Korgan","Kumru","Mesudiye","Perşembe","Ulubey","Ünye"],"Osmaniye":["Bahçe","Düziçi","Hasanbeyli","Kadirli","Merkez","Sumbas","Toprakkale"],"Rize":["Ardeşen","Çamlıhemşin","Çayeli","Derepazarı","Fındıklı","Güneysu","Hemşin","İkizdere","İyidere","Kalkandere","Merkez","Pazar"],"Sakarya":["Adapazarı","Akyazı","Arifiye","Erenler","Ferizli","Geyve","Hendek","Karapürçek","Karasu","Kaynarca","Kocaali","Pamukova","Sapanca","Serdivan","Söğütlü","Taraklı"],"Samsun":["Alaçam","Asarcık","Atakum","Ayvacık","Bafra","Canik","Çarşamba","Havza","İlkadım","Kavak","Ladik","Ondokuzmayıs","Salıpazarı","Tekkeköy","Terme","Vezirköprü","Yakakent"],"Şanlıurfa":["Akçakale","Birecik","Bozova","Ceylanpınar","Eyyübiye","Halfeti","Haliliye","Harran","Hilvan","Karaköprü","Siverek","Suruç","Viranşehir"],"Siirt":["Baykan","Eruh","Kurtalan","Merkez","Pervari","Şirvan","Tillo"],"Sinop":["Ayancık","Boyabat","Dikmen","Durağan","Erfelek","Gerze","Merkez","Saraydüzü","Türkeli"],"Sivas":["Akıncılar","Altınyayla","Divriği","Doğanşar","Gemerek","Gölova","Güneykaya","Hafik","İmranlı","Kangal","Koyulhisar","Merkez","Suşehri","Şarkışla","Ulaş","Yıldızeli","Zara"],"Şırnak":["Beytüşşebap","Cizre","Güçlükonak","İdil","Merkez","Silopi","Uludere"],"Tekirdağ":["Çerkezköy","Çorlu","Ergene","Hayrabolu","Kapaklı","Malkara","Marmaraereğlisi","Muratlı","Saray","Süleymanpaşa","Şarköy"],"Tokat":["Almus","Artova","Başçiftlik","Erbaa","Merkez","Niksar","Pazar","Reşadiye","Sulusaray","Turhal","Yeşilyurt","Zile"],"Trabzon":["Akçaabat","Araklı","Arsin","Beşikdüzü","Çarşıbaşı","Çaykara","Dernekpazarı","Düzköy","Hayrat","Köprübaşı","Maçka","Of","Ortahisar","Sürmene","Şalpazarı","Tonya","Vakfıkebir","Yomra"],"Tunceli":["Çemişgezek","Hozat","Mazgirt","Merkez","Nazımiye","Ovacık","Pertek","Pülümür"],"Uşak":["Banaz","Eşme","Karahallı","Merkez","Sivaslı","Ulubey"],"Van":["Bahçesaray","Başkale","Çaldıran","Çatak","Edremit","Erciş","Gevaş","Gürpınar","İpekyolu","Muradiye","Özalp","Saray","Tuşba"],"Yalova":["Altınova","Armutlu","Çiftlikköy","Çınarcık","Merkez","Termal"],"Yozgat":["Akdağmadeni","Aydıncık","Boğazlıyan","Çandır","Çayıralan","Çekerek","Kadışehri","Merkez","Saraykent","Sarıkaya","Sorgun","Şefaatli","Yenifakılı","Yerköy"],"Zonguldak":["Alaplı","Çaycuma","Devrek","Gökçebey","Kilimli","Kozlu","Merkez"]};
const IL_LISTESI = Object.keys(ILLER_ILCELER).sort((a,b)=>a.localeCompare(b,"tr"));

/* ========== VERGİ DAİRELERİ ========== */
const VERGI_DAIRELERI={"Adana":["5 Ocak VD","Adana İhtisas VD","Çukurova VD","Seyhan VD","Yüreğir VD","Ziyapaşa VD","Ceyhan VD","Kozan VD","Karataş Malmüdürlüğü"],"Adıyaman":["Adıyaman VD","Kahta VD","Besni Malmüdürlüğü"],"Afyonkarahisar":["Afyon VD","Bolvadin VD","Sandıklı Malmüdürlüğü"],"Ağrı":["Ağrı VD","Doğubayazıt VD","Patnos Malmüdürlüğü"],"Aksaray":["Aksaray VD","Eskil Malmüdürlüğü"],"Amasya":["Amasya VD","Merzifon VD","Suluova Malmüdürlüğü"],"Ankara":["Ankara İhtisas VD","Başkent VD","Çankaya VD","Dikimevi VD","Dışkapı VD","Etimesgut VD","Hacettepe VD","Keçiören VD","Kızılbey VD","Mamak VD","Mithatpaşa VD","Seğmenler VD","Sincan VD","Ulus VD","Yenimahalle VD","Yıldırım Beyazıt VD","Polatlı VD","Beypazarı VD"],"Antalya":["Antalya İhtisas VD","Kepez VD","Konyaaltı VD","Muratpaşa VD","Alanya VD","Manavgat VD","Serik VD","Finike VD","Kaş VD"],"Artvin":["Artvin VD","Hopa VD","Borçka Malmüdürlüğü"],"Aydın":["Aydın VD","Didim VD","Efeler VD","Kuşadası VD","Nazilli VD","Söke VD","İncirliova Malmüdürlüğü"],"Balıkesir":["Balıkesir VD","Bandırma VD","Burhaniye VD","Edremit VD","Ayvalık VD","Gönen VD","Susurluk Malmüdürlüğü"],"Bartın":["Bartın VD","Amasra Malmüdürlüğü"],"Batman":["Batman VD","Kozluk VD","Sason Malmüdürlüğü"],"Bayburt":["Bayburt VD"],"Bilecik":["Bilecik VD","Bozüyük VD","Söğüt Malmüdürlüğü"],"Bingöl":["Bingöl VD","Genç Malmüdürlüğü"],"Bitlis":["Bitlis VD","Tatvan VD","Ahlat Malmüdürlüğü"],"Bolu":["Bolu VD","Gerede VD","Düzce VD"],"Burdur":["Burdur VD","Bucak VD","Gölhisar Malmüdürlüğü"],"Bursa":["Bursa İhtisas VD","Gemlik VD","İnegöl VD","Mudanya VD","Mustafakemalpaşa VD","Nilüfer VD","Osmangazi VD","Setbaşı VD","Uludağ VD","Yenişehir VD","Yeşil VD","Yıldırım VD"],"Çanakkale":["Çanakkale VD","Biga VD","Çan VD","Gelibolu VD","Ezine Malmüdürlüğü"],"Çankırı":["Çankırı VD","Ilgaz Malmüdürlüğü"],"Çorum":["Çorum VD","İskilip VD","Osmancık VD","Sungurlu VD","Alaca Malmüdürlüğü"],"Denizli":["Denizli VD","Buldan VD","Çivril VD","Merkezefendi VD","Pamukkale VD","Sarayköy VD","Acıpayam Malmüdürlüğü"],"Diyarbakır":["Diyarbakır İhtisas VD","Bağlar VD","Kayapınar VD","Sur VD","Bismil VD","Ergani VD","Silvan VD","Çınar Malmüdürlüğü"],"Düzce":["Düzce VD","Akçakoca VD","Gölyaka Malmüdürlüğü"],"Edirne":["Edirne VD","İpsala VD","Keşan VD","Uzunköprü VD","Havsa Malmüdürlüğü"],"Elazığ":["Elazığ VD","Kovancılar VD","Maden Malmüdürlüğü"],"Erzincan":["Erzincan VD","Refahiye Malmüdürlüğü"],"Erzurum":["Erzurum İhtisas VD","Aziziye VD","Oltu VD","Palandöken VD","Yakutiye VD","Horasan Malmüdürlüğü"],"Eskişehir":["Eskişehir VD","Odunpazarı VD","Tepebaşı VD","Çifteler Malmüdürlüğü"],"Gaziantep":["Gaziantep İhtisas VD","Nizip VD","Şahinbey VD","Şehitkamil VD","İslahiye VD"],"Giresun":["Giresun VD","Bulancak VD","Espiye VD","Tirebolu VD","Şebinkarahisar Malmüdürlüğü"],"Gümüşhane":["Gümüşhane VD","Kelkit Malmüdürlüğü"],"Hakkari":["Hakkari VD","Yüksekova VD","Şemdinli Malmüdürlüğü"],"Hatay":["Antakya VD","İskenderun VD","Belen VD","Dörtyol VD","Erzin VD","Kırıkhan VD","Samandağ VD","Reyhanlı Malmüdürlüğü"],"Iğdır":["Iğdır VD","Aralık Malmüdürlüğü"],"Isparta":["Isparta VD","Eğirdir VD","Yalvaç VD","Keçiborlu Malmüdürlüğü"],"İstanbul":["Anadolu Kurumlar VD","Avcılar VD","Bağcılar VD","Bahçelievler VD","Bakırköy VD","Başakşehir VD","Bayrampaşa VD","Beşiktaş VD","Beykoz VD","Beyoğlu VD","Büyükçekmece VD","Çatalca VD","Fatih VD","Gaziosmanpaşa VD","Güngören VD","İstanbul Büyük Mükellefler VD","İstanbul Kurumlar VD","Kadıköy VD","Kağıthane VD","Kartal VD","Küçükçekmece VD","Maltepe VD","Pendik VD","Sarıyer VD","Silivri VD","Sultanbeyli VD","Şişli VD","Tuzla VD","Ümraniye VD","Üsküdar VD","Zeytinburnu VD"],"İzmir":["İzmir Büyük Mükellefler VD","Aliağa VD","Bayındır VD","Bergama VD","Bornova VD","Buca VD","Çeşme VD","Gaziemir VD","Karabağlar VD","Karşıyaka VD","Kemalpaşa VD","Konak VD","Menemen VD","Narlıdere VD","Ödemiş VD","Selçuk VD","Tire VD","Torbalı VD"],"Kahramanmaraş":["Kahramanmaraş VD","Elbistan VD","Afşin VD","Dulkadiroğlu VD","Onikişubat VD"],"Karabük":["Karabük VD","Safranbolu VD","Eskipazar Malmüdürlüğü"],"Karaman":["Karaman VD","Ermenek Malmüdürlüğü"],"Kars":["Kars VD","Sarıkamış VD","Kağızman Malmüdürlüğü"],"Kastamonu":["Kastamonu VD","İnebolu VD","Taşköprü VD","Tosya VD","Cide Malmüdürlüğü"],"Kayseri":["Büyükşehir VD","Kayseri İhtisas VD","Kocasinan VD","Melikgazi VD","Talas VD","Bünyan VD","Develi VD","Yahyalı Malmüdürlüğü"],"Kilis":["Kilis VD","Elbeyli Malmüdürlüğü"],"Kırıkkale":["Kırıkkale VD","Keskin Malmüdürlüğü"],"Kırklareli":["Kırklareli VD","Lüleburgaz VD","Babaeski VD","Pınarhisar Malmüdürlüğü"],"Kırşehir":["Kırşehir VD","Kaman Malmüdürlüğü"],"Kocaeli":["Kocaeli İhtisas VD","Darıca VD","Gebze VD","Gölcük VD","İzmit VD","Kartepe VD","Körfez VD","Kandıra Malmüdürlüğü"],"Konya":["Konya İhtisas VD","Akşehir VD","Beyşehir VD","Ereğli VD","Karatay VD","Meram VD","Selçuklu VD","Seydişehir VD","Ilgın Malmüdürlüğü"],"Kütahya":["Kütahya VD","Gediz VD","Simav VD","Tavşanlı VD","Altıntaş Malmüdürlüğü"],"Malatya":["Malatya VD","Battalgazi VD","Yeşilyurt VD","Darende Malmüdürlüğü"],"Manisa":["Manisa VD","Akhisar VD","Alaşehir VD","Salihli VD","Soma VD","Turgutlu VD","Yunusemre VD","Kırkağaç Malmüdürlüğü"],"Mardin":["Mardin VD","Kızıltepe VD","Midyat VD","Nusaybin VD","Mazıdağı Malmüdürlüğü"],"Mersin":["Erdemli VD","Mezitli VD","Silifke VD","Tarsus VD","Toroslar VD","Yenişehir VD","Anamur VD","Akdeniz VD"],"Muğla":["Bodrum VD","Datça VD","Fethiye VD","Marmaris VD","Menteşe VD","Milas VD","Ortaca VD","Köyceğiz Malmüdürlüğü"],"Muş":["Muş VD","Bulanık Malmüdürlüğü"],"Nevşehir":["Nevşehir VD","Avanos VD","Ürgüp VD","Hacıbektaş Malmüdürlüğü"],"Niğde":["Niğde VD","Bor VD","Ulukışla Malmüdürlüğü"],"Ordu":["Ordu VD","Fatsa VD","Ünye VD","Altınordu VD","Aybastı Malmüdürlüğü"],"Osmaniye":["Osmaniye VD","Kadirli VD","Düziçi Malmüdürlüğü"],"Rize":["Rize VD","Ardeşen VD","Çayeli VD","Pazar Malmüdürlüğü"],"Sakarya":["Adapazarı VD","Akyazı VD","Hendek VD","Karasu VD","Serdivan VD","Geyve Malmüdürlüğü"],"Samsun":["19 Mayıs VD","Gaziler VD","Zafer VD","Bafra VD","Çarşamba VD","Terme VD","Havza VD","Alaçam Malmüdürlüğü","Kavak Malmüdürlüğü","Ladik Malmüdürlüğü","Vezirköprü Malmüdürlüğü"],"Siirt":["Siirt VD","Kurtalan VD","Baykan Malmüdürlüğü"],"Sinop":["Sinop VD","Boyabat VD","Gerze Malmüdürlüğü"],"Sivas":["Sivas VD","Şarkışla VD","Zara VD","Gemerek VD","Suşehri Malmüdürlüğü"],"Şanlıurfa":["Şanlıurfa VD","Birecik VD","Bozova VD","Ceylanpınar VD","Siverek VD","Viranşehir VD","Hilvan Malmüdürlüğü"],"Şırnak":["Şırnak VD","Cizre VD","İdil VD","Silopi VD","Beytüşşebap Malmüdürlüğü"],"Tekirdağ":["Tekirdağ VD","Çerkezköy VD","Çorlu VD","Ergene VD","Hayrabolu Malmüdürlüğü"],"Tokat":["Tokat VD","Erbaa VD","Niksar VD","Turhal VD","Zile VD","Reşadiye Malmüdürlüğü"],"Trabzon":["Trabzon VD","Akçaabat VD","Of VD","Ortahisar VD","Sürmene VD","Araklı Malmüdürlüğü"],"Tunceli":["Tunceli VD","Pertek Malmüdürlüğü"],"Uşak":["Uşak VD","Eşme Malmüdürlüğü"],"Van":["Van VD","Erciş VD","Edremit VD","İpekyolu VD","Tuşba VD","Başkale Malmüdürlüğü"],"Yalova":["Yalova VD","Altınova Malmüdürlüğü"],"Yozgat":["Yozgat VD","Boğazlıyan VD","Sorgun VD","Yerköy VD","Akdağmadeni Malmüdürlüğü"],"Zonguldak":["Zonguldak VD","Çaycuma VD","Devrek VD","Ereğli VD","Kilimli Malmüdürlüğü"]};

/* ========== SUPABASE CLIENT ========== */
const SUPABASE_URL = "https://pgzlxkbltutehjtuvfqx.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnemx4a2JsdHV0ZWhqdHV2ZnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NjkyNjUsImV4cCI6MjA4OTI0NTI2NX0._EaSbj47GiRCs86IN1dbdaP3vpoQzA77-j2R4iMgqu4";
const sbReq = async (path, opts={}) => {
  const r = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...opts,
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': opts.prefer !== undefined ? opts.prefer : 'return=representation',
      ...(opts.headers||{})
    }
  });
  if (!r.ok) { const e = await r.text(); throw new Error(e); }
  const t = await r.text();
  return t ? JSON.parse(t) : [];
};
const sbGet = (table, query='') => sbReq(`${table}?${query}`);
const sbPost = (table, data) => sbReq(table, {method:'POST', body:JSON.stringify(data)});
const sbPatch = (table, id, data) => sbReq(`${table}?id=eq.${id}`, {method:'PATCH', body:JSON.stringify(data)});
const sbDel = (table, id) => sbReq(`${table}?id=eq.${id}`, {method:'DELETE', prefer:'', headers:{'Prefer':'count=none'}});

/* ========== SUPABASE STORAGE ========== */
const STORAGE_BUCKET = "operon_dosyalar";
const sbUpload = async (filePath, file) => {
  const r = await fetch(`${SUPABASE_URL}/storage/v1/object/${STORAGE_BUCKET}/${filePath}`, {
    method: 'POST',
    headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`, 'Content-Type': file.type || 'application/octet-stream', 'x-upsert': 'true' },
    body: file
  });
  if (!r.ok) { const e = await r.text(); throw new Error(e); }
  return filePath;
};
const sbStorageUrl = (filePath) => `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/${filePath}`;
const sbStorageDel = async (filePath) => {
  await fetch(`${SUPABASE_URL}/storage/v1/object/${STORAGE_BUCKET}/${filePath}`, {
    method: 'DELETE',
    headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
  });
};
const dosyaUrl = (d) => {
  if (!d) return "";
  if (typeof d === "string") return d.startsWith("data:") ? d : (d.startsWith("http") ? d : sbStorageUrl(d));
  if (d.storagePath) return sbStorageUrl(d.storagePath);
  if (d.data && d.data.startsWith("data:")) return d.data;
  return "";
};
const safeName = (name) => (name || "dosya").replace(/[^a-zA-Z0-9._-]/g, "_").substring(0, 80);
const nTR = (s) => (s==null?"":String(s)).replace(/[İIı]/g,"i").replace(/[şŞ]/g,"s").replace(/[ğĞ]/g,"g").replace(/[üÜ]/g,"u").replace(/[öÖ]/g,"o").replace(/[çÇ]/g,"c").toLowerCase();

const fmtDate=(d)=>{if(!d)return"—";const p=d.split("-");if(p.length!==3)return d;return`${p[2]}.${p[1]}.${p[0]}`;};
const addDaysISO=(dateStr,days)=>{if(!dateStr||days===""||days===null||days===undefined)return"";const n=parseInt(days);if(isNaN(n))return"";const[y,m,d]=dateStr.split("-").map(Number);const dt=new Date(Date.UTC(y,m-1,d));dt.setUTCDate(dt.getUTCDate()+n);return dt.toISOString().split("T")[0];};
const daysBetweenISO=(fromStr,toStr)=>{if(!fromStr||!toStr)return"";const[y1,m1,d1]=fromStr.split("-").map(Number);const[y2,m2,d2]=toStr.split("-").map(Number);const diff=Math.round((Date.UTC(y2,m2-1,d2)-Date.UTC(y1,m1-1,d1))/(1000*60*60*24));return String(diff);};
const toTitleCase=(v)=>{
  const trUpper=(c)=>{if(c==='i')return 'İ';if(c==='ı')return 'I';return c.toUpperCase();};
  const trLower=(s)=>s.replace(/İ/g,'i').replace(/I/g,'ı').toLowerCase();
  return v.replace(/[a-zA-ZçÇğĞıİöÖşŞüÜ]+/g,t=>trUpper(t.charAt(0))+trLower(t.slice(1)));
};
const toUpperCase=(v)=>v.replace(/i/g,'İ').replace(/ı/g,'I').toUpperCase();
const fmtPhone=(v)=>{const d=v.replace(/\D/g,"").slice(0,11);if(d.length<=4)return d;if(d.length<=7)return d.slice(0,4)+" "+d.slice(4);if(d.length<=9)return d.slice(0,4)+" "+d.slice(4,7)+" "+d.slice(7);return d.slice(0,4)+" "+d.slice(4,7)+" "+d.slice(7,9)+" "+d.slice(9);};
const phoneDigits=(v)=>(v||"").replace(/\D/g,"").length;
const phoneOk=(v)=>{const l=phoneDigits(v);return l===0||l===11;};
const phoneErr=(v)=>{const l=phoneDigits(v);if(l===0||l===11)return"";return l<11?`${11-l} hane eksik`:"Fazla hane";};

const FIRMA_TURLERI=[{id:"alici",label:"Alıcı",color:"#1677ff",bg:"#e6f4ff",icon:"🏠",kod:"120"},{id:"tedarikci",label:"Tedarikçi",color:"#52c41a",bg:"#f6ffed",icon:"📦",kod:"320"},{id:"taseron",label:"Taşeron",color:"#fa8c16",bg:"#fff7e6",icon:"👷",kod:"321"},{id:"resmi",label:"Resmi Kurum",color:"#f5222d",bg:"#fff1f0",icon:"🏛️",kod:"322"}];
const PARA_BIRIMLERI=[{id:"TL",label:"₺ Türk Lirası (TL)",kod:"1",symbol:"₺"},{id:"USD",label:"$ Amerikan Doları (USD)",kod:"2",symbol:"$"},{id:"EUR",label:"€ Euro (EUR)",kod:"3",symbol:"€"}];
/* ========== MALZEME SABİTLERİ ========== */
const MLZ_TIPLER=[{id:"M",label:"Mamül",color:"#52c41a",bg:"#f6ffed",icon:"✅"},{id:"H",label:"Hizmet",color:"#f5222d",bg:"#fff1f0",icon:"🔧"},{id:"R",label:"Hammadde",color:"#1677ff",bg:"#e6f4ff",icon:"📦"},{id:"Y",label:"Yarı Mamül",color:"#fa8c16",bg:"#fff7e6",icon:"🔄"}];
const MLZ_BIRIMLER=["kg","ton","gr","m³","m²","m","adet","takım","paket","torba","lt","kova","rulo","levha","sefer","saat","gün","ay","götürü","daire"];
const KDV_ORANLARI=[{id:"0",label:"%0"},{id:"1",label:"%1"},{id:"10",label:"%10"},{id:"20",label:"%20"}];
const PROJE_TURLERI_OMURGA=[{id:"konut",label:"Konut",icon:"🏘️",color:"#1677ff",bg:"#e6f4ff"},{id:"ticari",label:"Ticari",icon:"🏢",color:"#fa8c16",bg:"#fff7e6"},{id:"karma",label:"Karma",icon:"🏙️",color:"#722ed1",bg:"#f9f0ff"},{id:"altyapi",label:"Altyapı",icon:"🏗️",color:"#52c41a",bg:"#f6ffed"}];

/* ========== YAPI SINIFLARI BİRİM MALİYET TABLOSU (Çevre ve Şehircilik Bakanlığı) ========== */
const YAPI_SINIF_MALIYETLERI={
  2025:[
    {sinif:"I",grup:"A",label:"I-A: Basit tarım/hayvan yapıları, çardaklar",maliyet:2100},
    {sinif:"I",grup:"B",label:"I-B: Basit padok, cam sera, depo amaçlı kayadan oyma",maliyet:3050},
    {sinif:"I",grup:"C",label:"I-C: Su depoları, ahırlar, istinat duvarları",maliyet:3300},
    {sinif:"I",grup:"D",label:"I-D: GES (Güneş Enerji Santrali)",maliyet:3900},
    {sinif:"II",grup:"A",label:"II-A: Deniz iskeleleri, genel depolar, tarımsal endüstri",maliyet:6600},
    {sinif:"II",grup:"B",label:"II-B: Tema park, halı saha, hangar, kapalı pazar",maliyet:10200},
    {sinif:"II",grup:"C",label:"II-C: Köy/yayla evi, bungalov, hal binası, sanayi (0-500kg)",maliyet:12400},
    {sinif:"III",grup:"A",label:"III-A: Konut (3 kata kadar), kreş, garaj, otopark",maliyet:17100},
    {sinif:"III",grup:"B",label:"III-B: Konut (≤21.5m), ilkokul, iş merkezi (≤3kat), apart otel",maliyet:18200},
    {sinif:"III",grup:"C",label:"III-C: Konut (21.5-30.5m), lise, öğrenci yurdu, huzurevi",maliyet:19150},
    {sinif:"IV",grup:"A",label:"IV-A: Konut (30.5-51.5m), AVM (<25.000m²), üniversite, otel 1-2*",maliyet:21500},
    {sinif:"IV",grup:"B",label:"IV-B: Konut (>51.5m), banka, ibadet (500-1500), otel salon",maliyet:27500},
    {sinif:"IV",grup:"C",label:"IV-C: Hastane (<200 yatak), AVM (≥25.000m²), otel 3*, adalet sarayı",maliyet:32600},
    {sinif:"V",grup:"A",label:"V-A: Eğitim/araştırma hast., büyükelçilik, stadyum, kampüs",maliyet:34400},
    {sinif:"V",grup:"B",label:"V-B: Hastane (200-400 yatak), otel 4*, askeri tesisler",maliyet:35600},
    {sinif:"V",grup:"C",label:"V-C: Hastane (≥400 yatak), opera/tiyatro, müze, kongre merkezi",maliyet:39500},
    {sinif:"V",grup:"D",label:"V-D: Havalimanı terminali, metro istasyonu, otel 5*, şehir hastanesi",maliyet:43400},
    {sinif:"V",grup:"E",label:"V-E: RES (Rüzgar Enerji Santrali)",maliyet:86250}
  ],
  2026:[
    {sinif:"I",grup:"A",label:"I-A: Basit tarım/hayvan yapıları, çardaklar",maliyet:2600},
    {sinif:"I",grup:"B",label:"I-B: Basit padok, cam sera, depo amaçlı kayadan oyma",maliyet:3900},
    {sinif:"I",grup:"C",label:"I-C: Su depoları, ahırlar, istinat duvarları, şarj istasyonu",maliyet:4200},
    {sinif:"I",grup:"D",label:"I-D: GES (Güneş Enerji Santrali)",maliyet:4800},
    {sinif:"II",grup:"A",label:"II-A: Deniz iskeleleri, genel depolar, tarımsal endüstri",maliyet:8100},
    {sinif:"II",grup:"B",label:"II-B: Tema park, halı saha, hangar, kapalı pazar",maliyet:12500},
    {sinif:"II",grup:"C",label:"II-C: Köy/yayla evi, bungalov, hal binası, sanayi (0-500kg)",maliyet:15100},
    {sinif:"III",grup:"A",label:"III-A: Konut (3 kata kadar), kreş, garaj, otopark",maliyet:19800},
    {sinif:"III",grup:"B",label:"III-B: Konut (≤21.5m), ilkokul, iş merkezi (≤3kat), apart otel",maliyet:21050},
    {sinif:"III",grup:"C",label:"III-C: Konut (21.5-30.5m), lise, öğrenci yurdu, huzurevi",maliyet:23400},
    {sinif:"IV",grup:"A",label:"IV-A: Konut (30.5-51.5m), AVM (<25.000m²), üniversite, otel 1-2*",maliyet:26450},
    {sinif:"IV",grup:"B",label:"IV-B: Konut (>51.5m), banka, ibadet (500-1500), otel salon",maliyet:33900},
    {sinif:"IV",grup:"C",label:"IV-C: Hastane (<200 yatak), AVM (≥25.000m²), otel 3*, adalet sarayı",maliyet:40500},
    {sinif:"V",grup:"A",label:"V-A: Eğitim/araştırma hast., büyükelçilik, stadyum, kampüs",maliyet:42350},
    {sinif:"V",grup:"B",label:"V-B: Hastane (200-400 yatak), otel 4*, askeri tesisler",maliyet:43850},
    {sinif:"V",grup:"C",label:"V-C: Hastane (≥400 yatak), opera/tiyatro, müze, kongre merkezi",maliyet:48750},
    {sinif:"V",grup:"D",label:"V-D: Havalimanı terminali, metro istasyonu, otel 5*, şehir hastanesi",maliyet:53500},
    {sinif:"V",grup:"E",label:"V-E: RES (Rüzgar Enerji Santrali)",maliyet:103500}
  ]
};

/* ========== HESAPLAMA ŞABLONLARI (Calculation Engine Templates) ========== */
const HESAPLAMA_SABLONLARI={
  sgk_insaat_hesaplama:{
    ad:"SGK İnşaat İşçilik Hesabı",
    kategoriler:["H"],
    aciklama:"İnşaat m² maliyeti üzerinden SGK asgari işçilik ve prim hesabı",
    icon:"🏛️",
    parametreler:[
      {key:"yil",label:"Yıl",tip:"secim",secenekler:[{v:2026,l:"2026"},{v:2025,l:"2025"}],varsayilan:2026},
      {key:"yapiSinifGrup",label:"Yapı Sınıfı / Grubu",tip:"secim",secenekler:[],varsayilan:"III-B",dinamikSecenekler:true},
      {key:"insaatAlani",label:"İnşaat Alanı",tip:"sayi",birim:"m²",varsayilan:""},
      {key:"insaatTuru",label:"İnşaat Türü",tip:"secim",secenekler:[
        {v:9,l:"Betonarme Karkas (%9)"},
        {v:7,l:"Tünel Kalıp Sistem (%7)"},
        {v:7.3,l:"Tünel Kalıp + Çevre Düz. (%7,3)"},
        {v:8,l:"Prefabrik (%8)"},
        {v:9.1,l:"Çelik Konstrüksiyon (%9)"},
        {v:12,l:"Kâgir / Yığma Yapı (%12)"},
        {v:13,l:"Onarım / Tadilat (%13)"}
      ],varsayilan:9},
      {key:"dusumOrani",label:"Düşüm Oranı",tip:"secim",secenekler:[{v:25,l:"%25 (Standart)"},{v:0,l:"%0 (Düşüm Yok)"}],varsayilan:25},
      {key:"sgkPrimOrani",label:"SGK Prim Oranı",tip:"secim",secenekler:[{v:38.75,l:"%38,75 (2026 Güncel)"},{v:38.5,l:"%38,50 (Eski Oran)"}],varsayilan:38.75}
    ],
    hesapla:(p)=>{
      const yil=Number(p.yil)||2026;
      const alan=Number(p.insaatAlani)||0;
      const asgariIscilikOrani=Number(p.insaatTuru)||9;
      const dusum=Number(p.dusumOrani)||25;
      const sgkPrim=Number(p.sgkPrimOrani)||38.75;

      // Yapı sınıfından birim maliyet bul
      const sinifGrup=p.yapiSinifGrup||"III-B";
      const [sinif,grup]=sinifGrup.split("-");
      const tablo=YAPI_SINIF_MALIYETLERI[yil]||YAPI_SINIF_MALIYETLERI[2026];
      const yapiObj=tablo.find(y=>y.sinif===sinif&&y.grup===grup);
      const birimMaliyet=yapiObj?yapiObj.maliyet:21050;

      const toplamInsaatMaliyeti=alan*birimMaliyet;
      const uyguIscilikOrani=asgariIscilikOrani*(1-dusum/100);
      const sgkMatrahi=toplamInsaatMaliyeti*(uyguIscilikOrani/100);
      const odenecekSGK=sgkMatrahi*(sgkPrim/100);

      return {
        baslik:`SGK İnşaat İşçilik Hesabı (${yil})`,
        satirlar:[
          {label:"İnşaat Alanı",deger:alan,birim:"m²"},
          {label:`Birim Maliyet (${sinifGrup} — ${yil})`,deger:birimMaliyet,birim:"₺/m²"},
          {label:"Toplam İnşaat Maliyeti",deger:toplamInsaatMaliyeti,birim:"₺",vurgu:true},
          {label:`Asgari İşçilik Oranı`,deger:asgariIscilikOrani,birim:"%"},
          {label:`Düşüm Oranı`,deger:dusum,birim:"%"},
          {label:`Uygulanan İşçilik Oranı`,deger:Number(uyguIscilikOrani.toFixed(4)),birim:"%",vurgu:true},
          {label:"SGK Matrahı",deger:Number(sgkMatrahi.toFixed(2)),birim:"₺",vurgu:true},
          {label:`SGK Prim Oranı`,deger:sgkPrim,birim:"%"},
          {label:"ÖDENECEK SGK",deger:Number(odenecekSGK.toFixed(2)),birim:"₺",vurgu:true,ana:true}
        ],
        toplamMaliyet:odenecekSGK
      };
    }
  },
  yapi_denetim:{
    ad:"Yapı Denetim Ücreti",
    kategoriler:["H"],
    aciklama:"4708 sayılı Kanun kapsamında yapı denetim hizmet bedeli hesabı",
    icon:"🏗️",
    parametreler:[
      {key:"yil",label:"Yıl",tip:"secim",secenekler:[{v:2026,l:"2026"},{v:2025,l:"2025"}],varsayilan:2026},
      {key:"insaatAlani",label:"İnşaat Alanı",tip:"sayi",birim:"m²",varsayilan:""},
      {key:"yapiDenetimGrubu",label:"Yapı Denetim Grubu",tip:"secim",secenekler:[
        {v:1,l:"1. Grup — I-II. sınıf (basit yapılar, depolar, seralar)"},
        {v:2,l:"2. Grup — III. sınıf (konutlar, okullar, iş merkezleri)"},
        {v:3,l:"3. Grup — IV-V. sınıf (hastaneler, AVM, yüksek yapılar)"}
      ],varsayilan:2},
      {key:"yapiSuresi",label:"Yapım Süresi",tip:"secim",secenekler:[
        {v:12,l:"12 ay (1 yıl)"},
        {v:24,l:"24 ay (2 yıl)"},
        {v:36,l:"36 ay (3 yıl)"},
        {v:48,l:"48 ay (4 yıl)"},
        {v:60,l:"60 ay (5 yıl)"}
      ],varsayilan:24}
    ],
    hesapla:(p)=>{
      const yil=Number(p.yil)||2026;
      const alan=Number(p.insaatAlani)||0;
      const grup=Number(p.yapiDenetimGrubu)||2;
      const sure=Number(p.yapiSuresi)||24;
      // Yapı denetim birim maliyetleri (3 grup)
      const birimMaliyetTablo={
        2025:{1:5000,2:15000,3:25000},
        2026:{1:6464,2:19392,3:32320}
      };
      const birimMaliyet=(birimMaliyetTablo[yil]||birimMaliyetTablo[2026])[grup]||19392;
      const yakMaliyet=alan*birimMaliyet;
      // Hizmet bedeli oranları (süreye göre)
      const oranTablo={12:1.43,24:1.50,36:1.58,48:1.65,60:1.74};
      const oran=oranTablo[sure]||1.50;
      const hizmetBedeli=yakMaliyet*(oran/100);
      const kdv=hizmetBedeli*0.20;
      const toplamKDVHaric=hizmetBedeli;
      const toplamKDVDahil=hizmetBedeli+kdv;
      const toplamMaliyet=p.kdvDahil?toplamKDVDahil:toplamKDVHaric;
      const grupAdlari={1:"1. Grup (I-II. sınıf)",2:"2. Grup (III. sınıf)",3:"3. Grup (IV-V. sınıf)"};
      return {
        baslik:`Yapı Denetim Hizmet Bedeli (${yil})`,
        satirlar:[
          {label:"İnşaat Alanı",deger:alan,birim:"m²"},
          {label:`Yapı Denetim Grubu`,deger:grupAdlari[grup]||"",birim:""},
          {label:`Birim Maliyet (${yil})`,deger:birimMaliyet,birim:"₺/m²"},
          {label:"Yapı Yaklaşık Maliyeti",deger:Number(yakMaliyet.toFixed(2)),birim:"₺",vurgu:true},
          {label:`Yapım Süresi`,deger:sure,birim:"ay"},
          {label:`Hizmet Bedeli Oranı`,deger:oran,birim:"%"},
          {label:"Yapı Denetim Bedeli (KDV Hariç)",deger:Number(toplamKDVHaric.toFixed(2)),birim:"₺",vurgu:true},
          ...(p.kdvDahil?[
            {label:"KDV (%20)",deger:Number(kdv.toFixed(2)),birim:"₺"},
            {label:"ÖDENECEK YAPI DENETİM",deger:Number(toplamKDVDahil.toFixed(2)),birim:"₺",vurgu:true,ana:true}
          ]:[{label:"ÖDENECEK YAPI DENETİM",deger:Number(toplamKDVHaric.toFixed(2)),birim:"₺",vurgu:true,ana:true}])
        ],
        toplamMaliyet
      };
    }
  },
  tugla_hesabi:{
    ad:"Tuğla / Duvar Hesabı",
    kategoriler:["R","Y"],
    aciklama:"En×Boy ile duvar alanı, boşluk düşümü, tuğla adedi ve harç hesabı",
    icon:"🧱",
    parametreler:[
      {key:"en",label:"Duvar Eni (Genişlik)",tip:"sayi",birim:"m",varsayilan:10},
      {key:"boy",label:"Duvar Boyu (Yükseklik)",tip:"sayi",birim:"m",varsayilan:3},
      {key:"tuglaTipi",label:"Tuğla Tipi",tip:"secim",secenekler:[{v:"13.5",l:"13,5'luk Tuğla"},{v:"10",l:"10'luk Tuğla"}],varsayilan:"13.5"},
      {key:"orumSekli",label:"Örüm Şekli",tip:"secim",secenekler:[{v:"dik",l:"Dik (İnce Duvar)"},{v:"yatik",l:"Yatık (Kalın Duvar)"}],varsayilan:"dik"},
      {key:"firePay",label:"Fire Payı",tip:"secim",secenekler:[{v:3,l:"%3"},{v:5,l:"%5"},{v:7,l:"%7"}],varsayilan:5},
      {key:"bosluklar",label:"Boşluklar (Pencere, Kapı vb.)",tip:"dizi",alanlar:[
        {key:"ad",label:"Ad",tip:"metin",varsayilan:"Pencere"},
        {key:"en",label:"En",tip:"sayi",birim:"m",varsayilan:1.2},
        {key:"boy",label:"Boy",tip:"sayi",birim:"m",varsayilan:1.5},
        {key:"adet",label:"Adet",tip:"sayi",birim:"ad",varsayilan:1}
      ],varsayilan:[]}
    ],
    hesapla:(p)=>{
      const duvarEn=Number(p.en)||0, duvarBoy=Number(p.boy)||0, fire=Number(p.firePay)||5;
      const brutAlan=duvarEn*duvarBoy;
      const bosluklar=Array.isArray(p.bosluklar)?p.bosluklar:[];
      const boslukToplam=bosluklar.reduce((t,b)=>(Number(b.en)||0)*(Number(b.boy)||0)*(Number(b.adet)||0)+t,0);
      const netAlan=Math.max(0,brutAlan-boslukToplam);
      const adetTablosu={"13.5":{dik:25,yatik:35},"10":{dik:25,yatik:45}};
      const harcTablosu={"13.5":0.014,"10":0.012};
      const tipiObj=adetTablosu[p.tuglaTipi]||adetTablosu["13.5"];
      const birimAdet=tipiObj[p.orumSekli]||tipiObj.dik;
      const netAdet=Math.ceil(netAlan*birimAdet);
      const fireliAdet=Math.ceil(netAdet*(1+fire/100));
      const harcM3=netAlan*(harcTablosu[p.tuglaTipi]||0.014);
      const cimentoKg=harcM3*250;
      const kumM3=harcM3;
      const tuglaTipAd=`${p.tuglaTipi}'luk Tuğla`;
      const satirlar=[
        {label:`Brüt Duvar Alanı (${duvarEn} × ${duvarBoy})`,deger:Number(brutAlan.toFixed(2)),birim:"m²"},
      ];
      if(bosluklar.length>0){
        bosluklar.forEach(b=>{const a=(Number(b.en)||0)*(Number(b.boy)||0)*(Number(b.adet)||0);satirlar.push({label:`− ${b.ad||"Boşluk"} (${b.en}×${b.boy} × ${b.adet} ad)`,deger:Number(a.toFixed(2)),birim:"m²"});});
        satirlar.push({label:"Boşluk Toplamı",deger:Number(boslukToplam.toFixed(2)),birim:"m²",renk:"red"});
      }
      satirlar.push(
        {label:"Net Duvar Alanı",deger:Number(netAlan.toFixed(2)),birim:"m²",vurgu:true},
        {label:`Birim Adet (${p.orumSekli==="dik"?"Dik":"Yatık"})`,deger:birimAdet,birim:"ad/m²"},
        {label:"Net Tuğla Adedi",deger:netAdet,birim:"adet"},
        {label:`Fire Dahil (%${fire})`,deger:fireliAdet,birim:"adet",vurgu:true,ana:true},
        {label:"Harç Miktarı",deger:Number(harcM3.toFixed(3)),birim:"m³"},
        {label:"Çimento İhtiyacı",deger:Math.ceil(cimentoKg),birim:"kg"},
        {label:"Kum İhtiyacı",deger:Number(kumM3.toFixed(2)),birim:"m³"}
      );
      return {baslik:`${tuglaTipAd} — Duvar Hesabı`,satirlar,toplamMaliyet:null};
    }
  },
  beton_hesabi:{
    ad:"Beton Hesabı",
    kategoriler:["R","Y"],
    aciklama:"Beton hacmi üzerinden malzeme miktarı hesabı",
    icon:"🏗️",
    parametreler:[
      {key:"hacim",label:"Beton Hacmi",tip:"sayi",birim:"m³",varsayilan:10},
      {key:"betonSinifi",label:"Beton Sınıfı",tip:"secim",secenekler:[{v:"C20",l:"C20/25 (300 kg/m³)"},{v:"C25",l:"C25/30 (330 kg/m³)"},{v:"C30",l:"C30/37 (350 kg/m³)"}],varsayilan:"C25"},
      {key:"firePay",label:"Fire Payı",tip:"secim",secenekler:[{v:2,l:"%2"},{v:3,l:"%3"},{v:5,l:"%5"}],varsayilan:2}
    ],
    hesapla:(p)=>{
      const hacim=Number(p.hacim)||0, fire=Number(p.firePay)||2;
      const dozajlar={C20:300,C25:330,C30:350};
      const dozaj=dozajlar[p.betonSinifi]||330;
      const fireliHacim=hacim*(1+fire/100);
      const cimento=fireliHacim*dozaj;
      const kum=fireliHacim*651;
      const cakil=fireliHacim*1206;
      const su=fireliHacim*154;
      return {
        baslik:`${p.betonSinifi} Beton Malzeme Hesabı`,
        satirlar:[
          {label:"Net Beton Hacmi",deger:hacim,birim:"m³"},
          {label:`Fire Dahil (%${fire})`,deger:Number(fireliHacim.toFixed(2)),birim:"m³",vurgu:true},
          {label:`Çimento (${dozaj} kg/m³)`,deger:Math.ceil(cimento),birim:"kg",ana:true},
          {label:"Çimento (Torba)",deger:Math.ceil(cimento/50),birim:"torba"},
          {label:"Kum",deger:Math.ceil(kum),birim:"kg"},
          {label:"Çakıl",deger:Math.ceil(cakil),birim:"kg"},
          {label:"Su",deger:Math.ceil(su),birim:"lt"}
        ],
        toplamMaliyet:fireliHacim
      };
    }
  },
  demir_hesabi:{
    ad:"Donatı / Demir Hesabı",
    kategoriler:["R","Y"],
    aciklama:"İnşaat alanı veya beton hacmi üzerinden demir miktarı hesabı (İMO kabulleri)",
    icon:"⚙️",
    parametreler:[
      {key:"hesapTipi",label:"Hesap Yöntemi",tip:"secim",secenekler:[{v:"alan",l:"İnşaat Alanı (m²) ile"},{v:"hacim",l:"Beton Hacmi (m³) ile"}],varsayilan:"alan"},
      {key:"deger",label:"Miktar",tip:"sayi",birim:"",varsayilan:1000},
      {key:"yapiTipi",label:"Yapı Tipi",tip:"secim",secenekler:[{v:"karkas",l:"Betonarme Karkas (34 kg/m²)"},{v:"yigma",l:"Yığma Yapı (20 kg/m²)"}],varsayilan:"karkas"},
      {key:"firePay",label:"Fire Payı",tip:"secim",secenekler:[{v:3,l:"%3"},{v:5,l:"%5"}],varsayilan:3}
    ],
    hesapla:(p)=>{
      const deger=Number(p.deger)||0, fire=Number(p.firePay)||3;
      const kgM2={karkas:34,yigma:20};
      const betonM2={karkas:0.38,yigma:0.25};
      let demirKg, betonM3;
      if(p.hesapTipi==="alan"){
        demirKg=deger*(kgM2[p.yapiTipi]||34);
        betonM3=deger*(betonM2[p.yapiTipi]||0.38);
      }else{
        demirKg=deger*80;
        betonM3=deger;
      }
      const fireliDemir=demirKg*(1+fire/100);
      return {
        baslik:"Donatı (Demir) Hesabı",
        satirlar:[
          {label:p.hesapTipi==="alan"?"İnşaat Alanı":"Beton Hacmi",deger:deger,birim:p.hesapTipi==="alan"?"m²":"m³"},
          {label:"Net Demir Miktarı",deger:Math.ceil(demirKg),birim:"kg"},
          {label:`Fire Dahil (%${fire})`,deger:Math.ceil(fireliDemir),birim:"kg",vurgu:true,ana:true},
          {label:"Demir (Ton)",deger:Number((fireliDemir/1000).toFixed(2)),birim:"ton"},
          ...(p.hesapTipi==="alan"?[{label:"Tahmini Beton İhtiyacı",deger:Number(betonM3.toFixed(1)),birim:"m³"}]:[])
        ],
        toplamMaliyet:fireliDemir
      };
    }
  },
  siva_hesabi:{
    ad:"Sıva Hesabı",
    kategoriler:["M"],
    aciklama:"Duvar alanı üzerinden sıva malzeme miktarı hesabı",
    icon:"🪣",
    parametreler:[
      {key:"alan",label:"Sıva Alanı",tip:"sayi",birim:"m²",varsayilan:200},
      {key:"sivaTipi",label:"Sıva Tipi",tip:"secim",secenekler:[{v:"kaba",l:"Kaba Sıva (~2 cm)"},{v:"ince",l:"İnce Sıva (~0,8 cm)"},{v:"ikisi",l:"Kaba + İnce (Toplam)"}],varsayilan:"ikisi"},
      {key:"icDis",label:"İç / Dış Cephe",tip:"secim",secenekler:[{v:"ic",l:"İç Cephe (Kireçli)"},{v:"dis",l:"Dış Cephe (Kireçsiz)"}],varsayilan:"ic"}
    ],
    hesapla:(p)=>{
      const alan=Number(p.alan)||0;
      const kabaHarcM3=alan/30;
      const inceHarcM3=alan/37.5;
      let harcM3, cimentoKg, kumKg, kirecKg=0;
      if(p.sivaTipi==="kaba"){harcM3=kabaHarcM3;cimentoKg=harcM3*200;kumKg=harcM3*1500;}
      else if(p.sivaTipi==="ince"){harcM3=inceHarcM3;cimentoKg=harcM3*250;kumKg=harcM3*1500;}
      else{harcM3=kabaHarcM3+inceHarcM3;cimentoKg=kabaHarcM3*200+inceHarcM3*250;kumKg=harcM3*1500;}
      if(p.icDis==="ic")kirecKg=harcM3*50;
      return {
        baslik:"Sıva Malzeme Hesabı",
        satirlar:[
          {label:"Sıva Alanı",deger:alan,birim:"m²"},
          {label:"Harç Miktarı",deger:Number(harcM3.toFixed(2)),birim:"m³"},
          {label:"Çimento İhtiyacı",deger:Math.ceil(cimentoKg),birim:"kg",vurgu:true},
          {label:"Çimento (Torba)",deger:Math.ceil(cimentoKg/50),birim:"torba"},
          {label:"Kum İhtiyacı",deger:Math.ceil(kumKg),birim:"kg"},
          ...(kirecKg>0?[{label:"Kireç (İç Cephe)",deger:Math.ceil(kirecKg),birim:"kg"}]:[])
        ],
        toplamMaliyet:cimentoKg
      };
    }
  },
  boya_hesabi:{
    ad:"Boya Hesabı",
    kategoriler:["M"],
    aciklama:"Boyama alanı üzerinden boya miktarı ve ambalaj hesabı",
    icon:"🎨",
    parametreler:[
      {key:"alan",label:"Boyama Alanı",tip:"sayi",birim:"m²",varsayilan:150},
      {key:"boyaTipi",label:"Boya Tipi",tip:"secim",secenekler:[{v:"ic",l:"İç Cephe (10-12 m²/lt)"},{v:"dis",l:"Dış Cephe (8-10 m²/lt)"}],varsayilan:"ic"},
      {key:"katSayisi",label:"Kat Sayısı",tip:"secim",secenekler:[{v:1,l:"1 Kat"},{v:2,l:"2 Kat (Standart)"},{v:3,l:"3 Kat"}],varsayilan:2},
      {key:"astarVar",label:"Astar Uygulaması",tip:"evet_hayir",varsayilan:true}
    ],
    hesapla:(p)=>{
      const alan=Number(p.alan)||0, kat=Number(p.katSayisi)||2;
      const verimler={ic:11,dis:9};
      const verim=verimler[p.boyaTipi]||11;
      const boyaLt=(alan/verim)*kat;
      const astarLt=p.astarVar?(alan/12):0;
      const toplamLt=boyaLt+astarLt;
      const teneke15=Math.ceil(boyaLt/15);
      const teneke75=Math.ceil(boyaLt/7.5);
      const teneke25=Math.ceil(boyaLt/2.5);
      return {
        baslik:"Boya Miktarı Hesabı",
        satirlar:[
          {label:"Boyama Alanı",deger:alan,birim:"m²"},
          {label:`Verim (${p.boyaTipi==="ic"?"İç":"Dış"} Cephe)`,deger:verim,birim:"m²/lt"},
          {label:`Boya (${kat} kat)`,deger:Number(boyaLt.toFixed(1)),birim:"lt",vurgu:true,ana:true},
          ...(p.astarVar?[{label:"Astar",deger:Number(astarLt.toFixed(1)),birim:"lt"}]:[]),
          {label:"Toplam İhtiyaç",deger:Number(toplamLt.toFixed(1)),birim:"lt",vurgu:true},
          {label:"15 lt Teneke",deger:teneke15,birim:"adet"},
          {label:"7,5 lt Teneke",deger:teneke75,birim:"adet"},
          {label:"2,5 lt Teneke",deger:teneke25,birim:"adet"}
        ],
        toplamMaliyet:toplamLt
      };
    }
  }
};

/* ========== HESAPLAMA SEKMESİ BİLEŞENİ ========== */
const HesaplamaSekmesi=({kategori,malzemeId,malzemeAd,malzemeKodu="",zorSablon,seciliHesaplama,onSablonSec,onSonucAktar,planlananMiktar,kayitliParams,kayitliSonuc,onParamsChange,kdvOrani:propKdvOrani})=>{
  // zorSablon: Hesaplamalar sekmesinden direkt açılan şablon (detay görünümü)
  // seciliHesaplama: Karta bağlı şablon key (form.hesaplamaSablonu)
  // onSablonSec: Kart modunda şablon seçildiğinde callback
  const tumSablonlar=Object.entries(HESAPLAMA_SABLONLARI);
  const aktifSablon=zorSablon||seciliHesaplama||"";
  const[seciliSablon,setSeciliSablon]=useState(aktifSablon);
  const[params,setParams]=useState(kayitliParams||{});
  const[sonuc,setSonuc]=useState(kayitliSonuc||null);
  const[kayitlar,setKayitlar]=useState([]);
  const[kopyalandi,setKopyalandi]=useState(false);
  const[birimFiyat,setBirimFiyat]=useState("");

  useEffect(()=>{if(zorSablon)setSeciliSablon(zorSablon);},[zorSablon]);

  useEffect(()=>{
    if(seciliSablon&&HESAPLAMA_SABLONLARI[seciliSablon]){
      // Kayıtlı params varsa ve aynı şablonsa sıfırlama
      if(kayitliParams&&Object.keys(kayitliParams).length>0){return;}
      const s=HESAPLAMA_SABLONLARI[seciliSablon];
      const yeniP={};
      s.parametreler.forEach(p=>{yeniP[p.key]=p.varsayilan!==undefined?p.varsayilan:"";});
      if(planlananMiktar){
        if(yeniP.insaatAlani!==undefined)yeniP.insaatAlani=planlananMiktar;
        if(yeniP.en!==undefined&&yeniP.boy!==undefined)yeniP.en=planlananMiktar;
        if(yeniP.hacim!==undefined)yeniP.hacim=planlananMiktar;
        if(yeniP.deger!==undefined)yeniP.deger=planlananMiktar;
        if(yeniP.alan!==undefined)yeniP.alan=planlananMiktar;
      }
      setParams(yeniP);
      setSonuc(null);
    }
  },[seciliSablon]);

  // Planlanan Miktar değişince sadece ilgili parametreyi güncelle, sonucu koru
  useEffect(()=>{
    if(planlananMiktar&&seciliSablon){
      setParams(p=>{
        const yeni={...p};
        if(yeni.insaatAlani!==undefined)yeni.insaatAlani=planlananMiktar;
        if(yeni.duvarAlani!==undefined)yeni.duvarAlani=planlananMiktar;
        if(yeni.hacim!==undefined)yeni.hacim=planlananMiktar;
        if(yeni.deger!==undefined)yeni.deger=planlananMiktar;
        if(yeni.alan!==undefined)yeni.alan=planlananMiktar;
        return yeni;
      });
    }
  },[planlananMiktar]);

  const hesapla=()=>{
    if(!seciliSablon)return;
    const s=HESAPLAMA_SABLONLARI[seciliSablon];
    const r=s.hesapla(params);
    setSonuc(r);
    if(onParamsChange)onParamsChange({...params},r);
  };

  const kaydet=()=>{
    if(!sonuc)return;
    const yeniKayit={id:Date.now(),tarih:new Date().toISOString(),sablonKey:seciliSablon,sablonAd:HESAPLAMA_SABLONLARI[seciliSablon].ad,parametreler:{...params},sonuc:{...sonuc}};
    setKayitlar(prev=>[yeniKayit,...prev]);
  };

  const kopyala=()=>{
    if(!sonuc)return;
    const metin=sonuc.satirlar.map(s=>`${s.label}: ${typeof s.deger==="number"?s.deger.toLocaleString("tr-TR"):s.deger} ${s.birim}`).join("\n");
    navigator.clipboard.writeText(`${sonuc.baslik}\n${"─".repeat(40)}\n${metin}`);
    setKopyalandi(true);setTimeout(()=>setKopyalandi(false),2000);
  };

  const fmtN=(v)=>typeof v==="number"?v.toLocaleString("tr-TR",{minimumFractionDigits:0,maximumFractionDigits:2}):v;

  const kartModu=!zorSablon&&onSablonSec; // Kart içinden mi açıldı?
  const sablon=HESAPLAMA_SABLONLARI[seciliSablon];

  return <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
    {/* KART MODUNDA: DROPDOWN İLE ŞABLON SEÇ */}
    {kartModu&&<div>
      <div style={{fontSize:"13px",fontWeight:600,color:"#1677ff",marginBottom:"10px"}}>Bu kart için hesaplama şablonu seçin</div>
      <select value={seciliSablon} onChange={e=>{setSeciliSablon(e.target.value);onSablonSec(e.target.value);}} style={{width:"100%",maxWidth:"500px",padding:"10px 14px",borderRadius:"6px",border:"1px solid #d1d5db",fontSize:"14px",background:"#fff"}}>
        <option value="">— Şablon Seçiniz —</option>
        {tumSablonlar.map(([key,s])=><option key={key} value={key}>{s.icon} {s.ad}</option>)}
      </select>
      {seciliSablon&&sablon&&<div style={{marginTop:"8px",padding:"12px 16px",background:"#f0f9ff",borderRadius:"6px",border:"1px solid #bfdbfe"}}>
        <div style={{fontSize:"12px",color:"#1e40af",marginBottom:"8px"}}>{sablon.aciklama}</div>
        <div style={{fontSize:"11px",color:"#6B7280"}}>Parametreler: {sablon.parametreler.map(p=>p.label).join(", ")}</div>
        <div style={{fontSize:"11px",color:"#9CA3AF",marginTop:"4px"}}>Hesaplama Maliyet modülünde yapılacaktır.</div>
      </div>}
    </div>}

    {/* HESAPLAMALAR SEKMESİNDEN: DİREKT GÖSTERİM (zorSablon) — şablon seçimi yok */}
    {zorSablon&&sablon&&<div style={{padding:"12px 16px",background:"#f0f9ff",borderRadius:"8px",border:"1px solid #bfdbfe",display:"flex",alignItems:"center",gap:"12px"}}>
      <span style={{fontSize:"28px"}}>{sablon.icon}</span>
      <div>
        <div style={{fontSize:"16px",fontWeight:600,color:"#0958d9"}}>{sablon.ad}</div>
        <div style={{fontSize:"12px",color:"#6B7280"}}>{sablon.aciklama}</div>
      </div>
    </div>}

    {sablon&&!kartModu&&<>
      {/* PARAMETRELER */}
      <div style={{padding:"20px",background:"#fafafa",borderRadius:"8px",border:"1px solid #e5e7eb"}}>
        <div style={{fontSize:"13px",fontWeight:600,color:"#374151",marginBottom:"14px"}}>⚙️ PARAMETRELER</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:"14px"}}>
          {sablon.parametreler.map(pm=>{
            const val=params[pm.key]!==undefined?params[pm.key]:"";
            if(pm.tip==="sayi")return <div key={pm.key}>
              <label style={{fontSize:"12px",fontWeight:600,color:"#6B7280",display:"block",marginBottom:"4px"}}>{pm.label}</label>
              <div style={{display:"flex",alignItems:"center",gap:"6px"}}>
                <input type="number" value={val} onChange={e=>setParams(p=>({...p,[pm.key]:e.target.value}))} style={{flex:1,padding:"8px 12px",borderRadius:"6px",border:"1px solid #d1d5db",fontSize:"14px",background:"#fff"}}/>
                {pm.birim&&<span style={{fontSize:"13px",color:"#6B7280",whiteSpace:"nowrap"}}>{pm.birim}</span>}
              </div>
              {pm.aciklama&&<div style={{fontSize:"11px",color:"#9CA3AF",marginTop:"2px"}}>{pm.aciklama}</div>}
            </div>;
            if(pm.tip==="secim"){
              let secenekler=pm.secenekler;
              if(pm.dinamikSecenekler&&pm.key==="yapiSinifGrup"){
                const yil=params.yil||2026;
                const tablo=YAPI_SINIF_MALIYETLERI[yil]||YAPI_SINIF_MALIYETLERI[2026];
                secenekler=tablo.map(y=>({v:`${y.sinif}-${y.grup}`,l:`${y.label} — ${y.maliyet.toLocaleString("tr-TR")} ₺/m²`}));
              }
              // Yapı sınıfı seçimi sonrası birim maliyet gösterimi
              const birimMaliyetGoster=pm.dinamikSecenekler&&pm.key==="yapiSinifGrup";
              let seciliBirimMaliyet=null;
              if(birimMaliyetGoster){
                const yil2=params.yil||2026;
                const sg=val||"III-B";
                const [ss,gg]=String(sg).split("-");
                const tb=YAPI_SINIF_MALIYETLERI[yil2]||YAPI_SINIF_MALIYETLERI[2026];
                const bul=tb.find(y=>y.sinif===ss&&y.grup===gg);
                if(bul)seciliBirimMaliyet=bul.maliyet;
              }
              return <><div key={pm.key}>
              <label style={{fontSize:"12px",fontWeight:600,color:"#6B7280",display:"block",marginBottom:"4px"}}>{pm.label}</label>
              <select value={val} onChange={e=>setParams(p=>({...p,[pm.key]:isNaN(e.target.value)?e.target.value:Number(e.target.value)}))} style={{width:"100%",padding:"8px 12px",borderRadius:"6px",border:"1px solid #d1d5db",fontSize:"14px",background:"#fff"}}>
                {secenekler.map(s=><option key={s.v} value={s.v}>{s.l}</option>)}
              </select>
            </div>
            {birimMaliyetGoster&&seciliBirimMaliyet!==null&&<div key={pm.key+"_bm"}>
              <label style={{fontSize:"12px",fontWeight:600,color:"#6B7280",display:"block",marginBottom:"4px"}}>Birim Maliyet (TL/m²)</label>
              <div style={{padding:"10px 14px",borderRadius:"6px",border:"2px solid #1677ff",background:"#e6f4ff",fontSize:"18px",fontWeight:700,color:"#0958d9",textAlign:"center",letterSpacing:"0.5px"}}>
                {seciliBirimMaliyet.toLocaleString("tr-TR")} ₺/m²
              </div>
            </div>}
            </>;
            }
            if(pm.tip==="evet_hayir")return <div key={pm.key} style={{display:"flex",alignItems:"center",gap:"8px",paddingTop:"20px"}}>
              <input type="checkbox" checked={!!val} onChange={e=>setParams(p=>({...p,[pm.key]:e.target.checked}))} style={{width:"18px",height:"18px",accentColor:"#1677ff"}}/>
              <label style={{fontSize:"13px",fontWeight:500,color:"#374151"}}>{pm.label}</label>
            </div>;
            if(pm.tip==="dizi"){
              const liste=Array.isArray(val)?val:[];
              const ekle=()=>{const yeni={};pm.alanlar.forEach(a=>{yeni[a.key]=a.varsayilan!==undefined?a.varsayilan:"";});setParams(p=>({...p,[pm.key]:[...(Array.isArray(p[pm.key])?p[pm.key]:[]),yeni]}));};
              const guncelle=(idx,key,v)=>setParams(p=>{const arr=[...(p[pm.key]||[])];arr[idx]={...arr[idx],[key]:v};return{...p,[pm.key]:arr};});
              const sil=(idx)=>setParams(p=>({...p,[pm.key]:(p[pm.key]||[]).filter((_,i)=>i!==idx)}));
              return <div key={pm.key} style={{gridColumn:"1 / -1"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"}}>
                  <label style={{fontSize:"12px",fontWeight:600,color:"#6B7280"}}>{pm.label}</label>
                  <button onClick={ekle} style={{padding:"4px 12px",borderRadius:"6px",border:"1px solid #1677ff",background:"#e6f4ff",color:"#1677ff",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"}}>+ Boşluk Ekle</button>
                </div>
                {liste.length===0&&<div style={{padding:"12px 16px",background:"#fafafa",borderRadius:"6px",border:"1px dashed #d1d5db",fontSize:"12px",color:"#9CA3AF",textAlign:"center"}}>Boşluk yok — pencere, kapı vb. düşüm için ekleyin</div>}
                {liste.map((satir,idx)=><div key={idx} style={{display:"flex",gap:"8px",alignItems:"center",marginBottom:"6px",padding:"8px 12px",background:idx%2===0?"#fff":"#fafafa",borderRadius:"6px",border:"1px solid #e5e7eb"}}>
                  {pm.alanlar.map(a=>
                    a.tip==="metin"
                      ?<div key={a.key} style={{flex:2}}><input value={satir[a.key]||""} onChange={e=>guncelle(idx,a.key,e.target.value)} placeholder={a.label} style={{width:"100%",padding:"6px 10px",borderRadius:"4px",border:"1px solid #d1d5db",fontSize:"13px"}}/></div>
                      :<div key={a.key} style={{flex:1,display:"flex",alignItems:"center",gap:"4px"}}>
                        <input type="number" value={satir[a.key]||""} onChange={e=>guncelle(idx,a.key,e.target.value)} placeholder={a.label} style={{width:"100%",padding:"6px 10px",borderRadius:"4px",border:"1px solid #d1d5db",fontSize:"13px"}}/>
                        {a.birim&&<span style={{fontSize:"11px",color:"#9CA3AF",whiteSpace:"nowrap"}}>{a.birim}</span>}
                      </div>
                  )}
                  <div style={{fontSize:"12px",color:"#6B7280",whiteSpace:"nowrap",minWidth:"60px",textAlign:"right"}}>{((Number(satir.en)||0)*(Number(satir.boy)||0)*(Number(satir.adet)||0)).toFixed(2)} m²</div>
                  <button onClick={()=>sil(idx)} title="Kaldır" style={{padding:"2px",border:"none",background:"transparent",color:"#f5222d",cursor:"pointer",display:"flex",alignItems:"center"}}><Trash2 size={16}/></button>
                </div>)}
                {liste.length>0&&<div style={{textAlign:"right",fontSize:"12px",fontWeight:600,color:"#f5222d",marginTop:"4px"}}>Toplam Düşüm: {liste.reduce((t,b)=>(Number(b.en)||0)*(Number(b.boy)||0)*(Number(b.adet)||0)+t,0).toFixed(2)} m²</div>}
              </div>;
            }
            return null;
          })}
          <div key="_hesapla_btn" style={{display:"flex",alignItems:"flex-end",paddingTop:"4px"}}>
            <button onClick={hesapla} style={{padding:"10px 32px",borderRadius:"8px",border:"none",background:"#1677ff",color:"#fff",fontSize:"15px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",transition:"background .15s",height:"38px"}} onMouseEnter={e=>e.currentTarget.style.background="#0958d9"} onMouseLeave={e=>e.currentTarget.style.background="#1677ff"}>
              <RefreshCw size={16}/> Hesapla
            </button>
          </div>
        </div>
      </div>

      {/* SONUÇLAR */}
      {sonuc&&(()=>{
        const hesapKdvOran=parseInt(propKdvOrani||"20");
        const kdvHaricTutar=sonuc.toplamMaliyet||0;
        const kdvTutar=kdvHaricTutar*(hesapKdvOran/100);
        const kdvDahilTutar=kdvHaricTutar+kdvTutar;
        return <div style={{padding:"20px",background:"#f0f9ff",borderRadius:"8px",border:"2px solid #1677ff"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"14px"}}>
            <div style={{fontSize:"15px",fontWeight:700,color:"#0958d9"}}>{sonuc.baslik}</div>
            <div style={{display:"flex",gap:"8px"}}>
              {onSonucAktar&&<button onClick={()=>{const anaSatir=sonuc.satirlar.find(s=>s.ana);const bf=Number(birimFiyat)||0;const tutar=kdvHaricTutar>0?kdvHaricTutar:(anaSatir&&bf>0?anaSatir.deger*bf:0);onSonucAktar(tutar);}} style={{padding:"6px 14px",borderRadius:"6px",border:"none",background:"#52c41a",color:"#fff",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"}}>
                <ArrowDownFromLine size={14}/> Tutarı Aktar
              </button>}
            </div>
          </div>
          <div style={{background:"#fff",borderRadius:"6px",overflow:"hidden",border:"1px solid #e5e7eb"}}>
            {sonuc.satirlar.filter(s=>!s.label.includes("KDV")&&!s.label.includes("ÖDENECEK")).map((s,i,arr)=><div key={i} style={{display:"flex",justifyContent:"space-between",padding:"10px 16px",borderBottom:i<arr.length-1?"1px solid #f3f4f6":"none",background:s.vurgu?"#fafafa":"#fff"}}>
              <span style={{fontSize:"13px",color:s.vurgu?"#111827":"#6B7280",fontWeight:s.vurgu?600:400}}>{s.label}</span>
              <span style={{fontSize:"14px",fontWeight:s.vurgu?700:500,color:s.renk==="green"?"#16a34a":"#111827"}}>{fmtN(s.deger)} {s.birim}</span>
            </div>)}
            {/* KDV SATIRLARI — toplamMaliyet varsa direkt göster */}
            {kdvHaricTutar>0&&<div style={{borderTop:"2px solid #e5e7eb"}}>
              <div style={{display:"flex",justifyContent:"space-between",padding:"10px 16px",background:"#fafafa"}}>
                <span style={{fontSize:"13px",fontWeight:600,color:"#111827"}}>Tutar (KDV Hariç)</span>
                <span style={{fontSize:"14px",fontWeight:700,color:"#111827"}}>{fmtN(Number(kdvHaricTutar.toFixed(2)))} ₺</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",padding:"10px 16px",borderTop:"1px solid #f3f4f6"}}>
                <span style={{fontSize:"13px",fontWeight:500,color:"#6B7280"}}>KDV (%{hesapKdvOran})</span>
                <span style={{fontSize:"14px",fontWeight:600,color:"#6B7280"}}>{fmtN(Number(kdvTutar.toFixed(2)))} ₺</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",padding:"12px 16px",background:"#eef6ff",borderTop:"1px solid #e5e7eb"}}>
                <span style={{fontSize:"14px",fontWeight:700,color:"#0958d9"}}>GENEL TOPLAM (KDV Dahil)</span>
                <span style={{fontSize:"16px",fontWeight:700,color:"#0958d9"}}>{fmtN(Number(kdvDahilTutar.toFixed(2)))} ₺</span>
              </div>
            </div>}
            {/* BİRİM FİYAT GİRİŞİ — toplamMaliyet yoksa (miktar hesabı), kullanıcı birim fiyat girsin */}
            {(()=>{
              const anaSatir=sonuc.satirlar.find(s=>s.ana);
              if(kdvHaricTutar>0||!anaSatir)return null;
              const bf=Number(birimFiyat)||0;
              const toplamTutar=anaSatir.deger*bf;
              const bfKdv=toplamTutar*(hesapKdvOran/100);
              const bfDahil=toplamTutar+bfKdv;
              return <div style={{borderTop:"2px solid #e5e7eb"}}>
                <div style={{display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",background:"#fffbe6",borderBottom:"1px solid #f3f4f6"}}>
                  <span style={{fontSize:"13px",fontWeight:600,color:"#d48806",whiteSpace:"nowrap"}}>Birim Fiyat</span>
                  <input type="number" value={birimFiyat} onChange={e=>setBirimFiyat(e.target.value)} placeholder="0.00" style={{width:"120px",padding:"6px 10px",borderRadius:"4px",border:"1px solid #fadb14",fontSize:"14px",fontWeight:600,textAlign:"right",background:"#fff"}}/>
                  <span style={{fontSize:"13px",color:"#d48806"}}>₺ / {anaSatir.birim}</span>
                  <span style={{fontSize:"12px",color:"#8c8c8c",marginLeft:"auto"}}>× {fmtN(anaSatir.deger)} {anaSatir.birim}</span>
                </div>
                {bf>0&&<>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"10px 16px",background:"#fafafa"}}>
                    <span style={{fontSize:"13px",fontWeight:600,color:"#111827"}}>Tutar (KDV Hariç)</span>
                    <span style={{fontSize:"14px",fontWeight:700,color:"#111827"}}>{fmtN(Number(toplamTutar.toFixed(2)))} ₺</span>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"10px 16px",borderTop:"1px solid #f3f4f6"}}>
                    <span style={{fontSize:"13px",fontWeight:500,color:"#6B7280"}}>KDV (%{hesapKdvOran})</span>
                    <span style={{fontSize:"14px",fontWeight:600,color:"#6B7280"}}>{fmtN(Number(bfKdv.toFixed(2)))} ₺</span>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"12px 16px",background:"#eef6ff",borderTop:"1px solid #e5e7eb"}}>
                    <span style={{fontSize:"14px",fontWeight:700,color:"#0958d9"}}>GENEL TOPLAM (KDV Dahil)</span>
                    <span style={{fontSize:"16px",fontWeight:700,color:"#0958d9"}}>{fmtN(Number(bfDahil.toFixed(2)))} ₺</span>
                  </div>
                </>}
              </div>;
            })()}
          </div>
        </div>;
      })()}

    </>}
  </div>;
};
const TEKLIF_DEMO=[];
const MLZ_DEMO=[];

const DEMO=[
  {id:1,firmaKodu:"120.1.00001",ad:"Özkan Ailesi",aciklama:"A Blok Daire 5 alıcısı",turler:["alici"],paraBirimi:"TL",vergiDairesi:"",vergiNo:"12345678901",telefon:"0538 111 00 22",sabitTelefon:"",webAdresi:"",eposta:"m.ozkan@gmail.com",mahalle:"Çay",adres:"Lale Sok. No:14",il:"Samsun",ilce:"Terme",bankaAdi:"İş Bankası",iban:"TR67 0006 4000 0011 2233 4455 66",kisiler:[{id:7,cinsiyet:"Bay",ad:"Mustafa",soyad:"Özkan",telefon:"0538 111 00 22",eposta:"m.ozkan@gmail.com",unvan:""}],notlar:[{id:6,tarih:"2026-02-10",yazar:"Admin",metin:"A Blok Daire 5 sözleşme. ₺3.250.000"},{id:7,tarih:"2026-02-12",yazar:"Admin",metin:"Kapora: ₺500.000"}],belgeler:[],createdAt:"2026-01-05"},
  {id:2,firmaKodu:"320.1.00001",ad:"Karadeniz Hazır Beton",aciklama:"Beton ve agrega tedarikçisi",turler:["tedarikci"],paraBirimi:"TL",vergiDairesi:"Terme",vergiNo:"1234567890",telefon:"0532 111 22 33",sabitTelefon:"0362 876 11 22",webAdresi:"www.kdenizbeton.com",eposta:"info@kdenizbeton.com",mahalle:"Sanayi",adres:"Sanayi Sitesi No:12",il:"Samsun",ilce:"Terme",bankaAdi:"Ziraat Bankası",iban:"TR12 0001 0012 3456 7890 1234 56",kisiler:[{id:1,cinsiyet:"Bay",ad:"Mehmet",soyad:"Yılmaz",telefon:"0532 111 22 33",eposta:"mehmet@kdeniz.com",unvan:"Genel Müdür"},{id:2,cinsiyet:"Bayan",ad:"Ayşe",soyad:"Kaya",telefon:"0533 222 33 44",eposta:"ayse@kdeniz.com",unvan:"Satış Müdürü"}],notlar:[{id:1,tarih:"2025-12-15",yazar:"Admin",metin:"Beton fiyatları güncellendi. ₺2.850/m³"}],belgeler:[],createdAt:"2025-10-01"},
  {id:3,firmaKodu:"321.1.00001",ad:"Ahmet Demir İnşaat",aciklama:"Kaba inşaat taşeronu",turler:["taseron"],paraBirimi:"TL",vergiDairesi:"Terme",vergiNo:"9876543210",telefon:"0535 444 55 66",sabitTelefon:"",webAdresi:"",eposta:"ahmet@demirinsaat.com",mahalle:"Cumhuriyet",adres:"No:5",il:"Samsun",ilce:"Terme",bankaAdi:"Halkbank",iban:"TR98 0001 2345 6789 0123 4567 89",kisiler:[{id:3,cinsiyet:"Bay",ad:"Ahmet",soyad:"Demir",telefon:"0535 444 55 66",eposta:"ahmet@demirinsaat.com",unvan:"Firma Sahibi"}],notlar:[{id:3,tarih:"2026-01-10",yazar:"Admin",metin:"Kaba inşaat anlaşması. m² fiyat: ₺4.200"}],belgeler:[],createdAt:"2025-09-15"},
  {id:4,firmaKodu:"322.1.00001",ad:"Terme Belediyesi",aciklama:"İmar ve ruhsat işlemleri",turler:["resmi"],paraBirimi:"TL",vergiDairesi:"Terme",vergiNo:"5555555555",telefon:"0362 876 10 10",sabitTelefon:"0362 876 10 11",webAdresi:"www.terme.bel.tr",eposta:"info@terme.bel.tr",mahalle:"Merkez",adres:"Belediye Binası",il:"Samsun",ilce:"Terme",bankaAdi:"",iban:"",kisiler:[{id:4,cinsiyet:"Bay",ad:"Ali",soyad:"Öztürk",telefon:"0362 876 10 10",eposta:"imar@terme.bel.tr",unvan:"İmar Müdürü"}],notlar:[{id:4,tarih:"2026-02-01",yazar:"Admin",metin:"Yapı ruhsatı başvurusu. Dosya: 2026/TR-0142"}],belgeler:[],createdAt:"2025-08-01"},
  {id:5,firmaKodu:"320.2.00002",ad:"Atlas Steel Import",aciklama:"Çelik ithalat tedarikçisi",turler:["tedarikci"],paraBirimi:"USD",vergiDairesi:"Terme",vergiNo:"9998887776",telefon:"0536 777 88 99",sabitTelefon:"",webAdresi:"www.atlassteel.com",eposta:"info@atlassteel.com",mahalle:"Atatürk",adres:"Atatürk Cad. No:78/A",il:"Samsun",ilce:"Terme",bankaAdi:"Garanti BBVA",iban:"TR45 0006 2000 1234 5678 9012 34",kisiler:[{id:5,cinsiyet:"Bay",ad:"Hasan",soyad:"Yılmaz",telefon:"0536 777 88 99",eposta:"hasan@atlassteel.com",unvan:"Genel Müdür"}],notlar:[{id:5,tarih:"2026-01-25",yazar:"Admin",metin:"Çelik ithalatı fiyat teklifi alındı"}],belgeler:[],createdAt:"2025-11-10"}
];
const T={primary:"#1677ff",pBg:"#e6f4ff",pDark:"#0958d9",bg:"#F4F7FE",card:"#fff",sidebar:"#384248",border:"#0000001f",bDark:"#d9d9d9",text:"rgb(17,24,39)",t2:"rgb(107,114,128)",t3:"rgb(149,156,169)",ok:"#52c41a",warn:"#faad14",err:"#ff4d4f",r:"8px",rl:"16px",sh:"0 0 5px 5px rgba(0,0,0,0.03)",shM:"0 6px 16px 0 rgba(0,0,0,0.08),0 3px 6px -4px rgba(0,0,0,0.12),0 9px 28px 8px rgba(0,0,0,0.05)",f:"'Be Vietnam',sans-serif"};
/* ---- AKTİF/PASİF TOGGLE SWITCH ---- */
const AktifPasifToggle=({aktif,onChange})=>{
  const toggle=()=>{
    const mesaj=aktif?"Bu kaydı PASİF'e almak istediğinizden emin misiniz?":"Bu kaydı AKTİF'e almak istediğinizden emin misiniz?";
    if(!confirm(mesaj))return;
    onChange(!aktif);
  };
  return <button onClick={toggle} title={aktif?"Aktif — pasif yapmak için tıkla":"Pasif — aktif yapmak için tıkla"} style={{display:"flex",alignItems:"center",gap:"8px",padding:"0",border:"none",background:"transparent",cursor:"pointer"}}>
    <div style={{width:"40px",height:"22px",borderRadius:"11px",background:aktif?"#52c41a":"#d9d9d9",position:"relative",transition:"background .3s",flexShrink:0}}>
      <div style={{width:"18px",height:"18px",borderRadius:"50%",background:"#fff",position:"absolute",top:"2px",left:aktif?"20px":"2px",transition:"left .3s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}}/>
    </div>
    <span style={{fontSize:"12px",fontWeight:600,color:aktif?"#52c41a":"#ff4d4f",letterSpacing:"0.3px",whiteSpace:"nowrap"}}>{aktif?"AKTİF":"PASİF"}</span>
  </button>;
};

const Badge=({type})=>{const t=FIRMA_TURLERI.find(f=>f.id===type);if(!t)return null;return <span style={{display:"inline-flex",alignItems:"center",gap:"4px",padding:"0 8px",height:"22px",borderRadius:"4px",fontSize:"12px",fontWeight:500,color:t.color,background:t.bg,border:`1px solid ${t.color}33`,lineHeight:"22px"}}>{t.icon} {t.label}</span>;};
const PBadge=({pb})=>{const p=PARA_BIRIMLERI.find(x=>x.id===pb);if(!p)return null;return <span style={{display:"inline-flex",alignItems:"center",padding:"0 8px",height:"22px",borderRadius:"4px",fontSize:"12px",fontWeight:600,color:"#389e0d",background:"#f6ffed",border:"1px solid #b7eb8f",lineHeight:"22px"}}>{p.symbol} {p.id}</span>;};
const iS={width:"100%",height:"36px",padding:"0 11px",borderRadius:T.r,border:`1px solid ${T.bDark}`,background:"#fff",color:T.text,fontSize:"16px",outline:"none",transition:"all .3s",boxSizing:"border-box",lineHeight:"36px"};
const lS={display:"block",color:T.text,fontSize:"14px",fontWeight:500,marginBottom:"8px"};
const foc=(e)=>{e.target.style.borderColor=T.primary;e.target.style.boxShadow=`0 0 0 2px ${T.primary}1a`;};
const blr=(e)=>{e.target.style.borderColor=T.bDark;e.target.style.boxShadow="none";};

// Binlik ayraçlı sayı input'u — odakta raw (1234,5), odak dışı formatlı (1.234,5)
const NumInput=({value,onChange,style,placeholder,...rest})=>{
  const[focused,setFocused]=useState(false);
  const display=focused
    ?(value==null||value===""?"":String(value).replace(".",","))
    :(value==null||value===""?"":Number(value).toLocaleString("tr-TR",{maximumFractionDigits:10}));
  return <input
    type="text"
    inputMode="decimal"
    style={style}
    value={display}
    placeholder={placeholder}
    onFocus={e=>{setFocused(true);foc(e);rest.onFocus&&rest.onFocus(e);}}
    onBlur={e=>{setFocused(false);blr(e);rest.onBlur&&rest.onBlur(e);}}
    onChange={e=>{
      const val=e.target.value.replace(/[^\d,]/g,"").replace(",",".");
      onChange(val);
    }}
  />;
};

const Sel=({label,value,options,onChange,placeholder})=>{
  const[open,setOpen]=useState(false);
  const[s,setS]=useState("");
  const[hi,setHi]=useState(-1);
  const listRef=React.useRef(null);
  const fil=options.filter(o=>nTR(o).includes(nTR(s)));
  const onKey=(e)=>{
    if(e.key==="ArrowDown"){e.preventDefault();setHi(p=>p<fil.length-1?p+1:0);}
    else if(e.key==="ArrowUp"){e.preventDefault();setHi(p=>p>0?p-1:fil.length-1);}
    else if(e.key==="Enter"&&hi>=0&&hi<fil.length){e.preventDefault();onChange(fil[hi]);setOpen(false);setS("");setHi(-1);}
    else if(e.key==="Escape"){setOpen(false);setS("");setHi(-1);}
  };
  React.useEffect(()=>{if(hi>=0&&listRef.current){const el=listRef.current.children[hi];if(el)el.scrollIntoView({block:"nearest"});}},[hi]);
  React.useEffect(()=>{setHi(-1);},[s]);
  return <div style={{position:"relative"}}>{label&&<label style={lS}>{label}</label>}<button type="button" onClick={()=>{setOpen(!open);setHi(-1);}} style={{width:"100%",height:"36px",padding:"0 11px",borderRadius:T.r,border:`1px solid ${open?T.primary:T.bDark}`,background:"#fff",color:value?T.text:T.t3,fontSize:"16px",textAlign:"left",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:open?`0 0 0 2px ${T.primary}1a`:"none",transition:"all .3s",boxSizing:"border-box"}}><span>{value||placeholder||"Seçiniz..."}</span><span style={{color:T.t3,fontSize:"10px"}}>{open?"▲":"▼"}</span></button>{open&&<><div style={{position:"absolute",top:"100%",left:0,right:0,zIndex:100,background:"#fff",border:`1px solid ${T.border}`,borderRadius:T.r,marginTop:"4px",maxHeight:"256px",overflow:"hidden",boxShadow:T.shM,display:"flex",flexDirection:"column"}}><div style={{padding:"8px"}}><input autoFocus style={{...iS,padding:"0 8px",fontSize:"16px"}} value={s} onChange={e=>setS(e.target.value)} onKeyDown={onKey} placeholder="Ara..." onFocus={foc} onBlur={blr}/></div><div ref={listRef} style={{overflow:"auto",maxHeight:"200px"}}>{fil.length===0?<div style={{padding:"12px",color:T.t3,fontSize:"16px",textAlign:"center"}}>Sonuç yok</div>:fil.map((o,idx)=><button key={o} onClick={()=>{onChange(o);setOpen(false);setS("");setHi(-1);}} style={{width:"100%",padding:"7px 12px",border:"none",background:hi===idx?T.pBg:value===o?T.pBg:"#fff",color:hi===idx?T.primary:value===o?T.primary:T.text,fontSize:"16px",cursor:"pointer",textAlign:"left",fontWeight:(hi===idx||value===o)?500:400}} onMouseEnter={e=>{setHi(idx);}} onMouseLeave={e=>{}}>{o}</button>)}</div></div><div style={{position:"fixed",inset:0,zIndex:99}} onClick={()=>{setOpen(false);setS("");setHi(-1);}}/></>}</div>;
};

const SortBtn=({label,sortState,onSort,sortKey})=>{
  const active=sortState.key===sortKey;
  return <button onClick={()=>onSort(p=>p.key===sortKey?{key:sortKey,dir:p.dir*-1}:{key:sortKey,dir:1})} style={{padding:"4px 10px",borderRadius:"4px",border:`1px solid ${active?T.primary:T.bDark}`,background:active?T.pBg:"#fff",color:active?T.primary:T.t2,fontSize:"12px",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"}}>
    {label} {active?(sortState.dir===1?"↑":"↓"):"↕"}
  </button>;
};

const Sidebar=({page,setPage,open,editMode=false})=>{
  const[openGroups,setOpenGroups]=useState({siparisler:true,faturalar:true});
  const toggleGroup=(g)=>setOpenGroups(p=>({...p,[g]:!p[g]}));
  const[uyariHedef,setUyariHedef]=useState(null);
  const sayfaDegistir=(hedef)=>{if(editMode){setUyariHedef(hedef);return;}setPage(hedef);};

  const items=[
    {id:"dashboard",label:"DASHBOARD"},
    {id:"firmalar",label:"FİRMALAR"},
    {id:"malzemeler",label:"MALZEMELER"},
    {id:"projeler",label:"PROJELER"},
    {type:"group",groupId:"siparisler",label:"SİPARİŞLER",children:[
      {id:"teklifler",label:"Teklif Alma"},
      {id:"satinalma",label:"Satınalma Siparişleri"},
      {id:"teklif_verme",label:"Teklif Verme"},
      {id:"satinalma_sp",label:"Satış Siparişleri"},
    ]},
    {type:"group",groupId:"faturalar",label:"FATURALAR",children:[
      {id:"alis_fatura",label:"Alış Faturaları"},
      {id:"satis_fatura",label:"Satış Faturaları"},
    ]},
    {id:"maliyet",label:"MALİYET"},
    {id:"satis_sunum",label:"SATIŞ"},
  ];

  const SB={
    bg:"#384248",
    btn:"#3b4a51",
    active:"#8799a3",
    hover:"#8799a3",
    font:"'Inter',sans-serif",
    logoFont:"'Bebas Neue','Inter',sans-serif",
  };

  const renderBtn=(it,isSub=false)=>{
    const act=page===it.id;
    const disabled=editMode&&!act;
    return <button key={it.id} onClick={()=>sayfaDegistir(it.id)} style={{
      width:"100%",display:"block",padding:isSub?"9px 16px 9px 36px":"10px 16px",
      marginBottom:"4px",border:"none",borderRadius:"6px",
      cursor:disabled?"not-allowed":"pointer",
      background:act?SB.active:SB.btn,
      color:act?"#000":(disabled?"rgba(255,255,255,0.35)":"#fff"),
      fontFamily:SB.font,fontSize:"14px",fontWeight:400,
      textTransform:isSub?"none":"uppercase",
      textAlign:"left",whiteSpace:"nowrap",
      transition:"all .15s",letterSpacing:isSub?"0":"0.3px",
      opacity:disabled?0.5:1,
    }}
    onMouseEnter={e=>{if(!act&&!disabled){e.currentTarget.style.background=SB.hover;e.currentTarget.style.color="#000";}}}
    onMouseLeave={e=>{if(!act&&!disabled){e.currentTarget.style.background=SB.btn;e.currentTarget.style.color=disabled?"rgba(255,255,255,0.35)":"#fff";}}}
    >{it.label}</button>;
  };

  return <div style={{width:open?"264px":"0",minWidth:open?"264px":"0",height:"100vh",background:SB.bg,display:"flex",flexDirection:"column",transition:"width .3s cubic-bezier(.2,0,0,1),min-width .3s cubic-bezier(.2,0,0,1)",overflow:"hidden"}}>
    {/* LOGO */}
    <div style={{padding:"24px 24px 20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
      <img src={operonLogo} alt="OPERON" style={{maxWidth:"160px",height:"auto"}}/>
    </div>
    {/* MENÜ */}
    <nav style={{padding:"0 10px",flex:1,overflow:"auto",display:"flex",flexDirection:"column",gap:"4px"}}>
      {items.map((it,idx)=>{
        if(it.type==="group"){
          const isOpen=openGroups[it.groupId]!==false;
          const childActive=it.children.some(c=>page===c.id);
          const grpDisabled=editMode&&!childActive;
          return <div key={it.groupId}>
            <button onClick={()=>{if(!grpDisabled)toggleGroup(it.groupId);}} style={{
              width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",
              padding:"10px 16px",marginBottom:"4px",border:"none",borderRadius:"6px",
              cursor:grpDisabled?"not-allowed":"pointer",background:childActive?SB.active:SB.btn,
              color:childActive?"#000":(grpDisabled?"rgba(255,255,255,0.35)":"#fff"),
              fontFamily:SB.font,fontSize:"14px",fontWeight:400,
              textTransform:"uppercase",textAlign:"left",whiteSpace:"nowrap",
              transition:"all .15s",letterSpacing:"0.3px",
              opacity:grpDisabled?0.5:1,
            }}
            onMouseEnter={e=>{if(!childActive&&!grpDisabled){e.currentTarget.style.background=SB.hover;e.currentTarget.style.color="#000";}}}
            onMouseLeave={e=>{if(!childActive&&!grpDisabled){e.currentTarget.style.background=SB.btn;e.currentTarget.style.color=grpDisabled?"rgba(255,255,255,0.35)":"#fff";}}}
            ><span>{it.label}</span><span style={{fontSize:"10px",transition:"transform .2s",transform:isOpen?"rotate(180deg)":"rotate(0)"}}>{isOpen?"▲":"▼"}</span></button>
            {isOpen&&<div style={{display:"flex",flexDirection:"column",gap:"2px",paddingBottom:"2px"}}>
              {it.children.map(c=>renderBtn(c,true))}
            </div>}
          </div>;
        }
        return renderBtn(it);
      })}
    </nav>
    {/* ALT KISIM */}
    <div style={{padding:"16px 20px",borderTop:"1px solid rgba(255,255,255,0.08)",display:"flex",alignItems:"center",gap:"10px"}}>
      <div style={{width:"32px",height:"32px",borderRadius:"50%",background:"#8799a3",display:"flex",alignItems:"center",justifyContent:"center",color:"#384248",fontWeight:600,fontSize:"13px",flexShrink:0}}>A</div>
      <div><div style={{color:"rgba(255,255,255,0.85)",fontSize:"13px",fontWeight:500,whiteSpace:"nowrap",fontFamily:SB.font}}>Admin</div><div style={{color:"rgba(255,255,255,0.4)",fontSize:"11px",whiteSpace:"nowrap",fontFamily:SB.font}}>Yönetici</div></div>
    </div>
    {uyariHedef&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1100,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={()=>setUyariHedef(null)}>
      <div onClick={e=>e.stopPropagation()} style={{background:"#fff",borderRadius:T.rl,padding:"28px 32px",maxWidth:"420px",width:"90%",boxShadow:T.shM}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"}}>
          <div style={{width:"40px",height:"40px",borderRadius:"50%",background:"#fff7e6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",flexShrink:0}}>⚠️</div>
          <div style={{fontSize:"16px",fontWeight:600,color:T.text}}>Kaydedilmemiş değişiklikler var</div>
        </div>
        <div style={{fontSize:"14px",color:T.t2,marginBottom:"24px",lineHeight:"1.5"}}>Şu an bir kayıt düzenliyorsunuz. Kaydetmeden çıkarsanız değişiklikleriniz kaybolacak.</div>
        <div style={{display:"flex",justifyContent:"flex-end",gap:"10px"}}>
          <button onClick={()=>setUyariHedef(null)} style={{padding:"8px 20px",borderRadius:T.r,border:`1px solid ${T.border}`,background:"#fff",color:T.t2,fontSize:"14px",cursor:"pointer"}}>İptal</button>
          <button onClick={()=>{setPage(uyariHedef);setUyariHedef(null);}} style={{padding:"8px 20px",borderRadius:T.r,border:"none",background:T.err,color:"#fff",fontSize:"14px",fontWeight:600,cursor:"pointer"}}>Kaydetmeden Çık</button>
        </div>
      </div>
    </div>}
  </div>;
};;


const DashPage=({firmalar,malzemeler,teklifler=[],setPage})=>{const topKalem=teklifler.reduce((s,t)=>s+t.kalemler.length,0);const st=[{l:"Toplam Firma",v:firmalar.length,c:"#1677ff",bg:"#e6f4ff",i:"🏢",p:"firmalar"},{l:"Toplam Malzeme",v:malzemeler.length,c:"#722ED1",bg:"#f9f0ff",i:"🧱",p:"malzemeler"},{l:"Alınan Teklifler",v:`${teklifler.length} / ${topKalem}`,c:"#13c2c2",bg:"#e6fffb",i:"📋",p:"malzemeler"},{l:"Tedarikçiler",v:firmalar.filter(f=>f.turler.includes("tedarikci")).length,c:"#52c41a",bg:"#f6ffed",i:"📦",p:"firmalar"}];return <div>
  <div style={{marginBottom:"24px"}}><h2 style={{fontSize:"20px",fontWeight:600,color:T.text,margin:0}}>Dashboard</h2><p style={{color:T.t2,fontSize:"14px",margin:"4px 0 0"}}>OPERON • Genel bakış</p></div>
  <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px",marginBottom:"24px"}}>{st.map((s,i)=><div key={i} onClick={()=>setPage(s.p||"firmalar")} style={{background:T.card,borderRadius:T.rl,padding:"20px 24px",border:`1px solid ${T.border}`,boxShadow:T.sh,cursor:"pointer",transition:"all .3s"}} onMouseEnter={e=>{e.currentTarget.style.boxShadow=T.shM;}} onMouseLeave={e=>{e.currentTarget.style.boxShadow=T.sh;}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}><div><div style={{color:T.t2,fontSize:"14px",marginBottom:"8px"}}>{s.l}</div><div style={{fontSize:"30px",fontWeight:600,color:T.text}}>{s.v}</div></div><div style={{width:"48px",height:"48px",borderRadius:"12px",background:s.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px"}}>{s.i}</div></div></div>)}</div>
  <div style={{background:T.card,borderRadius:T.rl,border:`1px solid ${T.border}`,boxShadow:T.sh}}><div style={{padding:"16px 24px",borderBottom:`1px solid ${T.border}`}}><h3 style={{fontSize:"16px",fontWeight:600,color:T.text,margin:0}}>Son Firmalar</h3></div><div style={{padding:"0 24px"}}>{firmalar.slice(-5).reverse().map((f,i)=><div key={f.id} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 0",borderBottom:i<4?`1px solid ${T.border}`:"none"}}><div style={{display:"flex",alignItems:"center",gap:"12px"}}><div style={{width:"36px",height:"36px",borderRadius:T.r,background:T.pBg,display:"flex",alignItems:"center",justifyContent:"center",color:T.primary,fontWeight:600,fontSize:"15px"}}>{f.ad.charAt(0)}</div><div><div style={{fontWeight:500,fontSize:"14px",color:T.text}}>{f.ad}</div><span style={{color:T.t2,fontSize:"12px",fontFamily:"monospace"}}>{f.firmaKodu}</span></div></div><div style={{display:"flex",gap:"6px"}}>{f.turler.map(t=><Badge key={t} type={t}/>)}<PBadge pb={f.paraBirimi}/></div></div>)}</div></div>
</div>;};

/* ========== FIRMA KODU POPUP (AYNI KALIYOR) ========== */
const FirmaKoduCreator=({firmalar,onComplete,onClose})=>{const[step,setStep]=useState(1);const[selTur,setSelTur]=useState(null);const[selPara,setSelPara]=useState(null);const getNext=(tk,pk)=>{const pre=`${tk}.${pk}.`;const ex=firmalar.filter(f=>f.firmaKodu.startsWith(pre)).map(f=>{const n=parseInt(f.firmaKodu.split(".")[2],10);return isNaN(n)?0:n;});return String((ex.length>0?Math.max(...ex):0)+1).padStart(5,"0");};const turObj=FIRMA_TURLERI.find(t=>t.id===selTur);const paraObj=PARA_BIRIMLERI.find(p=>p.id===selPara);const nextNum=(turObj&&paraObj)?getNext(turObj.kod,paraObj.kod):"00001";
  return <div style={{position:"fixed",inset:0,zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.45)"}} onClick={onClose}><div onClick={e=>e.stopPropagation()} style={{width:"520px",background:"#fff",borderRadius:T.rl,boxShadow:T.shM,overflow:"hidden"}}>
    <div style={{padding:"16px 24px",borderBottom:`1px solid ${T.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><div style={{fontSize:"16px",fontWeight:600,color:T.text}}>Firma Kodu Oluştur</div><div style={{color:T.t2,fontSize:"13px"}}>Adım {step} / 2</div></div><button onClick={onClose} style={{background:"none",border:"none",fontSize:"18px",color:T.t3,cursor:"pointer",padding:"4px"}}>✕</button></div>
    <div style={{padding:"16px 24px",background:"#fafafa",borderBottom:`1px solid ${T.border}`,display:"flex",alignItems:"center",gap:"4px",fontFamily:"'SF Mono','Courier New',monospace"}}><span style={{fontSize:"26px",fontWeight:700,color:turObj?T.primary:"#d9d9d9"}}>{turObj?turObj.kod:"---"}</span><span style={{fontSize:"26px",color:"#d9d9d9"}}>.</span><span style={{fontSize:"26px",fontWeight:700,color:paraObj?"#52c41a":"#d9d9d9"}}>{paraObj?paraObj.kod:"--"}</span><span style={{fontSize:"26px",color:"#d9d9d9"}}>.</span><span style={{fontSize:"26px",fontWeight:700,color:(turObj&&paraObj)?T.primary:"#d9d9d9"}}>{(turObj&&paraObj)?nextNum:"-----"}</span></div>
    <div style={{padding:"24px"}}>
      {step===1&&<div><div style={{fontSize:"14px",fontWeight:600,color:T.text,marginBottom:"12px"}}>Firma Türünü Seçin</div><div style={{display:"flex",flexDirection:"column",gap:"8px"}}>{FIRMA_TURLERI.map(t=>{const sel=selTur===t.id;return <button key={t.id} onClick={()=>setSelTur(t.id)} style={{display:"flex",alignItems:"center",gap:"14px",padding:"12px 16px",borderRadius:T.r,border:`1px solid ${sel?t.color:T.border}`,background:sel?t.bg:"#fff",cursor:"pointer",transition:"all .2s"}}><span style={{fontSize:"22px"}}>{t.icon}</span><div style={{flex:1,textAlign:"left"}}><div style={{fontWeight:sel?600:500,color:sel?t.color:T.text,fontSize:"14px"}}>{t.label}</div><div style={{color:T.t2,fontSize:"12px"}}>Kod: {t.kod}</div></div>{sel&&<span style={{color:t.color,fontSize:"16px"}}>✓</span>}</button>})}</div><div style={{display:"flex",justifyContent:"flex-end",marginTop:"20px"}}><button onClick={()=>{if(selTur)setStep(2);else alert("Firma türü seçiniz!");}} style={{padding:"8px 24px",borderRadius:"6px",border:"none",background:selTur?T.primary:"#d9d9d9",color:"#fff",fontWeight:500,fontSize:"14px",cursor:selTur?"pointer":"not-allowed"}}>Devam →</button></div></div>}
      {step===2&&<div><div style={{fontSize:"14px",fontWeight:600,color:T.text,marginBottom:"12px"}}>Para Birimini Seçin</div><div style={{display:"flex",flexDirection:"column",gap:"8px"}}>{PARA_BIRIMLERI.map(p=>{const sel=selPara===p.id;return <button key={p.id} onClick={()=>setSelPara(p.id)} style={{display:"flex",alignItems:"center",gap:"14px",padding:"12px 16px",borderRadius:T.r,border:`1px solid ${sel?"#52c41a":T.border}`,background:sel?"#f6ffed":"#fff",cursor:"pointer",transition:"all .2s"}}><span style={{width:"36px",height:"36px",borderRadius:T.r,background:sel?"#52c41a22":"#fafafa",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",fontWeight:700,color:sel?"#52c41a":T.t2}}>{p.symbol}</span><div style={{flex:1,textAlign:"left"}}><div style={{fontWeight:sel?600:500,color:sel?"#389e0d":T.text,fontSize:"14px"}}>{p.label}</div><div style={{color:T.t2,fontSize:"12px"}}>Kod: {p.kod}</div></div>{sel&&<span style={{color:"#52c41a",fontSize:"16px"}}>✓</span>}</button>})}</div><div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}><button onClick={()=>setStep(1)} style={{padding:"8px 20px",borderRadius:"6px",border:`1px solid ${T.bDark}`,background:"#fff",color:T.text,fontWeight:500,fontSize:"14px",cursor:"pointer"}}>← Geri</button><button onClick={()=>{if(!selPara){alert("Para birimi seçiniz!");return;}onComplete({firmaKodu:`${turObj.kod}.${paraObj.kod}.${nextNum}`,turler:[selTur],paraBirimi:selPara});}} style={{padding:"8px 24px",borderRadius:"6px",border:"none",background:selPara?T.primary:"#d9d9d9",color:"#fff",fontWeight:500,fontSize:"14px",cursor:selPara?"pointer":"not-allowed"}}>Firma Oluştur ✓</button></div></div>}
    </div>
  </div></div>;};

/* ========== FİRMA KARTI - TAM SAYFA SEKME/FORM GÖRÜNÜMÜ ========== */
const FirmaKarti=({firma,initData,isNew,onSave,onBack,onAddNote,firmalar,projeler=[],setPage})=>{
  const[form,setForm]=useState(()=>firma?{...firma}:{
    id:Date.now(),firmaKodu:initData?.firmaKodu||"",ad:"",kisaAd:"",aciklama:"",turler:initData?.turler||[],paraBirimi:initData?.paraBirimi||"TL",
    firmaKisiTipi:"tuzel",
    vergiDairesiIl:"",vergiDairesi:"",vergiNo:"",tcKimlikNo:"",sicilNo:"",kategori:"",
    telefon:"",sabitTelefon:"",telefon2:"",webAdresi:"",eposta:"",
    mahalle:"",adres:"",il:"",ilce:"",postaKodu:"",
    bankaAdi:"",iban:"",aktif:true,
    ilgilendigiProjeler:[],
    kisiler:[{id:Date.now(),cinsiyet:"",ad:"",soyad:"",unvan:"",departman:"",telefon:"",isTel:"",isTelDahili:"",cep:"",eposta:"",sosyal1:"",sosyal2:"",sosyal3:"",dogumTarihi:"",notlar:"",resim:""}],
    notlar:[],belgeler:[],subeler:[],bankalar:[],iletisimler:[],adresler:[],
    createdAt:new Date().toISOString().split("T")[0]
  });
  const[tab,setTab]=useState("genel");
  const[nn,setNn]=useState("");
  const[saved,setSaved]=useState(false);
  const ilceler=useMemo(()=>ILLER_ILCELER[form.il]||[],[form.il]);
  const u=(f,v)=>setForm(p=>({...p,[f]:v}));
  const addK=()=>setForm(p=>({...p,kisiler:[...p.kisiler,{id:Date.now(),cinsiyet:"",ad:"",soyad:"",unvan:"",departman:"",telefon:"",isTel:"",isTelDahili:"",cep:"",eposta:"",sosyal1:"",sosyal2:"",sosyal3:"",dogumTarihi:"",notlar:"",resim:""}]}));
  const upK=(i,f,v)=>setForm(p=>{const k=[...p.kisiler];k[i]={...k[i],[f]:v};return{...p,kisiler:k};});
  const rmK=(i)=>{setForm(p=>({...p,kisiler:p.kisiler.filter((_,j)=>j!==i)}));};
  const[editKisiIdx,setEditKisiIdx]=useState(null);
  const[editSubeIdx,setEditSubeIdx]=useState(null);
  const[editBankaIdx,setEditBankaIdx]=useState(null);
  const[editAdresIdx,setEditAdresIdx]=useState(null);

  // Arama & sıralama
  const[kisiAra,setKisiAra]=useState("");
  const[kisiSort,setKisiSort]=useState({key:"ad",dir:1});
  const[subeAra,setSubeAra]=useState("");
  const[subeSort,setSubeSort]=useState({key:"ad",dir:1});
  const[bankaAra,setBankaAra]=useState("");
  const[bankaSort,setBankaSort]=useState({key:"banka_adi",dir:1});
  const[adresAra,setAdresAra]=useState("");
  const[adresSort,setAdresSort]=useState({key:"ad",dir:1});

  const addN=()=>{if(!nn.trim())return;if(onAddNote&&firma){onAddNote(firma.id,nn);}else{const n={id:Date.now(),tarih:new Date().toISOString().split("T")[0],yazar:"Admin",metin:nn};setForm(p=>({...p,notlar:[...p.notlar,n]}));}setNn("");};

  // Şube yönetimi
  const addSube=()=>setForm(p=>({...p,subeler:[...p.subeler,{id:Date.now(),ad:"",tipi:"ŞUBE",vergi_dairesi_il:"",vergi_no:"",vergi_dairesi:"",ulke:"Türkiye",il:"",ilce:"",mahalle:"",adres:"",posta_kodu:"",telefon:"",eposta:"",yonetici:"",yetkili_kisi_id:"",yetkili_kisi_ad:"",aktif:true,notlar:""}]}));
  const upSube=(i,f,v)=>setForm(p=>{const s=[...p.subeler];s[i]={...s[i],[f]:v};return{...p,subeler:s};});
  const rmSube=(i)=>setForm(p=>({...p,subeler:p.subeler.filter((_,j)=>j!==i)}));

  // Banka yönetimi
  const addBanka=()=>setForm(p=>({...p,bankalar:[...p.bankalar,{id:Date.now(),banka_adi:"",sube_adi:"",sube_kodu:"",hesap_adi:"",hesap_no:"",iban:"",swift:"",para_birimi:"TL",varsayilan:false,aktif:true,notlar:""}]}));
  const upBanka=(i,f,v)=>setForm(p=>{const b=[...p.bankalar];b[i]={...b[i],[f]:v};return{...p,bankalar:b};});
  const rmBanka=(i)=>setForm(p=>({...p,bankalar:p.bankalar.filter((_,j)=>j!==i)}));

  // İletişim yönetimi
  const addIletisim=()=>setForm(p=>({...p,iletisimler:[...p.iletisimler,{id:Date.now(),tipi:"CEP TELEFONU",bilgi:"",aciklama:"",varsayilan:false,aktif:true}]}));
  const upIletisim=(i,f,v)=>setForm(p=>{const il=[...p.iletisimler];il[i]={...il[i],[f]:v};return{...p,iletisimler:il};});
  const rmIletisim=(i)=>setForm(p=>({...p,iletisimler:p.iletisimler.filter((_,j)=>j!==i)}));

  // Adres yönetimi
  const addAdres=()=>setForm(p=>({...p,adresler:[...p.adresler,{id:Date.now(),ad:"",tipi:"MERKEZ",ulke:"Türkiye",il:"",ilce:"",mahalle:"",adres:"",posta_kodu:"",tel:"",yetkili_kisi_id:"",yetkili_kisi_ad:"",aktif:true,notlar:""}]}));
  const upAdres=(i,f,v)=>setForm(p=>{const a=[...p.adresler];a[i]={...a[i],[f]:v};return{...p,adresler:a};});
  const rmAdres=(i)=>setForm(p=>({...p,adresler:p.adresler.filter((_,j)=>j!==i)}));

  const save=()=>{
    if(!form.ad.trim()){alert("Firma adı zorunludur!");return;}
    if(!phoneOk(form.telefon)){alert("Cep telefonu hatalı! (boş veya 11 hane olmalı)");return;}
    if(!phoneOk(form.sabitTelefon)){alert("Sabit telefon hatalı! (boş veya 11 hane olmalı)");return;}
    const badK=form.kisiler.find(k=>k.telefon&&!phoneOk(k.telefon));
    if(badK){alert(`Kişi "${badK.ad||"?"} ${badK.soyad||""}" telefonu hatalı!`);return;}
    onSave(form);
    setSaved(true);
    setTimeout(()=>setSaved(false),2000);
  };

  // Satış ilişkileri (sadece alıcı firmalar için)
  const isAlici=(form.turler||[]).includes("alici");
  const opsiyonluDaireler=useMemo(()=>{
    if(!isAlici||!form.id)return[];
    const out=[];
    projeler.forEach(p=>{
      (p.bolumler||[]).forEach(b=>{
        if(b.aliciFirmaId===form.id&&b.durum==="opsiyonlu")out.push({...b,projeId:p.id,projeAd:p.ad});
      });
    });
    return out;
  },[projeler,form.id,isAlici]);
  const satinAlinanDaireler=useMemo(()=>{
    if(!isAlici||!form.id)return[];
    const out=[];
    projeler.forEach(p=>{
      (p.bolumler||[]).forEach(b=>{
        if(b.aliciFirmaId===form.id&&b.durum==="satildi")out.push({...b,projeId:p.id,projeAd:p.ad});
      });
    });
    return out;
  },[projeler,form.id,isAlici]);

  const tabs=[
    {id:"genel",label:"Firma Bilgileri"},
    {id:"kisiler",label:`Kişiler (${form.kisiler.length})`},
    {id:"subeler",label:`Şubeler (${form.subeler.length})`},
    {id:"bankalar",label:`Bankalar (${form.bankalar.length})`},
    {id:"adresler",label:`Adresler (${form.adresler.length})`},
    ...(isAlici?[{id:"satis",label:`Satış İlişkileri (${(form.ilgilendigiProjeler||[]).length+opsiyonluDaireler.length+satinAlinanDaireler.length})`}]:[]),
  ];

  const turObj = FIRMA_TURLERI.find(t=>form.turler.includes(t.id));

  return <div>
    {/* HEADER */}
    <div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"0",padding:"12px 20px",background:"#384248",borderRadius:"8px 8px 0 0"}}>
      <button onClick={onBack} title="Geri" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><MoveLeft size={32}/></button>
      <div style={{flex:1,textAlign:"center"}}>
        <span style={{fontSize:"20px",fontWeight:600,color:"#8799a3",letterSpacing:"0.3px"}}>{form.firmaKodu?`${form.firmaKodu} - `:""}{form.ad||"Yeni Firma"}</span>
      </div>
      <div style={{marginRight:"20px"}}><AktifPasifToggle aktif={form.aktif!==false} onChange={v=>u("aktif",v)}/></div>
      <button onClick={save} title={saved?"Kaydedildi":"Kaydet"} style={{padding:"0",border:"none",background:"transparent",color:saved?"#52c41a":"#8799a3",cursor:"pointer",display:"flex",alignItems:"center",transition:"color .3s"}}><Save size={32}/></button>
    </div>

    {/* SEKMELER */}
    <div style={{display:"flex",gap:"0",marginBottom:"0",background:"#384248"}}>
      {tabs.map(t=><button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,padding:"10px 0",border:`1px solid #8799a3`,borderBottom:"none",borderRadius:"12px 12px 0 0",background:tab===t.id?"#8799a3":"#384248",color:tab===t.id?"#000":"#fff",fontWeight:tab===t.id?600:400,fontSize:"14px",fontFamily:"'Inter',sans-serif",cursor:"pointer",whiteSpace:"nowrap",transition:"all .15s",letterSpacing:"0.2px"}}
        onMouseEnter={e=>{if(tab!==t.id){e.currentTarget.style.background="#8799a3";e.currentTarget.style.color="#000";}}}
        onMouseLeave={e=>{if(tab!==t.id){e.currentTarget.style.background="#384248";e.currentTarget.style.color="#fff";}}}
      >{t.label}</button>)}
    </div>

    {/* FORM İÇERİĞİ */}
    <div style={{background:"#fff",borderRadius:"0 0 8px 8px",border:`1px solid ${T.border}`,borderTop:"none",minHeight:"400px"}}>
      <div style={{padding:"24px"}}>

        {tab==="genel"&&<div style={{display:"flex",flexDirection:"column",gap:"16px"}}>

          {/* ÜST BANT — Sınıflandırma */}
          <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"12px",padding:"10px 16px",background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`}}>
            {form.turler.map(t=><Badge key={t} type={t}/>)}
            <PBadge pb={form.paraBirimi}/>
            {form.createdAt&&<span style={{fontSize:"12px",color:T.t3,marginLeft:"4px"}}>📅 {fmtDate(form.createdAt)}</span>}
          </div>

          {/* ANA İKİ KOLON */}
          <div style={{display:"grid",gridTemplateColumns:"320px 1fr",gap:"16px",alignItems:"start"}}>

            {/* SOL — Firma Kimlik */}
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              {/* Firma Kodu */}
              <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                <label style={{...lS,minWidth:"90px",marginBottom:0,flexShrink:0}}>Firma Kodu</label>
                <input style={{...iS,flex:1,background:"#f0f5ff",color:T.primary,fontFamily:"monospace",fontWeight:600,fontSize:"13px"}} value={form.firmaKodu} readOnly/>
              </div>
              {/* Kısa Ad */}
              <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                <label style={{...lS,minWidth:"90px",marginBottom:0,flexShrink:0}}>Kısa Ad</label>
                <input style={{...iS,flex:1}} value={form.kisaAd||""} onChange={e=>u("kisaAd",e.target.value)} placeholder="Kısa ad" onFocus={foc} onBlur={blr}/>
              </div>
              {/* Firma Adı */}
              <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                <label style={{...lS,minWidth:"90px",marginBottom:0,flexShrink:0}}>Firma Adı <span style={{color:T.err}}>*</span></label>
                <input style={{...iS,flex:1,fontWeight:500}} value={form.ad} onChange={e=>u("ad",toTitleCase(e.target.value))} placeholder="Firma adı" onFocus={foc} onBlur={blr}/>
              </div>
              {/* Açıklama — label sağda, field solda */}
              <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                <label style={{...lS,minWidth:"90px",marginBottom:0,flexShrink:0,textAlign:"right"}}>Açıklama</label>
                <input style={{...iS,flex:1,fontSize:"13px",color:T.t2}} value={form.aciklama||""} onChange={e=>u("aciklama",e.target.value)} placeholder="Kısa açıklama..." onFocus={foc} onBlur={blr}/>
              </div>
            </div>

            {/* SAĞ — Vergi + İletişim + Adres sıkıştırılmış */}
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              {/* Şahıs / Tüzel Radio */}
              <div style={{display:"flex",gap:"20px",alignItems:"center",padding:"8px 12px",background:"#f0f5ff",borderRadius:T.r,border:`1px solid ${T.primary}22`}}>
                <span style={{fontSize:"12px",fontWeight:600,color:T.t2,marginRight:"4px"}}>Firma Tipi:</span>
                <label style={{display:"flex",alignItems:"center",gap:"6px",cursor:"pointer",fontSize:"13px",color:form.firmaKisiTipi==="tuzel"?T.primary:T.text,fontWeight:form.firmaKisiTipi==="tuzel"?600:400}}>
                  <input type="radio" name="firmaKisiTipi" value="tuzel" checked={form.firmaKisiTipi==="tuzel"} onChange={()=>{u("firmaKisiTipi","tuzel");u("tcKimlikNo","");}} style={{cursor:"pointer"}}/>Tüzel Kişi
                </label>
                <label style={{display:"flex",alignItems:"center",gap:"6px",cursor:"pointer",fontSize:"13px",color:form.firmaKisiTipi==="sahis"?T.primary:T.text,fontWeight:form.firmaKisiTipi==="sahis"?600:400}}>
                  <input type="radio" name="firmaKisiTipi" value="sahis" checked={form.firmaKisiTipi==="sahis"} onChange={()=>{u("firmaKisiTipi","sahis");u("vergiNo","");}} style={{cursor:"pointer"}}/>Şahıs
                </label>
              </div>
              {/* Vergi */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}}>
                <Sel label={<span style={{fontSize:"12px",display:"block",color:T.text,fontWeight:500,marginBottom:"8px"}}>Vergi Dairesi İli</span>} value={form.vergiDairesiIl||""} options={IL_LISTESI} onChange={v=>{u("vergiDairesiIl",v);u("vergiDairesi","");}} placeholder="İl seçiniz"/>
                <div>
                  <label style={{...lS,fontSize:"12px"}}>Vergi Dairesi</label>
                  <select style={{...iS,fontSize:"13px",cursor:"pointer",background:!form.vergiDairesiIl?"#f5f5f5":"#fff"}} value={form.vergiDairesi||""} onChange={e=>u("vergiDairesi",e.target.value)} disabled={!form.vergiDairesiIl} onFocus={foc} onBlur={blr}>
                    <option value="">{form.vergiDairesiIl?"Vergi dairesi seçiniz":"Önce il seçiniz"}</option>
                    {(VERGI_DAIRELERI[form.vergiDairesiIl]||[]).map(vd=><option key={vd} value={vd}>{vd}</option>)}
                  </select>
                </div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}}>
                {form.firmaKisiTipi==="tuzel"
                  ?<div>
                    <label style={{...lS,fontSize:"12px"}}>Vergi No <span style={{color:T.t3,fontWeight:400}}>(10 hane)</span></label>
                    <input style={{...iS,fontSize:"13px",borderColor:form.vergiNo&&form.vergiNo.replace(/\D/g,"").length!==10?T.err:T.bDark}} value={form.vergiNo} onChange={e=>{const v=e.target.value.replace(/\D/g,"").slice(0,10);u("vergiNo",v);}} placeholder="0000000000" onFocus={foc} onBlur={blr}/>
                    {form.vergiNo&&form.vergiNo.replace(/\D/g,"").length>0&&form.vergiNo.replace(/\D/g,"").length!==10&&<div style={{color:T.err,fontSize:"11px",marginTop:"2px"}}>⚠ {10-form.vergiNo.replace(/\D/g,"").length} hane eksik</div>}
                  </div>
                  :<div>
                    <label style={{...lS,fontSize:"12px"}}>TC Kimlik No <span style={{color:T.t3,fontWeight:400}}>(11 hane)</span></label>
                    <input style={{...iS,fontSize:"13px",borderColor:form.tcKimlikNo&&form.tcKimlikNo.replace(/\D/g,"").length!==11?T.err:T.bDark}} value={form.tcKimlikNo||""} onChange={e=>{const v=e.target.value.replace(/\D/g,"").slice(0,11);u("tcKimlikNo",v);}} placeholder="00000000000" onFocus={foc} onBlur={blr}/>
                    {form.tcKimlikNo&&form.tcKimlikNo.replace(/\D/g,"").length>0&&form.tcKimlikNo.replace(/\D/g,"").length!==11&&<div style={{color:T.err,fontSize:"11px",marginTop:"2px"}}>⚠ {11-form.tcKimlikNo.replace(/\D/g,"").length} hane eksik</div>}
                  </div>}
                <div><label style={{...lS,fontSize:"12px"}}>Ticaret Sicil No</label><input style={{...iS,fontSize:"13px"}} value={form.sicilNo||""} onChange={e=>u("sicilNo",e.target.value)} placeholder="Sicil no" onFocus={foc} onBlur={blr}/></div>
              </div>
              {/* İletişim */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"8px"}}>
                <div><label style={{...lS,fontSize:"12px"}}>Cep Tel</label><input style={{...iS,fontSize:"13px",borderColor:phoneOk(form.telefon)?T.bDark:T.err}} value={form.telefon} onChange={e=>u("telefon",fmtPhone(e.target.value))} placeholder="0532 000 00 00" onFocus={foc} onBlur={blr}/></div>
                <div><label style={{...lS,fontSize:"12px"}}>Sabit Tel</label><input style={{...iS,fontSize:"13px",borderColor:phoneOk(form.sabitTelefon)?T.bDark:T.err}} value={form.sabitTelefon} onChange={e=>u("sabitTelefon",fmtPhone(e.target.value))} placeholder="0362 000 00 00" onFocus={foc} onBlur={blr}/></div>
                <div><label style={{...lS,fontSize:"12px"}}>Tel 2</label><input style={{...iS,fontSize:"13px"}} value={form.telefon2||""} onChange={e=>u("telefon2",fmtPhone(e.target.value))} placeholder="0532 000 00 00" onFocus={foc} onBlur={blr}/></div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}}>
                <div><label style={{...lS,fontSize:"12px"}}>E-posta</label><input style={{...iS,fontSize:"13px"}} value={form.eposta} onChange={e=>u("eposta",e.target.value)} placeholder="info@firma.com" onFocus={foc} onBlur={blr}/></div>
                <div>
                  <label style={{...lS,fontSize:"12px"}}>Web Adresi</label>
                  <div style={{display:"flex",gap:"6px"}}>
                    <input style={{...iS,fontSize:"13px",flex:1}} value={form.webAdresi} onChange={e=>u("webAdresi",e.target.value)} placeholder="www.firma.com" onFocus={foc} onBlur={blr}/>
                    <button onClick={()=>{if(!form.webAdresi)return;const url=form.webAdresi.startsWith("http")?form.webAdresi:"https://"+form.webAdresi;window.open(url,"_blank");}} style={{padding:"0 12px",borderRadius:T.r,border:`1px solid ${T.bDark}`,background:form.webAdresi?T.pBg:"#f5f5f5",color:form.webAdresi?T.primary:T.t3,cursor:form.webAdresi?"pointer":"not-allowed",fontSize:"13px",fontWeight:500,whiteSpace:"nowrap",flexShrink:0}} title="Web sitesine git">🌐 Git</button>
                  </div>
                </div>
              </div>
              {/* Adres */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}}>
                <Sel label={<span style={{fontSize:"12px",display:"block",color:T.text,fontWeight:500,marginBottom:"8px"}}>İl</span>} value={form.il} options={IL_LISTESI} onChange={v=>{u("il",v);u("ilce","");}} placeholder="İl seçiniz"/>
                <Sel label={<span style={{fontSize:"12px",display:"block",color:T.text,fontWeight:500,marginBottom:"8px"}}>İlçe</span>} value={form.ilce} options={ilceler} onChange={v=>u("ilce",v)} placeholder="İlçe seçiniz"/>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 120px",gap:"8px"}}>
                <div><label style={{...lS,fontSize:"12px"}}>Mahalle</label><input style={{...iS,fontSize:"13px"}} value={form.mahalle} onChange={e=>u("mahalle",e.target.value)} placeholder="Mahalle" onFocus={foc} onBlur={blr}/></div>
                <div><label style={{...lS,fontSize:"12px"}}>Açık Adres</label><input style={{...iS,fontSize:"13px"}} value={form.adres} onChange={e=>u("adres",e.target.value)} placeholder="Cadde, sokak, no" onFocus={foc} onBlur={blr}/></div>
                <div><label style={{...lS,fontSize:"12px"}}>Posta Kodu</label><input style={{...iS,fontSize:"13px"}} value={form.postaKodu||""} onChange={e=>u("postaKodu",e.target.value)} placeholder="00000" onFocus={foc} onBlur={blr}/></div>
              </div>
            </div>
          </div>

          {/* EN ALT — Firma Notları */}
          <div style={{padding:"14px 16px",background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`}}>
            <div style={{color:T.primary,fontSize:"13px",fontWeight:600,marginBottom:"10px",display:"flex",alignItems:"center",gap:"6px"}}>📝 FİRMA NOTLARI</div>
            <div style={{display:"flex",gap:"8px",marginBottom:"12px"}}>
              <input style={{...iS,flex:1,fontSize:"13px"}} value={nn} onChange={e=>setNn(e.target.value)} placeholder="Yeni not yazın..." onKeyDown={e=>e.key==="Enter"&&addN()} onFocus={foc} onBlur={blr}/>
              <button onClick={addN} style={{padding:"7px 20px",borderRadius:"6px",border:"none",background:T.primary,color:"#fff",cursor:"pointer",fontWeight:500,fontSize:"13px",whiteSpace:"nowrap"}}>+ Ekle</button>
            </div>
            {form.notlar.length===0
              ?<div style={{textAlign:"center",padding:"16px",color:T.t3,fontSize:"13px"}}>Henüz not eklenmemiş</div>
              :form.notlar.slice().reverse().map(n=><div key={n.id} style={{padding:"10px 14px",background:"#fff",borderRadius:T.r,border:`1px solid ${T.border}`,marginBottom:"6px",borderLeft:`3px solid ${T.primary}`}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:"4px"}}><span style={{color:T.primary,fontSize:"12px",fontWeight:600}}>{n.yazar}</span><span style={{color:T.t3,fontSize:"12px"}}>{fmtDate(n.tarih)}</span></div>
                <div style={{color:T.text,fontSize:"13px",lineHeight:"1.5"}}>{n.metin}</div>
              </div>)}
          </div>
        </div>}

        {/* KİŞİLER */}
        {tab==="kisiler"&&<div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4px"}}>
            <div style={{color:T.primary,fontSize:"13px",fontWeight:600,display:"flex",alignItems:"center",gap:"6px"}}>👥 FİRMA KİŞİLERİ</div>
            <button onClick={()=>{addK();setEditKisiIdx(form.kisiler.length);}} style={{padding:"6px 16px",borderRadius:"6px",border:"none",background:T.primary,color:"#fff",cursor:"pointer",fontWeight:500,fontSize:"13px",display:"flex",alignItems:"center",gap:"6px"}}>+ Kişi Ekle</button>
          </div>

          {/* FORM GÖRÜNÜMÜ */}
          {editKisiIdx!==null&&form.kisiler[editKisiIdx]&&<div style={{background:"#fff",borderRadius:T.r,border:`2px solid ${T.primary}`,marginBottom:"8px",overflow:"hidden"}}>
            <div style={{padding:"12px 16px",background:T.pBg,borderBottom:`1px solid ${T.primary}33`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{color:T.primary,fontWeight:600,fontSize:"14px"}}>
                {form.kisiler[editKisiIdx].ad||form.kisiler[editKisiIdx].soyad ? `${form.kisiler[editKisiIdx].ad} ${form.kisiler[editKisiIdx].soyad}`.trim() : "Yeni Kişi"}
              </span>
              <button onClick={()=>setEditKisiIdx(null)} style={{background:"none",border:"none",color:T.primary,cursor:"pointer",fontSize:"18px",padding:"0 4px"}}>✕</button>
            </div>
            <div style={{padding:"16px 20px"}}>
              <div style={{display:"flex",gap:"20px"}}>
                <div style={{flexShrink:0}}>
                  <div style={{width:"88px",height:"88px",borderRadius:T.r,border:`2px dashed ${T.bDark}`,background:"#fafafa",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",overflow:"hidden"}}
                    onClick={()=>document.getElementById(`resim-${editKisiIdx}`).click()}>
                    {form.kisiler[editKisiIdx]?.resim
                      ?<img src={form.kisiler[editKisiIdx].resim} alt="kişi" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                      :<><span style={{fontSize:"24px",color:T.t3}}>📷</span><span style={{fontSize:"10px",color:T.t3,marginTop:"4px"}}>Fotoğraf</span></>}
                  </div>
                  <input id={`resim-${editKisiIdx}`} type="file" accept="image/*" style={{display:"none"}} onChange={async e=>{const f=e.target.files[0];if(!f)return;const dosyaId=Date.now();const path=`firmalar/kisi_${dosyaId}_${safeName(f.name)}`;try{await sbUpload(path,f);upK(editKisiIdx,"resim",sbStorageUrl(path));}catch(err){alert("Fotoğraf yüklenemedi");}}}/>
                  <div style={{display:"flex",flexDirection:"column",gap:"4px",marginTop:"4px"}}>
                    {!form.kisiler[editKisiIdx]?.resim&&
                      <button onClick={()=>document.getElementById(`resim-${editKisiIdx}`).click()} style={{width:"88px",padding:"3px",fontSize:"11px",border:`1px solid ${T.primary}`,borderRadius:"4px",background:T.pBg,color:T.primary,cursor:"pointer"}}>📷 Resim Yükle</button>}
                    {form.kisiler[editKisiIdx]?.resim&&<>
                      <button onClick={()=>{
                        const overlay=document.createElement("div");
                        overlay.style.cssText="position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;cursor:pointer";
                        overlay.onclick=()=>document.body.removeChild(overlay);
                        const img=document.createElement("img");
                        img.src=form.kisiler[editKisiIdx].resim;
                        img.style.cssText="max-width:90vw;max-height:90vh;border-radius:8px;box-shadow:0 8px 32px rgba(0,0,0,0.5)";
                        overlay.appendChild(img);
                        document.body.appendChild(overlay);
                      }} style={{width:"88px",padding:"3px",fontSize:"11px",border:`1px solid ${T.bDark}`,borderRadius:"4px",background:"#fff",color:T.t2,cursor:"pointer"}}>🔍 Resmi Aç</button>
                      <button onClick={()=>upK(editKisiIdx,"resim","")} style={{width:"88px",padding:"3px",fontSize:"11px",border:`1px solid ${T.err}`,borderRadius:"4px",background:"#fff1f0",color:T.err,cursor:"pointer"}}>✕ Kaldır</button>
                    </>}
                  </div>
                </div>
                <div style={{flex:1,display:"flex",flexDirection:"column",gap:"12px"}}>
                  <div style={{display:"flex",gap:"24px",alignItems:"center"}}>
                    <label style={{display:"flex",alignItems:"center",gap:"6px",cursor:"pointer",fontSize:"14px",color:T.text}}>
                      <input type="radio" name={`cinsiyet-${editKisiIdx}`} value="Bay" checked={form.kisiler[editKisiIdx]?.cinsiyet==="Bay"} onChange={()=>upK(editKisiIdx,"cinsiyet","Bay")} style={{cursor:"pointer"}}/>Bay
                    </label>
                    <label style={{display:"flex",alignItems:"center",gap:"6px",cursor:"pointer",fontSize:"14px",color:T.text}}>
                      <input type="radio" name={`cinsiyet-${editKisiIdx}`} value="Bayan" checked={form.kisiler[editKisiIdx]?.cinsiyet==="Bayan"} onChange={()=>upK(editKisiIdx,"cinsiyet","Bayan")} style={{cursor:"pointer"}}/>Bayan
                    </label>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px"}}>
                    <div><label style={lS}>Ad</label><input style={iS} value={form.kisiler[editKisiIdx]?.ad||""} onChange={e=>upK(editKisiIdx,"ad",toTitleCase(e.target.value))} placeholder="Ad" onFocus={foc} onBlur={blr}/></div>
                    <div><label style={lS}>Soyad</label><input style={iS} value={form.kisiler[editKisiIdx]?.soyad||""} onChange={e=>upK(editKisiIdx,"soyad",toUpperCase(e.target.value))} placeholder="SOYAD" onFocus={foc} onBlur={blr}/></div>
                    <div><label style={lS}>E-Posta</label><input style={iS} value={form.kisiler[editKisiIdx]?.eposta||""} onChange={e=>upK(editKisiIdx,"eposta",e.target.value)} placeholder="email@..." onFocus={foc} onBlur={blr}/></div>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
                    <div><label style={lS}>Ünvan</label><input style={iS} value={form.kisiler[editKisiIdx]?.unvan||""} onChange={e=>upK(editKisiIdx,"unvan",toTitleCase(e.target.value))} placeholder="Ünvan" onFocus={foc} onBlur={blr}/></div>
                    <div><label style={lS}>Departman / Birim</label><input style={iS} value={form.kisiler[editKisiIdx]?.departman||""} onChange={e=>upK(editKisiIdx,"departman",toTitleCase(e.target.value))} placeholder="Departman" onFocus={foc} onBlur={blr}/></div>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 80px",gap:"12px"}}>
                    <div><label style={lS}>Cep Tel</label><input style={iS} value={form.kisiler[editKisiIdx]?.cep||""} onChange={e=>upK(editKisiIdx,"cep",fmtPhone(e.target.value))} placeholder="0532 000 00 00" onFocus={foc} onBlur={blr}/></div>
                    <div><label style={lS}>İş Tel</label><input style={iS} value={form.kisiler[editKisiIdx]?.isTel||""} onChange={e=>upK(editKisiIdx,"isTel",fmtPhone(e.target.value))} placeholder="0362 000 00 00" onFocus={foc} onBlur={blr}/></div>
                    <div><label style={lS}>Telefon</label><input style={iS} value={form.kisiler[editKisiIdx]?.telefon||""} onChange={e=>upK(editKisiIdx,"telefon",fmtPhone(e.target.value))} placeholder="0532 000 00 00" onFocus={foc} onBlur={blr}/></div>
                    <div><label style={lS}>Dahili</label><input style={iS} value={form.kisiler[editKisiIdx]?.isTelDahili||""} onChange={e=>upK(editKisiIdx,"isTelDahili",e.target.value)} placeholder="000" onFocus={foc} onBlur={blr}/></div>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px"}}>
                    <div><label style={lS}>Sosyal 1</label><input style={iS} value={form.kisiler[editKisiIdx]?.sosyal1||""} onChange={e=>upK(editKisiIdx,"sosyal1",e.target.value)} placeholder="Profil linki" onFocus={foc} onBlur={blr}/></div>
                    <div><label style={lS}>Sosyal 2</label><input style={iS} value={form.kisiler[editKisiIdx]?.sosyal2||""} onChange={e=>upK(editKisiIdx,"sosyal2",e.target.value)} placeholder="Profil linki" onFocus={foc} onBlur={blr}/></div>
                    <div><label style={lS}>Sosyal 3</label><input style={iS} value={form.kisiler[editKisiIdx]?.sosyal3||""} onChange={e=>upK(editKisiIdx,"sosyal3",e.target.value)} placeholder="Profil linki" onFocus={foc} onBlur={blr}/></div>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
                    <div><label style={lS}>Doğum Tarihi</label><input type="date" style={iS} value={form.kisiler[editKisiIdx]?.dogumTarihi||""} onChange={e=>upK(editKisiIdx,"dogumTarihi",e.target.value)} onFocus={foc} onBlur={blr}/></div>
                    <div><label style={lS}>Notlar</label><input style={iS} value={form.kisiler[editKisiIdx]?.notlar||""} onChange={e=>upK(editKisiIdx,"notlar",e.target.value)} placeholder="Not..." onFocus={foc} onBlur={blr}/></div>
                  </div>
                </div>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:"16px",paddingTop:"12px",borderTop:`1px solid ${T.border}`}}>
                <button onClick={()=>{rmK(editKisiIdx);setEditKisiIdx(null);}} style={{padding:"6px 16px",borderRadius:"6px",border:`1px solid ${T.err}`,background:"#fff1f0",color:T.err,cursor:"pointer",fontSize:"13px"}}>🗑 Kişiyi Sil</button>
                <button onClick={()=>setEditKisiIdx(null)} style={{padding:"6px 20px",borderRadius:"6px",border:"none",background:T.primary,color:"#fff",cursor:"pointer",fontWeight:500,fontSize:"13px"}}>✓ Tamam</button>
              </div>
            </div>
          </div>}

          {/* LİSTE GÖRÜNÜMÜ */}
          {form.kisiler.length===0?<div style={{textAlign:"center",padding:"32px",color:T.t3,background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`}}><div style={{fontSize:"28px",marginBottom:"8px"}}>👥</div>Henüz kişi eklenmemiş</div>:<>
          {/* Arama & Sıralama Toolbar */}
          <div style={{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"}}>
            <input style={{...iS,flex:1,minWidth:"160px",fontSize:"13px",padding:"6px 10px"}} value={kisiAra} onChange={e=>setKisiAra(e.target.value)} placeholder="🔍 Ad, soyad, ünvan, departman..." onFocus={foc} onBlur={blr}/>
            <SortBtn label="Ad" sortState={kisiSort} onSort={setKisiSort} sortKey="ad"/>
            <SortBtn label="Soyad" sortState={kisiSort} onSort={setKisiSort} sortKey="soyad"/>
            <SortBtn label="Ünvan" sortState={kisiSort} onSort={setKisiSort} sortKey="unvan"/>
            <SortBtn label="Departman" sortState={kisiSort} onSort={setKisiSort} sortKey="departman"/>
          </div>
          <div style={{border:`1px solid ${T.border}`,borderRadius:T.r,overflow:"hidden"}}>
            {(()=>{
              const q=nTR(kisiAra);
              const filtered=form.kisiler.map((k,idx)=>({...k,_idx:idx}))
                .filter(k=>!q||nTR(`${k.ad} ${k.soyad} ${k.unvan} ${k.departman}`).includes(q))
                .sort((a,b)=>{const v=(a[kisiSort.key]||"").localeCompare(b[kisiSort.key]||"","tr");return v*kisiSort.dir;});
              if(filtered.length===0)return <div style={{padding:"20px",textAlign:"center",color:T.t3,fontSize:"13px"}}>Sonuç bulunamadı</div>;
              return filtered.map(k=><div key={k.id} style={{display:"flex",alignItems:"center",gap:"12px",padding:"10px 16px",background:editKisiIdx===k._idx?T.pBg:"#fff",borderBottom:`1px solid ${T.border}`,transition:"background .15s"}}
                onMouseEnter={e=>{if(editKisiIdx!==k._idx)e.currentTarget.style.background="#fafafa";}}
                onMouseLeave={e=>{if(editKisiIdx!==k._idx)e.currentTarget.style.background="#fff";}}>
                <div style={{width:"56px",height:"56px",borderRadius:T.r,background:"#f0f5ff",flexShrink:0,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",border:`1px solid ${T.border}`}}>
                  {k.resim?<img src={k.resim} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>:
                  <span style={{fontSize:"22px",color:T.t3}}>{k.cinsiyet==="Bayan"?"👩":"👤"}</span>}
                </div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontWeight:600,fontSize:"14px",color:T.primary}}>{`${k.ad||""} ${k.soyad||""}`.trim()||"—"}</div>
                  {k.unvan&&<div style={{fontSize:"12px",color:T.t2}}>{k.unvan}</div>}
                  {k.departman&&<div style={{fontSize:"12px",color:T.t3}}>{k.departman}</div>}
                  <div style={{display:"flex",gap:"16px",marginTop:"4px",flexWrap:"wrap"}}>
                    {(k.cep||k.telefon)&&<span style={{fontSize:"12px",color:T.t2}}>{k.cep||k.telefon}</span>}
                    {k.eposta&&<span style={{fontSize:"12px",color:T.primary}}>{k.eposta}</span>}
                  </div>
                </div>
                <div style={{display:"flex",gap:"8px",flexShrink:0}}>
                  <button onClick={()=>setEditKisiIdx(editKisiIdx===k._idx?null:k._idx)} style={{padding:"6px 14px",borderRadius:"6px",border:`1px solid ${T.bDark}`,background:editKisiIdx===k._idx?T.pBg:"#fff",color:editKisiIdx===k._idx?T.primary:T.t2,cursor:"pointer",fontSize:"13px"}}>✏️ Düzenle</button>
                  <button disabled style={{padding:"6px 14px",borderRadius:"6px",border:`1px solid ${T.bDark}`,background:"#f5f5f5",color:T.t3,cursor:"not-allowed",fontSize:"13px",opacity:0.6}}>🏷 Etiket Bas</button>
                </div>
              </div>);
            })()}
          </div></>}
        </div>}

        {/* ŞUBELER */}
        {tab==="subeler"&&<div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4px"}}>
            <div style={{color:T.primary,fontSize:"13px",fontWeight:600,display:"flex",alignItems:"center",gap:"6px"}}>🏪 ŞUBELER</div>
            <button onClick={()=>{addSube();setEditSubeIdx(form.subeler.length);}} style={{padding:"6px 16px",borderRadius:"6px",border:"none",background:T.primary,color:"#fff",cursor:"pointer",fontWeight:500,fontSize:"13px"}}>+ Şube Ekle</button>
          </div>
          {/* ŞUBE FORM */}
          {editSubeIdx!==null&&form.subeler[editSubeIdx]&&<div style={{background:"#fff",borderRadius:T.r,border:`2px solid ${T.primary}`,marginBottom:"8px",overflow:"hidden"}}>
            <div style={{padding:"10px 16px",background:T.pBg,borderBottom:`1px solid ${T.primary}33`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{color:T.primary,fontWeight:600,fontSize:"14px"}}>{form.subeler[editSubeIdx].ad||"Yeni Şube"}</span>
              <button onClick={()=>setEditSubeIdx(null)} style={{background:"none",border:"none",color:T.primary,cursor:"pointer",fontSize:"18px"}}>✕</button>
            </div>
            <div style={{padding:"16px 20px",display:"flex",flexDirection:"column",gap:"12px"}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
                <div><label style={lS}>Şube Adı</label><input style={iS} value={form.subeler[editSubeIdx]?.ad||""} onChange={e=>upSube(editSubeIdx,"ad",e.target.value)} placeholder="Şube adı" onFocus={foc} onBlur={blr}/></div>
                <div><label style={lS}>Şube Tipi</label>
                  <select style={{...iS,cursor:"pointer"}} value={form.subeler[editSubeIdx]?.tipi||"ŞUBE"} onChange={e=>upSube(editSubeIdx,"tipi",e.target.value)}>
                    {["MERKEZ","OFİS","ŞUBE","DEPO","FABRİKA","ŞANTİYE"].map(t=><option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
                <Sel label="Vergi Dairesi İli" value={form.subeler[editSubeIdx]?.vergi_dairesi_il||""} options={IL_LISTESI} onChange={v=>{upSube(editSubeIdx,"vergi_dairesi_il",v);upSube(editSubeIdx,"vergi_dairesi","");}} placeholder="İl seçiniz"/>
                <div>
                  <label style={lS}>Vergi Dairesi</label>
                  <select style={{...iS,cursor:"pointer",background:!form.subeler[editSubeIdx]?.vergi_dairesi_il?"#f5f5f5":"#fff"}} value={form.subeler[editSubeIdx]?.vergi_dairesi||""} onChange={e=>upSube(editSubeIdx,"vergi_dairesi",e.target.value)} disabled={!form.subeler[editSubeIdx]?.vergi_dairesi_il}>
                    <option value="">{form.subeler[editSubeIdx]?.vergi_dairesi_il?"Vergi dairesi seçiniz":"Önce il seçiniz"}</option>
                    {(VERGI_DAIRELERI[form.subeler[editSubeIdx]?.vergi_dairesi_il]||[]).map(vd=><option key={vd}>{vd}</option>)}
                  </select>
                </div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
                <div>
                  <label style={lS}>Vergi No <span style={{color:T.t3,fontWeight:400,fontSize:"11px"}}>(10 hane)</span></label>
                  <input style={{...iS,borderColor:form.subeler[editSubeIdx]?.vergi_no&&form.subeler[editSubeIdx].vergi_no.replace(/\D/g,"").length!==10?T.err:T.bDark}} value={form.subeler[editSubeIdx]?.vergi_no||""} onChange={e=>{const v=e.target.value.replace(/\D/g,"").slice(0,10);upSube(editSubeIdx,"vergi_no",v);}} placeholder="0000000000" onFocus={foc} onBlur={blr}/>
                  {form.subeler[editSubeIdx]?.vergi_no&&form.subeler[editSubeIdx].vergi_no.length>0&&form.subeler[editSubeIdx].vergi_no.length!==10&&<div style={{color:T.err,fontSize:"11px",marginTop:"2px"}}>⚠ {10-form.subeler[editSubeIdx].vergi_no.length} hane eksik</div>}
                </div>
                <div><label style={lS}>Posta Kodu</label><input style={iS} value={form.subeler[editSubeIdx]?.posta_kodu||""} onChange={e=>upSube(editSubeIdx,"posta_kodu",e.target.value)} placeholder="00000" onFocus={foc} onBlur={blr}/></div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
                <Sel label="İl" value={form.subeler[editSubeIdx]?.il||""} options={IL_LISTESI} onChange={v=>{upSube(editSubeIdx,"il",v);upSube(editSubeIdx,"ilce","");}} placeholder="İl seçiniz"/>
                <Sel label="İlçe" value={form.subeler[editSubeIdx]?.ilce||""} options={ILLER_ILCELER[form.subeler[editSubeIdx]?.il]||[]} onChange={v=>upSube(editSubeIdx,"ilce",v)} placeholder={form.subeler[editSubeIdx]?.il?"İlçe seçiniz":"Önce il seçiniz"}/>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
                <div><label style={lS}>Telefon</label><input style={iS} value={form.subeler[editSubeIdx]?.telefon||""} onChange={e=>upSube(editSubeIdx,"telefon",fmtPhone(e.target.value))} placeholder="0532 000 00 00" onFocus={foc} onBlur={blr}/></div>
                <div><label style={lS}>E-posta</label><input style={iS} value={form.subeler[editSubeIdx]?.eposta||""} onChange={e=>upSube(editSubeIdx,"eposta",e.target.value)} placeholder="sube@firma.com" onFocus={foc} onBlur={blr}/></div>
              </div>
              {/* YETKİLİ KİŞİ */}
              <div>
                <label style={lS}>Yetkili Kişi</label>
                {form.kisiler.filter(k=>k.ad||k.soyad).length===0
                  ?<div style={{padding:"10px 14px",background:"#fff7e6",borderRadius:T.r,border:"1px solid #ffe58f",fontSize:"13px",color:"#d48806",display:"flex",alignItems:"center",gap:"8px"}}>
                    ⚠️ Önce <strong>Kişiler</strong> sekmesinden bu firmaya kişi ekleyiniz.
                  </div>
                  :<select style={{...iS,cursor:"pointer"}} value={form.subeler[editSubeIdx]?.yetkili_kisi_id||""} onChange={e=>{
                    const k=form.kisiler.find(k=>String(k.id)===e.target.value);
                    upSube(editSubeIdx,"yetkili_kisi_id",e.target.value);
                    upSube(editSubeIdx,"yetkili_kisi_ad",k?[`${k.ad||""} ${k.soyad||""}`.trim(),k.departman].filter(Boolean).join(" / "):"");
                  }} onFocus={foc} onBlur={blr}>
                    <option value="">Yetkili kişi seçiniz...</option>
                    {form.kisiler.filter(k=>k.ad||k.soyad).map(k=><option key={k.id} value={String(k.id)}>{`${k.ad||""} ${k.soyad||""}`.trim()}{k.departman?` — ${k.departman}`:k.unvan?` — ${k.unvan}`:""}</option>)}
                  </select>}
              </div>
              <div style={{display:"flex",justifyContent:"space-between",paddingTop:"10px",borderTop:`1px solid ${T.border}`}}>
                <button onClick={()=>{rmSube(editSubeIdx);setEditSubeIdx(null);}} style={{padding:"6px 14px",borderRadius:"6px",border:`1px solid ${T.err}`,background:"#fff1f0",color:T.err,cursor:"pointer",fontSize:"13px"}}>🗑 Şubeyi Sil</button>
                <button onClick={()=>setEditSubeIdx(null)} style={{padding:"6px 20px",borderRadius:"6px",border:"none",background:T.primary,color:"#fff",cursor:"pointer",fontWeight:500,fontSize:"13px"}}>✓ Tamam</button>
              </div>
            </div>
          </div>}
          {/* ŞUBE LİSTESİ */}
          {form.subeler.length===0?<div style={{textAlign:"center",padding:"32px",color:T.t3,background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`}}><div style={{fontSize:"28px",marginBottom:"8px"}}>🏪</div>Henüz şube eklenmemiş</div>:<>
          <div style={{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"}}>
            <input style={{...iS,flex:1,minWidth:"160px",fontSize:"13px",padding:"6px 10px"}} value={subeAra} onChange={e=>setSubeAra(e.target.value)} placeholder="🔍 Şube adı, il, tip..." onFocus={foc} onBlur={blr}/>
            <SortBtn label="Ad" sortState={subeSort} onSort={setSubeSort} sortKey="ad"/>
            <SortBtn label="Tip" sortState={subeSort} onSort={setSubeSort} sortKey="tipi"/>
            <SortBtn label="İl" sortState={subeSort} onSort={setSubeSort} sortKey="il"/>
          </div>
          <div style={{border:`1px solid ${T.border}`,borderRadius:T.r,overflow:"hidden"}}>
            {(()=>{
              const q=nTR(subeAra);
              const filtered=form.subeler.map((s,i)=>({...s,_i:i}))
                .filter(s=>!q||nTR(`${s.ad} ${s.tipi} ${s.il} ${s.ilce}`).includes(q))
                .sort((a,b)=>(a[subeSort.key]||"").localeCompare(b[subeSort.key]||"","tr")*subeSort.dir);
              if(filtered.length===0)return <div style={{padding:"20px",textAlign:"center",color:T.t3,fontSize:"13px"}}>Sonuç bulunamadı</div>;
              return filtered.map(s=><div key={s.id} style={{display:"flex",alignItems:"center",gap:"12px",padding:"10px 16px",background:editSubeIdx===s._i?T.pBg:"#fff",borderBottom:`1px solid ${T.border}`,transition:"background .15s"}}
                onMouseEnter={e=>{if(editSubeIdx!==s._i)e.currentTarget.style.background="#fafafa";}}
                onMouseLeave={e=>{if(editSubeIdx!==s._i)e.currentTarget.style.background="#fff";}}>
                <div style={{width:"40px",height:"40px",borderRadius:T.r,background:"#f0f5ff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",flexShrink:0}}>🏪</div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontWeight:600,fontSize:"14px",color:T.primary}}>{s.ad||"—"}</div>
                  <div style={{fontSize:"12px",color:T.t2,display:"flex",gap:"12px",marginTop:"2px",flexWrap:"wrap"}}>
                    {s.tipi&&<span style={{background:"#f0f0f0",padding:"1px 8px",borderRadius:"4px"}}>{s.tipi}</span>}
                    {s.il&&<span>{s.il}{s.ilce?` / ${s.ilce}`:""}</span>}
                    {s.telefon&&<span>{s.telefon}</span>}
                    {s.yetkili_kisi_ad&&<span style={{color:T.primary}}>👤 {s.yetkili_kisi_ad}</span>}
                  </div>
                </div>
                <button onClick={()=>setEditSubeIdx(editSubeIdx===s._i?null:s._i)} style={{padding:"6px 14px",borderRadius:"6px",border:`1px solid ${T.bDark}`,background:editSubeIdx===s._i?T.pBg:"#fff",color:editSubeIdx===s._i?T.primary:T.t2,cursor:"pointer",fontSize:"13px"}}>✏️ Düzenle</button>
              </div>);
            })()}
          </div></>}
        </div>}

        {/* BANKALAR */}
        {tab==="bankalar"&&<div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4px"}}>
            <div style={{color:T.primary,fontSize:"13px",fontWeight:600,display:"flex",alignItems:"center",gap:"6px"}}>🏦 BANKA HESAPLARI</div>
            <button onClick={()=>{addBanka();setEditBankaIdx(form.bankalar.length);}} style={{padding:"6px 16px",borderRadius:"6px",border:"none",background:T.primary,color:"#fff",cursor:"pointer",fontWeight:500,fontSize:"13px"}}>+ Banka Ekle</button>
          </div>
          {/* BANKA FORM */}
          {editBankaIdx!==null&&form.bankalar[editBankaIdx]&&<div style={{background:"#fff",borderRadius:T.r,border:`2px solid ${T.primary}`,marginBottom:"8px",overflow:"hidden"}}>
            <div style={{padding:"10px 16px",background:T.pBg,borderBottom:`1px solid ${T.primary}33`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{color:T.primary,fontWeight:600,fontSize:"14px",display:"flex",alignItems:"center",gap:"8px"}}>
                {form.bankalar[editBankaIdx]?.varsayilan&&<span style={{background:T.primary,color:"#fff",fontSize:"11px",padding:"2px 8px",borderRadius:"4px"}}>Ana Hesap</span>}
                {form.bankalar[editBankaIdx]?.banka_adi||"Yeni Banka"}
              </span>
              <button onClick={()=>setEditBankaIdx(null)} style={{background:"none",border:"none",color:T.primary,cursor:"pointer",fontSize:"18px"}}>✕</button>
            </div>
            <div style={{padding:"16px 20px",display:"flex",flexDirection:"column",gap:"12px"}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px"}}>
                <div><label style={lS}>Banka Adı</label><input style={iS} value={form.bankalar[editBankaIdx]?.banka_adi||""} onChange={e=>upBanka(editBankaIdx,"banka_adi",e.target.value)} placeholder="Banka adı" onFocus={foc} onBlur={blr}/></div>
                <div><label style={lS}>Şube Adı</label><input style={iS} value={form.bankalar[editBankaIdx]?.sube_adi||""} onChange={e=>upBanka(editBankaIdx,"sube_adi",e.target.value)} placeholder="Şube adı" onFocus={foc} onBlur={blr}/></div>
                <div><label style={lS}>Şube Kodu</label><input style={iS} value={form.bankalar[editBankaIdx]?.sube_kodu||""} onChange={e=>upBanka(editBankaIdx,"sube_kodu",e.target.value)} placeholder="Şube kodu" onFocus={foc} onBlur={blr}/></div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px"}}>
                <div><label style={lS}>Hesap Adı</label><input style={iS} value={form.bankalar[editBankaIdx]?.hesap_adi||""} onChange={e=>upBanka(editBankaIdx,"hesap_adi",e.target.value)} placeholder="Hesap sahibi" onFocus={foc} onBlur={blr}/></div>
                <div><label style={lS}>Hesap No</label><input style={iS} value={form.bankalar[editBankaIdx]?.hesap_no||""} onChange={e=>upBanka(editBankaIdx,"hesap_no",e.target.value)} placeholder="Hesap numarası" onFocus={foc} onBlur={blr}/></div>
                <div><label style={lS}>Para Birimi</label>
                  <select style={{...iS,cursor:"pointer"}} value={form.bankalar[editBankaIdx]?.para_birimi||"TL"} onChange={e=>upBanka(editBankaIdx,"para_birimi",e.target.value)}>
                    <option value="TL">₺ TL</option><option value="USD">$ USD</option><option value="EUR">€ EUR</option>
                  </select>
                </div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"12px"}}>
                <div><label style={lS}>IBAN</label><input style={{...iS,fontFamily:"monospace",letterSpacing:"1px"}} value={form.bankalar[editBankaIdx]?.iban||""} onChange={e=>upBanka(editBankaIdx,"iban",e.target.value)} placeholder="TR00 0000 0000 0000 0000 0000 00" onFocus={foc} onBlur={blr}/></div>
                <div><label style={lS}>SWIFT / BIC</label><input style={{...iS,fontFamily:"monospace"}} value={form.bankalar[editBankaIdx]?.swift||""} onChange={e=>upBanka(editBankaIdx,"swift",e.target.value)} placeholder="SWIFT kodu" onFocus={foc} onBlur={blr}/></div>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",paddingTop:"10px",borderTop:`1px solid ${T.border}`}}>
                <div style={{display:"flex",gap:"8px"}}>
                  <button onClick={()=>upBanka(editBankaIdx,"varsayilan",!form.bankalar[editBankaIdx]?.varsayilan)} style={{padding:"6px 14px",borderRadius:"6px",border:`1px solid ${form.bankalar[editBankaIdx]?.varsayilan?T.primary:T.bDark}`,background:form.bankalar[editBankaIdx]?.varsayilan?T.pBg:"#fff",color:form.bankalar[editBankaIdx]?.varsayilan?T.primary:T.t2,cursor:"pointer",fontSize:"13px"}}>⭐ Ana Hesap</button>
                  <button onClick={()=>{rmBanka(editBankaIdx);setEditBankaIdx(null);}} style={{padding:"6px 14px",borderRadius:"6px",border:`1px solid ${T.err}`,background:"#fff1f0",color:T.err,cursor:"pointer",fontSize:"13px"}}>🗑 Sil</button>
                </div>
                <button onClick={()=>setEditBankaIdx(null)} style={{padding:"6px 20px",borderRadius:"6px",border:"none",background:T.primary,color:"#fff",cursor:"pointer",fontWeight:500,fontSize:"13px"}}>✓ Tamam</button>
              </div>
            </div>
          </div>}
          {/* BANKA LİSTESİ */}
          {form.bankalar.length===0?<div style={{textAlign:"center",padding:"32px",color:T.t3,background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`}}><div style={{fontSize:"28px",marginBottom:"8px"}}>🏦</div>Henüz banka hesabı eklenmemiş</div>:<>
          <div style={{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"}}>
            <input style={{...iS,flex:1,minWidth:"160px",fontSize:"13px",padding:"6px 10px"}} value={bankaAra} onChange={e=>setBankaAra(e.target.value)} placeholder="🔍 Banka adı, şube, IBAN..." onFocus={foc} onBlur={blr}/>
            <SortBtn label="Banka Adı" sortState={bankaSort} onSort={setBankaSort} sortKey="banka_adi"/>
            <SortBtn label="Şube" sortState={bankaSort} onSort={setBankaSort} sortKey="sube_adi"/>
            <SortBtn label="Para Birimi" sortState={bankaSort} onSort={setBankaSort} sortKey="para_birimi"/>
          </div>
          <div style={{border:`1px solid ${T.border}`,borderRadius:T.r,overflow:"hidden"}}>
            {(()=>{
              const q=nTR(bankaAra);
              const filtered=form.bankalar.map((b,i)=>({...b,_i:i}))
                .filter(b=>!q||nTR(`${b.banka_adi} ${b.sube_adi} ${b.iban} ${b.para_birimi}`).includes(q))
                .sort((a,b)=>{
                  if(a.varsayilan&&!b.varsayilan)return -1;
                  if(!a.varsayilan&&b.varsayilan)return 1;
                  return (a[bankaSort.key]||"").localeCompare(b[bankaSort.key]||"","tr")*bankaSort.dir;
                });
              if(filtered.length===0)return <div style={{padding:"20px",textAlign:"center",color:T.t3,fontSize:"13px"}}>Sonuç bulunamadı</div>;
              return filtered.map(b=><div key={b.id} style={{display:"flex",alignItems:"center",gap:"12px",padding:"10px 16px",background:editBankaIdx===b._i?T.pBg:"#fff",borderBottom:`1px solid ${T.border}`,borderLeft:b.varsayilan?`3px solid ${T.primary}`:"3px solid transparent",transition:"background .15s"}}
                onMouseEnter={e=>{if(editBankaIdx!==b._i)e.currentTarget.style.background="#fafafa";}}
                onMouseLeave={e=>{if(editBankaIdx!==b._i)e.currentTarget.style.background="#fff";}}>
                <div style={{width:"40px",height:"40px",borderRadius:T.r,background:"#f6ffed",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",flexShrink:0}}>🏦</div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontWeight:600,fontSize:"14px",color:T.primary,display:"flex",alignItems:"center",gap:"8px"}}>
                    {b.banka_adi||"—"}
                    {b.varsayilan&&<span style={{background:T.pBg,color:T.primary,fontSize:"11px",padding:"1px 8px",borderRadius:"4px",fontWeight:600}}>Ana</span>}
                  </div>
                  <div style={{fontSize:"12px",color:T.t2,display:"flex",gap:"12px",marginTop:"2px"}}>
                    {b.sube_adi&&<span>{b.sube_adi}</span>}
                    {b.iban&&<span style={{fontFamily:"monospace"}}>{b.iban.slice(0,12)}...</span>}
                    {b.para_birimi&&<span>{b.para_birimi}</span>}
                  </div>
                </div>
                <button onClick={()=>setEditBankaIdx(editBankaIdx===b._i?null:b._i)} style={{padding:"6px 14px",borderRadius:"6px",border:`1px solid ${T.bDark}`,background:editBankaIdx===b._i?T.pBg:"#fff",color:editBankaIdx===b._i?T.primary:T.t2,cursor:"pointer",fontSize:"13px"}}>✏️ Düzenle</button>
              </div>);
            })()}
          </div></>}
        </div>}

        {/* ADRESLER */}
        {tab==="adresler"&&<div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4px"}}>
            <div style={{color:T.primary,fontSize:"13px",fontWeight:600,display:"flex",alignItems:"center",gap:"6px"}}>📍 ADRESLER</div>
            <button onClick={()=>{addAdres();setEditAdresIdx(form.adresler.length);}} style={{padding:"6px 16px",borderRadius:"6px",border:"none",background:T.primary,color:"#fff",cursor:"pointer",fontWeight:500,fontSize:"13px"}}>+ Adres Ekle</button>
          </div>
          {/* ADRES FORM */}
          {editAdresIdx!==null&&form.adresler[editAdresIdx]&&<div style={{background:"#fff",borderRadius:T.r,border:`2px solid ${T.primary}`,marginBottom:"8px",overflow:"hidden"}}>
            <div style={{padding:"10px 16px",background:T.pBg,borderBottom:`1px solid ${T.primary}33`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{color:T.primary,fontWeight:600,fontSize:"14px"}}>{form.adresler[editAdresIdx]?.ad||form.adresler[editAdresIdx]?.tipi||"Yeni Adres"}</span>
              <button onClick={()=>setEditAdresIdx(null)} style={{background:"none",border:"none",color:T.primary,cursor:"pointer",fontSize:"18px"}}>✕</button>
            </div>
            <div style={{padding:"16px 20px",display:"flex",flexDirection:"column",gap:"12px"}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
                <div><label style={lS}>Adres Adı</label><input style={iS} value={form.adresler[editAdresIdx]?.ad||""} onChange={e=>upAdres(editAdresIdx,"ad",e.target.value)} placeholder="Örn: İstanbul Ofisi" onFocus={foc} onBlur={blr}/></div>
                <div><label style={lS}>Adres Tipi</label>
                  <select style={{...iS,cursor:"pointer"}} value={form.adresler[editAdresIdx]?.tipi||"MERKEZ"} onChange={e=>upAdres(editAdresIdx,"tipi",e.target.value)}>
                    {["MERKEZ","FATURA ADRESİ","TESLİMAT ADRESİ","ŞANTİYE","DEPO","OFİS","ŞUBE","DİĞER"].map(t=><option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px"}}>
                <Sel label="İl" value={form.adresler[editAdresIdx]?.il||""} options={IL_LISTESI} onChange={v=>{upAdres(editAdresIdx,"il",v);upAdres(editAdresIdx,"ilce","");}} placeholder="İl seçiniz"/>
                <Sel label="İlçe" value={form.adresler[editAdresIdx]?.ilce||""} options={ILLER_ILCELER[form.adresler[editAdresIdx]?.il]||[]} onChange={v=>upAdres(editAdresIdx,"ilce",v)} placeholder={form.adresler[editAdresIdx]?.il?"İlçe seçiniz":"Önce il seçiniz"}/>
                <div><label style={lS}>Posta Kodu</label><input style={iS} value={form.adresler[editAdresIdx]?.posta_kodu||""} onChange={e=>upAdres(editAdresIdx,"posta_kodu",e.target.value)} placeholder="00000" onFocus={foc} onBlur={blr}/></div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
                <div><label style={lS}>Mahalle</label><input style={iS} value={form.adresler[editAdresIdx]?.mahalle||""} onChange={e=>upAdres(editAdresIdx,"mahalle",e.target.value)} placeholder="Mahalle" onFocus={foc} onBlur={blr}/></div>
                <div><label style={lS}>Açık Adres</label><input style={iS} value={form.adresler[editAdresIdx]?.adres||""} onChange={e=>upAdres(editAdresIdx,"adres",e.target.value)} placeholder="Cadde, sokak, no" onFocus={foc} onBlur={blr}/></div>
              </div>
              {/* YETKİLİ KİŞİ */}
              <div>
                <label style={lS}>Yetkili Kişi</label>
                {form.kisiler.filter(k=>k.ad||k.soyad).length===0
                  ?<div style={{padding:"10px 14px",background:"#fff7e6",borderRadius:T.r,border:"1px solid #ffe58f",fontSize:"13px",color:"#d48806",display:"flex",alignItems:"center",gap:"8px"}}>
                    ⚠️ Önce <strong>Kişiler</strong> sekmesinden bu firmaya kişi ekleyiniz.
                  </div>
                  :<select style={{...iS,cursor:"pointer"}} value={form.adresler[editAdresIdx]?.yetkili_kisi_id||""} onChange={e=>{
                    const k=form.kisiler.find(k=>String(k.id)===e.target.value);
                    upAdres(editAdresIdx,"yetkili_kisi_id",e.target.value);
                    upAdres(editAdresIdx,"yetkili_kisi_ad",k?[`${k.ad||""} ${k.soyad||""}`.trim(),k.departman].filter(Boolean).join(" / "):"");
                  }} onFocus={foc} onBlur={blr}>
                    <option value="">Yetkili kişi seçiniz...</option>
                    {form.kisiler.filter(k=>k.ad||k.soyad).map(k=><option key={k.id} value={String(k.id)}>{`${k.ad||""} ${k.soyad||""}`.trim()}{k.departman?` — ${k.departman}`:k.unvan?` — ${k.unvan}`:""}</option>)}
                  </select>}
              </div>
              <div style={{display:"flex",justifyContent:"space-between",paddingTop:"10px",borderTop:`1px solid ${T.border}`}}>
                <button onClick={()=>{rmAdres(editAdresIdx);setEditAdresIdx(null);}} style={{padding:"6px 14px",borderRadius:"6px",border:`1px solid ${T.err}`,background:"#fff1f0",color:T.err,cursor:"pointer",fontSize:"13px"}}>🗑 Adresi Sil</button>
                <button onClick={()=>setEditAdresIdx(null)} style={{padding:"6px 20px",borderRadius:"6px",border:"none",background:T.primary,color:"#fff",cursor:"pointer",fontWeight:500,fontSize:"13px"}}>✓ Tamam</button>
              </div>
            </div>
          </div>}
          {/* ADRES LİSTESİ */}
          {form.adresler.length===0?<div style={{textAlign:"center",padding:"32px",color:T.t3,background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`}}><div style={{fontSize:"28px",marginBottom:"8px"}}>📍</div>Henüz adres eklenmemiş</div>:<>
          <div style={{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"}}>
            <input style={{...iS,flex:1,minWidth:"160px",fontSize:"13px",padding:"6px 10px"}} value={adresAra} onChange={e=>setAdresAra(e.target.value)} placeholder="🔍 Adres adı, tip, il..." onFocus={foc} onBlur={blr}/>
            <SortBtn label="Ad" sortState={adresSort} onSort={setAdresSort} sortKey="ad"/>
            <SortBtn label="Tip" sortState={adresSort} onSort={setAdresSort} sortKey="tipi"/>
            <SortBtn label="İl" sortState={adresSort} onSort={setAdresSort} sortKey="il"/>
          </div>
          <div style={{border:`1px solid ${T.border}`,borderRadius:T.r,overflow:"hidden"}}>
            {(()=>{
              const q=nTR(adresAra);
              const filtered=form.adresler.map((a,i)=>({...a,_i:i}))
                .filter(a=>!q||nTR(`${a.ad} ${a.tipi} ${a.il} ${a.ilce} ${a.adres}`).includes(q))
                .sort((a,b)=>(a[adresSort.key]||"").localeCompare(b[adresSort.key]||"","tr")*adresSort.dir);
              if(filtered.length===0)return <div style={{padding:"20px",textAlign:"center",color:T.t3,fontSize:"13px"}}>Sonuç bulunamadı</div>;
              return filtered.map(a=><div key={a.id} style={{display:"flex",alignItems:"center",gap:"12px",padding:"10px 16px",background:editAdresIdx===a._i?T.pBg:"#fff",borderBottom:`1px solid ${T.border}`,transition:"background .15s"}}
                onMouseEnter={e=>{if(editAdresIdx!==a._i)e.currentTarget.style.background="#fafafa";}}
                onMouseLeave={e=>{if(editAdresIdx!==a._i)e.currentTarget.style.background="#fff";}}>
                <div style={{width:"40px",height:"40px",borderRadius:T.r,background:"#fff7e6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",flexShrink:0}}>📍</div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontWeight:600,fontSize:"14px",color:T.primary,display:"flex",alignItems:"center",gap:"8px"}}>
                    {a.ad||a.tipi||"—"}
                    {a.tipi&&a.ad&&<span style={{background:"#f0f0f0",color:T.t2,fontSize:"11px",padding:"1px 8px",borderRadius:"4px"}}>{a.tipi}</span>}
                  </div>
                  <div style={{fontSize:"12px",color:T.t2,marginTop:"2px",display:"flex",gap:"12px",flexWrap:"wrap"}}>
                    <span>{[a.mahalle,a.adres,a.ilce&&a.il?`${a.ilce}/${a.il}`:a.il||a.ilce].filter(Boolean).join(", ")}</span>
                    {a.yetkili_kisi_ad&&<span style={{color:T.primary}}>👤 {a.yetkili_kisi_ad}</span>}
                  </div>
                </div>
                <button onClick={()=>setEditAdresIdx(editAdresIdx===a._i?null:a._i)} style={{padding:"6px 14px",borderRadius:"6px",border:`1px solid ${T.bDark}`,background:editAdresIdx===a._i?T.pBg:"#fff",color:editAdresIdx===a._i?T.primary:T.t2,cursor:"pointer",fontSize:"13px"}}>✏️ Düzenle</button>
              </div>);
            })()}
          </div></>}
        </div>}

        {/* SATIŞ İLİŞKİLERİ — sadece alıcı firmalar */}
        {tab==="satis"&&<div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
          {/* İLGİLENDİĞİ PROJELER */}
          <div>
            <div style={{color:T.primary,fontSize:"13px",fontWeight:600,display:"flex",alignItems:"center",gap:"6px",marginBottom:"8px"}}>🏢 İLGİLENDİĞİ PROJELER <span style={{color:T.t3,fontWeight:400,fontSize:"12px"}}>({(form.ilgilendigiProjeler||[]).length})</span></div>
            {(form.ilgilendigiProjeler||[]).length===0
              ?<div style={{textAlign:"center",padding:"24px",color:T.t3,background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`,fontSize:"13px"}}>Müşteri bir proje ile opsiyonlandığında veya satış yapıldığında burada listelenecek.</div>
              :<div style={{border:`1px solid ${T.border}`,borderRadius:T.r,overflow:"hidden"}}>
                {(form.ilgilendigiProjeler||[]).map((ilgi,idx)=><div key={idx} style={{display:"flex",alignItems:"center",gap:"12px",padding:"10px 14px",background:idx%2===0?"#fff":"#fafafa",borderBottom:idx<(form.ilgilendigiProjeler||[]).length-1?`1px solid ${T.border}`:"none"}}>
                  <div style={{width:"36px",height:"36px",borderRadius:T.r,background:T.pBg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px"}}>🏢</div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:"14px",fontWeight:500,color:T.text}}>{ilgi.projeAd||"—"}</div>
                    <div style={{fontSize:"11px",color:T.t3}}>{ilgi.ilkTemas?`İlk temas: ${ilgi.ilkTemas}`:""}{ilgi.kanal?` • ${ilgi.kanal}`:""}</div>
                    {ilgi.not&&<div style={{fontSize:"11px",color:T.t2,fontStyle:"italic",marginTop:"2px"}}>"{ilgi.not}"</div>}
                  </div>
                  <button onClick={()=>setForm(p=>({...p,ilgilendigiProjeler:(p.ilgilendigiProjeler||[]).filter((_,i)=>i!==idx)}))} style={{background:"none",border:"none",color:T.err,cursor:"pointer"}}><Trash2 size={14}/></button>
                </div>)}
              </div>}
          </div>

          {/* OPSİYONLADIĞI DAİRELER */}
          <div>
            <div style={{color:"#fa8c16",fontSize:"13px",fontWeight:600,display:"flex",alignItems:"center",gap:"6px",marginBottom:"8px"}}>🟡 OPSİYONLADIĞI DAİRELER <span style={{color:T.t3,fontWeight:400,fontSize:"12px"}}>({opsiyonluDaireler.length})</span></div>
            {opsiyonluDaireler.length===0
              ?<div style={{textAlign:"center",padding:"20px",color:T.t3,background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`,fontSize:"13px"}}>Henüz opsiyon yok.</div>
              :<div style={{border:`1px solid ${T.border}`,borderRadius:T.r,overflow:"hidden"}}>
                {opsiyonluDaireler.map((d,idx)=><div key={`${d.projeId}_${d.id}`} onClick={()=>setPage&&setPage("satis_sunum")} style={{display:"grid",gridTemplateColumns:"1fr 80px 80px 110px 120px",gap:"12px",padding:"10px 14px",background:idx%2===0?"#fffbe6":"#fff",borderBottom:idx<opsiyonluDaireler.length-1?`1px solid ${T.border}`:"none",cursor:"pointer",alignItems:"center"}}
                  onMouseEnter={e=>e.currentTarget.style.background="#fff7e6"} onMouseLeave={e=>e.currentTarget.style.background=idx%2===0?"#fffbe6":"#fff"}>
                  <div style={{fontSize:"13px",fontWeight:500,color:T.text}}>{d.projeAd}</div>
                  <div style={{fontSize:"12px",color:T.t2}}>{d.blok||"—"} Blok</div>
                  <div style={{fontSize:"12px",color:T.t2}}>Daire {d.no||"—"}</div>
                  <div style={{fontSize:"12px",color:T.t2}}>{d.brutM2?`${d.brutM2} m²`:"—"} {d.odaSayisi?`• ${d.odaSayisi}`:""}</div>
                  <div style={{fontSize:"13px",fontWeight:600,color:"#fa8c16",textAlign:"right"}}>{d.satisFiyati?parseFloat(d.satisFiyati).toLocaleString("tr-TR")+" ₺":"—"}</div>
                </div>)}
              </div>}
          </div>

          {/* SATIN ALINAN DAİRELER */}
          <div>
            <div style={{color:"#1677ff",fontSize:"13px",fontWeight:600,display:"flex",alignItems:"center",gap:"6px",marginBottom:"8px"}}>🔵 SATIN ALINAN DAİRELER <span style={{color:T.t3,fontWeight:400,fontSize:"12px"}}>({satinAlinanDaireler.length})</span></div>
            {satinAlinanDaireler.length===0
              ?<div style={{textAlign:"center",padding:"20px",color:T.t3,background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`,fontSize:"13px"}}>Henüz satış yok.</div>
              :<div style={{border:`1px solid ${T.border}`,borderRadius:T.r,overflow:"hidden"}}>
                {satinAlinanDaireler.map((d,idx)=><div key={`${d.projeId}_${d.id}`} onClick={()=>setPage&&setPage("satis_sunum")} style={{display:"grid",gridTemplateColumns:"1fr 80px 80px 110px 120px",gap:"12px",padding:"10px 14px",background:idx%2===0?"#e6f4ff":"#fff",borderBottom:idx<satinAlinanDaireler.length-1?`1px solid ${T.border}`:"none",cursor:"pointer",alignItems:"center"}}
                  onMouseEnter={e=>e.currentTarget.style.background="#bae7ff"} onMouseLeave={e=>e.currentTarget.style.background=idx%2===0?"#e6f4ff":"#fff"}>
                  <div style={{fontSize:"13px",fontWeight:500,color:T.text}}>{d.projeAd}</div>
                  <div style={{fontSize:"12px",color:T.t2}}>{d.blok||"—"} Blok</div>
                  <div style={{fontSize:"12px",color:T.t2}}>Daire {d.no||"—"}</div>
                  <div style={{fontSize:"12px",color:T.t2}}>{d.brutM2?`${d.brutM2} m²`:"—"} {d.odaSayisi?`• ${d.odaSayisi}`:""}</div>
                  <div style={{fontSize:"13px",fontWeight:700,color:"#1677ff",textAlign:"right"}}>{d.satisFiyati?parseFloat(d.satisFiyati).toLocaleString("tr-TR")+" ₺":"—"}</div>
                </div>)}
              </div>}
          </div>
        </div>}

        {/* NOTLAR */}
      </div>
    </div>
  </div>;
};

/* ========== MALZEME KODU POPUP ========== */
const MalzemeKoduCreator=({malzemeler,altKategoriler,altGruplar,onComplete,onClose,projeler=[]})=>{
  const[step,setStep]=useState(1);
  const[selGrup,setSelGrup]=useState("");
  const[selGrupAd,setSelGrupAd]=useState("");
  const[altGrp,setAltGrp]=useState("");
  const[altGrpAd,setAltGrpAd]=useState("");
  const[selTip,setSelTip]=useState("M");
  const[srcGrp,setSrcGrp]=useState("");
  const[srcAG,setSrcAG]=useState("");
  const[mlzAd,setMlzAd]=useState("");

  const tipObj=MLZ_TIPLER.find(t=>t.id===selTip);

  const getNext=()=>{
    if(!selGrup||!altGrp||!selTip)return"00001";
    const pre=`${selGrup}.${altGrp}.`;
    const nums=malzemeler.filter(m=>m.malzemeKodu.startsWith(pre)&&m.malzemeKodu.endsWith("."+selTip)).map(m=>{const p=m.malzemeKodu.split(".");return p[2]?parseInt(p[2],10):0;});
    return String((nums.length>0?Math.max(...nums):0)+1).padStart(5,"0");
  };
  const nextNum=getNext();

  const kodPreview=`${selGrup||"___"}.${altGrp||"__"}.${(selGrup&&altGrp)?nextNum:"_____"}.${selTip}`;

  const sonKod=`${selGrup}.${altGrp}.${nextNum}.${selTip}`;

  const ileriGit=()=>{
    if(step===1){if(!selGrup){alert("Grup seçiniz!");return;}setStep(2);}
    else if(step===2){if(!altGrp||!altGrpAd){alert("Listeden bir alt grup seçiniz!");return;}if(!selTip){alert("Tip seçiniz!");return;}setSrcAG("");setStep(3);}
  };
  const geriGit=()=>{
    if(step===2){setStep(1);}
    else if(step===3){setStep(2);}
  };

  return <div style={{position:"fixed",inset:0,zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.45)"}} onClick={onClose}><div onClick={e=>e.stopPropagation()} style={{width:"560px",background:"#fff",borderRadius:T.rl,boxShadow:T.shM,overflow:"hidden"}}>
    <div style={{padding:"16px 24px",borderBottom:`1px solid ${T.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <div><div style={{fontSize:"16px",fontWeight:600,color:T.text}}>Malzeme Kodu Oluştur</div><div style={{color:T.t2,fontSize:"13px"}}>Adım {step} / 3</div></div>
      <button onClick={onClose} style={{background:"none",border:"none",fontSize:"18px",color:T.t3,cursor:"pointer",padding:"4px"}}>✕</button>
    </div>

    {/* KOD ÖNİZLEME */}
    <div style={{padding:"14px 24px",background:"#fafafa",borderBottom:`1px solid ${T.border}`,display:"flex",alignItems:"center",justifyContent:"center",gap:"2px",fontFamily:"'SF Mono','Courier New',monospace",flexWrap:"wrap"}}>
      <span style={{fontSize:"24px",fontWeight:700,color:selGrup?T.primary:"#d9d9d9"}}>{selGrup||"___"}</span>
      <span style={{fontSize:"24px",color:"#d9d9d9"}}>.</span>
      <span style={{fontSize:"24px",fontWeight:700,color:altGrp?"#722ED1":"#d9d9d9"}}>{altGrp||"__"}</span>
      <span style={{fontSize:"24px",color:"#d9d9d9"}}>.</span>
      <span style={{fontSize:"24px",fontWeight:700,color:(selGrup&&altGrp)?"#fa8c16":"#d9d9d9"}}>{(selGrup&&altGrp)?nextNum:"_____"}</span>
      <span style={{fontSize:"24px",color:"#d9d9d9"}}>.</span>
      <span style={{fontSize:"24px",fontWeight:700,color:tipObj?.color||"#d9d9d9"}}>{selTip}</span>
    </div>

    <div style={{padding:"24px"}}>
      {/* ADIM 1: GRUP SEÇİMİ */}
      {step===1&&<div>
        <div style={{fontSize:"14px",fontWeight:600,color:T.text,marginBottom:"8px"}}>Grup Seçin (3 hane)</div>
        <div style={{marginBottom:"10px"}}><input style={{width:"100%",padding:"7px 10px",borderRadius:"6px",border:`1px solid ${T.bDark}`,fontSize:"13px",outline:"none",boxSizing:"border-box"}} value={srcGrp} onChange={e=>setSrcGrp(e.target.value)} placeholder="Kod veya isim ara..." onFocus={foc} onBlur={blr}/></div>
        {(()=>{
          const tum=(altKategoriler||[]).filter(a=>{if(!srcGrp)return true;const q=nTR(srcGrp);return nTR(a.kod).includes(q)||nTR(a.ad).includes(q);}).sort((a,b)=>a.kod.localeCompare(b.kod));
          if(tum.length===0)return <div style={{padding:"24px",textAlign:"center",background:"#fff7e6",borderRadius:T.r,border:"1px solid #ffe58f"}}><div style={{fontSize:"28px",marginBottom:"8px"}}>⚠️</div><div style={{color:"#d48806",fontSize:"13px",fontWeight:500}}>Henüz grup tanımlanmamış.</div><div style={{color:T.t3,fontSize:"12px",marginTop:"4px"}}>Malzemeler → Grup Yönetimi sekmesinden yeni grup ekleyin.</div></div>;
          return <div style={{display:"flex",flexDirection:"column",gap:"4px",maxHeight:"280px",overflow:"auto"}}>
            {tum.map(a=>{const sel=selGrup===a.kod;return <button key={a.id} onClick={()=>{setSelGrup(a.kod);setSelGrupAd(a.ad);}} style={{display:"flex",alignItems:"center",gap:"10px",padding:"10px 14px",borderRadius:"6px",border:`1px solid ${sel?T.primary:T.border}`,background:sel?T.pBg:"#fff",cursor:"pointer",textAlign:"left",transition:"all .15s"}}>
              <span style={{fontFamily:"monospace",fontWeight:700,fontSize:"14px",color:sel?T.primary:T.t2,background:sel?T.primary+"11":"#f5f5f5",padding:"2px 10px",borderRadius:"4px"}}>{a.kod}</span>
              <span style={{fontSize:"14px",color:sel?T.primary:T.text,fontWeight:sel?600:400}}>{a.ad}</span>
              {sel&&<span style={{marginLeft:"auto",color:T.primary,fontSize:"16px"}}>✓</span>}
            </button>;})}
          </div>;
        })()}
        <div style={{display:"flex",justifyContent:"flex-end",marginTop:"20px"}}>
          <button onClick={ileriGit} style={{padding:"8px 24px",borderRadius:"6px",border:"none",background:selGrup?T.primary:"#d9d9d9",color:"#fff",fontWeight:500,fontSize:"14px",cursor:selGrup?"pointer":"not-allowed"}}>Devam →</button>
        </div>
      </div>}

      {/* ADIM 2: ALT GRUP + TİP SEÇİMİ */}
      {step===2&&<div>
        <div style={{fontSize:"14px",fontWeight:600,color:T.text,marginBottom:"4px"}}>Alt Grup Seçin <span style={{fontSize:"12px",color:T.t3,fontWeight:400}}>({selGrupAd})</span></div>
        {(()=>{
          const tum=(altGruplar||[]).filter(g=>g.grupKod===selGrup);
          if(tum.length===0)return <div style={{padding:"24px",textAlign:"center",background:"#fff7e6",borderRadius:T.r,border:"1px solid #ffe58f"}}><div style={{fontSize:"28px",marginBottom:"8px"}}>⚠️</div><div style={{color:"#d48806",fontSize:"13px",fontWeight:500}}>Bu gruba ait alt grup tanımlanmamış.</div><div style={{color:T.t3,fontSize:"12px",marginTop:"4px"}}>Malzemeler → Grup Yönetimi sekmesinden alt grup ekleyin.</div></div>;
          const mevcutlar=tum.filter(g=>{if(!srcAG)return true;const q=nTR(srcAG);return nTR(g.kod).includes(q)||nTR(g.ad).includes(q);}).sort((a,b)=>a.kod.localeCompare(b.kod));
          return <div>
            <div style={{marginBottom:"8px"}}><input autoFocus style={{width:"100%",padding:"7px 10px",borderRadius:"6px",border:`1px solid ${T.bDark}`,fontSize:"13px",outline:"none",boxSizing:"border-box"}} value={srcAG} onChange={e=>setSrcAG(e.target.value)} placeholder="Kod veya isim ara..." onFocus={foc} onBlur={blr}/></div>
            {mevcutlar.length===0
              ?<div style={{padding:"16px",textAlign:"center",color:T.t3,fontSize:"13px"}}>Sonuç bulunamadı</div>
              :<div style={{display:"flex",flexDirection:"column",gap:"4px",maxHeight:"160px",overflow:"auto"}}>
                {mevcutlar.map(g=>{const sel=altGrp===g.kod&&altGrpAd===g.ad;return <button key={g.id} onClick={()=>{setAltGrp(g.kod);setAltGrpAd(g.ad);}} style={{display:"flex",alignItems:"center",gap:"10px",padding:"10px 14px",borderRadius:"6px",border:`1px solid ${sel?"#722ED1":T.border}`,background:sel?"#f9f0ff":"#fff",cursor:"pointer",textAlign:"left",transition:"all .15s"}}>
                  <span style={{fontFamily:"monospace",fontWeight:700,fontSize:"14px",color:sel?"#722ED1":T.t2,background:sel?"#722ED111":"#f5f5f5",padding:"2px 10px",borderRadius:"4px"}}>{g.kod}</span>
                  <span style={{fontSize:"14px",color:sel?"#722ED1":T.text,fontWeight:sel?600:400}}>{g.ad}</span>
                  {sel&&<span style={{marginLeft:"auto",color:"#722ED1",fontSize:"16px"}}>✓</span>}
                </button>;})}
              </div>
            }
          </div>;
        })()}
        <div style={{fontSize:"14px",fontWeight:600,color:T.text,marginTop:"16px",marginBottom:"8px"}}>Tip Seçin</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px"}}>
          {MLZ_TIPLER.map(t=>{const sel=selTip===t.id;return <button key={t.id} onClick={()=>setSelTip(t.id)} style={{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px",borderRadius:"6px",border:`1px solid ${sel?t.color:T.border}`,background:sel?t.bg:"#fff",cursor:"pointer",transition:"all .15s"}}>
            <span style={{fontSize:"16px"}}>{t.icon}</span>
            <span style={{fontSize:"13px",fontWeight:sel?600:400,color:sel?t.color:T.text}}>{t.label}</span>
            <span style={{fontFamily:"monospace",fontSize:"12px",color:T.t3,marginLeft:"auto"}}>{t.id}</span>
          </button>;})}
        </div>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
          <button onClick={geriGit} style={{padding:"8px 20px",borderRadius:"6px",border:`1px solid ${T.bDark}`,background:"#fff",color:T.text,fontWeight:500,fontSize:"14px",cursor:"pointer"}}>← Geri</button>
          <button onClick={ileriGit} style={{padding:"8px 24px",borderRadius:"6px",border:"none",background:(altGrp&&altGrpAd&&selTip)?T.primary:"#d9d9d9",color:"#fff",fontWeight:500,fontSize:"14px",cursor:(altGrp&&altGrpAd&&selTip)?"pointer":"not-allowed"}}>Devam →</button>
        </div>
      </div>}

      {/* ADIM 3: MALZEME ADI + ONAY */}
      {step===3&&<div>
        <div style={{padding:"12px 16px",background:"#f0f5ff",borderRadius:T.r,border:`1px solid ${T.primary}33`,marginBottom:"16px"}}>
          <div style={{fontSize:"12px",color:T.t2,marginBottom:"4px"}}>Oluşturulacak Kod:</div>
          <div style={{fontFamily:"monospace",fontSize:"18px",fontWeight:700,color:T.primary}}>{kodPreview}</div>
          <div style={{fontSize:"12px",color:T.t2,marginTop:"4px"}}>{selGrupAd} → {altGrpAd} → {tipObj?.label}</div>
        </div>
        <div style={{marginBottom:"12px"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"6px"}}>
            <label style={{...lS,marginBottom:0}}>Malzeme Açıklaması <span style={{color:T.err}}>*</span></label>
            <button onClick={()=>setMlzAd([selGrupAd,altGrpAd].filter(Boolean).join(" - "))} style={{fontSize:"11px",color:T.primary,background:T.pBg,border:`1px solid ${T.primary}33`,borderRadius:"4px",padding:"2px 8px",cursor:"pointer"}}>Otomatik Öner</button>
          </div>
          <input style={{...iS,fontSize:"14px",fontWeight:500}} value={mlzAd} onChange={e=>setMlzAd(e.target.value)} placeholder={[selGrupAd,altGrpAd].filter(Boolean).join(" - ")} onFocus={foc} onBlur={blr}/>
          <div style={{fontSize:"11px",color:T.t3,marginTop:"3px"}}>Düzenleyebilirsiniz</div>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"16px"}}>
          <button onClick={geriGit} style={{padding:"8px 20px",borderRadius:"6px",border:`1px solid ${T.bDark}`,background:"#fff",color:T.text,fontWeight:500,fontSize:"14px",cursor:"pointer"}}>← Geri</button>
          <button onClick={()=>{
            if(!mlzAd.trim()){alert("Malzeme açıklaması giriniz!");return;}
            onComplete({
              malzemeKodu:sonKod,
              tip:selTip,
              grup:selGrup,grupAd:selGrupAd,
              altGrup:altGrp,altGrupAd:altGrpAd,
              mlzAd:mlzAd.trim()
            });
          }} style={{padding:"8px 24px",borderRadius:"6px",border:"none",background:mlzAd.trim()?T.primary:"#d9d9d9",color:"#fff",fontWeight:500,fontSize:"14px",cursor:mlzAd.trim()?"pointer":"not-allowed"}}>Malzeme Oluştur ✓</button>
        </div>
      </div>}
    </div>
  </div></div>;
};

/* ========== MALZEME KARTI - TAM SAYFA FORM ========== */
const MalzemeKarti=({malzeme,initData,isNew,onSave,onDel,onBack,firmalar,altKategoriler,altGruplar,teklifler=[],tumBirimler})=>{
  const[form,setForm]=useState(()=>malzeme?{...malzeme}:{
    id:Date.now(),malzemeKodu:initData?.malzemeKodu||"",ad:initData?.mlzAd||"",tip:initData?.tip||"M",
    grup:initData?.grup||"",grupAd:initData?.grupAd||"",
    altGrup:initData?.altGrup||"",altGrupAd:initData?.altGrupAd||"",
    birim:"adet",birimFiyat:0,paraBirimi:"TL",kdvOrani:"20",marka:"",model:"",aciklama:"",
    tedarikciId:null,durum:"aktif",hesaplamaSablonu:"",omurgaProjeTurleri:[],resimler:[],notlar:[],createdAt:new Date().toISOString().split("T")[0]
  });
  const[tab,setTab]=useState("genel");
  const[nn,setNn]=useState("");
  const[birimEditMode,setBirimEditMode]=useState(false);
  const[birimler,setBirimler]=useState(()=>tumBirimler||[...MLZ_BIRIMLER]);
  const[yeniBirim,setYeniBirim]=useState("");
  const[editBirimIdx,setEditBirimIdx]=useState(-1);
  const[editBirimVal,setEditBirimVal]=useState("");
  const[saved,setSaved]=useState(false);
  const[buyukResim,setBuyukResim]=useState(null);
  const u=(f,v)=>setForm(p=>({...p,[f]:v}));

  const addN=()=>{if(!nn.trim())return;const n={id:Date.now(),tarih:new Date().toISOString().split("T")[0],yazar:"Admin",metin:nn};setForm(p=>({...p,notlar:[...p.notlar,n]}));setNn("");};

  const resimEkle=async(e)=>{
    const files=Array.from(e.target.files||[]);
    for(const file of files){
      if(!file.type.startsWith("image/")){alert(`${file.name} bir resim dosyası değil!`);continue;}
      if(file.size>5*1024*1024){alert(`${file.name} 5MB'dan büyük!`);continue;}
      const dosyaId=Date.now()+Math.floor(Math.random()*1000);
      const path=`malzemeler/${dosyaId}_${safeName(file.name)}`;
      try{
        await sbUpload(path,file);
        const r={id:dosyaId,ad:file.name,boyut:file.size,tip:file.type,storagePath:path,data:"",tarih:new Date().toISOString().split("T")[0]};
        setForm(p=>({...p,resimler:[...p.resimler,r]}));
      }catch(err){console.error("Resim yükleme hatası:",err);alert(`${file.name} yüklenemedi`);}
    }
    e.target.value="";
  };
  const resimSil=(rid)=>{setForm(p=>({...p,resimler:p.resimler.filter(r=>r.id!==rid)}));};
  const fmtBoyut=(b)=>{if(b<1024)return b+" B";if(b<1024*1024)return(b/1024).toFixed(1)+" KB";return(b/(1024*1024)).toFixed(1)+" MB";};

  const save=()=>{
    if(!form.ad.trim()){alert("Malzeme adı zorunludur!");return;}
    onSave(form);setSaved(true);setTimeout(()=>setSaved(false),2000);
  };

  const tipObj=MLZ_TIPLER.find(t=>t.id===form.tip);
  const paraObj=PARA_BIRIMLERI.find(p=>p.id===form.paraBirimi);
  const tedFirma=firmalar?.find(f=>f.id===form.tedarikciId);
  const tedOptions=firmalar?.filter(f=>f.turler.includes("tedarikci"))||[];

  const tabs=[
    {id:"genel",label:"Malzeme Bilgileri"},
    {id:"gorseller",label:`Görseller (${form.resimler.length})`},
    {id:"fiyat",label:"Fiyat & Tedarik"},
    {id:"hesaplama",label:"Hesaplama"},
    {id:"notlar",label:`Notlar (${form.notlar.length})`}
  ];

  return <div>
    {/* HEADER */}
    <div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"0",padding:"12px 20px",background:"#384248",borderRadius:"8px 8px 0 0",paddingBottom:"8px"}}>
      <button onClick={onBack} title="Geri" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><MoveLeft size={32}/></button>
      <div style={{flex:1,textAlign:"center"}}>
        <span style={{fontSize:"20px",fontWeight:600,color:"#8799a3",letterSpacing:"0.3px"}}>{form.malzemeKodu?`${form.malzemeKodu} - `:""}{form.ad||"Yeni Malzeme"}</span>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
        <div style={{marginRight:"20px"}}><AktifPasifToggle aktif={form.durum!=="pasif"} onChange={v=>u("durum",v?"aktif":"pasif")}/></div>
        <button onClick={save} title={saved?"Kaydedildi":"Kaydet"} style={{padding:"0",border:"none",background:"transparent",color:saved?"#52c41a":"#8799a3",cursor:"pointer",display:"flex",alignItems:"center",transition:"color .3s"}}><Save size={32}/></button>
      </div>
    </div>

    {/* SEKMELER */}
    <div style={{display:"flex",gap:"0",marginBottom:"0",background:"#384248"}}>
      {tabs.map(t=><button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,padding:"10px 0",border:`1px solid #8799a3`,borderBottom:"none",borderRadius:"12px 12px 0 0",background:tab===t.id?"#8799a3":"#384248",color:tab===t.id?"#000":"#fff",fontWeight:tab===t.id?600:400,fontSize:"14px",fontFamily:"'Inter',sans-serif",cursor:"pointer",whiteSpace:"nowrap",transition:"all .15s",letterSpacing:"0.2px"}}
        onMouseEnter={e=>{if(tab!==t.id){e.currentTarget.style.background="#8799a3";e.currentTarget.style.color="#000";}}}
        onMouseLeave={e=>{if(tab!==t.id){e.currentTarget.style.background="#384248";e.currentTarget.style.color="#fff";}}}
      >{t.label}</button>)}
    </div>

    {/* FORM İÇERİĞİ */}
    <div style={{background:"#fff",borderRadius:"0 0 8px 8px",border:`1px solid ${T.border}`,borderTop:"none",minHeight:"400px"}}>
      <div style={{padding:"24px"}}>

        {/* MALZEME BİLGİLERİ */}
        {tab==="genel"&&<div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
          <div style={{padding:"16px 20px",background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`}}>
            <div style={{color:T.primary,fontSize:"13px",fontWeight:600,marginBottom:"12px"}}>🧱 TEMEL BİLGİLER</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"}}>
              <div><label style={lS}>Malzeme Kodu</label><input style={{...iS,background:"#f0f5ff",color:T.primary,fontFamily:"monospace",fontWeight:600}} value={form.malzemeKodu} readOnly/></div>
              <div><label style={lS}>Malzeme Adı <span style={{color:T.err}}>*</span></label><input style={{...iS,textTransform:"uppercase"}} value={form.ad} onChange={e=>u("ad",toUpperCase(e.target.value))} placeholder="MALZEME ADI GİRİNİZ" onFocus={foc} onBlur={blr}/></div>
            </div>
            <div style={{marginTop:"16px"}}><label style={lS}>Açıklama / Not</label><textarea style={{...iS,minHeight:"64px",resize:"vertical"}} value={form.aciklama||""} onChange={e=>u("aciklama",e.target.value)} placeholder="Kısa açıklama..." onFocus={foc} onBlur={blr}/></div>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"}}>
            <div style={{padding:"16px 20px",background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`}}>
              <div style={{color:T.primary,fontSize:"13px",fontWeight:600,marginBottom:"12px"}}>📂 SINIFLANDIRMA</div>
              <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
                <div><label style={lS}>Tip</label><input style={{...iS,background:"#f0f5ff",color:tipObj?.color||T.t2,fontWeight:600}} value={tipObj?`${tipObj.icon} ${tipObj.label}`:""} readOnly/></div>
                <div style={{display:"grid",gridTemplateColumns:"80px 1fr",gap:"8px"}}><div><label style={lS}>Grup Kodu</label><input style={{...iS,background:"#f0f5ff",fontFamily:"monospace",textAlign:"center"}} value={form.grup} readOnly/></div><div><label style={lS}>Grup Adı</label><input style={{...iS,textTransform:"uppercase"}} value={form.grupAd} onChange={e=>u("grupAd",toUpperCase(e.target.value))} onFocus={foc} onBlur={blr}/></div></div>
                <div style={{display:"grid",gridTemplateColumns:"80px 1fr",gap:"8px"}}><div><label style={lS}>Alt Grp Kodu</label><input style={{...iS,background:"#f0f5ff",fontFamily:"monospace",textAlign:"center"}} value={form.altGrup} readOnly/></div><div><label style={lS}>Alt Grup Adı</label><input style={{...iS,textTransform:"uppercase"}} value={form.altGrupAd} onChange={e=>u("altGrupAd",toUpperCase(e.target.value))} onFocus={foc} onBlur={blr}/></div></div>
              </div>
            </div>

            <div style={{padding:"16px 20px",background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`}}>
              <div style={{color:T.primary,fontSize:"13px",fontWeight:600,marginBottom:"12px"}}>📏 BİRİM & DETAY</div>
              <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
                <div>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"}}>
                    <label style={{...lS,marginBottom:0}}>Ölçü Birimi</label>
                    <button onClick={()=>setBirimEditMode(true)} title="Birimleri Düzenle" style={{padding:"0",border:"none",background:"transparent",color:"#384248",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePen size={18}/></button>
                  </div>
                  <select style={{...iS,cursor:"pointer"}} value={form.birim} onChange={e=>u("birim",e.target.value)} onFocus={foc} onBlur={blr}>{birimler.map(b=><option key={b} value={b}>{b}</option>)}</select>
                  {/* BİRİM YÖNETİM POP-UP */}
                  {birimEditMode&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}}>
                    <div style={{background:"#fff",borderRadius:T.rl,width:"100%",maxWidth:"400px",maxHeight:"80vh",display:"flex",flexDirection:"column",overflow:"hidden"}}>
                      <div style={{padding:"12px 20px",background:"#384248",display:"flex",alignItems:"center",gap:"16px",borderRadius:`${T.rl} ${T.rl} 0 0`}}>
                        <button onClick={()=>setBirimEditMode(false)} title="Kapat" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><MoveLeft size={28}/></button>
                        <div style={{flex:1,textAlign:"center"}}><span style={{fontSize:"16px",fontWeight:600,color:"#8799a3",textTransform:"uppercase"}}>Ölçü Birimleri</span></div>
                        <button onClick={()=>{if(yeniBirim.trim()&&!birimler.includes(yeniBirim.trim())){setBirimler(p=>[...p,yeniBirim.trim()]);setYeniBirim("");}}} title="Birim Ekle" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePlus size={30}/></button>
                      </div>
                      <div style={{padding:"8px 12px",borderBottom:`1px solid ${T.border}`}}>
                        <input style={iS} value={yeniBirim} onChange={e=>setYeniBirim(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&yeniBirim.trim()&&!birimler.includes(yeniBirim.trim())){setBirimler(p=>[...p,yeniBirim.trim()]);setYeniBirim("");}}} placeholder="Yeni birim ekle..." onFocus={foc} onBlur={blr}/>
                      </div>
                      <div style={{flex:1,overflow:"auto"}}>
                        {birimler.map((b,idx)=>editBirimIdx===idx
                          ?<div key={idx} style={{display:"grid",gridTemplateColumns:"1fr auto",gap:"8px",padding:"0 12px",alignItems:"center",height:"36px",background:T.pBg}}>
                            <input autoFocus style={{...iS,fontSize:"15px"}} value={editBirimVal} onChange={e=>setEditBirimVal(e.target.value)} onKeyDown={e=>{
                              if(e.key==="Enter"&&editBirimVal.trim()){setBirimler(p=>p.map((x,i)=>i===idx?editBirimVal.trim():x));if(form.birim===b)u("birim",editBirimVal.trim());setEditBirimIdx(-1);setEditBirimVal("");}
                              if(e.key==="Escape"){setEditBirimIdx(-1);setEditBirimVal("");}
                            }} onFocus={foc} onBlur={blr}/>
                            <div style={{display:"flex",gap:"12px"}}>
                              <button onClick={()=>{if(editBirimVal.trim()){setBirimler(p=>p.map((x,i)=>i===idx?editBirimVal.trim():x));if(form.birim===b)u("birim",editBirimVal.trim());}setEditBirimIdx(-1);setEditBirimVal("");}} title="Kaydet" style={{padding:"0",border:"none",background:"transparent",color:"#384248",cursor:"pointer",display:"flex",alignItems:"center"}}><Save size={20}/></button>
                              <button onClick={()=>{setEditBirimIdx(-1);setEditBirimVal("");}} title="İptal" style={{padding:"0",border:"none",background:"transparent",color:T.t3,cursor:"pointer",display:"flex",alignItems:"center"}}><X size={20}/></button>
                            </div>
                          </div>
                          :<div key={idx} style={{display:"grid",gridTemplateColumns:"1fr auto",gap:"8px",padding:"0 12px",alignItems:"center",height:"36px",borderBottom:idx<birimler.length-1?`1px solid ${T.border}`:"none",background:idx%2===0?"#fff":"#fafafa",cursor:"pointer"}}
                            onMouseEnter={e=>e.currentTarget.style.background=T.pBg}
                            onMouseLeave={e=>e.currentTarget.style.background=idx%2===0?"#fff":"#fafafa"}>
                            <div style={{fontSize:"15px",color:T.text,fontWeight:form.birim===b?600:400}}>{b}</div>
                            <div style={{display:"flex",gap:"12px"}}>
                              <button onClick={()=>{setEditBirimIdx(idx);setEditBirimVal(b);}} title="Düzenle" style={{padding:"0",border:"none",background:"transparent",color:"#384248",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePen size={20}/></button>
                              <button onClick={()=>{if(confirm(`"${b}" birimini silmek istiyor musunuz?`))setBirimler(p=>p.filter(x=>x!==b));}} title="Sil" style={{padding:"0",border:"none",background:"transparent",color:T.err,cursor:"pointer",display:"flex",alignItems:"center"}}><Trash2 size={20}/></button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>}
                </div>
                <div><label style={lS}>Marka</label><input style={iS} value={form.marka} onChange={e=>u("marka",e.target.value)} placeholder="Marka" onFocus={foc} onBlur={blr}/></div>
                <div><label style={lS}>Model</label><input style={iS} value={form.model} onChange={e=>u("model",e.target.value)} placeholder="Model" onFocus={foc} onBlur={blr}/></div>
                <div><label style={lS}>KDV Oranı</label><select style={{...iS,cursor:"pointer"}} value={form.kdvOrani||"20"} onChange={e=>u("kdvOrani",e.target.value)} onFocus={foc} onBlur={blr}>{KDV_ORANLARI.map(x=><option key={x.id} value={x.id}>{x.label}</option>)}</select></div>
                <div><label style={lS}>Durum</label><div style={{display:"flex",gap:"8px"}}>{["aktif","pasif"].map(d=><button key={d} onClick={()=>u("durum",d)} style={{flex:1,padding:"8px",borderRadius:"6px",border:`1px solid ${form.durum===d?(d==="aktif"?T.ok:T.err):T.bDark}`,background:form.durum===d?(d==="aktif"?"#f6ffed":"#fff1f0"):"#fff",color:form.durum===d?(d==="aktif"?T.ok:T.err):T.t2,cursor:"pointer",fontWeight:form.durum===d?600:400,fontSize:"13px"}}>{d==="aktif"?"✓ Aktif":"✕ Pasif"}</button>)}</div></div>
              </div>
            </div>
          </div>

          {/* OMURGA PROJE TÜRLERİ */}
          <div style={{padding:"16px 20px",background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`}}>
            <div style={{fontSize:"13px",fontWeight:600,color:T.primary,marginBottom:"10px"}}>OMURGA PROJE TÜRLERİ</div>
            <div style={{fontSize:"11px",color:T.t3,marginBottom:"8px"}}>Bu malzeme/hizmet hangi proje türlerinin omurgasında yer alsın?</div>
            <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
              {PROJE_TURLERI_OMURGA.map(pt=>{
                const checked=(form.omurgaProjeTurleri||[]).includes(pt.label);
                return <label key={pt.id} style={{display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",borderRadius:"6px",border:`1px solid ${checked?pt.color:T.border}`,background:checked?pt.bg:"#fff",cursor:"pointer",fontSize:"13px",fontWeight:checked?600:400,color:checked?pt.color:T.text}}>
                  <input type="checkbox" checked={checked} onChange={e=>{const arr=e.target.checked?[...(form.omurgaProjeTurleri||[]),pt.label]:(form.omurgaProjeTurleri||[]).filter(x=>x!==pt.label);u("omurgaProjeTurleri",arr);}} style={{accentColor:pt.color}}/>
                  {pt.icon} {pt.label}
                </label>;
              })}
            </div>
          </div>
        </div>}

        {/* GÖRSELLER */}
        {tab==="gorseller"&&<div>
          <div style={{color:T.primary,fontSize:"13px",fontWeight:600,marginBottom:"12px"}}>📷 ÜRÜN GÖRSELLERİ</div>
          {/* Yükleme butonu */}
          <div style={{marginBottom:"20px",textAlign:"center"}}>
            <label style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"10px 28px",borderRadius:"6px",background:T.primary,color:"#fff",cursor:"pointer",fontWeight:600,fontSize:"14px",transition:"all .2s"}} onMouseEnter={e=>e.currentTarget.style.background=T.pDark} onMouseLeave={e=>e.currentTarget.style.background=T.primary}>
              📁 Görsel Yüklemek İçin Tıklayın
              <input type="file" accept="image/*" multiple onChange={resimEkle} style={{display:"none"}}/>
            </label>
            <div style={{fontSize:"12px",color:T.t3,marginTop:"8px"}}>PNG, JPG, WEBP • Maks. 5MB • Birden fazla seçilebilir</div>
          </div>

          {/* Galeri */}
          {form.resimler.length===0?<div style={{textAlign:"center",padding:"40px",color:T.t3,background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`}}><div style={{fontSize:"48px",marginBottom:"8px"}}>📷</div>Henüz görsel eklenmemiş</div>:
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:"12px"}}>{form.resimler.map((r,i)=>
            <div key={r.id} style={{borderRadius:T.r,border:`1px solid ${T.border}`,overflow:"hidden",background:"#fff",boxShadow:T.sh,position:"relative"}}>
              <div onClick={()=>setBuyukResim(r)} style={{width:"100%",height:"140px",background:`url(${dosyaUrl(r)}) center/cover no-repeat`,cursor:"pointer",position:"relative"}}>
                <div style={{position:"absolute",top:"6px",left:"6px",background:"rgba(0,0,0,0.55)",color:"#fff",fontSize:"11px",padding:"1px 8px",borderRadius:"4px",fontWeight:600}}>{i+1}/{form.resimler.length}</div>
              </div>
              <div style={{padding:"8px 10px"}}>
                <div style={{fontSize:"12px",color:T.text,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{r.ad}</div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"4px"}}>
                  <span style={{fontSize:"11px",color:T.t3}}>{fmtBoyut(r.boyut)}</span>
                  <button onClick={(e)=>{e.stopPropagation();resimSil(r.id);}} style={{background:"#fff1f0",border:`1px solid ${T.err}33`,color:T.err,cursor:"pointer",fontSize:"12px",padding:"4px 10px",borderRadius:"6px",fontWeight:500}} onMouseEnter={e=>{e.currentTarget.style.background=T.err;e.currentTarget.style.color="#fff";}} onMouseLeave={e=>{e.currentTarget.style.background="#fff1f0";e.currentTarget.style.color=T.err;}}>🗑 Sil</button>
                </div>
              </div>
            </div>
          )}</div>}

          {/* Büyük resim modal */}
          {buyukResim&&<div onClick={()=>setBuyukResim(null)} style={{position:"fixed",inset:0,zIndex:1100,background:"rgba(0,0,0,0.8)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
            <div onClick={e=>e.stopPropagation()} style={{position:"relative",maxWidth:"90vw",maxHeight:"90vh"}}>
              <img src={dosyaUrl(buyukResim)} alt={buyukResim.ad} style={{maxWidth:"90vw",maxHeight:"85vh",borderRadius:"8px",boxShadow:"0 8px 32px rgba(0,0,0,0.5)"}}/>
              <div style={{position:"absolute",bottom:"-36px",left:0,right:0,textAlign:"center",color:"#fff",fontSize:"13px"}}>{buyukResim.ad} • {fmtBoyut(buyukResim.boyut)}</div>
              <button onClick={()=>setBuyukResim(null)} style={{position:"absolute",top:"-12px",right:"-12px",width:"32px",height:"32px",borderRadius:"50%",border:"none",background:"#fff",color:T.text,fontSize:"16px",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.3)",display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
            </div>
          </div>}
        </div>}

        {/* FİYAT & TEDARİK — TEKLİFLERDEN GELEN VERİLER (PROFORMA TABANLI) */}
        {tab==="fiyat"&&(()=>{
          // Tüm tekliflerden bu malzemeye ait kalemleri topla
          const mlzKalemler=[];
          teklifler.forEach(t=>{t.kalemler.forEach(k=>{if(k.malzemeId===form.id)mlzKalemler.push({...k,teklifNo:t.teklifNo,teklifId:t.id,firmaAd:t.firmaAd,firmaId:t.firmaId,teklifTarihi:t.teklifTarihi,gecerlilikTarihi:t.gecerlilikTarihi,paraBirimi:t.paraBirimi,teklifDurum:t.durum});});});
          const aktifler=mlzKalemler.filter(k=>k.teklifDurum==="aktif");
          const enDusuk=aktifler.length>0?Math.min(...aktifler.map(k=>k.netFiyat)):null;
          const enYuksek=aktifler.length>0?Math.max(...aktifler.map(k=>k.netFiyat)):null;
          const ort=aktifler.length>0?(aktifler.reduce((s,k)=>s+k.netFiyat,0)/aktifler.length):null;
          return <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
            {/* ÖZET KARTLARI */}
            {aktifler.length>0?<div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"12px"}}>
              <div style={{padding:"16px",background:"#f6ffed",borderRadius:T.r,border:"1px solid #b7eb8f",textAlign:"center"}}><div style={{color:"#389e0d",fontSize:"11px",fontWeight:600,marginBottom:"4px"}}>EN DÜŞÜK FİYAT</div><div style={{fontSize:"20px",fontWeight:700,color:"#389e0d"}}>{PARA_BIRIMLERI.find(p=>p.id===(aktifler[0]?.paraBirimi||"TL"))?.symbol}{enDusuk?.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div><div style={{fontSize:"11px",color:T.t3,marginTop:"2px"}}>/ {form.birim}</div></div>
              <div style={{padding:"16px",background:"#fff7e6",borderRadius:T.r,border:"1px solid #ffe58f",textAlign:"center"}}><div style={{color:"#d48806",fontSize:"11px",fontWeight:600,marginBottom:"4px"}}>ORTALAMA FİYAT</div><div style={{fontSize:"20px",fontWeight:700,color:"#d48806"}}>{PARA_BIRIMLERI.find(p=>p.id===(aktifler[0]?.paraBirimi||"TL"))?.symbol}{ort?.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div><div style={{fontSize:"11px",color:T.t3,marginTop:"2px"}}>/ {form.birim}</div></div>
              <div style={{padding:"16px",background:"#fff1f0",borderRadius:T.r,border:"1px solid #ffa39e",textAlign:"center"}}><div style={{color:T.err,fontSize:"11px",fontWeight:600,marginBottom:"4px"}}>EN YÜKSEK FİYAT</div><div style={{fontSize:"20px",fontWeight:700,color:T.err}}>{PARA_BIRIMLERI.find(p=>p.id===(aktifler[0]?.paraBirimi||"TL"))?.symbol}{enYuksek?.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div><div style={{fontSize:"11px",color:T.t3,marginTop:"2px"}}>/ {form.birim}</div></div>
              <div style={{padding:"16px",background:T.pBg,borderRadius:T.r,border:`1px solid ${T.primary}33`,textAlign:"center"}}><div style={{color:T.primary,fontSize:"11px",fontWeight:600,marginBottom:"4px"}}>TEKLİF SAYISI</div><div style={{fontSize:"20px",fontWeight:700,color:T.primary}}>{mlzKalemler.length}</div><div style={{fontSize:"11px",color:T.t3,marginTop:"2px"}}>{aktifler.length} aktif</div></div>
            </div>:<div style={{padding:"24px",textAlign:"center",background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`}}><div style={{fontSize:"36px",marginBottom:"8px"}}>📋</div><div style={{color:T.t2,fontSize:"14px",fontWeight:500}}>Bu malzeme için henüz teklif alınmamış</div><div style={{color:T.t3,fontSize:"12px",marginTop:"4px"}}>Malzemeler → Alınan Teklifler sekmesinden proforma oluşturup bu malzemeyi ekleyebilirsiniz.</div></div>}

            {/* TEKLİF KALEM LİSTESİ */}
            {mlzKalemler.length>0&&<div style={{padding:"16px 20px",background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`}}>
              <div style={{color:T.primary,fontSize:"13px",fontWeight:600,marginBottom:"12px"}}>📋 TEKLİFLERDEN GELEN FİYATLAR</div>
              <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
                {mlzKalemler.sort((a,b)=>a.netFiyat-b.netFiyat).map(k=>{
                  const para=PARA_BIRIMLERI.find(p=>p.id===k.paraBirimi);
                  const isMin=k.netFiyat===enDusuk&&k.teklifDurum==="aktif";
                  const expired=k.teklifDurum==="suresi_doldu";
                  return <div key={`${k.teklifId}-${k.id}`} style={{padding:"14px 16px",background:expired?"#fafafa":isMin?"#f6ffed":"#fff",borderRadius:T.r,border:`1px solid ${expired?"#d9d9d9":isMin?"#b7eb8f":T.border}`,opacity:expired?0.7:1}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"8px"}}>
                      <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                        <div style={{width:"28px",height:"28px",borderRadius:T.r,background:T.pBg,display:"flex",alignItems:"center",justifyContent:"center",color:T.primary,fontWeight:600,fontSize:"12px"}}>{k.firmaAd?.charAt(0)}</div>
                        <div><div style={{fontWeight:600,fontSize:"13px",color:T.text}}>{k.firmaAd}</div><div style={{fontSize:"11px",color:T.t3}}>Proforma: <span style={{fontFamily:"monospace",color:T.primary}}>{k.teklifNo}</span> • {fmtDate(k.teklifTarihi)} → {fmtDate(k.gecerlilikTarihi)}</div></div>
                      </div>
                      <div style={{display:"flex",alignItems:"center",gap:"6px"}}>
                        {isMin&&<span style={{fontSize:"11px",color:"#389e0d",background:"#f6ffed",border:"1px solid #b7eb8f",padding:"1px 8px",borderRadius:"4px",fontWeight:600}}>⭐ En Uygun</span>}
                        {expired&&<span style={{fontSize:"11px",color:T.err,background:"#fff1f0",border:`1px solid ${T.err}33`,padding:"1px 8px",borderRadius:"4px",fontWeight:600}}>Süresi Doldu</span>}
                        <span style={{fontSize:"11px",color:"#fff",background:k.fiyatTipi==="liste"?"#722ed1":"#13c2c2",padding:"1px 8px",borderRadius:"4px",fontWeight:600}}>{k.fiyatTipi==="liste"?"Liste Fiyatlı":"Net Fiyat"}</span>
                      </div>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:k.fiyatTipi==="liste"?"1fr 1fr 1fr 1fr 1fr 1fr":"1fr 1fr 1fr",gap:"12px"}}>
                      {k.fiyatTipi==="liste"&&<><div><div style={{fontSize:"10px",color:T.t3,fontWeight:600,marginBottom:"2px"}}>LİSTE FİYATI</div><div style={{fontSize:"14px",fontWeight:600,color:"#722ed1"}}>{para?.symbol}{k.listeFiyati?.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div></div>
                      <div><div style={{fontSize:"10px",color:T.t3,fontWeight:600,marginBottom:"2px"}}>İSKONTO 1</div><div style={{fontSize:"14px",fontWeight:600,color:T.text}}>%{k.iskonto1}</div></div>
                      <div><div style={{fontSize:"10px",color:T.t3,fontWeight:600,marginBottom:"2px"}}>İSKONTO 2</div><div style={{fontSize:"14px",fontWeight:600,color:T.text}}>%{k.iskonto2}</div></div></>}
                      <div><div style={{fontSize:"10px",color:T.t3,fontWeight:600,marginBottom:"2px"}}>NET FİYAT</div><div style={{fontSize:"16px",fontWeight:700,color:isMin?"#389e0d":T.text}}>{para?.symbol}{k.netFiyat?.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div></div>
                      <div><div style={{fontSize:"10px",color:T.t3,fontWeight:600,marginBottom:"2px"}}>MİKTAR</div><div style={{fontSize:"14px",fontWeight:600,color:T.text}}>{k.miktar} {k.birim}</div></div>
                      <div><div style={{fontSize:"10px",color:T.t3,fontWeight:600,marginBottom:"2px"}}>MALİYETE ESAS</div><div style={{fontSize:"13px",fontWeight:600,color:k.maliyetEsas==="liste"?"#722ed1":"#13c2c2"}}>{k.maliyetEsas==="liste"?"Liste Fiyatı":"Net Fiyat"}</div></div>
                    </div>
                    {k.not&&<div style={{fontSize:"12px",color:T.t2,borderTop:`1px solid ${T.border}`,paddingTop:"6px",marginTop:"8px"}}>💬 {k.not}</div>}
                  </div>;
                })}
              </div>
            </div>}
          </div>;
        })()}

        {/* HESAPLAMA */}
        {tab==="hesaplama"&&<HesaplamaSekmesi kategori={form.tip} malzemeId={form.id} malzemeAd={form.ad} malzemeKodu={form.malzemeKodu} seciliHesaplama={form.hesaplamaSablonu} onSablonSec={(key)=>setForm(p=>({...p,hesaplamaSablonu:key}))} kdvOrani={form.kdvOrani||"20"}/>}

        {/* NOTLAR */}
        {tab==="notlar"&&<div>
          <div style={{color:T.primary,fontSize:"13px",fontWeight:600,marginBottom:"12px"}}>📝 MALZEME NOTLARI</div>
          <div style={{display:"flex",gap:"8px",marginBottom:"20px"}}>
            <input style={{...iS,flex:1}} value={nn} onChange={e=>setNn(e.target.value)} placeholder="Yeni not yazın..." onKeyDown={e=>e.key==="Enter"&&addN()} onFocus={foc} onBlur={blr}/>
            <button onClick={addN} style={{padding:"7px 24px",borderRadius:"6px",border:"none",background:T.primary,color:"#fff",cursor:"pointer",fontWeight:500,fontSize:"14px",whiteSpace:"nowrap"}}>+ Ekle</button>
          </div>
          {form.notlar.length===0?<div style={{textAlign:"center",padding:"40px",color:T.t3,background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`}}><div style={{fontSize:"32px",marginBottom:"8px"}}>📝</div>Henüz not eklenmemiş</div>:
          form.notlar.slice().reverse().map(n=><div key={n.id} style={{padding:"14px 18px",background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`,marginBottom:"8px",borderLeft:`3px solid ${T.primary}`}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"6px"}}><span style={{color:T.primary,fontSize:"12px",fontWeight:600}}>{n.yazar}</span><span style={{color:T.t3,fontSize:"12px"}}>{fmtDate(n.tarih)}</span></div>
            <div style={{color:T.text,fontSize:"14px",lineHeight:"1.6"}}>{n.metin}</div>
          </div>)}
        </div>}
      </div>
    </div>
  </div>;
};

/* ========== GRUP & ALT GRUP YÖNETİM BİLEŞENLERİ ========== */
const AltKategoriYonetim=({altKategoriler,setAltKategoriler,onSave,onDel,altGruplar=[],setAltGruplar,onSaveAltGrp,onDelAltGrp})=>{
  const[yeniKod,setYeniKod]=useState("");
  const[yeniAd,setYeniAd]=useState("");
  const[editId,setEditId]=useState(null);
  const[editKod,setEditKod]=useState("");
  const[editAd,setEditAd]=useState("");
  const[selKat,setSelKat]=useState(null);
  const[yeniGrpKod,setYeniGrpKod]=useState("");
  const[yeniGrpAd,setYeniGrpAd]=useState("");
  const[editGrpId,setEditGrpId]=useState(null);
  const[editGrpKod,setEditGrpKod]=useState("");
  const[editGrpAd,setEditGrpAd]=useState("");

  const ekle=()=>{
    if(!yeniKod||yeniKod.length!==3){alert("Kod 3 hane olmalıdır!");return;}
    if(!yeniAd.trim()){alert("Grup adı giriniz!");return;}
    const mevcut=altKategoriler.find(a=>a.kod===yeniKod);
    if(mevcut){alert(`Bu kod (${yeniKod}) zaten "${mevcut.ad}" olarak kullanılıyor!`);return;}
    if(onSave){onSave({kod:yeniKod,ad:yeniAd.trim()});}else{setAltKategoriler(p=>[...p,{id:Date.now(),kod:yeniKod,ad:yeniAd.trim()}]);}
    const sonrakiNo=parseInt(yeniKod)+1;
    setYeniKod(String(sonrakiNo).padStart(3,"0"));setYeniAd("");
  };
  const duzenlemeBaslat=(a)=>{setEditId(a.id);setEditKod(a.kod);setEditAd(a.ad);};
  const duzenlemeIptal=()=>{setEditId(null);setEditKod("");setEditAd("");};
  const duzenlemeKaydet=(a)=>{
    if(!editKod||editKod.length!==3){alert("Kod 3 hane olmalıdır!");return;}
    if(!editAd.trim()){alert("Grup adı giriniz!");return;}
    if(onSave){if(onDel)onDel(a.id);onSave({kod:editKod,ad:editAd.trim()});}
    else{setAltKategoriler(p=>p.map(x=>x.id===a.id?{...x,kod:editKod,ad:editAd.trim()}:x));}
    duzenlemeIptal();
  };
  const sil=(id)=>{if(confirm("Bu grubu silmek istediğinize emin misiniz?")){if(onDel){onDel(id);}else{setAltKategoriler(p=>p.filter(a=>a.id!==id));}}};

  const grpEkle=()=>{
    if(!selKat){alert("Önce sol taraftan bir grup seçiniz!");return;}
    if(!yeniGrpKod||yeniGrpKod.length!==2){alert("Kod 2 hane olmalıdır!");return;}
    if(!yeniGrpAd.trim()){alert("Alt grup adı giriniz!");return;}
    if(onSaveAltGrp){onSaveAltGrp({grupKod:selKat.kod,grupAd:selKat.ad,kod:yeniGrpKod,ad:yeniGrpAd.trim()});}
    else{setAltGruplar(p=>[...p,{id:Date.now(),grupKod:selKat.kod,grupAd:selKat.ad,kod:yeniGrpKod,ad:yeniGrpAd.trim()}]);}
    const sonrakiNo=parseInt(yeniGrpKod)+1;
    setYeniGrpKod(String(sonrakiNo).padStart(2,"0"));setYeniGrpAd("");
  };
  const grpDuzBaslat=(g)=>{setEditGrpId(g.id);setEditGrpKod(g.kod);setEditGrpAd(g.ad);};
  const grpDuzIptal=()=>{setEditGrpId(null);setEditGrpKod("");setEditGrpAd("");};
  const grpDuzKaydet=(g)=>{
    if(!editGrpKod||editGrpKod.length!==2){alert("Kod 2 hane olmalıdır!");return;}
    if(!editGrpAd.trim()){alert("Alt grup adı giriniz!");return;}
    if(onSaveAltGrp){if(onDelAltGrp)onDelAltGrp(g.id);onSaveAltGrp({grupKod:g.grupKod,grupAd:g.grupAd,kod:editGrpKod,ad:editGrpAd.trim()});}
    else{setAltGruplar(p=>p.map(x=>x.id===g.id?{...x,kod:editGrpKod,ad:editGrpAd.trim()}:x));}
    grpDuzIptal();
  };
  const grpSil=(id)=>{if(confirm("Bu alt grubu silmek istediğinize emin misiniz?")){if(onDelAltGrp){onDelAltGrp(id);}else{setAltGruplar(p=>p.filter(g=>g.id!==id));}}};

  const sorted=altKategoriler.slice().sort((a,b)=>a.kod.localeCompare(b.kod));
  const grpFiltered=selKat?(altGruplar||[]).filter(g=>g.grupKod===selKat.kod).sort((a,b)=>a.kod.localeCompare(b.kod)):[];

  return <div style={{display:"grid",gridTemplateColumns:"550px 550px",gap:"16px",maxWidth:"1116px",minHeight:"calc(100vh - 180px)"}}>
    {/* SOL: GRUPLAR */}
    <div style={{border:`1px solid ${T.border}`,borderRadius:"8px",overflow:"hidden"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",background:"#384248"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <span style={{fontSize:"15px",fontWeight:700,color:"#fff"}}>Gruplar</span>
          <span style={{fontSize:"12px",color:"#8799a3"}}>{sorted.length}</span>
        </div>
        <button onClick={ekle} title="Grup Ekle" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePlus size={30}/></button>
      </div>
      <div style={{padding:"8px 12px",borderBottom:`1px solid ${T.border}`,display:"grid",gridTemplateColumns:"80px 1fr",gap:"8px"}}>
        <input style={{...iS,fontSize:"15px"}} value={yeniKod} onChange={e=>setYeniKod(e.target.value.replace(/\D/g,"").slice(0,3))} placeholder="Kod" maxLength={3} onFocus={foc} onBlur={blr}/>
        <input style={{...iS,fontSize:"15px"}} value={yeniAd} onChange={e=>setYeniAd(e.target.value)} placeholder="Grup adı..." onKeyDown={e=>e.key==="Enter"&&ekle()} onFocus={foc} onBlur={blr}/>
      </div>
      <div style={{maxHeight:"calc(100vh - 200px)",overflow:"auto"}}>
        {sorted.map((a,idx)=><div key={a.id}>
          {editId===a.id
            ?<div style={{display:"grid",gridTemplateColumns:"80px 1fr auto",padding:"0 12px",gap:"8px",alignItems:"center",background:T.pBg,height:"36px"}}>
              <input style={{...iS,fontFamily:"monospace",fontWeight:700,textAlign:"center",fontSize:"15px"}} value={editKod} onChange={e=>setEditKod(e.target.value.replace(/\D/g,"").slice(0,3))} maxLength={3}/>
              <input style={{...iS,fontSize:"15px"}} value={editAd} onChange={e=>setEditAd(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")duzenlemeKaydet(a);if(e.key==="Escape")duzenlemeIptal();}} autoFocus onFocus={foc} onBlur={blr}/>
              <div style={{display:"flex",gap:"12px"}}><button onClick={()=>duzenlemeKaydet(a)} title="Kaydet" style={{padding:"0",border:"none",background:"transparent",color:"#384248",cursor:"pointer",display:"flex",alignItems:"center"}}><Save size={25}/></button><button onClick={duzenlemeIptal} title="İptal" style={{padding:"0",border:"none",background:"transparent",color:T.t3,cursor:"pointer",display:"flex",alignItems:"center"}}><X size={25}/></button></div>
            </div>
            :<div onClick={()=>{setSelKat(a);grpDuzIptal();setYeniGrpAd("");
              const mevcutGrplar=(altGruplar||[]).filter(g=>g.grupKod===a.kod).map(g=>parseInt(g.kod)||0);
              const sonraki=mevcutGrplar.length>0?Math.max(...mevcutGrplar)+1:1;
              setYeniGrpKod(String(sonraki).padStart(2,"0"));
            }} style={{display:"grid",gridTemplateColumns:"80px 1fr auto",padding:"0 12px",gap:"8px",alignItems:"center",height:"36px",borderBottom:idx<sorted.length-1?`1px solid ${T.border}`:"none",background:selKat?.id===a.id?"#384248":idx%2===0?"#fff":"#fafafa",cursor:"pointer",borderLeft:selKat?.id===a.id?"3px solid #8799a3":"3px solid transparent"}}
              onMouseEnter={e=>{if(selKat?.id!==a.id)e.currentTarget.style.background=T.pBg;}}
              onMouseLeave={e=>{if(selKat?.id!==a.id)e.currentTarget.style.background=idx%2===0?"#fff":"#fafafa";}}>
              <div style={{fontSize:"15px",fontFamily:"monospace",fontWeight:700,color:selKat?.id===a.id?"#8799a3":"#384248"}}>{a.kod}</div>
              <div style={{fontSize:"15px",fontWeight:500,color:selKat?.id===a.id?"#fff":T.text,textTransform:"uppercase"}}>{a.ad}</div>
              <div style={{display:"flex",gap:"12px"}}>
                <button onClick={e=>{e.stopPropagation();duzenlemeBaslat(a);}} title="Düzenle" style={{padding:"0",border:"none",background:"transparent",color:selKat?.id===a.id?"#8799a3":"#384248",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePen size={25}/></button>
                <button onClick={e=>{e.stopPropagation();sil(a.id);}} title="Sil" style={{padding:"0",border:"none",background:"transparent",color:selKat?.id===a.id?"#ff6b6b":T.err,cursor:"pointer",display:"flex",alignItems:"center"}}><Trash2 size={25}/></button>
              </div>
            </div>
          }
        </div>)}
      </div>
    </div>

    {/* SAĞ: ALT GRUPLAR */}
    <div style={{border:`1px solid ${T.border}`,borderRadius:"8px",overflow:"hidden"}}>
      {!selKat?<div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"60px",color:T.t3,fontSize:"15px",background:"#fff"}}>Grup seçiniz</div>:<>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",background:"#384248"}}>
          <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
            <span style={{fontSize:"15px",fontWeight:700,color:"#fff"}}>{selKat.ad}</span>
            <span style={{fontSize:"12px",color:"#8799a3"}}>{grpFiltered.length}</span>
          </div>
          <button onClick={grpEkle} title="Alt Grup Ekle" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePlus size={30}/></button>
        </div>
        <div style={{padding:"8px 12px",borderBottom:`1px solid ${T.border}`,display:"grid",gridTemplateColumns:"80px 1fr",gap:"8px"}}>
          <input style={{...iS,fontSize:"15px"}} value={yeniGrpKod} onChange={e=>setYeniGrpKod(e.target.value.replace(/\D/g,"").slice(0,2))} placeholder="Kod" maxLength={2} onFocus={foc} onBlur={blr}/>
          <input style={{...iS,fontSize:"15px"}} value={yeniGrpAd} onChange={e=>setYeniGrpAd(e.target.value)} placeholder="Alt grup adı..." onKeyDown={e=>e.key==="Enter"&&grpEkle()} onFocus={foc} onBlur={blr}/>
        </div>
        {grpFiltered.length===0?<div style={{padding:"40px",textAlign:"center",color:T.t3,fontSize:"15px",background:"#fff"}}>Bu grupta henüz alt grup yok.</div>:
        grpFiltered.map((g,idx)=><div key={g.id}>
          {editGrpId===g.id
            ?<div style={{display:"grid",gridTemplateColumns:"80px 1fr auto",padding:"0 12px",gap:"8px",alignItems:"center",background:T.pBg,height:"36px"}}>
              <input style={{...iS,fontFamily:"monospace",fontWeight:700,textAlign:"center",fontSize:"15px"}} value={editGrpKod} onChange={e=>setEditGrpKod(e.target.value.replace(/\D/g,"").slice(0,2))} maxLength={2}/>
              <input style={{...iS,fontSize:"15px"}} value={editGrpAd} onChange={e=>setEditGrpAd(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")grpDuzKaydet(g);if(e.key==="Escape")grpDuzIptal();}} autoFocus onFocus={foc} onBlur={blr}/>
              <div style={{display:"flex",gap:"12px"}}><button onClick={()=>grpDuzKaydet(g)} title="Kaydet" style={{padding:"0",border:"none",background:"transparent",color:"#384248",cursor:"pointer",display:"flex",alignItems:"center"}}><Save size={25}/></button><button onClick={grpDuzIptal} title="İptal" style={{padding:"0",border:"none",background:"transparent",color:T.t3,cursor:"pointer",display:"flex",alignItems:"center"}}><X size={25}/></button></div>
            </div>
            :<div style={{display:"grid",gridTemplateColumns:"80px 1fr auto",padding:"0 12px",gap:"8px",alignItems:"center",height:"36px",borderBottom:idx<grpFiltered.length-1?`1px solid ${T.border}`:"none",background:idx%2===0?"#fff":"#fafafa",cursor:"pointer"}}
              onMouseEnter={e=>e.currentTarget.style.background=T.pBg}
              onMouseLeave={e=>e.currentTarget.style.background=idx%2===0?"#fff":"#fafafa"}>
              <div style={{fontSize:"15px",fontFamily:"monospace",fontWeight:700,color:"#384248"}}>{g.kod}</div>
              <div style={{fontSize:"15px",fontWeight:500,color:T.text,textTransform:"uppercase"}}>{g.ad}</div>
              <div style={{display:"flex",gap:"12px"}}>
                <button onClick={()=>grpDuzBaslat(g)} title="Düzenle" style={{padding:"0",border:"none",background:"transparent",color:"#384248",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePen size={25}/></button>
                <button onClick={()=>grpSil(g.id)} title="Sil" style={{padding:"0",border:"none",background:"transparent",color:T.err,cursor:"pointer",display:"flex",alignItems:"center"}}><Trash2 size={25}/></button>
              </div>
            </div>
          }
        </div>)}
      </>}
    </div>
  </div>;
};

const AltGrupYonetim=({altKategoriler,altGruplar,setAltGruplar,onSave,onDel})=>{
  const[selAltKat,setSelAltKat]=useState(null);
  const[yeniKod,setYeniKod]=useState("");
  const[yeniAd,setYeniAd]=useState("");
  const[search,setSearch]=useState("");
  const[editId,setEditId]=useState(null);
  const[editKod,setEditKod]=useState("");
  const[editAd,setEditAd]=useState("");

  const ekle=()=>{
    if(!selAltKat){alert("Önce sol taraftan bir grup seçiniz!");return;}
    if(!yeniKod||yeniKod.length!==3){alert("Kod 3 hane olmalıdır!");return;}
    if(!yeniAd.trim()){alert("Alt grup adı giriniz!");return;}
    const mevcut=altGruplar.find(g=>g.kod===yeniKod&&g.grupKod===selAltKat.kod);
    if(mevcut){alert(`Bu kod (${yeniKod}) bu grup altında zaten "${mevcut.ad}" olarak kullanılıyor!`);return;}
    if(onSave){onSave({grupKod:selAltKat.kod,grupAd:selAltKat.ad,kod:yeniKod,ad:yeniAd.trim()});}else{setAltGruplar(p=>[...p,{id:Date.now(),grupKod:selAltKat.kod,grupAd:selAltKat.ad,kod:yeniKod,ad:yeniAd.trim()}]);}
    setYeniKod("");setYeniAd("");
  };

  const duzenlemeBaslat=(g)=>{setEditId(g.id);setEditKod(g.kod);setEditAd(g.ad);};
  const duzenlemeIptal=()=>{setEditId(null);setEditKod("");setEditAd("");};
  const duzenlemeKaydet=(g)=>{
    if(!editKod||editKod.length!==3){alert("Kod 3 hane olmalıdır!");return;}
    if(!editAd.trim()){alert("Alt grup adı giriniz!");return;}
    const mevcut=altGruplar.find(x=>x.kod===editKod&&x.grupKod===g.grupKod&&x.id!==g.id);
    if(mevcut){alert(`Bu kod (${editKod}) bu grup altında zaten "${mevcut.ad}" olarak kullanılıyor!`);return;}
    if(onSave){
      if(onDel)onDel(g.id);
      onSave({grupKod:g.grupKod,grupAd:g.grupAd,kod:editKod,ad:editAd.trim()});
    }else{
      setAltGruplar(p=>p.map(x=>x.id===g.id?{...x,kod:editKod,ad:editAd.trim()}:x));
    }
    duzenlemeIptal();
  };

  const sil=(id)=>{if(confirm("Bu alt grubu silmek istediğinize emin misiniz?")){if(onDel){onDel(id);}else{setAltGruplar(p=>p.filter(g=>g.id!==id));}}};

  const allAltKat=altKategoriler.slice().sort((a,b)=>a.kod.localeCompare(b.kod));
  const grpFiltered=selAltKat?altGruplar.filter(g=>g.grupKod===selAltKat.kod).sort((a,b)=>a.kod.localeCompare(b.kod)):[];

  return <div style={{display:"grid",gridTemplateColumns:"375px 375px",gap:"16px",minHeight:"400px"}}>
    {/* SOL: GRUPLAR */}
    <div style={{border:`1px solid ${T.border}`,borderRadius:"8px",overflow:"hidden"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",background:"#384248"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <span style={{fontSize:"16px",fontWeight:700,color:"#fff"}}>Gruplar</span>
          <span style={{fontSize:"13px",color:"#8799a3"}}>{allAltKat.length}</span>
        </div>
      </div>
      {allAltKat.length===0?<div style={{padding:"40px",textAlign:"center",color:T.t3,fontSize:"14px",background:"#fff"}}>Önce "Grup Yönetimi" sekmesinden grup ekleyin</div>:
      <div style={{maxHeight:"calc(100vh - 200px)",overflow:"auto"}}>{allAltKat.map(a=>{
        const sel=selAltKat?.id===a.id;
        const grpCount=altGruplar.filter(g=>g.grupKod===a.kod).length;
        return <div key={a.id} onClick={()=>{setSelAltKat(a);setYeniKod("");setYeniAd("");duzenlemeIptal();}} style={{display:"flex",alignItems:"center",gap:"8px",padding:"10px 14px",cursor:"pointer",borderBottom:`1px solid ${T.border}`,background:sel?"#384248":"#fff",borderLeft:sel?"3px solid #8799a3":"3px solid transparent"}}>
          <span style={{fontFamily:"monospace",fontWeight:700,fontSize:"14px",color:sel?"#8799a3":T.t2}}>{a.kod}</span>
          <span style={{flex:1,fontSize:"14px",fontWeight:sel?600:400,color:sel?"#fff":T.text}}>{a.ad}</span>
          <span style={{fontSize:"12px",color:sel?"#8799a3":T.t3}}>{grpCount}</span>
        </div>;
      })}</div>}
    </div>

    {/* SAĞ: ALT GRUPLAR */}
    <div style={{border:`1px solid ${T.border}`,borderRadius:"8px",overflow:"hidden"}}>
      {!selAltKat?<div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"60px",color:T.t3,fontSize:"14px",background:"#fff"}}>Grup seçiniz</div>:<>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",background:"#384248"}}>
          <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
            <span style={{fontSize:"16px",fontWeight:700,color:"#fff"}}>{selAltKat.ad}</span>
            <span style={{fontSize:"13px",color:"#8799a3"}}>{grpFiltered.length} alt kategori</span>
          </div>
          <button onClick={ekle} title="Alt Kategori Ekle" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePlus size={30}/></button>
        </div>
        <div style={{padding:"8px 12px",borderBottom:`1px solid ${T.border}`,display:"grid",gridTemplateColumns:"80px 1fr",gap:"8px"}}>
          <input style={iS} value={yeniKod} onChange={e=>setYeniKod(e.target.value.replace(/\D/g,"").slice(0,3))} placeholder="Kod" maxLength={3} onFocus={foc} onBlur={blr}/>
          <input style={iS} value={yeniAd} onChange={e=>setYeniAd(e.target.value)} placeholder="Alt kategori adı..." onKeyDown={e=>e.key==="Enter"&&ekle()} onFocus={foc} onBlur={blr}/>
        </div>
        {grpFiltered.length===0?<div style={{padding:"40px",textAlign:"center",color:T.t3,fontSize:"14px",background:"#fff"}}>Bu kategoride henüz alt kategori yok.</div>:
        grpFiltered.map((g,idx)=><div key={g.id}>
          {editId===g.id
            ?<div style={{display:"grid",gridTemplateColumns:"80px 1fr auto",padding:"8px 12px",gap:"8px",alignItems:"center",background:T.pBg}}>
              <input style={{...iS,fontFamily:"monospace",fontWeight:700,textAlign:"center"}} value={editKod} onChange={e=>setEditKod(e.target.value.replace(/\D/g,"").slice(0,3))} maxLength={3}/>
              <input style={iS} value={editAd} onChange={e=>setEditAd(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")duzenlemeKaydet(g);if(e.key==="Escape")duzenlemeIptal();}} autoFocus onFocus={foc} onBlur={blr}/>
              <div style={{display:"flex",gap:"8px"}}>
                <button onClick={()=>duzenlemeKaydet(g)} title="Kaydet" style={{padding:"0",border:"none",background:"transparent",color:"#384248",cursor:"pointer",display:"flex",alignItems:"center"}}><Save size={20}/></button>
                <button onClick={duzenlemeIptal} title="İptal" style={{padding:"0",border:"none",background:"transparent",color:T.t3,cursor:"pointer",display:"flex",alignItems:"center"}}><X size={20}/></button>
              </div>
            </div>
            :<div style={{display:"grid",gridTemplateColumns:"80px 1fr auto",padding:"8px 12px",gap:"8px",alignItems:"center",borderBottom:idx<grpFiltered.length-1?`1px solid ${T.border}`:"none",background:idx%2===0?"#fff":"#fafafa",cursor:"pointer"}}
              onMouseEnter={e=>e.currentTarget.style.background=T.pBg}
              onMouseLeave={e=>e.currentTarget.style.background=idx%2===0?"#fff":"#fafafa"}>
              <div style={{fontSize:"14px",fontFamily:"monospace",fontWeight:700,color:"#384248"}}>{g.kod}</div>
              <div style={{fontSize:"14px",fontWeight:500,color:T.text}}>{g.ad}</div>
              <div style={{display:"flex",gap:"8px"}}>
                <button onClick={()=>duzenlemeBaslat(g)} title="Düzenle" style={{padding:"0",border:"none",background:"transparent",color:"#384248",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePen size={18}/></button>
                <button onClick={()=>sil(g.id)} title="Sil" style={{padding:"0",border:"none",background:"transparent",color:T.err,cursor:"pointer",display:"flex",alignItems:"center"}}><Trash2 size={18}/></button>
              </div>
            </div>
          }
        </div>)}
      </>}
    </div>
  </div>;
};

/* ========== ALINAN TEKLİFLER YÖNETİMİ (PROFORMA TABANLI) ========== */
const TEKLIF_DURUMLARI=[
  {id:"beklemede",label:"Beklemede",color:"#fa8c16",bg:"#fff7e6",icon:"⏳"},
  {id:"onaylandi",label:"Onaylandı",color:"#52c41a",bg:"#f6ffed",icon:"✅"},
  {id:"reddedildi",label:"Reddedildi",color:"#ff4d4f",bg:"#fff1f0",icon:"❌"},
  {id:"sp_donustu",label:"SP'ye Dönüştü",color:"#1677ff",bg:"#e6f4ff",icon:"🛒"},
  {id:"suresi_doldu",label:"Süresi Doldu",color:"#8c8c8c",bg:"#f5f5f5",icon:"⌛"},
];
const ODEME_SEKILLERI_DEFAULT=["Peşin","30 Gün Vadeli","45 Gün Vadeli","60 Gün Vadeli","90 Gün Vadeli","İş Bitiminde","Hakediş","Avans + Bakiye"];

// İş günü hesaplama (hafta sonu hariç)
const addIsGunu=(startDateStr,gun)=>{
  if(!startDateStr||!gun)return"";
  let d=new Date(startDateStr);let added=0;
  while(added<gun){d.setDate(d.getDate()+1);const g=d.getDay();if(g!==0&&g!==6)added++;}
  return d.toISOString().split("T")[0];
};

/* ---- FİRMA PICKER MODAL (teklif/sipariş/fatura için) ---- */
const FirmaSeciciModal=({firmalar,turFiltre=[],onSelect,onClose,baslik="FİRMA SEÇ"})=>{
  const[src,setSrc]=useState("");
  const[activeIndex,setActiveIndex]=useState(0);
  const listRef=useRef(null);
  const filtered=firmalar.filter(f=>{
    if(turFiltre.length>0&&!turFiltre.some(t=>f.turler.includes(t)))return false;
    if(!src)return true;
    const q=nTR(src);
    return nTR(f.ad).includes(q)||nTR(f.firmaKodu).includes(q)||(f.kisiler||[]).some(k=>nTR(`${k.ad} ${k.soyad}`).includes(q));
  });
  useEffect(()=>{setActiveIndex(0);},[src]);
  useEffect(()=>{
    const el=listRef.current?.querySelector(`[data-fsm-idx="${activeIndex}"]`);
    if(el&&el.scrollIntoView)el.scrollIntoView({block:"nearest"});
  },[activeIndex]);
  const handleKey=(e)=>{
    if(e.key==="ArrowDown"){e.preventDefault();setActiveIndex(i=>Math.min(i+1,Math.max(filtered.length-1,0)));}
    else if(e.key==="ArrowUp"){e.preventDefault();setActiveIndex(i=>Math.max(i-1,0));}
    else if(e.key==="Enter"){e.preventDefault();const f=filtered[activeIndex];if(f){onSelect(f);onClose();}}
    else if(e.key==="Escape"){e.preventDefault();onClose();}
  };
  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}}>
    <div style={{background:"#fff",borderRadius:T.rl,width:"100%",maxWidth:"750px",maxHeight:"80vh",display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{padding:"12px 20px",background:"#384248",display:"flex",alignItems:"center",gap:"16px",borderRadius:`${T.rl} ${T.rl} 0 0`}}>
        <button onClick={onClose} style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><MoveLeft size={24}/></button>
        <span style={{fontSize:"15px",fontWeight:600,color:"#8799a3",flex:1,textAlign:"center"}}>{baslik}</span>
      </div>
      <div style={{padding:"12px 16px",borderBottom:`1px solid ${T.border}`}}>
        <input style={{width:"100%",height:"40px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${T.bDark}`,background:"#fff",color:T.text,fontSize:"15px",outline:"none",boxSizing:"border-box"}} value={src} onChange={e=>setSrc(e.target.value)} onKeyDown={handleKey} placeholder="Firma adı, kodu veya kişi ara..." autoFocus onFocus={foc} onBlur={blr}/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"100px 1fr 100px 150px",gap:"8px",padding:"8px 16px",background:"#fafafa",borderBottom:`1px solid ${T.border}`}}>
        {["Kod","Firma Adı","Tür","Kişi"].map((h,i)=><div key={i} style={{fontSize:"11px",fontWeight:600,color:T.t2,textTransform:"uppercase"}}>{h}</div>)}
      </div>
      <div ref={listRef} style={{flex:1,overflow:"auto"}}>
        {filtered.length===0?<div style={{padding:"40px",textAlign:"center",color:T.t3}}>Sonuç bulunamadı</div>:
        filtered.map((f,i)=>{
          const turLabels=f.turler.map(t=>{const o=FIRMA_TURLERI.find(x=>x.id===t);return o?o.label:t;}).join(", ");
          const ilkKisi=f.kisiler?.[0];
          const isActive=activeIndex===i;
          return <div key={f.id} data-fsm-idx={i} onClick={()=>{onSelect(f);onClose();}} onMouseEnter={()=>setActiveIndex(i)} style={{display:"grid",gridTemplateColumns:"100px 1fr 100px 150px",gap:"8px",padding:"10px 16px",borderBottom:`1px solid ${T.border}`,cursor:"pointer",alignItems:"center",background:isActive?T.pBg:"#fff"}}>
            <div style={{fontSize:"12px",color:T.t3,fontFamily:"monospace"}}>{f.firmaKodu}</div>
            <div style={{fontSize:"14px",fontWeight:600,color:T.text}}>{f.ad}</div>
            <div style={{fontSize:"12px",color:T.t2}}>{turLabels}</div>
            <div style={{fontSize:"12px",color:T.t2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{ilkKisi?`${ilkKisi.ad} ${ilkKisi.soyad}`.trim():"—"}</div>
          </div>;
        })}
      </div>
    </div>
  </div>;
};

/* ---- MALZEME SEÇİCİ MODAL (kalem için) ---- */
const MalzemeSeciciModal=({malzemeler,onSelect,onClose})=>{
  const[src,setSrc]=useState("");
  const[fTip,setFTip]=useState("all");
  const filtered=malzemeler.filter(m=>{
    const q=nTR(src);
    const ms=nTR(m.ad).includes(q)||nTR(m.malzemeKodu).includes(q)||nTR(m.grupAd).includes(q);
    const mt=fTip==="all"||m.tip===fTip;
    return ms&&mt;
  });
  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}}>
    <div style={{background:"#fff",borderRadius:T.rl,width:"100%",maxWidth:"800px",maxHeight:"80vh",display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{padding:"12px 20px",background:"#384248",display:"flex",alignItems:"center",gap:"16px",borderRadius:`${T.rl} ${T.rl} 0 0`}}>
        <button onClick={onClose} style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><MoveLeft size={24}/></button>
        <span style={{fontSize:"15px",fontWeight:600,color:"#8799a3",flex:1,textAlign:"center"}}>MALZEME / HİZMET SEÇ</span>
      </div>
      <div style={{padding:"12px 16px",borderBottom:`1px solid ${T.border}`,display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"}}>
        <input style={{flex:1,minWidth:"200px",height:"40px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${T.bDark}`,background:"#fff",color:T.text,fontSize:"15px",outline:"none",boxSizing:"border-box"}} value={src} onChange={e=>setSrc(e.target.value)} placeholder="Kod, ad veya grup ara..." autoFocus onFocus={foc} onBlur={blr}/>
        {MLZ_TIPLER.map(k=><button key={k.id} onClick={()=>setFTip(fTip===k.id?"all":k.id)} style={{padding:"6px 12px",borderRadius:"4px",border:`1px solid ${fTip===k.id?k.color:T.border}`,background:fTip===k.id?k.bg:"#fff",color:fTip===k.id?k.color:T.t2,fontSize:"12px",fontWeight:500,cursor:"pointer"}}>{k.icon} {k.label}</button>)}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"130px 1fr 80px 120px 60px",gap:"8px",padding:"8px 16px",background:"#fafafa",borderBottom:`1px solid ${T.border}`}}>
        {["Kod","Malzeme Adı","Tip","Grup","Birim"].map((h,i)=><div key={i} style={{fontSize:"11px",fontWeight:600,color:T.t2,textTransform:"uppercase"}}>{h}</div>)}
      </div>
      <div style={{flex:1,overflow:"auto"}}>
        {filtered.length===0?<div style={{padding:"40px",textAlign:"center",color:T.t3}}>Sonuç bulunamadı</div>:
        filtered.map(m=>{
          const tip=MLZ_TIPLER.find(t=>t.id===m.tip);
          return <div key={m.id} onClick={()=>{onSelect(m);onClose();}} style={{display:"grid",gridTemplateColumns:"130px 1fr 80px 120px 60px",gap:"8px",padding:"10px 16px",borderBottom:`1px solid ${T.border}`,cursor:"pointer",alignItems:"center"}}
            onMouseEnter={e=>e.currentTarget.style.background=T.pBg} onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
            <div style={{fontSize:"12px",color:T.t3,fontFamily:"monospace"}}>{m.malzemeKodu}</div>
            <div style={{fontSize:"14px",fontWeight:500,color:T.text}}>{m.ad}</div>
            <div style={{fontSize:"12px",color:T.t2}}>{tip?tip.label:"—"}</div>
            <div style={{fontSize:"12px",color:T.t2}}>{m.grupAd||"—"}</div>
            <div style={{fontSize:"12px",color:T.t2}}>{m.birim}</div>
          </div>;
        })}
      </div>
    </div>
  </div>;
};

const AlinanTekliflerYonetim=({teklifler,setTeklifler,onSave,onDel,malzemeler,firmalar,projeler=[],onSpOlustur})=>{
  const[view,setView]=useState("list");
  const[search,setSearch]=useState("");
  const[fDurum,setFDurum]=useState("all");
  const[activeTeklif,setActiveTeklif]=useState(null);
  const tedOptions=firmalar?.filter(f=>f.turler&&(f.turler.includes("tedarikci")||f.turler.includes("taseron")))||[];

  const iS={width:"100%",padding:"7px 10px",borderRadius:"6px",border:`1px solid ${T.bDark}`,background:"#fff",color:T.text,fontSize:"13px",outline:"none",boxSizing:"border-box"};
  const lS={display:"block",color:T.text,fontSize:"11px",fontWeight:500,marginBottom:"4px"};
  const foc=e=>{e.target.style.borderColor=T.primary;e.target.style.boxShadow=`0 0 0 2px ${T.primary}22`;};
  const blr=e=>{e.target.style.borderColor=T.bDark;e.target.style.boxShadow="none";};

  const nextNo=(()=>{const yil=new Date().getFullYear();const mevcut=teklifler.filter(t=>(t.teklifNo||"").includes(`-${yil}-`)).map(t=>parseInt((t.teklifNo||"").split("-")[2])||0);const n=mevcut.length>0?Math.max(...mevcut)+1:1;return`TKL-${yil}-${String(n).padStart(3,"0")}`;})();

  const initForm={id:null,teklifNo:nextNo,firmaId:"",firmaAd:"",yetkiliKisiId:"",yetkiliKisiAd:"",yetkiliTelefon:"",yetkiliEposta:"",teklifTarihi:new Date().toISOString().split("T")[0],gecerlilikGun:"",gecerlilikTarihi:"",paraBirimi:"TL",odemeSekli:"",aciklama:"",durum:"beklemede",projeId:"",projeAd:"",teslimatSahip:"",teslimatAdresId:"",teslimatAdresSerbest:"",kalemler:[]};
  const[form,setForm]=useState({...initForm});
  const[firmaPickerOpen,setFirmaPickerOpen]=useState(false);
  const[mlzPickerKalemId,setMlzPickerKalemId]=useState(null);
  const[saved,setSaved]=useState(false);
  const savingRef=useRef(false);
  const uf=(f,v)=>setForm(p=>({...p,[f]:v}));

  // Firma seçilince kişiler ve adresler
  const seciliFirma=useMemo(()=>firmalar.find(f=>f.id===parseInt(form.firmaId)),[form.firmaId,firmalar]);
  const firmakisiler=useMemo(()=>seciliFirma?.kisiler||[],[seciliFirma]);
  const firmaAdresler=useMemo(()=>seciliFirma?.adresler||[],[seciliFirma]);

  // Geçerlilik günü girilince tarihi hesapla
  const handleGunChange=(gun)=>{
    uf("gecerlilikGun",gun);
    if(gun&&form.teklifTarihi){const tar=addIsGunu(form.teklifTarihi,parseInt(gun));uf("gecerlilikTarihi",tar);}
  };
  const handleGecTarihChange=(tar)=>{
    uf("gecerlilikTarihi",tar);
    // Tarih girilince gün hesapla (iş günü)
    if(tar&&form.teklifTarihi){
      let d=new Date(form.teklifTarihi);let gun=0;const end=new Date(tar);
      while(d<end){d.setDate(d.getDate()+1);const g=d.getDay();if(g!==0&&g!==6)gun++;}
      uf("gecerlilikGun",gun>0?String(gun):"");
    }
  };
  const handleTeklifTarihChange=(tar)=>{
    uf("teklifTarihi",tar);
    if(form.gecerlilikGun&&tar){const yeniTar=addIsGunu(tar,parseInt(form.gecerlilikGun));uf("gecerlilikTarihi",yeniTar);}
  };

  const kalemEkle=()=>setForm(p=>({...p,kalemler:[...p.kalemler,{id:Date.now(),malzemeId:"",malzemeAd:"",malzemeKodu:"",birim:"",miktar:"",fiyatTipi:"net",listeFiyati:"",iskonto1:"",iskonto2:"",netFiyat:"",kdvOrani:"20",maliyetEsas:"net",teminTarihi:""}]}));
  const kalemSil=(kid)=>setForm(p=>({...p,kalemler:p.kalemler.filter(k=>k.id!==kid)}));
  const kalemGuncelle=(kid,field,val)=>{
    setForm(p=>({...p,kalemler:p.kalemler.map(k=>{
      if(k.id!==kid)return k;
      const nk={...k,[field]:val};
      if(field==="malzemeId"&&val){const mlz=malzemeler.find(m=>m.id===parseInt(val));if(mlz){nk.malzemeAd=mlz.ad;nk.malzemeKodu=mlz.malzemeKodu;nk.birim=mlz.birim;}}
      if(field==="fiyatTipi"&&val==="net"){nk.listeFiyati=0;nk.iskonto1=0;nk.iskonto2=0;}
      if(nk.fiyatTipi==="liste"&&(field==="listeFiyati"||field==="iskonto1"||field==="iskonto2"||field==="fiyatTipi")){
        const lf=parseFloat(nk.listeFiyati)||0;const i1=parseFloat(nk.iskonto1)||0;const i2=parseFloat(nk.iskonto2)||0;
        nk.netFiyat=Math.round(lf*(1-i1/100)*(1-i2/100)*100)/100;
      }
      return nk;
    })}));
  };

  const save=async()=>{
    if(savingRef.current){console.warn("Teklif kayıt işlemi devam ediyor, çift çağrı engellendi");return;}
    if(!form.firmaId){alert("Firma seçiniz!");return;}
    if(form.kalemler.length===0){alert("En az bir kalem ekleyiniz!");return;}
    const bos=form.kalemler.find(k=>!k.malzemeId);
    if(bos){alert("Tüm kalemlerde malzeme seçilmelidir!");return;}
    const fiyatBos=form.kalemler.find(k=>!(parseFloat(k.netFiyat)>0));
    if(fiyatBos){alert("Tüm kalemlerde fiyat girilmelidir!");return;}
    savingRef.current=true;
    try{
      const frm=firmalar.find(f=>f.id===parseInt(form.firmaId));
      const prj=projeler.find(p=>p.id===parseInt(form.projeId));
      const today=new Date().toISOString().split("T")[0];
      let durum=form.durum;
      if(durum==="beklemede"&&form.gecerlilikTarihi&&form.gecerlilikTarihi<today)durum="suresi_doldu";
      const isNew=!form.id;
      const teklif={...form,id:form.id,_isNew:isNew,firmaId:parseInt(form.firmaId),firmaAd:frm?.ad||"",
        projeId:form.projeId?parseInt(form.projeId):null,projeAd:prj?.ad||"",durum,
        kalemler:form.kalemler.map(k=>({...k,malzemeId:parseInt(k.malzemeId),listeFiyati:parseFloat(k.listeFiyati)||0,iskonto1:parseFloat(k.iskonto1)||0,iskonto2:parseFloat(k.iskonto2)||0,netFiyat:parseFloat(k.netFiyat)||0,miktar:parseFloat(k.miktar)||1}))};
      let yeniId=form.id;
      if(onSave){
        const dbId=await onSave(teklif);
        if(dbId)yeniId=dbId;
      }else{
        if(form.id){setTeklifler(p=>p.map(t=>t.id===form.id?teklif:t));}
        else{yeniId=Date.now();setTeklifler(p=>[...p,{...teklif,id:yeniId}]);}
      }
      // Formda kal, id/durum güncelle (ikinci kaydette update çalışsın)
      setForm(p=>({...p,id:yeniId,durum:teklif.durum}));
      setSaved(true);
      setTimeout(()=>setSaved(false),2000);
    }finally{
      savingRef.current=false;
    }
  };

  const edit=(t)=>{setForm({...t,firmaId:String(t.firmaId),projeId:t.projeId?String(t.projeId):"",kalemler:t.kalemler.map(k=>({...k,malzemeId:String(k.malzemeId)}))});setView("form");};
  const sil=(id)=>{if(!confirm("Bu teklifi silmek istediğinize emin misiniz?"))return;if(onDel){onDel(id);}else{setTeklifler(p=>p.filter(t=>t.id!==id));}};
  const detay=(t)=>{setActiveTeklif(t);setView("detail");};

  const durumGuncelle=(t,yeniDurum)=>{
    const guncellendi={...t,durum:yeniDurum};
    if(onSave){onSave(guncellendi);}else{setTeklifler(p=>p.map(x=>x.id===t.id?guncellendi:x));}
    setActiveTeklif(guncellendi);
  };

  const toplamHesapla=(kalemler)=>{
    let kdvHaric=0,kdvToplam=0;
    kalemler.forEach(k=>{const m=parseFloat(k.miktar)||1;const n=parseFloat(k.netFiyat)||0;const t=m*n;kdvHaric+=t;kdvToplam+=t*(parseInt(k.kdvOrani||0)/100);});
    return{kdvHaric,kdvToplam,kdvDahil:kdvHaric+kdvToplam};
  };

  // KDV kırılım tablosu
  const kdvKirilim=(kalemler)=>{
    const map={};
    kalemler.forEach(k=>{const m=parseFloat(k.miktar)||1;const n=parseFloat(k.netFiyat)||0;const t=m*n;const oran=String(k.kdvOrani||"20");if(!map[oran])map[oran]={matrah:0,kdv:0};map[oran].matrah+=t;map[oran].kdv+=t*(parseInt(oran)/100);});
    return Object.entries(map).sort((a,b)=>parseInt(a[0])-parseInt(b[0]));
  };

  const filtered=teklifler.filter(t=>{
    const q=nTR(search);
    const ms=nTR(t.teklifNo).includes(q)||nTR(t.firmaAd).includes(q)||nTR(t.aciklama).includes(q)||nTR(t.projeAd).includes(q)||(t.kalemler||[]).some(k=>nTR(k.malzemeAd).includes(q));
    const md=fDurum==="all"||t.durum===fDurum;
    return ms&&md;
  }).sort((a,b)=>(b.teklifTarihi||"").localeCompare(a.teklifTarihi||""));

  /* ===== FORM ===== */
  if(view==="form"){
    const para=PARA_BIRIMLERI.find(p=>p.id===form.paraBirimi);
    const{kdvHaric,kdvDahil,kdvToplam}=toplamHesapla(form.kalemler);
    const kirKdv=kdvKirilim(form.kalemler);
    // Teslimat adres bilgisi
    const seciliAdres=firmaAdresler.find(a=>String(a.id)===String(form.teslimatAdresId));

    const headerFirmaAd=form.firmaId?firmalar.find(f=>f.id===parseInt(form.firmaId))?.ad||"":"";

    return <div>
      {/* HEADER — dark bar */}
      <div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"20px",padding:"12px 20px",background:"#384248",borderRadius:"8px"}}>
        <button onClick={()=>{setView("list");setForm({...initForm,teklifNo:nextNo});}} title="Geri" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><MoveLeft size={32}/></button>
        <div style={{flex:1,textAlign:"center"}}>
          <span style={{fontSize:"20px",fontWeight:600,color:"#8799a3",letterSpacing:"0.3px"}}>{form.teklifNo}{headerFirmaAd?` - ${headerFirmaAd}`:form.id?"":" - Yeni Teklif"}</span>
        </div>
        <button onClick={save} title={saved?"Kaydedildi":"Kaydet"} style={{padding:"0",border:"none",background:"transparent",color:saved?"#52c41a":"#8799a3",cursor:"pointer",display:"flex",alignItems:"center",transition:"color .3s"}}><Save size={32}/></button>
        {form.id&&<button onClick={()=>sil(form.id)} title="Teklifi Sil" style={{padding:"0",border:"none",background:"transparent",color:"#ff6b6b",cursor:"pointer",display:"flex",alignItems:"center"}}><Trash2 size={32}/></button>}
      </div>

      {firmaPickerOpen&&<FirmaSeciciModal firmalar={firmalar} turFiltre={["tedarikci","taseron","resmi"]} onSelect={f=>{uf("firmaId",String(f.id));uf("yetkiliKisiId","");uf("yetkiliKisiAd","");uf("yetkiliTelefon","");uf("yetkiliEposta","");uf("teslimatAdresId","");}} onClose={()=>setFirmaPickerOpen(false)} baslik="TEDARİKÇİ / TAŞERON / RESMİ KURUM SEÇ"/>}

      {/* BÖLÜM 1: İki Kart — Sol: Teklif Bilgileri / Sağ: Koşullar */}
      <div style={{display:"grid",gridTemplateColumns:"2.5fr 1fr",gap:"12px",marginBottom:"12px"}}>
        {/* SOL KART: TEKLİF BİLGİLERİ */}
        <div style={{background:T.card,borderRadius:T.rl,border:`1px solid ${T.border}`,padding:"20px 24px"}}>
          <div style={{fontSize:"11px",fontWeight:700,color:T.t3,letterSpacing:"1px",marginBottom:"14px"}}>TEKLİF BİLGİLERİ</div>
          {/* Satır 1: Tarih | Proje | Para Birimi | Durum */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1.5fr 1fr 1fr",gap:"14px",marginBottom:"14px"}}>
            <div><label style={lS}>Teklif Tarihi</label><input style={iS} type="date" value={form.teklifTarihi} onChange={e=>handleTeklifTarihChange(e.target.value)} onFocus={foc} onBlur={blr}/></div>
            <div><label style={lS}>Proje (Opsiyonel)</label>
              <select style={iS} value={form.projeId} onChange={e=>uf("projeId",e.target.value)} onFocus={foc} onBlur={blr}>
                <option value="">— Proje seçiniz —</option>
                {projeler.map(p=><option key={p.id} value={p.id}>{p.projeKodu?`[${p.projeKodu}] `:""}{p.ad}</option>)}
              </select>
            </div>
            <div><label style={lS}>Para Birimi</label>
              <select style={iS} value={form.paraBirimi} onChange={e=>uf("paraBirimi",e.target.value)} onFocus={foc} onBlur={blr}>
                {PARA_BIRIMLERI.map(p=><option key={p.id} value={p.id}>{p.label}</option>)}
              </select>
            </div>
            <div><label style={lS}>Durum</label>
              <select style={iS} value={form.durum} onChange={e=>uf("durum",e.target.value)} onFocus={foc} onBlur={blr}>
                {TEKLIF_DURUMLARI.map(d=><option key={d.id} value={d.id}>{d.icon} {d.label}</option>)}
              </select>
            </div>
          </div>
          {/* Satır 2: Firma (full width) */}
          <div style={{marginBottom:"14px"}}>
            <label style={lS}>Firma *</label>
            <button onClick={()=>setFirmaPickerOpen(true)} style={{width:"100%",height:"40px",padding:"0 14px",borderRadius:"6px",border:`1px solid ${T.bDark}`,background:"#fff",color:headerFirmaAd?T.text:T.t3,fontSize:"15px",textAlign:"left",cursor:"pointer",boxSizing:"border-box",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{headerFirmaAd||"— Firma seçiniz —"}</button>
          </div>
          {/* Satır 3: Yetkili | Telefon | E-mail */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"14px"}}>
            <div>
              <label style={lS}>Teklifi Veren Yetkili</label>
              <select style={iS} value={form.yetkiliKisiId} onChange={e=>{const kid=e.target.value;uf("yetkiliKisiId",kid);const k=firmakisiler.find(x=>String(x.id)===kid);uf("yetkiliKisiAd",k?`${k.ad||""} ${k.soyad||""}`.trim():"");uf("yetkiliTelefon",k?(k.cep||k.telefon||""):"");uf("yetkiliEposta",k?(k.eposta||""):"");}} onFocus={foc} onBlur={blr} disabled={!form.firmaId}>
                <option value="">{form.firmaId?"— Kişi seçiniz —":"— Önce firma seçin —"}</option>
                {firmakisiler.map(k=><option key={k.id} value={k.id}>{k.ad} {k.soyad}{k.unvan?` (${k.unvan})`:""}</option>)}
              </select>
            </div>
            <div>
              <label style={lS}>Telefon / Cep</label>
              <input style={{...iS,background:"#f5f5f5"}} value={form.yetkiliTelefon||""} readOnly placeholder="— Yetkili seçilince dolar —"/>
            </div>
            <div>
              <label style={lS}>E-mail</label>
              <input style={{...iS,background:"#f5f5f5"}} value={form.yetkiliEposta||""} readOnly placeholder="— Yetkili seçilince dolar —"/>
            </div>
          </div>
        </div>

        {/* SAĞ KART: KOŞULLAR */}
        <div style={{background:T.card,borderRadius:T.rl,border:`1px solid ${T.border}`,padding:"20px 24px"}}>
          <div style={{fontSize:"11px",fontWeight:700,color:T.t3,letterSpacing:"1px",marginBottom:"14px"}}>KOŞULLAR</div>
          {/* Satır 1: Geçerlilik | Geçerlilik Tarihi */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginBottom:"14px"}}>
            <div>
              <label style={lS}>Geçerlilik</label>
              <div style={{position:"relative"}}>
                <input style={{...iS,paddingRight:"34px"}} type="number" min="1" max="365" value={form.gecerlilikGun} onChange={e=>handleGunChange(e.target.value)} placeholder="Gün" onFocus={foc} onBlur={blr}/>
                <span style={{position:"absolute",right:"8px",top:"50%",transform:"translateY(-50%)",fontSize:"11px",color:T.t3,pointerEvents:"none"}}>gün</span>
              </div>
            </div>
            <div>
              <label style={lS}>Geçerlilik Tarihi</label>
              <input style={iS} type="date" value={form.gecerlilikTarihi} onChange={e=>handleGecTarihChange(e.target.value)} onFocus={foc} onBlur={blr}/>
            </div>
          </div>
          {form.gecerlilikGun&&form.gecerlilikTarihi&&<div style={{fontSize:"11px",color:"#52c41a",marginTop:"-10px",marginBottom:"10px"}}>✓ {form.gecerlilikGun} iş günü → {fmtDate(form.gecerlilikTarihi)}</div>}
          {/* Satır 2: Ödeme Şekli (manuel text) */}
          <div style={{marginBottom:"14px"}}>
            <label style={lS}>Ödeme Şekli</label>
            <input style={iS} value={form.odemeSekli} onChange={e=>uf("odemeSekli",e.target.value)} placeholder="Örn: 60 gün vadeli" onFocus={foc} onBlur={blr}/>
          </div>
          {/* Satır 3: Teslimat Şekli (dropdown) */}
          <div>
            <label style={lS}>Teslimat Şekli</label>
            <select style={iS} value={form.teslimatSahip} onChange={e=>uf("teslimatSahip",e.target.value)} onFocus={foc} onBlur={blr}>
              <option value="">— Seçiniz —</option>
              <option value="biz">Müşteri teslim alacak</option>
              <option value="firma">Tedarikçi teslim edecek</option>
            </select>
          </div>
        </div>
      </div>

      {/* Teslim Alınacak Adres — sadece "biz" (müşteri teslim alacak) seçiliyse görünür */}
      {form.teslimatSahip==="biz"&&<div style={{background:T.card,borderRadius:T.rl,border:`1px solid ${T.border}`,padding:"20px 24px",marginBottom:"12px"}}>
        <div style={{fontSize:"11px",fontWeight:700,color:T.t3,letterSpacing:"1px",marginBottom:"14px"}}>TESLİM ALINACAK ADRES</div>
        <div>
          <label style={lS}>Adres Seçimi</label>
          <select style={iS} value={form.teslimatAdresId} onChange={e=>uf("teslimatAdresId",e.target.value)} onFocus={foc} onBlur={blr} disabled={!form.firmaId}>
            <option value="">{form.firmaId?"— Firmadan adres seçin —":"— Önce firma seçin —"}</option>
            {firmaAdresler.map(a=><option key={a.id} value={a.id}>{a.ad||a.tipi} — {a.il}{a.ilce?"/"+a.ilce:""}</option>)}
            <option value="__serbest__">✏️ Farklı adres gir...</option>
          </select>
        </div>
        {form.teslimatAdresId&&form.teslimatAdresId!=="__serbest__"&&seciliAdres&&(
          <div style={{background:"#f0f5ff",borderRadius:T.r,padding:"12px 16px",border:`1px solid ${T.primary}22`,fontSize:"12px",color:T.text,marginTop:"10px"}}>
            <div style={{fontWeight:600,marginBottom:"4px",color:T.primary}}>📍 {seciliAdres.ad||seciliAdres.tipi}</div>
            <div style={{color:T.t2}}>{[seciliAdres.mahalle,seciliAdres.adres,seciliAdres.ilce,seciliAdres.il,seciliAdres.ulke].filter(Boolean).join(", ")}</div>
            {seciliAdres.posta_kodu&&<div style={{color:T.t3,marginTop:"2px"}}>Posta Kodu: {seciliAdres.posta_kodu}</div>}
            {seciliAdres.tel&&<div style={{color:T.t3}}>Tel: {seciliAdres.tel}</div>}
          </div>
        )}
        {form.teslimatAdresId==="__serbest__"&&(
          <div style={{marginTop:"10px"}}><label style={lS}>Teslimat Adresi (Serbest)</label><textarea style={{...iS,height:"56px",resize:"vertical"}} value={form.teslimatAdresSerbest} onChange={e=>uf("teslimatAdresSerbest",e.target.value)} placeholder="Adres detayını giriniz..." onFocus={foc} onBlur={blr}/></div>
        )}
        {!form.firmaId&&(
          <div style={{marginTop:"10px",padding:"10px 14px",background:"#fff7e6",borderRadius:T.r,border:"1px solid #ffd591",fontSize:"12px",color:"#d48806"}}>⚠️ Firma seçildikten sonra kayıtlı adresler burada görünür.</div>
        )}
        {form.firmaId&&firmaAdresler.length===0&&(
          <div style={{marginTop:"10px",padding:"10px 14px",background:"#fff7e6",borderRadius:T.r,border:"1px solid #ffd591",fontSize:"12px",color:"#d48806"}}>⚠️ Bu firmaya kayıtlı adres bulunmuyor. "Farklı adres gir..." seçeneğini kullanabilirsiniz.</div>
        )}
      </div>}

      {/* Malzeme Picker Modal */}
      {mlzPickerKalemId&&<MalzemeSeciciModal malzemeler={malzemeler} onSelect={m=>{kalemGuncelle(mlzPickerKalemId,"malzemeId",String(m.id));}} onClose={()=>setMlzPickerKalemId(null)}/>}
      {/* BÖLÜM 3: Kalemler */}
      <div style={{background:T.card,borderRadius:T.rl,border:`1px solid ${T.border}`,overflow:"hidden",marginBottom:"16px"}}>
        <div style={{padding:"10px 16px",background:"#8799a3",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
            <span style={{fontSize:"16px",fontWeight:700,color:"#fff"}}>Teklif Kalemleri</span>
            <span style={{fontSize:"13px",color:"rgba(255,255,255,0.75)"}}>{form.kalemler.length} adet</span>
          </div>
          <button onClick={kalemEkle} title="Kalem Ekle" style={{padding:"0",border:"none",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePlus size={32} color="#fff"/></button>
        </div>
        {/* Tablo başlığı */}
        {form.kalemler.length>0&&<div style={{display:"grid",gridTemplateColumns:"40px 95px 1fr 110px 65px 55px 2.2fr 60px 90px 100px 28px",gap:"6px",padding:"6px 14px",background:"#f7f8fa",borderBottom:`1px solid ${T.border}`,fontSize:"10px",fontWeight:700,color:T.t3,alignItems:"center"}}>
          <div style={{textAlign:"center"}}>SIRA NO</div>
          <div>KOD</div>
          <div>MALZEME</div>
          <div>TERMİN</div>
          <div style={{textAlign:"right"}}>MİKTAR</div>
          <div>BİRİM</div>
          <div>BİRİM FİYAT / İSKONTO</div>
          <div style={{textAlign:"center"}}>KDV</div>
          <div style={{textAlign:"right"}}>TUTAR</div>
          <div style={{textAlign:"right"}}>TOPLAM</div>
          <div/>
        </div>}
        {form.kalemler.length===0&&<div style={{padding:"32px",textAlign:"center",color:T.t3,fontSize:"13px"}}>Henüz kalem eklenmedi. "Kalem Ekle" butonuna tıklayın.</div>}
        {form.kalemler.map((k,idx)=>{
          const mlz=malzemeler.find(m=>m.id===parseInt(k.malzemeId));
          const isListe=k.fiyatTipi==="liste";
          const tutar=(parseFloat(k.miktar)||0)*(parseFloat(k.netFiyat)||0);
          const kdvTut=tutar*(parseInt(k.kdvOrani||0)/100);
          const topTut=tutar+kdvTut;
          // iskonto hesap adımları göster
          const lf=parseFloat(k.listeFiyati)||0;
          const i1=parseFloat(k.iskonto1)||0;
          const i2=parseFloat(k.iskonto2)||0;
          const sonadisk1=lf*(1-i1/100);
          const netHes=Math.round(sonadisk1*(1-i2/100)*100)/100;
          return <div key={k.id} style={{borderBottom:`1px solid ${T.border}`,background:idx%2===0?"#fff":"#fcfcfd"}}>
            <div style={{display:"grid",gridTemplateColumns:"40px 95px 1fr 110px 65px 55px 2.2fr 60px 90px 100px 28px",gap:"6px",padding:"8px 14px",alignItems:"center"}}>
              <div style={{fontWeight:600,color:T.t3,fontSize:"12px",textAlign:"center"}}>{idx+1}</div>
              <div style={{fontSize:"12px",color:T.text,fontFamily:"monospace",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}} title={k.malzemeKodu}>{k.malzemeKodu||"—"}</div>
              <div>
                <button onClick={()=>setMlzPickerKalemId(k.id)} style={{...iS,fontSize:"12px",padding:"5px 8px",textAlign:"left",cursor:"pointer",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:mlz?T.text:T.t3}}>{mlz?mlz.ad:"— Malzeme seç —"}</button>
              </div>
              <div><input style={{...iS,fontSize:"11px",padding:"5px 6px"}} type="date" value={k.teminTarihi||""} onChange={e=>kalemGuncelle(k.id,"teminTarihi",e.target.value)} onFocus={foc} onBlur={blr}/></div>
              <div><NumInput style={{...iS,fontSize:"14px",padding:"5px 8px",textAlign:"right"}} value={k.miktar} onChange={v=>kalemGuncelle(k.id,"miktar",v)}/></div>
              <div><input style={{...iS,fontSize:"12px",padding:"5px 8px",background:"#f5f5f5"}} value={k.birim||mlz?.birim||""} onChange={e=>kalemGuncelle(k.id,"birim",e.target.value)} onFocus={foc} onBlur={blr}/></div>

              {/* ── BİRİM FİYAT / İSKONTO — Dropdown + dinamik alan ── */}
              <div style={{display:"flex",gap:"6px",alignItems:"center"}}>
                <select style={{...iS,fontSize:"11px",padding:"5px 4px",cursor:"pointer",flex:"0 0 100px"}} value={k.fiyatTipi} onChange={e=>kalemGuncelle(k.id,"fiyatTipi",e.target.value)} onFocus={foc} onBlur={blr}>
                  <option value="net">NET</option>
                  <option value="liste">LİSTE + İSK.</option>
                </select>
                {!isListe
                  ?<NumInput style={{...iS,fontSize:"14px",padding:"5px 8px",textAlign:"right",flex:1,fontWeight:600}} value={k.netFiyat} onChange={v=>kalemGuncelle(k.id,"netFiyat",v)} placeholder="Net fiyat"/>
                  :<div style={{display:"flex",gap:"4px",flex:1}}>
                    <NumInput style={{...iS,fontSize:"13px",padding:"5px 6px",textAlign:"right",flex:1,border:`1px solid #722ed133`}} value={k.listeFiyati} onChange={v=>kalemGuncelle(k.id,"listeFiyati",v)} placeholder="Liste"/>
                    <NumInput style={{...iS,fontSize:"13px",padding:"5px 4px",textAlign:"right",width:"60px",border:`1px solid #fa8c1633`}} value={k.iskonto1} onChange={v=>kalemGuncelle(k.id,"iskonto1",v)} placeholder="%1"/>
                    <NumInput style={{...iS,fontSize:"13px",padding:"5px 4px",textAlign:"right",width:"60px",border:`1px solid #fa8c1633`}} value={k.iskonto2} onChange={v=>kalemGuncelle(k.id,"iskonto2",v)} placeholder="%2"/>
                  </div>
                }
              </div>

              <div><select style={{...iS,fontSize:"12px",padding:"5px 4px"}} value={k.kdvOrani} onChange={e=>kalemGuncelle(k.id,"kdvOrani",e.target.value)} onFocus={foc} onBlur={blr}>{KDV_ORANLARI.map(x=><option key={x.id} value={x.id}>{x.label}</option>)}</select></div>
              <div style={{textAlign:"right",fontWeight:600,fontSize:"14px",color:T.text}}>{tutar>0?`${para?.symbol}${tutar.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})}`:""}</div>
              <div style={{textAlign:"right",fontWeight:700,fontSize:"14px",color:T.primary}}>{topTut>0?`${para?.symbol}${topTut.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})}`:""}</div>
              <button onClick={()=>kalemSil(k.id)} style={{background:"none",border:"none",color:T.err,cursor:"pointer",padding:"2px",display:"flex",alignItems:"center",justifyContent:"center"}}><Trash2 size={16}/></button>
            </div>
          </div>;
        })}
        {/* TOPLAM SATIRI */}
        {form.kalemler.length>0&&<div style={{background:"#f8faff",borderTop:`2px solid ${T.primary}22`}}>
          {/* KDV kırılım */}
          {kirKdv.length>0&&<div style={{padding:"10px 14px",borderBottom:`1px solid ${T.border}`,display:"flex",gap:"16px",flexWrap:"wrap",justifyContent:"flex-end"}}>
            {kirKdv.map(([oran,v])=><div key={oran} style={{fontSize:"11px",color:T.t2,textAlign:"right"}}>
              <span>%{oran} KDV Matrahı: <b>{para?.symbol}{v.matrah.toLocaleString("tr-TR",{minimumFractionDigits:2})}</b> → KDV: <b>{para?.symbol}{v.kdv.toLocaleString("tr-TR",{minimumFractionDigits:2})}</b></span>
            </div>)}
          </div>}
          <div style={{padding:"14px 20px",display:"flex",justifyContent:"flex-end",gap:"28px",alignItems:"center"}}>
            <div style={{textAlign:"right"}}>
              <div style={{fontSize:"10px",color:T.t3,fontWeight:600,marginBottom:"2px"}}>KDV HARİÇ</div>
              <div style={{fontSize:"15px",fontWeight:700,color:T.text}}>{para?.symbol}{kdvHaric.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div>
            </div>
            <div style={{textAlign:"right"}}>
              <div style={{fontSize:"10px",color:T.t3,fontWeight:600,marginBottom:"2px"}}>TOPLAM KDV</div>
              <div style={{fontSize:"13px",fontWeight:600,color:T.t2}}>{para?.symbol}{kdvToplam.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div>
            </div>
            <div style={{textAlign:"right",padding:"10px 16px",background:T.pBg,borderRadius:T.r,border:`1px solid ${T.primary}33`}}>
              <div style={{fontSize:"10px",color:T.primary,fontWeight:700,marginBottom:"2px"}}>GENEL TOPLAM (KDV DAHİL)</div>
              <div style={{fontSize:"20px",fontWeight:700,color:T.primary}}>{para?.symbol}{kdvDahil.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div>
            </div>
          </div>
        </div>}
      </div>

      {/* BÖLÜM 4: Açıklama / Not */}
      <div style={{background:T.card,borderRadius:T.rl,border:`1px solid ${T.border}`,padding:"20px 24px",marginBottom:"16px"}}>
        <div style={{fontSize:"11px",fontWeight:700,color:T.t3,letterSpacing:"1px",marginBottom:"10px"}}>AÇIKLAMA / NOT</div>
        <textarea style={{...iS,height:"80px",resize:"vertical"}} value={form.aciklama} onChange={e=>uf("aciklama",e.target.value)} placeholder="Teklif ile ilgili notlarınızı buraya yazabilirsiniz..." onFocus={foc} onBlur={blr}/>
      </div>
    </div>;
  }

  /* ===== DETAY ===== */
  if(view==="detail"&&activeTeklif){
    const t=activeTeklif;
    const para=PARA_BIRIMLERI.find(p=>p.id===t.paraBirimi);
    const{kdvHaric,kdvToplam,kdvDahil}=toplamHesapla(t.kalemler||[]);
    const kirKdv=kdvKirilim(t.kalemler||[]);
    const durumObj=TEKLIF_DURUMLARI.find(d=>d.id===t.durum)||TEKLIF_DURUMLARI[0];
    const detayFirma=firmalar.find(f=>f.id===t.firmaId);
    const detayAdres=detayFirma?.adresler?.find(a=>String(a.id)===String(t.teslimatAdresId));
    return <div>
      <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"20px",flexWrap:"wrap"}}>
        <button onClick={()=>setView("list")} style={{padding:"7px 14px",borderRadius:"6px",border:`1px solid ${T.bDark}`,background:"#fff",color:T.t2,cursor:"pointer",fontSize:"14px"}}>← Teklifler</button>
        <span style={{fontFamily:"monospace",fontSize:"15px",color:T.primary,background:T.pBg,padding:"4px 12px",borderRadius:"6px",fontWeight:700}}>{t.teklifNo}</span>
        <span style={{padding:"3px 10px",borderRadius:"4px",fontSize:"12px",fontWeight:600,color:durumObj.color,background:durumObj.bg,border:`1px solid ${durumObj.color}33`}}>{durumObj.icon} {durumObj.label}</span>
        <div style={{flex:1}}/>
        {t.durum!=="sp_donustu"&&<button onClick={()=>edit(t)} style={{padding:"7px 16px",borderRadius:"6px",border:`1px solid ${T.bDark}`,background:"#fff",color:T.t2,cursor:"pointer",fontSize:"13px"}}>✏️ Düzenle</button>}
        {(t.durum==="onaylandi"||t.durum==="beklemede")&&onSpOlustur&&
          <button onClick={()=>onSpOlustur(t)} style={{padding:"7px 20px",borderRadius:"6px",border:"none",background:"#52c41a",color:"#fff",cursor:"pointer",fontWeight:600,fontSize:"13px"}}>🛒 SP'ye Dönüştür</button>}
      </div>
      <div style={{background:T.card,borderRadius:T.rl,border:`1px solid ${T.border}`,padding:"14px 20px",marginBottom:"16px"}}>
        <div style={{fontSize:"11px",color:T.t2,fontWeight:600,marginBottom:"8px"}}>DURUM GÜNCELLE</div>
        <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
          {TEKLIF_DURUMLARI.filter(d=>d.id!=="sp_donustu").map(d=><button key={d.id} onClick={()=>durumGuncelle(t,d.id)} style={{padding:"5px 12px",borderRadius:"6px",border:`1px solid ${t.durum===d.id?d.color:T.bDark}`,background:t.durum===d.id?d.bg:"#fff",color:t.durum===d.id?d.color:T.t2,fontSize:"12px",cursor:"pointer",fontWeight:t.durum===d.id?600:400}}>{d.icon} {d.label}</button>)}
        </div>
      </div>
      <div style={{background:T.card,borderRadius:T.rl,border:`1px solid ${T.border}`,padding:"20px 24px",marginBottom:"16px"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))",gap:"16px",marginBottom:"12px"}}>
          <div><div style={{fontSize:"10px",color:T.t3,fontWeight:600,marginBottom:"4px"}}>FİRMA</div><div style={{fontSize:"14px",fontWeight:600,color:T.text}}>{t.firmaAd}</div></div>
          {t.yetkiliKisiAd&&<div><div style={{fontSize:"10px",color:T.t3,fontWeight:600,marginBottom:"4px"}}>YETKİLİ</div><div style={{fontSize:"13px",fontWeight:500,color:T.text}}>{t.yetkiliKisiAd}</div></div>}
          {t.projeAd&&<div><div style={{fontSize:"10px",color:T.t3,fontWeight:600,marginBottom:"4px"}}>PROJE</div><div style={{fontSize:"14px",fontWeight:500,color:T.text}}>{t.projeAd}</div></div>}
          <div><div style={{fontSize:"10px",color:T.t3,fontWeight:600,marginBottom:"4px"}}>TEKLİF TARİHİ</div><div style={{fontSize:"14px",fontWeight:500}}>{fmtDate(t.teklifTarihi)}</div></div>
          <div><div style={{fontSize:"10px",color:T.t3,fontWeight:600,marginBottom:"4px"}}>GEÇERLİLİK</div><div style={{fontSize:"14px",fontWeight:500}}>{fmtDate(t.gecerlilikTarihi)||"—"}{t.gecerlilikGun&&<span style={{fontSize:"11px",color:T.t3,marginLeft:"4px"}}>({t.gecerlilikGun} iş günü)</span>}</div></div>
          <div><div style={{fontSize:"10px",color:T.t3,fontWeight:600,marginBottom:"4px"}}>PARA BİRİMİ</div><div style={{fontSize:"14px",fontWeight:500}}>{para?.symbol} {t.paraBirimi}</div></div>
          {t.odemeSekli&&<div><div style={{fontSize:"10px",color:T.t3,fontWeight:600,marginBottom:"4px"}}>ÖDEME ŞEKLİ</div><div style={{fontSize:"14px",fontWeight:500}}>{t.odemeSekli}</div></div>}
          <div><div style={{fontSize:"10px",color:T.t3,fontWeight:600,marginBottom:"4px"}}>TESLİMAT</div><div style={{fontSize:"13px",fontWeight:500,color:t.teslimatSahip==="biz"?T.primary:"#389e0d"}}>{t.teslimatSahip==="biz"?"🚛 Biz Alacağız":"🏭 Firma Getirecek"}</div></div>
        </div>
        {/* Teslimat adresi detayı */}
        {t.teslimatSahip==="biz"&&detayAdres&&<div style={{padding:"10px 14px",background:"#f0f5ff",borderRadius:T.r,border:`1px solid ${T.primary}22`,fontSize:"12px",color:T.text,marginTop:"4px"}}>
          <div style={{fontWeight:600,color:T.primary,marginBottom:"3px"}}>📍 Teslimat Adresi: {detayAdres.ad||detayAdres.tipi}</div>
          <div style={{color:T.t2}}>{[detayAdres.mahalle,detayAdres.adres,detayAdres.ilce,detayAdres.il,detayAdres.ulke].filter(Boolean).join(", ")}</div>
        </div>}
        {t.teslimatSahip==="biz"&&t.teslimatAdresId==="__serbest__"&&t.teslimatAdresSerbest&&<div style={{padding:"10px 14px",background:"#f0f5ff",borderRadius:T.r,border:`1px solid ${T.primary}22`,fontSize:"12px",color:T.t2,marginTop:"4px"}}>📍 {t.teslimatAdresSerbest}</div>}
        {t.aciklama&&<div style={{marginTop:"10px",padding:"10px 14px",background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`,fontSize:"13px",color:T.t2}}>💬 {t.aciklama}</div>}
      </div>
      {/* Kalemler */}
      <div style={{background:T.card,borderRadius:T.rl,border:`1px solid ${T.border}`,overflow:"hidden"}}>
        <div style={{padding:"12px 20px",borderBottom:`1px solid ${T.border}`,background:"#fafafa",fontWeight:600,fontSize:"14px",color:T.text}}>📦 Kalemler ({(t.kalemler||[]).length})</div>
        <div style={{display:"grid",gridTemplateColumns:"28px 60px 1fr 70px 70px 110px 80px 84px 90px 100px",padding:"6px 14px",borderBottom:`1px solid ${T.border}`,background:"#f7f8fa",fontSize:"10px",fontWeight:700,color:T.t3,gap:"6px",alignItems:"center"}}>
          <div>#</div><div>KOD</div><div>MALZEME</div><div style={{textAlign:"right"}}>MİKTAR</div><div>BİRİM</div><div style={{textAlign:"right"}}>BİRİM FİYAT</div><div style={{textAlign:"right"}}>TUTAR</div><div style={{textAlign:"center"}}>KDV %</div><div style={{textAlign:"right"}}>KDV TUT.</div><div style={{textAlign:"right"}}>TOPLAM</div>
        </div>
        {(t.kalemler||[]).map((k,idx)=>{
          const tutar=(parseFloat(k.miktar)||1)*(parseFloat(k.netFiyat)||0);
          const kdvTut=tutar*(parseInt(k.kdvOrani||0)/100);
          const topTut=tutar+kdvTut;
          return <div key={k.id} style={{borderBottom:`1px solid ${T.border}`,background:idx%2===0?"#fff":"#fafafa"}}>
            <div style={{display:"grid",gridTemplateColumns:"28px 60px 1fr 70px 70px 110px 80px 84px 90px 100px",padding:"10px 14px",alignItems:"center",fontSize:"13px",gap:"6px"}}>
              <div style={{fontWeight:600,color:T.t3,textAlign:"center"}}>{idx+1}</div>
              <div style={{fontSize:"10px",color:T.t3,fontFamily:"monospace",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{k.malzemeKodu||"—"}</div>
              <div><div style={{fontWeight:500,fontSize:"13px"}}>{k.malzemeAd}</div>{k.not&&<div style={{fontSize:"11px",color:T.t3,marginTop:"1px"}}>↳ {k.not}</div>}</div>
              <div style={{textAlign:"right",fontWeight:600}}>{k.miktar}</div>
              <div style={{color:T.t2}}>{k.birim}</div>
              <div style={{textAlign:"right"}}>
                {k.fiyatTipi==="liste"?<div><div style={{fontWeight:600}}>{para?.symbol}{(parseFloat(k.netFiyat)||0).toLocaleString("tr-TR",{minimumFractionDigits:2})}</div><div style={{fontSize:"10px",color:"#722ed1"}}>L:{para?.symbol}{k.listeFiyati?.toLocaleString("tr-TR")} %{k.iskonto1}{k.iskonto2?`+%${k.iskonto2}`:""}</div></div>
                  :<div style={{fontWeight:600}}>{para?.symbol}{(parseFloat(k.netFiyat)||0).toLocaleString("tr-TR",{minimumFractionDigits:2})}</div>}
              </div>
              <div style={{textAlign:"right",fontWeight:600,color:T.text}}>{para?.symbol}{tutar.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div>
              <div style={{textAlign:"center",color:T.t2}}>%{k.kdvOrani}</div>
              <div style={{textAlign:"right",color:T.t2}}>{para?.symbol}{kdvTut.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div>
              <div style={{textAlign:"right",fontWeight:700,color:T.primary}}>{para?.symbol}{topTut.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div>
            </div>
            {k.teminTarihi&&<div style={{padding:"0 14px 8px 88px",fontSize:"11px",color:"#52c41a"}}>📅 Temin: {fmtDate(k.teminTarihi)}</div>}
          </div>;
        })}
        {/* Toplam */}
        <div style={{background:"#f8faff",borderTop:`2px solid ${T.primary}22`}}>
          {kirKdv.length>0&&<div style={{padding:"10px 14px",borderBottom:`1px solid ${T.border}`,display:"flex",gap:"16px",flexWrap:"wrap",justifyContent:"flex-end"}}>
            {kirKdv.map(([oran,v])=><div key={oran} style={{fontSize:"11px",color:T.t2,textAlign:"right"}}>
              <span>%{oran} Matrah: <b>{para?.symbol}{v.matrah.toLocaleString("tr-TR",{minimumFractionDigits:2})}</b> → KDV: <b>{para?.symbol}{v.kdv.toLocaleString("tr-TR",{minimumFractionDigits:2})}</b></span>
            </div>)}
          </div>}
          <div style={{padding:"14px 20px",display:"flex",justifyContent:"flex-end",gap:"28px",alignItems:"center"}}>
            <div style={{textAlign:"right"}}><div style={{fontSize:"10px",color:T.t3,fontWeight:600}}>KDV HARİÇ</div><div style={{fontSize:"15px",fontWeight:700}}>{para?.symbol}{kdvHaric.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div></div>
            <div style={{textAlign:"right"}}><div style={{fontSize:"10px",color:T.t3,fontWeight:600}}>TOPLAM KDV</div><div style={{fontSize:"13px",fontWeight:600,color:T.t2}}>{para?.symbol}{kdvToplam.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div></div>
            <div style={{textAlign:"right",padding:"10px 16px",background:T.pBg,borderRadius:T.r,border:`1px solid ${T.primary}33`}}><div style={{fontSize:"10px",color:T.primary,fontWeight:700}}>GENEL TOPLAM</div><div style={{fontSize:"20px",fontWeight:700,color:T.primary}}>{para?.symbol}{kdvDahil.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div></div>
          </div>
        </div>
      </div>
    </div>;
  }

  /* ===== LİSTE ===== */
  return <div>
    {/* FİLTRE BAR */}
    <div style={{display:"flex",gap:"10px",marginBottom:"16px",flexWrap:"wrap",alignItems:"center"}}>
      <input style={{...iS,maxWidth:"260px"}} value={search} onChange={e=>setSearch(e.target.value)} placeholder="Teklif no, firma veya proje ara..." onFocus={foc} onBlur={blr}/>
      <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
        <button onClick={()=>setFDurum("all")} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${fDurum==="all"?"#384248":T.bDark}`,background:fDurum==="all"?"#384248":"#fff",color:fDurum==="all"?"#fff":T.t2,fontSize:"14px",cursor:"pointer"}}>Tümü</button>
        {TEKLIF_DURUMLARI.map(d=><button key={d.id} onClick={()=>setFDurum(d.id)} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${fDurum===d.id?"#384248":T.bDark}`,background:fDurum===d.id?"#384248":"#fff",color:fDurum===d.id?"#fff":T.t2,fontSize:"14px",cursor:"pointer"}}>{d.icon} {d.label}</button>)}
      </div>
    </div>

    {/* PORTAL */}
    <div style={{border:`1px solid ${T.border}`,borderRadius:"8px",overflow:"hidden"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",background:"#384248"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <span style={{fontSize:"16px",fontWeight:700,color:"#fff"}}>Teklifler</span>
          <span style={{fontSize:"13px",color:"#8799a3"}}>{filtered.length} teklif</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
          <button onClick={()=>{setForm({...initForm,teklifNo:nextNo});setView("form");}} title="Yeni Teklif" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePlus size={30}/></button>
          <button onClick={()=>{
            const rows=[["Teklif No","Firma","Tarih","Geçerlilik","Durum","Kalem","Tutar (KDV Hariç)"]];
            filtered.forEach(t=>{const{kdvHaric}=toplamHesapla(t.kalemler||[]);const d=TEKLIF_DURUMLARI.find(x=>x.id===t.durum);rows.push([t.teklifNo||"",t.firmaAd||"",t.teklifTarihi||"",t.gecerlilikTarihi||"",d?d.label:"",String((t.kalemler||[]).length),String(kdvHaric)]);});
            const csv=rows.map(r=>r.map(c=>`"${c}"`).join(";")).join("\n");
            const blob=new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8;"});
            const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="teklifler.csv";a.click();
          }} title="Excel'e Aktar" style={{padding:"0",border:"none",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center"}}><img src={excelIcon} alt="Excel" style={{width:"35px",height:"35px"}}/></button>
        </div>
      </div>
      {filtered.length===0
        ?<div style={{padding:"60px",textAlign:"center",color:T.t3,fontSize:"14px",background:"#fff"}}>{search||fDurum!=="all"?"Sonuç bulunamadı":"Henüz teklif eklenmemiş."}</div>
        :<>
          <div style={{display:"grid",gridTemplateColumns:"120px 1fr 90px 90px 100px 60px 120px",background:"#fafafa",borderBottom:`1px solid ${T.border}`,padding:"8px 12px",gap:"8px"}}>
            {["Teklif No","Firma","Tarih","Geçerlilik","Durum","Kalem","Tutar"].map((h,i)=><div key={i} style={{fontSize:"12px",fontWeight:600,color:T.t2,textTransform:"uppercase",letterSpacing:"0.3px"}}>{h}</div>)}
          </div>
          {filtered.map((t,idx)=>{
            const para=PARA_BIRIMLERI.find(p=>p.id===t.paraBirimi);
            const{kdvHaric}=toplamHesapla(t.kalemler||[]);
            const durumObj=TEKLIF_DURUMLARI.find(d=>d.id===t.durum)||TEKLIF_DURUMLARI[0];
            return <div key={t.id} onClick={()=>detay(t)} style={{display:"grid",gridTemplateColumns:"120px 1fr 90px 90px 100px 60px 120px",padding:"8px 12px",gap:"8px",alignItems:"center",borderBottom:idx<filtered.length-1?`1px solid ${T.border}`:"none",background:idx%2===0?"#fff":"#fafafa",cursor:"pointer",height:"44px"}}
              onMouseEnter={e=>e.currentTarget.style.background=T.pBg}
              onMouseLeave={e=>e.currentTarget.style.background=idx%2===0?"#fff":"#fafafa"}>
              <div style={{fontSize:"13px",color:T.primary,fontWeight:600,fontFamily:"monospace"}}>{t.teklifNo}</div>
              <div style={{fontSize:"14px",fontWeight:600,color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{t.firmaAd}</div>
              <div style={{fontSize:"13px",color:T.t2}}>{fmtDate(t.teklifTarihi)}</div>
              <div style={{fontSize:"13px",color:T.t3}}>{t.gecerlilikTarihi?fmtDate(t.gecerlilikTarihi):"—"}</div>
              <div><span style={{padding:"2px 8px",borderRadius:"3px",fontSize:"11px",fontWeight:600,color:durumObj.color,background:durumObj.bg,border:`1px solid ${durumObj.color}33`}}>{durumObj.label}</span></div>
              <div style={{fontSize:"13px",color:T.t2,textAlign:"center"}}>{(t.kalemler||[]).length}</div>
              <div style={{fontSize:"14px",fontWeight:600,color:T.text,textAlign:"right"}}>{para?.symbol}{kdvHaric.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div>
            </div>;
          })}
        </>
      }
    </div>
  </div>;
};

/* ========== SATINALMA SİPARİŞLERİ ========== */
const SP_DURUMLARI=[
  {id:"taslak",label:"Taslak",color:"#8c8c8c",bg:"#f5f5f5",icon:"📝"},
  {id:"onaylandi",label:"Onaylandı",color:"#1677ff",bg:"#e6f4ff",icon:"✅"},
  {id:"kismen_teslim",label:"Kısmen Teslim",color:"#fa8c16",bg:"#fff7e6",icon:"📦"},
  {id:"tamamlandi",label:"Kapandı",color:"#52c41a",bg:"#f6ffed",icon:"🔒"},
  {id:"iptal",label:"İptal",color:"#ff4d4f",bg:"#fff1f0",icon:"❌"},
];
const TESLIM_KOSULLARI=["Şantiye Teslim","Fabrika Teslim","Ex-Works","CIF","FOB","Diğer"];

const SatinalmaSiparisleriPage=({siparisler,setSiparisler,onSave,onDel,teklifler,firmalar,projeler,malzemeler,butceKalemleri=[],faturalar=[]})=>{
  const[view,setView]=useState("list");
  const[saved,setSaved]=useState(false);
  const[search,setSearch]=useState("");
  const[fDurum,setFDurum]=useState("all");

  const iS={width:"100%",padding:"7px 10px",borderRadius:"6px",border:`1px solid ${T.bDark}`,background:"#fff",color:T.text,fontSize:"13px",outline:"none",boxSizing:"border-box"};
  const lS={display:"block",color:T.text,fontSize:"11px",fontWeight:500,marginBottom:"4px"};
  const foc=e=>{e.target.style.borderColor=T.primary;e.target.style.boxShadow=`0 0 0 2px ${T.primary}22`;};
  const blr=e=>{e.target.style.borderColor=T.bDark;e.target.style.boxShadow="none";};

  const nextNo=(()=>{const yil=new Date().getFullYear();const mevcut=siparisler.filter(s=>(s.spNo||"").includes(`-${yil}-`)).map(s=>parseInt((s.spNo||"").split("-")[2])||0);const n=mevcut.length>0?Math.max(...mevcut)+1:1;return`SP-${yil}-${String(n).padStart(3,"0")}`;})();

  const emptyForm={id:null,spNo:nextNo,teklifId:"",teklifNo:"",firmaId:"",firmaAd:"",projeId:"",projeAd:"",
    siparisTarihi:new Date().toISOString().split("T")[0],terminTarihi:"",
    teslimatAdresi:"",teslimKosulu:"Şantiye Teslim",odemeSekli:"",vadeGun:"",vadeTarihi:"",
    paraBirimi:"TL",aciklama:"",durum:"taslak",kalemler:[]};
  const[form,setForm]=useState({...emptyForm});
  const[bkPickerKalemId,setBkPickerKalemId]=useState(null);
  const[bkMultiOpen,setBkMultiOpen]=useState(false);
  const[mlzPickerKalemId,setMlzPickerKalemId]=useState(null);
  const[firmaPickerOpen,setFirmaPickerOpen]=useState(false);
  const uf=(f,v)=>setForm(p=>({...p,[f]:v}));

  // Bütçe kalemi kullanım haritası — başka SP/AF'de veya bu formda olanlar
  const butceKullanimHaritasi=useMemo(()=>{
    const projeId=form.projeId?parseInt(form.projeId):null;
    if(!projeId)return{};
    const map={};
    const add=(kaynak,bkId,satirId)=>{
      if(!bkId)return;
      const k=`${bkId}:${satirId||"null"}`;
      if(!map[k])map[k]=[];
      if(!map[k].includes(kaynak))map[k].push(kaynak);
    };
    siparisler.forEach(s=>{
      if(form.id&&s.id===form.id)return;
      if(s.projeId!==projeId)return;
      (s.kalemler||[]).forEach(k=>add(s.spNo||`SP#${s.id}`,k.butceKalemiId,k.butceKalemiSatirId));
    });
    (faturalar||[]).forEach(f=>{
      if(f.projeId!==projeId)return;
      (f.kalemler||[]).forEach(k=>add(f.afNo||f.faturaNo||`AF#${f.id}`,k.butceKalemiId,k.butceKalemiSatirId));
    });
    (form.kalemler||[]).forEach(k=>add("Bu formda",k.butceKalemiId,k.butceKalemiSatirId));
    return map;
  },[siparisler,faturalar,form.projeId,form.id,form.kalemler]);

  const teklifdenDoldur=(teklifId)=>{
    const t=teklifler.find(x=>x.id===parseInt(teklifId));
    if(!t)return;
    setForm(p=>({...p,
      teklifId:t.id,teklifNo:t.teklifNo,
      firmaId:String(t.firmaId),firmaAd:t.firmaAd,
      projeId:t.projeId?String(t.projeId):"",projeAd:t.projeAd||"",
      paraBirimi:t.paraBirimi,
      kalemler:t.kalemler.map(k=>({...k,id:Date.now()+Math.random(),teslimMiktar:0,aciklama:"",butceKalemiId:null}))
    }));
  };

  const kalemEkle=()=>setForm(p=>({...p,kalemler:[...p.kalemler,{id:Date.now(),malzemeId:"",malzemeAd:"",malzemeKodu:"",birim:"",miktar:1,netFiyat:0,kdvOrani:"20",teslimMiktar:0,aciklama:"",butceKalemiId:null,butceKalemiSatirId:null}]}));
  const kalemSil=(kid)=>setForm(p=>({...p,kalemler:p.kalemler.filter(k=>k.id!==kid)}));
  const kalemUp=(kid,f,v)=>setForm(p=>({...p,kalemler:p.kalemler.map(k=>{
    if(k.id!==kid)return k;
    const nk={...k,[f]:v};
    if(f==="malzemeId"&&v){const mlz=malzemeler.find(m=>m.id===parseInt(v));if(mlz){nk.malzemeAd=mlz.ad;nk.malzemeKodu=mlz.malzemeKodu;nk.birim=mlz.birim;}}
    return nk;
  })}));

  const toplamHesapla=(kalemler)=>{
    let kdvHaric=0,kdvToplam=0;
    kalemler.forEach(k=>{const t=(parseFloat(k.miktar)||0)*(parseFloat(k.netFiyat)||0);kdvHaric+=t;kdvToplam+=t*(parseInt(k.kdvOrani||0)/100);});
    return{kdvHaric,kdvToplam,kdvDahil:kdvHaric+kdvToplam};
  };

  const kaydet=async()=>{
    if(!form.firmaId){alert("Firma seçiniz!");return;}
    if(form.kalemler.length===0){alert("En az bir kalem ekleyiniz!");return;}
    const frm=firmalar.find(f=>f.id===parseInt(form.firmaId));
    const prj=projeler.find(p=>p.id===parseInt(form.projeId));
    const isNew=!form.id;
    const sp={...form,id:form.id||Date.now(),_isNew:isNew,firmaId:parseInt(form.firmaId),firmaAd:frm?.ad||form.firmaAd,
      projeId:form.projeId?parseInt(form.projeId):null,projeAd:prj?.ad||form.projeAd,
      kalemler:form.kalemler.map(k=>({...k,malzemeId:k.malzemeId?parseInt(k.malzemeId):null,miktar:parseFloat(k.miktar)||0,netFiyat:parseFloat(k.netFiyat)||0,teslimMiktar:parseFloat(k.teslimMiktar)||0,butceKalemiId:k.butceKalemiId?parseInt(k.butceKalemiId):null,butceKalemiSatirId:k.butceKalemiSatirId||null}))};
    if(onSave){await onSave(sp);}else{setSiparisler(prev=>{const ex=prev.find(x=>x.id===sp.id);return ex?prev.map(x=>x.id===sp.id?sp:x):[...prev,sp];});}
    if(isNew)setForm(p=>({...p,id:sp.id}));
    setSaved(true);setTimeout(()=>setSaved(false),2000);
  };

  const sil=(id)=>{if(onDel){onDel(id);}else{if(!confirm("Bu siparişi silmek istediğinize emin misiniz?"))return;setSiparisler(prev=>prev.filter(s=>s.id!==id));}};
  const edit=(s)=>{setForm({...s,firmaId:String(s.firmaId),projeId:s.projeId?String(s.projeId):"",kalemler:s.kalemler.map(k=>({...k,malzemeId:k.malzemeId?String(k.malzemeId):""}))} );setView("form");};
  const durumGuncelle=(sp,yeniDurum)=>setSiparisler(prev=>prev.map(s=>s.id===sp.id?{...s,durum:yeniDurum}:s));

  const filtered=siparisler.filter(s=>{
    const q=nTR(search);
    const ms=nTR(s.spNo).includes(q)||nTR(s.firmaAd).includes(q)||nTR(s.projeAd).includes(q)||(s.kalemler||[]).some(k=>nTR(k.malzemeAd).includes(q));
    const md=fDurum==="all"||s.durum===fDurum;
    return ms&&md;
  }).sort((a,b)=>(b.siparisTarihi||"").localeCompare(a.siparisTarihi||""));

  /* FORM */
  if(view==="form"){
    const para=PARA_BIRIMLERI.find(p=>p.id===form.paraBirimi);
    const{kdvHaric,kdvDahil}=toplamHesapla(form.kalemler);
    const headerFirmaAd=form.firmaId?firmalar.find(f=>f.id===parseInt(form.firmaId))?.ad||"":"";
    return <div>
      {firmaPickerOpen&&<FirmaSeciciModal firmalar={firmalar} turFiltre={["tedarikci","taseron","resmi"]} onSelect={f=>{uf("firmaId",String(f.id));uf("firmaAd",f.ad);}} onClose={()=>setFirmaPickerOpen(false)} baslik="TEDARİKÇİ / TAŞERON / RESMİ KURUM SEÇ"/>}
      {/* HEADER — dark bar */}
      <div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"20px",padding:"12px 20px",background:"#384248",borderRadius:"8px"}}>
        <button onClick={()=>{setView("list");setForm({...emptyForm,spNo:nextNo});}} title="Geri" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><MoveLeft size={32}/></button>
        <div style={{flex:1,textAlign:"center"}}>
          <span style={{fontSize:"20px",fontWeight:600,color:"#8799a3",letterSpacing:"0.3px"}}>{form.spNo}{headerFirmaAd?` - ${headerFirmaAd}`:form.id?"":" - Yeni Sipariş"}</span>
        </div>
        <button onClick={kaydet} title={saved?"Kaydedildi":"Kaydet"} style={{padding:"0",border:"none",background:"transparent",color:saved?"#52c41a":"#8799a3",cursor:"pointer",display:"flex",alignItems:"center",transition:"color .3s"}}><Save size={32}/></button>
        {form.id&&<button onClick={()=>sil(form.id)} title="Siparişi Sil" style={{padding:"0",border:"none",background:"transparent",color:"#ff6b6b",cursor:"pointer",display:"flex",alignItems:"center"}}><Trash2 size={32}/></button>}
      </div>

      {/* Tekliften Doldur */}
      {!form.id&&<div style={{background:"#f6ffed",borderRadius:T.rl,border:"1px solid #b7eb8f",padding:"14px 20px",marginBottom:"16px",display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"}}>
        <span style={{fontSize:"13px",color:"#389e0d",fontWeight:500}}>🔗 Tekliften doldur (opsiyonel):</span>
        <select style={{...iS,maxWidth:"340px",borderColor:"#b7eb8f"}} value={form.teklifId||""} onChange={e=>teklifdenDoldur(e.target.value)} onFocus={foc} onBlur={blr}>
          <option value="">— Teklif seçin, kalemler otomatik gelir —</option>
          {teklifler.filter(t=>t.durum==="onaylandi"||t.durum==="beklemede").map(t=><option key={t.id} value={t.id}>[{t.teklifNo}] {t.firmaAd} ({(t.kalemler||[]).length} kalem)</option>)}
        </select>
        {form.teklifNo&&<span style={{fontSize:"12px",color:"#389e0d"}}>✓ {form.teklifNo} bağlandı</span>}
      </div>}

      <div style={{background:T.card,borderRadius:T.rl,border:`1px solid ${T.border}`,padding:"20px",marginBottom:"16px"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"14px",marginBottom:"14px"}}>
          <div><label style={lS}>Firma *</label>
            <button onClick={()=>setFirmaPickerOpen(true)} style={{...iS,textAlign:"left",cursor:"pointer",color:form.firmaAd?T.text:T.t3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{form.firmaAd||"— Firma seçiniz —"}</button>
          </div>
          <div><label style={lS}>Proje</label>
            <select style={iS} value={form.projeId} onChange={e=>{const p=projeler.find(x=>x.id===parseInt(e.target.value));uf("projeId",e.target.value);if(p)uf("projeAd",p.ad);}} onFocus={foc} onBlur={blr}>
              <option value="">— Proje seçiniz —</option>
              {projeler.map(p=><option key={p.id} value={p.id}>{p.projeKodu?`[${p.projeKodu}] `:""}{p.ad}</option>)}
            </select>
          </div>
          <div><label style={lS}>Durum</label>
            <select style={iS} value={form.durum} onChange={e=>uf("durum",e.target.value)} onFocus={foc} onBlur={blr}>
              {SP_DURUMLARI.map(d=><option key={d.id} value={d.id}>{d.icon} {d.label}</option>)}
            </select>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"14px",marginBottom:"14px"}}>
          <div><label style={lS}>Sipariş Tarihi</label><input style={iS} type="date" value={form.siparisTarihi} onChange={e=>{const st=e.target.value;setForm(p=>({...p,siparisTarihi:st,vadeTarihi:p.vadeGun!==""&&p.vadeGun!==null?addDaysISO(st,p.vadeGun):p.vadeTarihi}));}} onFocus={foc} onBlur={blr}/></div>
          <div><label style={lS}>Termin Tarihi</label><input style={iS} type="date" value={form.terminTarihi} onChange={e=>uf("terminTarihi",e.target.value)} onFocus={foc} onBlur={blr}/></div>
          <div><label style={lS}>Ödeme Şekli</label><input style={iS} value={form.odemeSekli} onChange={e=>uf("odemeSekli",e.target.value)} placeholder="Örn: Peşin, Hakediş, Avans + Bakiye" onFocus={foc} onBlur={blr}/></div>
          <div><label style={lS}>Para Birimi</label>
            <select style={iS} value={form.paraBirimi} onChange={e=>uf("paraBirimi",e.target.value)} onFocus={foc} onBlur={blr}>
              {PARA_BIRIMLERI.map(p=><option key={p.id} value={p.id}>{p.label}</option>)}
            </select>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 2fr",gap:"14px",marginBottom:"14px"}}>
          <div><label style={lS}>Vade (gün)</label><input style={iS} type="number" min="0" value={form.vadeGun} onChange={e=>{const g=e.target.value;if(g===""){setForm(p=>({...p,vadeGun:"",vadeTarihi:""}));return;}setForm(p=>({...p,vadeGun:g,vadeTarihi:addDaysISO(p.siparisTarihi,g)}));}} placeholder="Örn: 30" onFocus={foc} onBlur={blr}/></div>
          <div><label style={lS}>Vade Tarihi (hesaplanan)</label><input style={iS} type="date" value={form.vadeTarihi} onChange={e=>{const t=e.target.value;if(!t){setForm(p=>({...p,vadeGun:"",vadeTarihi:""}));return;}setForm(p=>({...p,vadeTarihi:t,vadeGun:daysBetweenISO(p.siparisTarihi,t)}));}} onFocus={foc} onBlur={blr}/></div>
          <div></div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px"}}>
          <div><label style={lS}>Teslimat Adresi</label><input style={iS} value={form.teslimatAdresi} onChange={e=>uf("teslimatAdresi",e.target.value)} placeholder="Şantiye adresi..." onFocus={foc} onBlur={blr}/></div>
          <div><label style={lS}>Teslim Koşulu</label>
            <select style={iS} value={form.teslimKosulu} onChange={e=>uf("teslimKosulu",e.target.value)} onFocus={foc} onBlur={blr}>
              {TESLIM_KOSULLARI.map(k=><option key={k}>{k}</option>)}
            </select>
          </div>
        </div>
        <div style={{marginTop:"12px"}}><label style={lS}>Açıklama / Özel Koşullar</label><textarea style={{...iS,height:"56px",resize:"vertical"}} value={form.aciklama} onChange={e=>uf("aciklama",e.target.value)} onFocus={foc} onBlur={blr}/></div>
      </div>

      {/* Kalemler */}
      <div style={{background:T.card,borderRadius:T.rl,border:`1px solid ${T.border}`,overflow:"hidden"}}>
        <div style={{padding:"12px 20px",borderBottom:`1px solid ${T.border}`,background:"#fafafa",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{fontWeight:600,fontSize:"14px",color:T.text}}>🛒 Sipariş Kalemleri</div>
          <div style={{display:"flex",gap:"8px"}}>
            {form.projeId&&<button onClick={()=>setBkMultiOpen(true)} style={{padding:"5px 14px",borderRadius:"6px",border:"1px solid #52c41a",background:"#f6ffed",color:"#52c41a",fontSize:"13px",cursor:"pointer",fontWeight:600,display:"flex",alignItems:"center",gap:"4px"}}><Layers size={14}/>Bütçeden Ekle</button>}
            {!form.projeId&&<button onClick={kalemEkle} style={{padding:"5px 14px",borderRadius:"6px",border:`1px solid ${T.primary}`,background:T.pBg,color:T.primary,fontSize:"13px",cursor:"pointer",fontWeight:500}}>+ Kalem Ekle</button>}
          </div>
        </div>
        {form.kalemler.length===0&&<div style={{padding:"32px",textAlign:"center",color:T.t3,fontSize:"13px"}}>{form.projeId?"Bu sipariş bir projeye bağlı. Kalemleri bütçeden ekleyin.":"Kalem yok. Manuel kalem ekle."}</div>}
        {form.kalemler.map((k,idx)=>{
          return <div key={k.id} style={{padding:"12px 20px",borderBottom:`1px solid ${T.border}`,background:idx%2===0?"#fff":"#fafafa"}}>
            <div style={{display:"grid",gridTemplateColumns:"28px 2fr 80px 80px 100px 80px 32px",gap:"8px",alignItems:"center"}}>
              <div style={{fontSize:"12px",fontWeight:600,color:T.t3}}>{idx+1}</div>
              {(()=>{
                const seciliMlz=k.malzemeId?malzemeler.find(m=>m.id===parseInt(k.malzemeId)):null;
                return <button onClick={()=>setMlzPickerKalemId(k.id)} style={{...iS,fontSize:"13px",padding:"7px 10px",cursor:"pointer",textAlign:"left",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:seciliMlz?T.text:T.t3}}>
                  {seciliMlz?`${seciliMlz.ad} (${seciliMlz.malzemeKodu})`:"— Malzeme seçiniz —"}
                </button>;
              })()}
              <input style={{...iS,fontSize:"13px",textAlign:"right"}} type="number" value={k.miktar} onChange={e=>kalemUp(k.id,"miktar",e.target.value)} placeholder="Miktar" onFocus={foc} onBlur={blr}/>
              <input style={{...iS,fontSize:"13px",background:"#f5f5f5"}} value={k.birim||""} onChange={e=>kalemUp(k.id,"birim",e.target.value)} placeholder="Birim" onFocus={foc} onBlur={blr}/>
              <input style={{...iS,fontSize:"13px",textAlign:"right"}} type="number" value={k.netFiyat} onChange={e=>kalemUp(k.id,"netFiyat",e.target.value)} placeholder="Birim fiyat" onFocus={foc} onBlur={blr}/>
              <select style={{...iS,fontSize:"12px"}} value={k.kdvOrani} onChange={e=>kalemUp(k.id,"kdvOrani",e.target.value)} onFocus={foc} onBlur={blr}>
                {KDV_ORANLARI.map(x=><option key={x.id} value={x.id}>{x.label}</option>)}
              </select>
              <button onClick={()=>kalemSil(k.id)} style={{background:"none",border:"none",color:T.err,cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"}}><Trash2 size={16}/></button>
            </div>
            <div style={{marginTop:"6px",paddingLeft:"36px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}}>
              <input style={{...iS,fontSize:"12px",background:"#f9f9f9"}} value={k.aciklama||""} onChange={e=>kalemUp(k.id,"aciklama",e.target.value)} placeholder="Kalem notu..." onFocus={foc} onBlur={blr}/>
              {form.projeId&&(()=>{
                const bkList=butceKalemleri.filter(b=>b.projeId===parseInt(form.projeId));
                if(bkList.length===0)return null;
                const seciliBk=k.butceKalemiId?bkList.find(b=>b.id===k.butceKalemiId):null;
                const seciliSatir=seciliBk&&k.butceKalemiSatirId?(seciliBk.planlananSatirlari||[]).find(s=>s.id===k.butceKalemiSatirId):null;
                return <button onClick={()=>setBkPickerKalemId(k.id)} style={{...iS,fontSize:"12px",padding:"5px 8px",cursor:"pointer",textAlign:"left",background:k.butceKalemiId?"#f6ffed":"#fff7e6",borderColor:k.butceKalemiId?"#b7eb8f":"#ffe58f",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                  {seciliBk
                    ?<span>✓ [{seciliBk.malzemeKodu||"?"}] {seciliBk.malzemeAd||"?"}{seciliSatir&&<span style={{color:"#1677ff",marginLeft:"4px"}}>↳ {seciliSatir.aciklama||`#${seciliSatir.siraNo||""}`}</span>}</span>
                    :<span style={{color:T.t3}}>— Bütçe Kalemi Eşleştir —</span>
                  }
                </button>;
              })()}
            </div>
          </div>;
        })}
        {/* Malzeme Seçici Modal */}
        {mlzPickerKalemId&&<MalzemeSeciciModal malzemeler={malzemeler} onSelect={m=>{kalemUp(mlzPickerKalemId,"malzemeId",String(m.id));setMlzPickerKalemId(null);}} onClose={()=>setMlzPickerKalemId(null)}/>}
        {/* Bütçe Kalemi Seçici Modal — tekil eşleştirme (satır içi buton) */}
        {bkPickerKalemId&&form.projeId&&<ButceKalemiSeciciModal mode="single" butceKalemleri={butceKalemleri.filter(b=>b.projeId===parseInt(form.projeId))} kullanilmisHaritasi={butceKullanimHaritasi} onSelect={(bk,satirId)=>{
          setForm(p=>({...p,kalemler:p.kalemler.map(k=>k.id===bkPickerKalemId?{...k,butceKalemiId:bk.id,butceKalemiSatirId:satirId||null}:k)}));
          setBkPickerKalemId(null);
        }} onClose={()=>setBkPickerKalemId(null)}/>}
        {/* Bütçeden Toplu Kalem Ekle Modal — çoklu seçim */}
        {bkMultiOpen&&form.projeId&&<ButceKalemiSeciciModal mode="multi" butceKalemleri={butceKalemleri.filter(b=>b.projeId===parseInt(form.projeId))} kullanilmisHaritasi={butceKullanimHaritasi} onConfirm={(secimler)=>{
          const yeniKalemler=secimler.map(({bk,satirId})=>{
            const satirlar=bk.planlananSatirlari||[];
            const satir=satirId?satirlar.find(s=>s.id===satirId):null;
            return{
              id:Date.now()+Math.random(),
              malzemeId:bk.malzemeId||"",malzemeAd:bk.malzemeAd||"",malzemeKodu:bk.malzemeKodu||"",birim:bk.birim||"",
              miktar:satir?parseFloat(satir.miktar||0):parseFloat(bk.planlananMiktar||0),
              netFiyat:satir?parseFloat(satir.birimFiyat||0):parseFloat(bk.planlananBirimFiyat||0),
              kdvOrani:satir?.kdvOrani||"20",teslimMiktar:0,
              aciklama:satir?.aciklama||"",
              butceKalemiId:bk.id,butceKalemiSatirId:satirId||null
            };
          });
          setForm(p=>({...p,kalemler:[...p.kalemler,...yeniKalemler]}));
          setBkMultiOpen(false);
        }} onClose={()=>setBkMultiOpen(false)}/>}
        {form.kalemler.length>0&&<div style={{padding:"14px 20px",background:"#f0f5ff",display:"flex",justifyContent:"flex-end",gap:"32px"}}>
          <div style={{textAlign:"right"}}><div style={{fontSize:"11px",color:T.t2,fontWeight:600}}>KDV HARİÇ</div><div style={{fontSize:"16px",fontWeight:700}}>{PARA_BIRIMLERI.find(p=>p.id===form.paraBirimi)?.symbol}{kdvHaric.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div></div>
          <div style={{textAlign:"right"}}><div style={{fontSize:"11px",color:"#52c41a",fontWeight:600}}>GENEL TOPLAM</div><div style={{fontSize:"20px",fontWeight:700,color:"#52c41a"}}>{PARA_BIRIMLERI.find(p=>p.id===form.paraBirimi)?.symbol}{kdvDahil.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div></div>
        </div>}
      </div>
    </div>;
  }

  /* DETAY */
  /* LİSTE */
  return <div>
    {/* FİLTRE BAR */}
    <div style={{display:"flex",gap:"10px",marginBottom:"16px",flexWrap:"wrap",alignItems:"center"}}>
      <input style={{...iS,maxWidth:"260px"}} value={search} onChange={e=>setSearch(e.target.value)} placeholder="SP no, firma veya proje ara..." onFocus={foc} onBlur={blr}/>
      <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
        <button onClick={()=>setFDurum("all")} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${fDurum==="all"?"#384248":T.bDark}`,background:fDurum==="all"?"#384248":"#fff",color:fDurum==="all"?"#fff":T.t2,fontSize:"14px",cursor:"pointer"}}>Tümü</button>
        {SP_DURUMLARI.map(d=><button key={d.id} onClick={()=>setFDurum(d.id)} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${fDurum===d.id?"#384248":T.bDark}`,background:fDurum===d.id?"#384248":"#fff",color:fDurum===d.id?"#fff":T.t2,fontSize:"14px",cursor:"pointer"}}>{d.icon} {d.label}</button>)}
      </div>
    </div>

    {/* PORTAL */}
    <div style={{border:`1px solid ${T.border}`,borderRadius:"8px",overflow:"hidden"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",background:"#384248"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <span style={{fontSize:"16px",fontWeight:700,color:"#fff"}}>Satınalma Siparişleri</span>
          <span style={{fontSize:"13px",color:"#8799a3"}}>{filtered.length} sipariş</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
          <button onClick={()=>{setForm({...emptyForm,spNo:nextNo});setView("form");}} title="Yeni Sipariş" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePlus size={30}/></button>
          <button onClick={()=>{
            const rows=[["SP No","Firma","Tarih","Termin","Durum","Kalem","Tutar (KDV Hariç)"]];
            filtered.forEach(s=>{const{kdvHaric}=toplamHesapla(s.kalemler||[]);const d=SP_DURUMLARI.find(x=>x.id===s.durum);rows.push([s.spNo||"",s.firmaAd||"",s.siparisTarihi||"",s.terminTarihi||"",d?d.label:"",String((s.kalemler||[]).length),String(kdvHaric)]);});
            const csv=rows.map(r=>r.map(c=>`"${c}"`).join(";")).join("\n");
            const blob=new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8;"});
            const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="satinalma_siparisleri.csv";a.click();
          }} title="Excel'e Aktar" style={{padding:"0",border:"none",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center"}}><img src={excelIcon} alt="Excel" style={{width:"35px",height:"35px"}}/></button>
        </div>
      </div>
      {filtered.length===0
        ?<div style={{padding:"60px",textAlign:"center",color:T.t3,fontSize:"14px",background:"#fff"}}>{search||fDurum!=="all"?"Sonuç bulunamadı":"Henüz sipariş eklenmemiş."}</div>
        :<>
          <div style={{display:"grid",gridTemplateColumns:"110px 1fr 90px 90px 100px 60px 120px",background:"#fafafa",borderBottom:`1px solid ${T.border}`,padding:"8px 12px",gap:"8px"}}>
            {["SP No","Firma","Tarih","Termin","Durum","Kalem","Tutar"].map((h,i)=><div key={i} style={{fontSize:"12px",fontWeight:600,color:T.t2,textTransform:"uppercase",letterSpacing:"0.3px"}}>{h}</div>)}
          </div>
          {filtered.map((s,idx)=>{
            const para=PARA_BIRIMLERI.find(p=>p.id===s.paraBirimi);
            const{kdvHaric}=toplamHesapla(s.kalemler||[]);
            const durumObj=SP_DURUMLARI.find(d=>d.id===s.durum)||SP_DURUMLARI[0];
            return <div key={s.id} onClick={()=>edit(s)} style={{display:"grid",gridTemplateColumns:"110px 1fr 90px 90px 100px 60px 120px",padding:"8px 12px",gap:"8px",alignItems:"center",borderBottom:idx<filtered.length-1?`1px solid ${T.border}`:"none",background:idx%2===0?"#fff":"#fafafa",cursor:"pointer",height:"44px"}}
              onMouseEnter={e=>e.currentTarget.style.background=T.pBg}
              onMouseLeave={e=>e.currentTarget.style.background=idx%2===0?"#fff":"#fafafa"}>
              <div style={{fontSize:"13px",color:"#52c41a",fontWeight:600,fontFamily:"monospace"}}>{s.spNo}</div>
              <div style={{fontSize:"14px",fontWeight:600,color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.firmaAd}</div>
              <div style={{fontSize:"13px",color:T.t2}}>{fmtDate(s.siparisTarihi)}</div>
              <div style={{fontSize:"13px",color:s.terminTarihi&&s.terminTarihi<new Date().toISOString().split("T")[0]&&s.durum!=="tamamlandi"?T.err:T.t3}}>{s.terminTarihi?fmtDate(s.terminTarihi):"—"}</div>
              <div><span style={{padding:"2px 8px",borderRadius:"3px",fontSize:"11px",fontWeight:600,color:durumObj.color,background:durumObj.bg,border:`1px solid ${durumObj.color}33`}}>{durumObj.label}</span></div>
              <div style={{fontSize:"13px",color:T.t2,textAlign:"center"}}>{(s.kalemler||[]).length}</div>
              <div style={{fontSize:"14px",fontWeight:600,color:T.text,textAlign:"right"}}>{para?.symbol}{kdvHaric.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div>
            </div>;
          })}
        </>
      }
    </div>
  </div>;
};

/* ========== ALIŞ FATURALARI ========== */
const AF_DURUMLARI=[
  {id:"beklemede",label:"Beklemede",color:"#fa8c16",bg:"#fff7e6",icon:"⏳"},
  {id:"kismi_odendi",label:"Kısmi Ödendi",color:"#722ed1",bg:"#f9f0ff",icon:"💸"},
  {id:"odendi",label:"Ödendi",color:"#52c41a",bg:"#f6ffed",icon:"✅"},
  {id:"iptal",label:"İptal",color:"#ff4d4f",bg:"#fff1f0",icon:"❌"},
];

const AlisFaturalariPage=({faturalar,setFaturalar,onSave,onDel,siparisler,teklifler,firmalar,projeler,malzemeler,butceKalemleri=[]})=>{
  const[view,setView]=useState("list");
  const[saved,setSaved]=useState(false);
  const[search,setSearch]=useState("");
  const[fDurum,setFDurum]=useState("all");

  const iS={width:"100%",padding:"7px 10px",borderRadius:"6px",border:`1px solid ${T.bDark}`,background:"#fff",color:T.text,fontSize:"13px",outline:"none",boxSizing:"border-box"};
  const lS={display:"block",color:T.text,fontSize:"11px",fontWeight:500,marginBottom:"4px"};
  const foc=e=>{e.target.style.borderColor=T.primary;e.target.style.boxShadow=`0 0 0 2px ${T.primary}22`;};
  const blr=e=>{e.target.style.borderColor=T.bDark;e.target.style.boxShadow="none";};

  const nextNo=(()=>{const yil=new Date().getFullYear();const mevcut=faturalar.filter(f=>(f.afNo||"").includes(`-${yil}-`)).map(f=>parseInt((f.afNo||"").split("-")[2])||0);const n=mevcut.length>0?Math.max(...mevcut)+1:1;return`AF-${yil}-${String(n).padStart(3,"0")}`;})();

  const emptyForm={id:null,afNo:nextNo,spId:"",spNo:"",teklifId:"",teklifNo:"",firmaId:"",firmaAd:"",projeId:"",projeAd:"",
    faturaNo:"",faturaTarihi:new Date().toISOString().split("T")[0],odemeSekli:"",vadeGun:"",vadeTarihi:"",
    paraBirimi:"TL",aciklama:"",durum:"beklemede",kalemler:[]};
  const[form,setForm]=useState({...emptyForm});
  const[firmaPickerOpen,setFirmaPickerOpen]=useState(false);
  const uf=(f,v)=>setForm(p=>({...p,[f]:v}));

  // Bütçe kalemi kullanım haritası — başka AF/SP'de veya bu formda olanlar
  const butceKullanimHaritasi=useMemo(()=>{
    const projeId=form.projeId?parseInt(form.projeId):null;
    if(!projeId)return{};
    const map={};
    const add=(kaynak,bkId,satirId)=>{
      if(!bkId)return;
      const k=`${bkId}:${satirId||"null"}`;
      if(!map[k])map[k]=[];
      if(!map[k].includes(kaynak))map[k].push(kaynak);
    };
    faturalar.forEach(f=>{
      if(form.id&&f.id===form.id)return;
      if(f.projeId!==projeId)return;
      (f.kalemler||[]).forEach(k=>add(f.afNo||f.faturaNo||`AF#${f.id}`,k.butceKalemiId,k.butceKalemiSatirId));
    });
    (siparisler||[]).forEach(s=>{
      if(s.projeId!==projeId)return;
      (s.kalemler||[]).forEach(k=>add(s.spNo||`SP#${s.id}`,k.butceKalemiId,k.butceKalemiSatirId));
    });
    (form.kalemler||[]).forEach(k=>add("Bu formda",k.butceKalemiId,k.butceKalemiSatirId));
    return map;
  },[siparisler,faturalar,form.projeId,form.id,form.kalemler]);

  const spdenDoldur=(spId)=>{
    const sp=siparisler.find(x=>x.id===parseInt(spId));
    if(!sp)return;
    setForm(p=>({...p,
      spId:sp.id,spNo:sp.spNo,
      teklifId:sp.teklifId||"",teklifNo:sp.teklifNo||"",
      firmaId:String(sp.firmaId),firmaAd:sp.firmaAd,
      projeId:sp.projeId?String(sp.projeId):"",projeAd:sp.projeAd||"",
      paraBirimi:sp.paraBirimi,
      odemeSekli:sp.odemeSekli||"",
      vadeGun:sp.vadeGun||"",
      vadeTarihi:sp.vadeGun&&p.faturaTarihi?addDaysISO(p.faturaTarihi,sp.vadeGun):"",
      kalemler:(sp.kalemler||[]).map(k=>({...k,id:Date.now()+Math.random(),butceKalemiId:k.butceKalemiId||null,butceKalemiSatirId:k.butceKalemiSatirId||null}))
    }));
    setSpPickerOpen(false);
  };

  const[bkMultiOpen,setBkMultiOpen]=useState(false);
  const[bkPickerKalemId,setBkPickerKalemId]=useState(null);
  const[spPickerOpen,setSpPickerOpen]=useState(false);
  const kalemEkle=()=>setForm(p=>({...p,kalemler:[...p.kalemler,{id:Date.now(),malzemeId:"",malzemeAd:"",malzemeKodu:"",birim:"",miktar:1,netFiyat:0,kdvOrani:"20",aciklama:"",butceKalemiId:null,butceKalemiSatirId:null}]}));
  const kalemSil=(kid)=>setForm(p=>({...p,kalemler:p.kalemler.filter(k=>k.id!==kid)}));
  const kalemUp=(kid,f,v)=>setForm(p=>({...p,kalemler:p.kalemler.map(k=>{
    if(k.id!==kid)return k;
    const nk={...k,[f]:v};
    if(f==="malzemeId"&&v){const mlz=malzemeler.find(m=>m.id===parseInt(v));if(mlz){nk.malzemeAd=mlz.ad;nk.malzemeKodu=mlz.malzemeKodu;nk.birim=mlz.birim;}}
    return nk;
  })}));

  const toplamHesapla=(kalemler)=>{
    let kdvHaric=0,kdvToplam=0;
    kalemler.forEach(k=>{const t=(parseFloat(k.miktar)||0)*(parseFloat(k.netFiyat)||0);kdvHaric+=t;kdvToplam+=t*(parseInt(k.kdvOrani||0)/100);});
    return{kdvHaric,kdvToplam,kdvDahil:kdvHaric+kdvToplam};
  };

  const kaydet=async()=>{
    if(!form.firmaId){alert("Firma seçiniz!");return;}
    if(!form.faturaNo.trim()){alert("Fatura numarası giriniz!");return;}
    if(form.kalemler.length===0){alert("En az bir kalem ekleyiniz!");return;}
    if(form.projeId&&!form.spId){
      const tumKalemlerBagli=(form.kalemler||[]).length>0&&(form.kalemler||[]).every(k=>k.butceKalemiId);
      if(!tumKalemlerBagli){alert("Proje bazlı alımlarda her kalem ya bir satınalma siparişinden ya da bir bütçe kaleminden gelmelidir.\n\nSipariş Seç veya Bütçeden Ekle ile kalemleri eşleştiriniz.");return;}
    }
    const frm=firmalar.find(f=>f.id===parseInt(form.firmaId));
    const prj=projeler.find(p=>p.id===parseInt(form.projeId));
    const isNew=!form.id;
    const af={...form,id:form.id||Date.now(),_isNew:isNew,firmaId:parseInt(form.firmaId),firmaAd:frm?.ad||form.firmaAd,
      projeId:form.projeId?parseInt(form.projeId):null,projeAd:prj?.ad||form.projeAd,
      kalemler:form.kalemler.map(k=>({...k,malzemeId:k.malzemeId?parseInt(k.malzemeId):null,miktar:parseFloat(k.miktar)||0,netFiyat:parseFloat(k.netFiyat)||0,butceKalemiId:k.butceKalemiId?parseInt(k.butceKalemiId):null,butceKalemiSatirId:k.butceKalemiSatirId||null}))};
    if(onSave){await onSave(af);}else{setFaturalar(prev=>{const ex=prev.find(x=>x.id===af.id);return ex?prev.map(x=>x.id===af.id?af:x):[...prev,af];});}
    if(isNew)setForm(p=>({...p,id:af.id}));
    setSaved(true);setTimeout(()=>setSaved(false),2000);
  };

  const sil=(id)=>{if(onDel){onDel(id);}else{if(!confirm("Bu faturayı silmek istediğinize emin misiniz?"))return;setFaturalar(prev=>prev.filter(f=>f.id!==id));}};
  const edit=(f)=>{setForm({...f,firmaId:String(f.firmaId),projeId:f.projeId?String(f.projeId):"",kalemler:f.kalemler.map(k=>({...k,malzemeId:k.malzemeId?String(k.malzemeId):""}))});setView("form");};
  const durumGuncelle=(af,yeniDurum)=>setFaturalar(prev=>prev.map(f=>f.id===af.id?{...f,durum:yeniDurum}:f));

  const filtered=faturalar.filter(f=>{
    const q=nTR(search);
    const ms=nTR(f.afNo).includes(q)||nTR(f.faturaNo).includes(q)||nTR(f.firmaAd).includes(q)||nTR(f.projeAd).includes(q)||(f.kalemler||[]).some(k=>nTR(k.malzemeAd).includes(q));
    const md=fDurum==="all"||f.durum===fDurum;
    return ms&&md;
  }).sort((a,b)=>(b.faturaTarihi||"").localeCompare(a.faturaTarihi||""));

  /* FORM */
  if(view==="form"){
    const para=PARA_BIRIMLERI.find(p=>p.id===form.paraBirimi);
    const{kdvHaric,kdvToplam,kdvDahil}=toplamHesapla(form.kalemler);
    const headerFirmaAd=form.firmaId?firmalar.find(f=>f.id===parseInt(form.firmaId))?.ad||"":"";
    return <div>
      {firmaPickerOpen&&<FirmaSeciciModal firmalar={firmalar} turFiltre={["tedarikci","taseron","resmi"]} onSelect={f=>{uf("firmaId",String(f.id));uf("firmaAd",f.ad);}} onClose={()=>setFirmaPickerOpen(false)} baslik="TEDARİKÇİ / TAŞERON / RESMİ KURUM SEÇ"/>}
      {/* HEADER — dark bar */}
      <div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"20px",padding:"12px 20px",background:"#384248",borderRadius:"8px"}}>
        <button onClick={()=>{setView("list");setForm({...emptyForm,afNo:nextNo});}} title="Geri" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><MoveLeft size={32}/></button>
        <div style={{flex:1,textAlign:"center"}}>
          <span style={{fontSize:"20px",fontWeight:600,color:"#8799a3",letterSpacing:"0.3px"}}>{form.afNo}{headerFirmaAd?` - ${headerFirmaAd}`:form.id?"":" - Yeni Fatura"}</span>
        </div>
        <button onClick={kaydet} title={saved?"Kaydedildi":"Kaydet"} style={{padding:"0",border:"none",background:"transparent",color:saved?"#52c41a":"#8799a3",cursor:"pointer",display:"flex",alignItems:"center",transition:"color .3s"}}><Save size={32}/></button>
        {form.id&&<button onClick={()=>sil(form.id)} title="Faturayı Sil" style={{padding:"0",border:"none",background:"transparent",color:"#ff6b6b",cursor:"pointer",display:"flex",alignItems:"center"}}><Trash2 size={32}/></button>}
      </div>

      {/* SP Bağlantısı */}
      <div style={{background:form.spId?"#f6ffed":"#f9f0ff",borderRadius:T.rl,border:`1px solid ${form.spId?"#b7eb8f":"#d3adf7"}`,padding:"14px 20px",marginBottom:"16px",display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"}}>
        <span style={{fontSize:"13px",color:form.spId?"#52c41a":"#722ed1",fontWeight:500}}>{form.spId?"✓ Sipariş bağlı:":"🔗 Satınalma siparişi seç"}{form.projeId&&!form.spId?" (zorunlu)":""}</span>
        {form.spId
          ?<><span style={{fontSize:"14px",fontWeight:600,color:"#52c41a"}}>[{form.spNo}] {form.firmaAd}</span>
            <button onClick={()=>{setForm(p=>({...p,spId:"",spNo:"",kalemler:[]}));}} style={{padding:"3px 10px",borderRadius:"4px",border:`1px solid ${T.err}`,background:"#fff",color:T.err,fontSize:"11px",cursor:"pointer",fontWeight:500}}>Bağlantıyı Kaldır</button></>
          :<button onClick={()=>setSpPickerOpen(true)} style={{padding:"6px 16px",borderRadius:"6px",border:"1px solid #722ed1",background:"#f9f0ff",color:"#722ed1",fontSize:"13px",cursor:"pointer",fontWeight:600}}>Sipariş Seç</button>
        }
      </div>
      {spPickerOpen&&<SiparisSeciciModal mode="multi" siparisler={siparisler.filter(s=>["taslak","onaylandi","kismen_teslim"].includes(s.durum)&&(!form.firmaId||String(s.firmaId)===String(form.firmaId))&&(!form.projeId||String(s.projeId)===String(form.projeId)))} onConfirm={(secimler)=>{
        if(!secimler||secimler.length===0)return;
        const yeniKalemler=secimler.map(({sp,kalem})=>({
          id:Date.now()+Math.random(),
          malzemeId:kalem.malzemeId||null,
          malzemeAd:kalem.malzemeAd||"",
          malzemeKodu:kalem.malzemeKodu||"",
          birim:kalem.birim||"",
          miktar:parseFloat(kalem.miktar)||0,
          netFiyat:parseFloat(kalem.netFiyat)||0,
          kdvOrani:kalem.kdvOrani||"20",
          aciklama:kalem.aciklama||"",
          butceKalemiId:kalem.butceKalemiId||null,
          butceKalemiSatirId:kalem.butceKalemiSatirId||null
        }));
        const spIds=[...new Set(secimler.map(x=>x.sp.id))];
        const tekSp=spIds.length===1?secimler[0].sp:null;
        setForm(p=>{
          const updated={...p,kalemler:[...(p.kalemler||[]),...yeniKalemler]};
          if(tekSp&&!p.spId){
            updated.spId=tekSp.id;
            updated.spNo=tekSp.spNo;
            if(!p.firmaId){updated.firmaId=String(tekSp.firmaId);updated.firmaAd=tekSp.firmaAd||"";}
            if(!p.projeId){updated.projeId=tekSp.projeId?String(tekSp.projeId):"";updated.projeAd=tekSp.projeAd||"";}
            if(tekSp.odemeSekli&&!p.odemeSekli)updated.odemeSekli=tekSp.odemeSekli;
            if(tekSp.vadeGun&&!p.vadeGun){updated.vadeGun=tekSp.vadeGun;if(p.faturaTarihi)updated.vadeTarihi=addDaysISO(p.faturaTarihi,tekSp.vadeGun);}
          }
          return updated;
        });
      }} onClose={()=>setSpPickerOpen(false)}/>}

      <div style={{background:T.card,borderRadius:T.rl,border:`1px solid ${T.border}`,padding:"20px",marginBottom:"16px"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"14px",marginBottom:"14px"}}>
          <div><label style={lS}>Firma *</label>
            <button onClick={()=>setFirmaPickerOpen(true)} style={{...iS,textAlign:"left",cursor:"pointer",color:form.firmaAd?T.text:T.t3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{form.firmaAd||"— Firma seçiniz —"}</button>
          </div>
          <div><label style={lS}>Proje</label>
            <select style={iS} value={form.projeId} onChange={e=>{const p=projeler.find(x=>x.id===parseInt(e.target.value));uf("projeId",e.target.value);if(p)uf("projeAd",p.ad);}} onFocus={foc} onBlur={blr}>
              <option value="">— Proje seçiniz —</option>
              {projeler.map(p=><option key={p.id} value={p.id}>{p.projeKodu?`[${p.projeKodu}] `:""}{p.ad}</option>)}
            </select>
          </div>
          <div><label style={lS}>Ödeme Durumu</label>
            <select style={iS} value={form.durum} onChange={e=>uf("durum",e.target.value)} onFocus={foc} onBlur={blr}>
              {AF_DURUMLARI.map(d=><option key={d.id} value={d.id}>{d.icon} {d.label}</option>)}
            </select>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"14px",marginBottom:"14px"}}>
          <div><label style={lS}>Fatura No *</label><input style={iS} value={form.faturaNo} onChange={e=>uf("faturaNo",e.target.value)} placeholder="Tedarikçi fatura no" onFocus={foc} onBlur={blr}/></div>
          <div><label style={lS}>Fatura Tarihi</label><input style={iS} type="date" value={form.faturaTarihi} onChange={e=>{const ft=e.target.value;setForm(p=>({...p,faturaTarihi:ft,vadeTarihi:p.vadeGun!==""&&p.vadeGun!==null?addDaysISO(ft,p.vadeGun):p.vadeTarihi}));}} onFocus={foc} onBlur={blr}/></div>
          <div><label style={lS}>Ödeme Şekli</label><input style={iS} value={form.odemeSekli} onChange={e=>uf("odemeSekli",e.target.value)} placeholder="Örn: Peşin, Hakediş, Avans + Bakiye" onFocus={foc} onBlur={blr}/></div>
          <div><label style={lS}>Para Birimi</label>
            <select style={iS} value={form.paraBirimi} onChange={e=>uf("paraBirimi",e.target.value)} onFocus={foc} onBlur={blr}>
              {PARA_BIRIMLERI.map(p=><option key={p.id} value={p.id}>{p.label}</option>)}
            </select>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 2fr",gap:"14px",marginBottom:"14px"}}>
          <div><label style={lS}>Vade (gün)</label><input style={iS} type="number" min="0" value={form.vadeGun} onChange={e=>{const g=e.target.value;if(g===""){setForm(p=>({...p,vadeGun:"",vadeTarihi:""}));return;}setForm(p=>({...p,vadeGun:g,vadeTarihi:addDaysISO(p.faturaTarihi,g)}));}} placeholder="Örn: 30" onFocus={foc} onBlur={blr}/></div>
          <div><label style={lS}>Vade Tarihi (hesaplanan)</label><input style={iS} type="date" value={form.vadeTarihi} onChange={e=>{const t=e.target.value;if(!t){setForm(p=>({...p,vadeGun:"",vadeTarihi:""}));return;}setForm(p=>({...p,vadeTarihi:t,vadeGun:daysBetweenISO(p.faturaTarihi,t)}));}} onFocus={foc} onBlur={blr}/></div>
          <div></div>
        </div>
        <div><label style={lS}>Açıklama</label><textarea style={{...iS,height:"48px",resize:"vertical"}} value={form.aciklama} onChange={e=>uf("aciklama",e.target.value)} onFocus={foc} onBlur={blr}/></div>
      </div>

      {/* Kalemler */}
      <div style={{background:T.card,borderRadius:T.rl,border:`1px solid ${T.border}`,overflow:"hidden"}}>
        <div style={{padding:"12px 20px",borderBottom:`1px solid ${T.border}`,background:"#fafafa",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{fontWeight:600,fontSize:"14px",color:T.text}}>🧾 Fatura Kalemleri</div>
          <div style={{display:"flex",gap:"8px"}}>
            {!form.projeId&&<button onClick={kalemEkle} style={{padding:"5px 14px",borderRadius:"6px",border:`1px solid ${T.primary}`,background:T.pBg,color:T.primary,fontSize:"13px",cursor:"pointer",fontWeight:500}}>+ Kalem Ekle</button>}
          </div>
        </div>
        {form.kalemler.length===0&&<div style={{padding:"32px",textAlign:"center",color:T.t3,fontSize:"13px"}}>{form.projeId?"SP'den doldur ile sipariş seçin, kalemler otomatik gelir.":"Manuel kalem ekle."}</div>}
        {form.kalemler.map((k,idx)=>{
          return <div key={k.id} style={{padding:"12px 20px",borderBottom:`1px solid ${T.border}`,background:idx%2===0?"#fff":"#fafafa"}}>
            <div style={{display:"grid",gridTemplateColumns:"28px 2fr 80px 80px 100px 80px 32px",gap:"8px",alignItems:"center"}}>
              <div style={{fontSize:"12px",fontWeight:600,color:T.t3}}>{idx+1}</div>
              <select style={{...iS,fontSize:"13px"}} value={k.malzemeId} onChange={e=>kalemUp(k.id,"malzemeId",e.target.value)} onFocus={foc} onBlur={blr}>
                <option value="">— Malzeme seçiniz —</option>
                {malzemeler.map(m=><option key={m.id} value={m.id}>{m.ad} ({m.malzemeKodu})</option>)}
              </select>
              <input style={{...iS,fontSize:"13px",textAlign:"right"}} type="number" value={k.miktar} onChange={e=>kalemUp(k.id,"miktar",e.target.value)} placeholder="Miktar" onFocus={foc} onBlur={blr}/>
              <input style={{...iS,fontSize:"13px",background:"#f5f5f5"}} value={k.birim||""} onChange={e=>kalemUp(k.id,"birim",e.target.value)} placeholder="Birim" onFocus={foc} onBlur={blr}/>
              <input style={{...iS,fontSize:"13px",textAlign:"right"}} type="number" value={k.netFiyat} onChange={e=>kalemUp(k.id,"netFiyat",e.target.value)} placeholder="Birim fiyat" onFocus={foc} onBlur={blr}/>
              <select style={{...iS,fontSize:"12px"}} value={k.kdvOrani} onChange={e=>kalemUp(k.id,"kdvOrani",e.target.value)} onFocus={foc} onBlur={blr}>
                {KDV_ORANLARI.map(x=><option key={x.id} value={x.id}>{x.label}</option>)}
              </select>
              <button onClick={()=>kalemSil(k.id)} style={{background:"none",border:"none",color:T.err,cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"}}><Trash2 size={16}/></button>
            </div>
            <div style={{marginTop:"6px",paddingLeft:"36px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}}>
              <input style={{...iS,fontSize:"12px",background:"#f9f9f9"}} value={k.aciklama||""} onChange={e=>kalemUp(k.id,"aciklama",e.target.value)} placeholder="Kalem notu..." onFocus={foc} onBlur={blr}/>
              {form.projeId&&(()=>{
                const bkList=butceKalemleri.filter(b=>b.projeId===parseInt(form.projeId));
                if(bkList.length===0)return null;
                const seciliBk=k.butceKalemiId?bkList.find(b=>b.id===k.butceKalemiId):null;
                const seciliSatir=seciliBk&&k.butceKalemiSatirId?(seciliBk.planlananSatirlari||[]).find(s=>s.id===k.butceKalemiSatirId):null;
                return <button onClick={()=>setBkPickerKalemId(k.id)} style={{...iS,fontSize:"12px",padding:"5px 8px",cursor:"pointer",textAlign:"left",background:k.butceKalemiId?"#f6ffed":"#fff7e6",borderColor:k.butceKalemiId?"#b7eb8f":"#ffe58f",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                  {seciliBk
                    ?<span>✓ [{seciliBk.malzemeKodu||"?"}] {seciliBk.malzemeAd||"?"}{seciliSatir&&<span style={{color:"#1677ff",marginLeft:"4px"}}>↳ {seciliSatir.aciklama||`#${seciliSatir.siraNo||""}`}</span>}</span>
                    :<span style={{color:T.t3}}>— Bütçe Kalemi Eşleştir —</span>
                  }
                </button>;
              })()}
            </div>
          </div>;
        })}
        {/* Bütçe Kalemi Seçici Modal — tekil eşleştirme */}
        {bkPickerKalemId&&form.projeId&&<ButceKalemiSeciciModal mode="single" butceKalemleri={butceKalemleri.filter(b=>b.projeId===parseInt(form.projeId))} kullanilmisHaritasi={butceKullanimHaritasi} onSelect={(bk,satirId)=>{
          setForm(p=>({...p,kalemler:p.kalemler.map(k=>k.id===bkPickerKalemId?{...k,butceKalemiId:bk.id,butceKalemiSatirId:satirId||null}:k)}));
          setBkPickerKalemId(null);
        }} onClose={()=>setBkPickerKalemId(null)}/>}
        {/* Bütçeden Toplu Kalem Ekle Modal */}
        {bkMultiOpen&&form.projeId&&<ButceKalemiSeciciModal mode="multi" butceKalemleri={butceKalemleri.filter(b=>b.projeId===parseInt(form.projeId))} kullanilmisHaritasi={butceKullanimHaritasi} onConfirm={(secimler)=>{
          const yeniKalemler=secimler.map(({bk,satirId})=>{
            const satirlar=bk.planlananSatirlari||[];
            const satir=satirId?satirlar.find(s=>s.id===satirId):null;
            return{
              id:Date.now()+Math.random(),
              malzemeId:bk.malzemeId||"",malzemeAd:bk.malzemeAd||"",malzemeKodu:bk.malzemeKodu||"",birim:bk.birim||"",
              miktar:satir?parseFloat(satir.miktar||0):parseFloat(bk.planlananMiktar||0),
              netFiyat:satir?parseFloat(satir.birimFiyat||0):parseFloat(bk.planlananBirimFiyat||0),
              kdvOrani:satir?.kdvOrani||"20",
              aciklama:satir?.aciklama||"",
              butceKalemiId:bk.id,butceKalemiSatirId:satirId||null
            };
          });
          setForm(p=>({...p,kalemler:[...p.kalemler,...yeniKalemler]}));
          setBkMultiOpen(false);
        }} onClose={()=>setBkMultiOpen(false)}/>}
        {form.kalemler.length>0&&<div style={{padding:"14px 20px",background:"#f9f0ff",display:"flex",justifyContent:"flex-end",gap:"32px"}}>
          <div style={{textAlign:"right"}}><div style={{fontSize:"11px",color:T.t2,fontWeight:600}}>KDV HARİÇ</div><div style={{fontSize:"16px",fontWeight:700}}>{para?.symbol}{kdvHaric.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div></div>
          <div style={{textAlign:"right"}}><div style={{fontSize:"11px",color:T.t3,fontWeight:600}}>KDV</div><div style={{fontSize:"14px",fontWeight:600,color:T.t2}}>{para?.symbol}{kdvToplam.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div></div>
          <div style={{textAlign:"right"}}><div style={{fontSize:"11px",color:"#722ed1",fontWeight:600}}>GENEL TOPLAM</div><div style={{fontSize:"20px",fontWeight:700,color:"#722ed1"}}>{para?.symbol}{kdvDahil.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div></div>
        </div>}
      </div>
    </div>;
  }

  /* LİSTE */
  return <div>
    {/* FİLTRE BAR */}
    <div style={{display:"flex",gap:"10px",marginBottom:"16px",flexWrap:"wrap",alignItems:"center"}}>
      <input style={{...iS,maxWidth:"260px"}} value={search} onChange={e=>setSearch(e.target.value)} placeholder="AF no, fatura no veya firma ara..." onFocus={foc} onBlur={blr}/>
      <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
        <button onClick={()=>setFDurum("all")} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${fDurum==="all"?"#384248":T.bDark}`,background:fDurum==="all"?"#384248":"#fff",color:fDurum==="all"?"#fff":T.t2,fontSize:"14px",cursor:"pointer"}}>Tümü</button>
        {AF_DURUMLARI.map(d=><button key={d.id} onClick={()=>setFDurum(d.id)} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${fDurum===d.id?"#384248":T.bDark}`,background:fDurum===d.id?"#384248":"#fff",color:fDurum===d.id?"#fff":T.t2,fontSize:"14px",cursor:"pointer"}}>{d.icon} {d.label}</button>)}
      </div>
    </div>

    {/* PORTAL */}
    <div style={{border:`1px solid ${T.border}`,borderRadius:"8px",overflow:"hidden"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",background:"#384248"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <span style={{fontSize:"16px",fontWeight:700,color:"#fff"}}>Alış Faturaları</span>
          <span style={{fontSize:"13px",color:"#8799a3"}}>{filtered.length} fatura</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
          <button onClick={()=>{setForm({...emptyForm,afNo:nextNo});setView("form");}} title="Yeni Fatura" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePlus size={30}/></button>
          <button onClick={()=>{
            const rows=[["AF No","Firma","Fatura No","Tarih","Vade","Durum","Kalem","Tutar (KDV Dahil)"]];
            filtered.forEach(f=>{const{kdvDahil}=toplamHesapla(f.kalemler||[]);const d=AF_DURUMLARI.find(x=>x.id===f.durum);rows.push([f.afNo||"",f.firmaAd||"",f.faturaNo||"",f.faturaTarihi||"",f.vadeTarihi||"",d?d.label:"",String((f.kalemler||[]).length),String(kdvDahil)]);});
            const csv=rows.map(r=>r.map(c=>`"${c}"`).join(";")).join("\n");
            const blob=new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8;"});
            const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="alis_faturalari.csv";a.click();
          }} title="Excel'e Aktar" style={{padding:"0",border:"none",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center"}}><img src={excelIcon} alt="Excel" style={{width:"35px",height:"35px"}}/></button>
        </div>
      </div>
      {filtered.length===0
        ?<div style={{padding:"60px",textAlign:"center",color:T.t3,fontSize:"14px",background:"#fff"}}>{search||fDurum!=="all"?"Sonuç bulunamadı":"Henüz fatura eklenmemiş."}</div>
        :<>
          <div style={{display:"grid",gridTemplateColumns:"100px 1fr 100px 90px 90px 100px 60px 120px",background:"#fafafa",borderBottom:`1px solid ${T.border}`,padding:"8px 12px",gap:"8px"}}>
            {["AF No","Firma","Fatura No","Tarih","Vade","Durum","Kalem","Tutar"].map((h,i)=><div key={i} style={{fontSize:"12px",fontWeight:600,color:T.t2,textTransform:"uppercase",letterSpacing:"0.3px"}}>{h}</div>)}
          </div>
          {filtered.map((f,idx)=>{
            const para=PARA_BIRIMLERI.find(p=>p.id===f.paraBirimi);
            const{kdvDahil}=toplamHesapla(f.kalemler||[]);
            const durumObj=AF_DURUMLARI.find(d=>d.id===f.durum)||AF_DURUMLARI[0];
            const vadePassed=f.vadeTarihi&&f.vadeTarihi<new Date().toISOString().split("T")[0]&&f.durum==="beklemede";
            return <div key={f.id} onClick={()=>edit(f)} style={{display:"grid",gridTemplateColumns:"100px 1fr 100px 90px 90px 100px 60px 120px",padding:"8px 12px",gap:"8px",alignItems:"center",borderBottom:idx<filtered.length-1?`1px solid ${T.border}`:"none",background:idx%2===0?"#fff":"#fafafa",cursor:"pointer",height:"44px"}}
              onMouseEnter={e=>e.currentTarget.style.background=T.pBg}
              onMouseLeave={e=>e.currentTarget.style.background=idx%2===0?"#fff":"#fafafa"}>
              <div style={{fontSize:"13px",color:"#722ed1",fontWeight:600,fontFamily:"monospace"}}>{f.afNo}</div>
              <div style={{fontSize:"14px",fontWeight:600,color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{f.firmaAd}</div>
              <div style={{fontSize:"13px",color:T.t2}}>{f.faturaNo||"—"}</div>
              <div style={{fontSize:"13px",color:T.t2}}>{fmtDate(f.faturaTarihi)}</div>
              <div style={{fontSize:"13px",color:vadePassed?T.err:T.t3}}>{f.vadeTarihi?fmtDate(f.vadeTarihi):"—"}</div>
              <div><span style={{padding:"2px 8px",borderRadius:"3px",fontSize:"11px",fontWeight:600,color:durumObj.color,background:durumObj.bg,border:`1px solid ${durumObj.color}33`}}>{durumObj.label}</span></div>
              <div style={{fontSize:"13px",color:T.t2,textAlign:"center"}}>{(f.kalemler||[]).length}</div>
              <div style={{fontSize:"14px",fontWeight:600,color:T.text,textAlign:"right"}}>{para?.symbol}{kdvDahil.toLocaleString("tr-TR",{minimumFractionDigits:2})}</div>
            </div>;
          })}
        </>
      }
    </div>
  </div>;
};

/* ========== MALZEMELER SAYFASI (ÜST SEKMELER İLE) ========== */
const MalzemelerPage=({malzemeler,setMalzemeler,onSaveMalzeme,onDelMalzeme,firmalar,altKategoriler,setAltKategoriler,altGruplar,setAltGruplar,teklifler,setTeklifler,onSaveKat,onDelKat,onSaveAltGrp,onDelAltGrp,onSaveTeklif,onDelTeklif,projeler=[],setEditMode})=>{
  const[mainTab,setMainTab]=useState("liste");
  const[search,setSearch]=useState("");
  const[fKat,setFKat]=useState("all");
  const[showKod,setShowKod]=useState(false);
  const[view,setView]=useState("list");
  const[activeMlz,setActiveMlz]=useState(null);
  const[initData,setInitData]=useState(null);
  const[hesapDetay,setHesapDetay]=useState(null);

  const[fDurum,setFDurum]=useState("aktif");
  const filtered=malzemeler.filter(m=>{
    const q=nTR(search);
    const ms=nTR(m.ad).includes(q)||nTR(m.malzemeKodu).includes(q)||nTR(m.grupAd).includes(q)||nTR(m.altGrupAd).includes(q)||nTR(m.marka).includes(q);
    const mk=fKat==="all"||m.tip===fKat;
    const md=fDurum==="all"||(fDurum==="aktif"?m.durum!=="pasif":m.durum==="pasif");
    return ms&&mk&&md;
  });

  // Tüm malzemelerden kullanılan birimleri topla + varsayılanları birleştir
  const tumBirimler=useMemo(()=>{
    const set=new Set(MLZ_BIRIMLER);
    malzemeler.forEach(m=>{if(m.birim)set.add(m.birim);});
    return [...set];
  },[malzemeler]);

  const handleSave=async(d)=>{if(onSaveMalzeme){d._isNew=(view!=="form-edit");await onSaveMalzeme(d);}else{if(view==="form-edit"){setMalzemeler(p=>p.map(m=>m.id===d.id?d:m));}else{setMalzemeler(p=>[...p,d]);}}};
  const handleEdit=(m)=>{setActiveMlz(m);setView("form-edit");setEditMode?.(true);};
  const handleDel=async(id)=>{if(onDelMalzeme){await onDelMalzeme(id);}else{if(confirm("Bu malzemeyi silmek istediğinize emin misiniz?")){setMalzemeler(p=>p.filter(m=>m.id!==id));}}};
  const handleKodComplete=(data)=>{setInitData(data);setShowKod(false);setView("form-new");setEditMode?.(true);};

  if(view==="form-new"){
    return <MalzemeKarti malzeme={null} initData={initData} isNew={true} onSave={async(d)=>{await handleSave(d);setInitData(null);setEditMode?.(false);}} onBack={()=>{setView("list");setInitData(null);setEditMode?.(false);}} firmalar={firmalar} altKategoriler={altKategoriler} altGruplar={altGruplar} teklifler={teklifler} tumBirimler={tumBirimler}/>;
  }
  if(view==="form-edit"&&activeMlz){
    const live=malzemeler.find(m=>m.id===activeMlz.id)||activeMlz;
    return <MalzemeKarti malzeme={live} initData={null} isNew={false} onSave={async(d)=>{await handleSave(d);}} onDel={(id)=>{handleDel(id);setView("list");setActiveMlz(null);setEditMode?.(false);}} onBack={()=>{setView("list");setActiveMlz(null);setEditMode?.(false);}} firmalar={firmalar} altKategoriler={altKategoriler} altGruplar={altGruplar} teklifler={teklifler} tumBirimler={tumBirimler}/>;
  }

  const mainTabs=[
    {id:"liste",label:"Malzeme Listesi",icon:"🧱",count:malzemeler.length},
    {id:"hesaplamalar",label:"Hesaplamalar",count:Object.keys(HESAPLAMA_SABLONLARI).length},
    {id:"altkat",label:"Grup Yönetimi",count:altKategoriler.length},
  ];

  return <div>
    {/* ÜST SEKMELER */}
    <div style={{display:"flex",gap:"0",marginBottom:"0"}}>
      {mainTabs.map(t=><button key={t.id} onClick={()=>setMainTab(t.id)} style={{flex:1,padding:"10px 0",border:`1px solid #8799a3`,borderBottom:"none",borderRadius:"12px 12px 0 0",background:mainTab===t.id?"#8799a3":"#384248",color:mainTab===t.id?"#000":"#fff",fontWeight:mainTab===t.id?600:400,fontSize:"14px",fontFamily:"'Inter',sans-serif",cursor:"pointer",whiteSpace:"nowrap",transition:"all .15s"}}
        onMouseEnter={e=>{if(mainTab!==t.id){e.currentTarget.style.background="#8799a3";e.currentTarget.style.color="#000";}}}
        onMouseLeave={e=>{if(mainTab!==t.id){e.currentTarget.style.background="#384248";e.currentTarget.style.color="#fff";}}}
      >{t.label} ({t.count})</button>)}
    </div>

    {/* MALZEME LİSTESİ */}
    {mainTab==="liste"&&<>
    {/* FİLTRE BAR */}
    <div style={{display:"flex",gap:"10px",marginBottom:"16px",marginTop:"16px",flexWrap:"wrap",alignItems:"center"}}>
      <input style={{...iS,maxWidth:"260px"}} value={search} onChange={e=>setSearch(e.target.value)} placeholder="Malzeme adı, kod veya marka ara..." onFocus={foc} onBlur={blr}/>
      <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
        <button onClick={()=>setFKat("all")} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${fKat==="all"?"#384248":T.bDark}`,background:fKat==="all"?"#384248":"#fff",color:fKat==="all"?"#fff":T.t2,fontSize:"14px",cursor:"pointer"}}>Tümü</button>
        {MLZ_TIPLER.map(k=><button key={k.id} onClick={()=>setFKat(fKat===k.id?"all":k.id)} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${fKat===k.id?"#384248":T.bDark}`,background:fKat===k.id?"#384248":"#fff",color:fKat===k.id?"#fff":T.t2,fontSize:"14px",cursor:"pointer"}}>{k.label}</button>)}
      </div>
      <div style={{display:"flex",gap:"6px"}}>
        {[{k:"aktif",l:"Aktif"},{k:"pasif",l:"Pasif"},{k:"all",l:"Tümü"}].map(d=><button key={d.k} onClick={()=>setFDurum(d.k)} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${fDurum===d.k?(d.k==="aktif"?T.ok:d.k==="pasif"?T.err:"#384248"):T.bDark}`,background:fDurum===d.k?(d.k==="aktif"?"#f6ffed":d.k==="pasif"?"#fff1f0":"#384248"):"#fff",color:fDurum===d.k?(d.k==="aktif"?T.ok:d.k==="pasif"?T.err:"#fff"):T.t2,fontSize:"14px",cursor:"pointer",fontWeight:fDurum===d.k?600:400}}>{d.l}</button>)}
      </div>
    </div>

    {/* PORTAL */}
    <div style={{border:`1px solid ${T.border}`,borderRadius:"8px",overflow:"hidden"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",background:"#384248"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <span style={{fontSize:"16px",fontWeight:700,color:"#fff"}}>Malzemeler</span>
          <span style={{fontSize:"13px",color:"#8799a3"}}>{filtered.length} malzeme</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
          <button onClick={()=>setShowKod(true)} title="Yeni Malzeme" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePlus size={30}/></button>
          <button onClick={()=>{
            const rows=[["Kod","Malzeme Adı","Tip","Grup","Birim","Marka"]];
            filtered.forEach(m=>{const tip=MLZ_TIPLER.find(t=>t.id===m.tip);rows.push([m.malzemeKodu||"",m.ad||"",tip?tip.label:"",m.grupAd||"",m.birim||"",m.marka||""]);});
            const csv=rows.map(r=>r.map(c=>`"${c}"`).join(";")).join("\n");
            const blob=new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8;"});
            const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="malzemeler.csv";a.click();
          }} title="Excel'e Aktar" style={{padding:"0",border:"none",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center"}}><img src={excelIcon} alt="Excel" style={{width:"35px",height:"35px"}}/></button>
        </div>
      </div>
      {filtered.length===0
        ?<div style={{padding:"60px",textAlign:"center",color:T.t3,fontSize:"14px",background:"#fff"}}>{search||fKat!=="all"?"Sonuç bulunamadı":"Henüz malzeme eklenmemiş."}</div>
        :<>
          <div style={{display:"grid",gridTemplateColumns:"150px 1fr 120px 120px 80px 100px 70px",background:"#fafafa",borderBottom:`1px solid ${T.border}`,padding:"8px 12px",gap:"19px"}}>
            {["Kod","Malzeme Adı","Tip","Grup","Birim","En Uygun Fiyat","Durum"].map((h,i)=><div key={i} style={{fontSize:"12px",fontWeight:600,color:T.t2,textTransform:"uppercase",letterSpacing:"0.3px"}}>{h}</div>)}
          </div>
          {filtered.map((m,idx)=>{
            const tipO=MLZ_TIPLER.find(t=>t.id===m.tip);
            const isPasif=m.durum==="pasif";
            const mlzTek=[];teklifler.forEach(t=>{if(t.durum==="aktif")t.kalemler.forEach(k=>{if(k.malzemeId===m.id)mlzTek.push({...k,paraBirimi:t.paraBirimi});});});
            const enUygun=mlzTek.length>0?mlzTek.reduce((min,k)=>k.netFiyat<min.netFiyat?k:min,mlzTek[0]):null;
            const enUygunPara=enUygun?PARA_BIRIMLERI.find(p=>p.id===enUygun.paraBirimi):null;
            return <div key={m.id} onClick={()=>handleEdit(m)} style={{display:"grid",gridTemplateColumns:"150px 1fr 120px 120px 80px 100px 70px",padding:"8px 12px",gap:"19px",alignItems:"center",borderBottom:idx<filtered.length-1?`1px solid ${T.border}`:"none",background:isPasif?"#fafafa":(idx%2===0?"#fff":"#fafafa"),cursor:"pointer",height:"44px",opacity:isPasif?0.45:1}}
              onMouseEnter={e=>e.currentTarget.style.background=T.pBg}
              onMouseLeave={e=>e.currentTarget.style.background=isPasif?"#fafafa":(idx%2===0?"#fff":"#fafafa")}>
              <div style={{fontSize:"15px",color:T.t3,fontWeight:500}}>{m.malzemeKodu||"—"}</div>
              <div style={{fontSize:"15px",fontWeight:600,color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textTransform:"uppercase"}}>{m.ad}{m.marka?` (${m.marka})`:""}</div>
              <div style={{fontSize:"15px",color:T.t2,textTransform:"uppercase"}}>{tipO?tipO.label:"—"}</div>
              <div style={{fontSize:"15px",color:T.t2,textTransform:"uppercase"}}>{m.grupAd||"—"}</div>
              <div style={{fontSize:"15px",color:T.t2,textTransform:"uppercase"}}>{m.birim||"—"}</div>
              <div style={{fontSize:"15px",fontWeight:600,color:enUygun?"#389e0d":T.t3}}>{enUygun?`${enUygunPara?.symbol||""}${enUygun.netFiyat.toLocaleString("tr-TR",{minimumFractionDigits:2})}`:"—"}</div>
              <div style={{fontSize:"12px",fontWeight:600,color:isPasif?T.err:T.ok}}>{isPasif?"Pasif":"Aktif"}</div>
            </div>;
          })}
        </>
      }
    </div>
    </>}

    {/* ALINAN TEKLİFLER */}

    {/* HESAPLAMALAR */}
    {mainTab==="hesaplamalar"&&<div style={{padding:"20px",background:"#fff",borderRadius:"0 0 8px 8px",border:`1px solid ${T.border}`,borderTop:"none",minHeight:"400px"}}>
      {!hesapDetay?<>
        <div style={{fontSize:"13px",fontWeight:600,color:T.primary,marginBottom:"16px"}}>HESAPLAMA ŞABLONLARI</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"12px"}}>
          {Object.entries(HESAPLAMA_SABLONLARI).map(([key,s])=><div key={key} onClick={()=>setHesapDetay(key)} style={{padding:"16px",borderRadius:"8px",border:`1px solid ${T.border}`,background:"#fafafa",cursor:"pointer",transition:"all .15s"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=T.primary;e.currentTarget.style.background="#e6f4ff";}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.background="#fafafa";}}>
            <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"8px"}}>
              <span style={{fontSize:"24px"}}>{s.icon}</span>
              <div style={{fontSize:"15px",fontWeight:600,color:T.text}}>{s.ad}</div>
            </div>
            <div style={{fontSize:"12px",color:T.t2,lineHeight:"1.5",marginBottom:"8px"}}>{s.aciklama}</div>
            <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
              <span style={{fontSize:"11px",padding:"2px 8px",borderRadius:"4px",background:"#e6f4ff",color:T.primary,fontWeight:500}}>{s.parametreler.length} parametre</span>
              {s.kategoriler.map(k=>{const ko=MLZ_TIPLER.find(c=>c.id===k);return ko?<span key={k} style={{fontSize:"11px",padding:"2px 8px",borderRadius:"4px",background:ko.bg,color:ko.color,fontWeight:500}}>{ko.label}</span>:null;})}
            </div>
          </div>)}
        </div>
      </>:<>
        {/* ŞABLON DETAY */}
        <div style={{marginBottom:"16px"}}>
          <button onClick={()=>setHesapDetay(null)} style={{padding:"6px 16px",borderRadius:"6px",border:`1px solid ${T.border}`,background:"#fff",cursor:"pointer",fontSize:"13px",display:"flex",alignItems:"center",gap:"6px"}}><MoveLeft size={16}/> Geri</button>
        </div>
        <HesaplamaSekmesi kategori="*" malzemeId={null} malzemeAd="" malzemeKodu="" zorSablon={hesapDetay} kdvOrani="20"/>
      </>}
    </div>}

    {/* ALT KATEGORİLER */}
    {mainTab==="altkat"&&<AltKategoriYonetim altKategoriler={altKategoriler} setAltKategoriler={setAltKategoriler} onSave={onSaveKat} onDel={onDelKat} altGruplar={altGruplar} setAltGruplar={setAltGruplar} onSaveAltGrp={onSaveAltGrp} onDelAltGrp={onDelAltGrp}/>}

    {/* ALT GRUPLAR */}

    {showKod&&<MalzemeKoduCreator malzemeler={malzemeler} altKategoriler={altKategoriler} altGruplar={altGruplar} projeler={projeler} onComplete={handleKodComplete} onClose={()=>setShowKod(false)}/>}
  </div>;
};

/* ========== FİRMALAR SAYFASI (YENİDEN DÜZENLEME) ========== */
const FirmalarPage=({firmalar,setFirmalar,onSave,onDel,addNote,initialFirmaId,onClearInitial,projeler=[],setPage,setEditMode})=>{
  const[search,setSearch]=useState("");
  const[fTur,setFTur]=useState("all");
  const[fDurum,setFDurum]=useState("aktif");
  const[showKod,setShowKod]=useState(false);
  // view: "list" | "form-new" | "form-edit" | "detail"
  const[view,setView]=useState("list");
  const[activeFirma,setActiveFirma]=useState(null);

  // Dışarıdan firma kartı açma
  useEffect(()=>{
    if(initialFirmaId){
      const f=firmalar.find(x=>x.id===initialFirmaId);
      if(f){setActiveFirma(f);setView("form-edit");setEditMode?.(true);}
      if(onClearInitial)onClearInitial();
    }
  },[initialFirmaId]);
  const[initData,setInitData]=useState(null);

  const filtered=firmalar.filter(f=>{const q=nTR(search);const ms=nTR(f.ad).includes(q)||nTR(f.firmaKodu).includes(q)||nTR(f.aciklama).includes(q)||f.kisiler.some(k=>nTR(`${k.ad} ${k.soyad}`).includes(q));const mt=fTur==="all"||f.turler.includes(fTur);const md=fDurum==="all"||(fDurum==="aktif"?f.aktif!==false:f.aktif===false);return ms&&mt&&md;});

  const handleSave=async(d)=>{
    if(onSave){d._isNew=(view!=="form-edit");await onSave(d);}
    else{if(view==="form-edit"){setFirmalar(p=>p.map(f=>f.id===d.id?d:f));}else{setFirmalar(p=>[...p,d]);}}
  };

  const handleEdit=(f)=>{setActiveFirma(f);setView("form-edit");setEditMode?.(true);};

  const handleKodComplete=(data)=>{setInitData(data);setShowKod(false);setView("form-new");setEditMode?.(true);};

  const onAddNote_local=(fid,txt)=>{const n={id:Date.now(),tarih:new Date().toISOString().split("T")[0],yazar:"Admin",metin:txt};setFirmalar(p=>p.map(f=>f.id===fid?{...f,notlar:[...f.notlar,n]}:f));};

  /* FIRMA KARTI (TAM SAYFA FORM) - YENİ veya DÜZENLE */
  if(view==="form-new"){
    return <FirmaKarti
      firma={null}
      initData={initData}
      isNew={true}
      onSave={(d)=>{handleSave(d);setView("list");setInitData(null);setEditMode?.(false);}}
      onBack={()=>{setView("list");setInitData(null);setEditMode?.(false);}}
      onAddNote={null}
      firmalar={firmalar}
      projeler={projeler}
      setPage={setPage}
    />;
  }

  if(view==="form-edit"&&activeFirma){
    const liveFirma=firmalar.find(f=>f.id===activeFirma.id)||activeFirma;
    return <FirmaKarti
      firma={liveFirma}
      initData={{firmaKodu:liveFirma.firmaKodu,turler:liveFirma.turler,paraBirimi:liveFirma.paraBirimi}}
      isNew={false}
      onSave={(d)=>{handleSave(d);}}
      onBack={()=>{setView("list");setActiveFirma(null);setEditMode?.(false);}}
      onAddNote={addNote||onAddNote_local}
      firmalar={firmalar}
      projeler={projeler}
      setPage={setPage}
    />;
  }

  /* FIRMA LİSTESİ */
  return <div>
    {/* FİLTRE BAR */}
    <div style={{display:"flex",gap:"10px",marginBottom:"16px",flexWrap:"wrap",alignItems:"center"}}>
      <input style={{...iS,maxWidth:"260px"}} value={search} onChange={e=>setSearch(e.target.value)} placeholder="Firma, kişi veya kod ara..." onFocus={foc} onBlur={blr}/>
      <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
        <button onClick={()=>setFTur("all")} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${fTur==="all"?"#384248":T.bDark}`,background:fTur==="all"?"#384248":"#fff",color:fTur==="all"?"#fff":T.t2,fontSize:"14px",cursor:"pointer"}}>Tümü</button>
        {FIRMA_TURLERI.map(t=><button key={t.id} onClick={()=>setFTur(fTur===t.id?"all":t.id)} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${fTur===t.id?"#384248":T.bDark}`,background:fTur===t.id?"#384248":"#fff",color:fTur===t.id?"#fff":T.t2,fontSize:"14px",cursor:"pointer"}}>{t.label}</button>)}
      </div>
      <div style={{display:"flex",gap:"6px"}}>
        {[{k:"aktif",l:"Aktif"},{k:"pasif",l:"Pasif"},{k:"all",l:"Tümü"}].map(d=><button key={d.k} onClick={()=>setFDurum(d.k)} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${fDurum===d.k?(d.k==="aktif"?T.ok:d.k==="pasif"?T.err:"#384248"):T.bDark}`,background:fDurum===d.k?(d.k==="aktif"?"#f6ffed":d.k==="pasif"?"#fff1f0":"#384248"):"#fff",color:fDurum===d.k?(d.k==="aktif"?T.ok:d.k==="pasif"?T.err:"#fff"):T.t2,fontSize:"14px",cursor:"pointer",fontWeight:fDurum===d.k?600:400}}>{d.l}</button>)}
      </div>
    </div>

    {/* PORTAL */}
    <div style={{border:`1px solid ${T.border}`,borderRadius:"8px",overflow:"hidden"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",background:"#384248"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <span style={{fontSize:"16px",fontWeight:700,color:"#fff"}}>Firmalar</span>
          <span style={{fontSize:"13px",color:"#8799a3"}}>{filtered.length} firma</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
          <button onClick={()=>setShowKod(true)} title="Yeni Firma" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePlus size={30}/></button>
          <button onClick={()=>{
            const rows=[["Kod","Firma Adı","Tür","Telefon","Kişi","Durum"]];
            filtered.forEach(f=>{const turLabels=f.turler.map(t=>{const o=FIRMA_TURLERI.find(x=>x.id===t);return o?o.label:t;}).join(", ");rows.push([f.firmaKodu||"",f.ad||"",turLabels||"",f.telefon||"",f.kisiler[0]?`${f.kisiler[0].ad} ${f.kisiler[0].soyad}`:"",f.aktif===false?"Pasif":"Aktif"]);});
            const csv=rows.map(r=>r.map(c=>`"${c}"`).join(";")).join("\n");
            const blob=new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8;"});
            const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="firmalar.csv";a.click();
          }} title="Excel'e Aktar" style={{padding:"0",border:"none",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center"}}><img src={excelIcon} alt="Excel" style={{width:"35px",height:"35px"}}/></button>
        </div>
      </div>
      {filtered.length===0
        ?<div style={{padding:"60px",textAlign:"center",color:T.t3,fontSize:"14px",background:"#fff"}}>{search||fTur!=="all"?"Sonuç bulunamadı":"Henüz firma eklenmemiş."}</div>
        :<>
          <div style={{display:"grid",gridTemplateColumns:"90px 1fr 120px 140px 140px 70px",background:"#fafafa",borderBottom:`1px solid ${T.border}`,padding:"8px 12px",gap:"8px"}}>
            {["Kod","Firma Adı","Tür","Telefon","Kişi","Durum"].map((h,i)=><div key={i} style={{fontSize:"12px",fontWeight:600,color:T.t2,textTransform:"uppercase",letterSpacing:"0.3px"}}>{h}</div>)}
          </div>
          {filtered.map((f,idx)=>{
            const turLabels=f.turler.map(t=>{const o=FIRMA_TURLERI.find(x=>x.id===t);return o?o.label:t;}).join(", ");
            const isPasif=f.aktif===false;
            return <div key={f.id} onClick={()=>handleEdit(f)} style={{display:"grid",gridTemplateColumns:"90px 1fr 120px 140px 140px 70px",padding:"8px 12px",gap:"8px",alignItems:"center",borderBottom:idx<filtered.length-1?`1px solid ${T.border}`:"none",background:isPasif?"#fafafa":(idx%2===0?"#fff":"#fafafa"),cursor:"pointer",height:"44px",opacity:isPasif?0.5:1}}
              onMouseEnter={e=>e.currentTarget.style.background=T.pBg}
              onMouseLeave={e=>e.currentTarget.style.background=isPasif?"#fafafa":(idx%2===0?"#fff":"#fafafa")}>
              <div style={{fontSize:"13px",color:T.t3,fontWeight:500}}>{f.firmaKodu||"—"}</div>
              <div style={{fontSize:"14px",fontWeight:600,color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{f.ad}</div>
              <div style={{fontSize:"14px",color:T.t2}}>{turLabels||"—"}</div>
              <div style={{fontSize:"13px",color:T.text}}>{f.telefon||"—"}</div>
              <div style={{fontSize:"13px",color:T.t2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{f.kisiler[0]?`${f.kisiler[0].ad} ${f.kisiler[0].soyad}`:"—"}</div>
              <div style={{fontSize:"12px",fontWeight:600,color:isPasif?T.err:T.ok}}>{isPasif?"Pasif":"Aktif"}</div>
            </div>;
          })}
        </>
      }
    </div>
    {showKod&&<FirmaKoduCreator firmalar={firmalar} onComplete={handleKodComplete} onClose={()=>setShowKod(false)}/>}
  </div>;
};

/* ========== SUPABASE VERİ DÖNÜŞTÜRÜCÜLER ========== */
const firmaToLocal = (f) => ({
  id: f.id, firmaKodu: f.firma_kodu||"", ad: f.ad||"", aciklama: f.aciklama||"",
  turler: f.turler||[], paraBirimi: f.para_birimi||"TL", vergiDairesi: f.vergi_dairesi||"",
  firmaKisiTipi: f.firma_kisi_tipi||"tuzel", vergiDairesiIl: f.vergi_dairesi_il||"",
  vergiNo: f.vergi_no||"", tcKimlikNo: f.tc_kimlik_no||"", sicilNo: f.sicil_no||"",
  kisaAd: f.kisa_ad||"", kategori: f.kategori||"",
  telefon: f.telefon||"", sabitTelefon: f.sabit_telefon||"", telefon2: f.telefon2||"",
  webAdresi: f.web_adresi||"", eposta: f.eposta||"", mahalle: f.mahalle||"",
  adres: f.adres||"", il: f.il||"", ilce: f.ilce||"", postaKodu: f.posta_kodu||"",
  bankaAdi: f.banka_adi||"", iban: f.iban||"",
  aktif: f.aktif!==false,
  ilgilendigiProjeler: f.ilgilendigi_projeler||[],
  kisiler: [], notlar: [], belgeler: [], subeler: [], bankalar: [], iletisimler: [], adresler: [],
  createdAt: f.created_at ? f.created_at.split("T")[0] : new Date().toISOString().split("T")[0]
});
const firmaToDb = (f) => ({
  firma_kodu: f.firmaKodu, ad: f.ad, aciklama: f.aciklama, turler: f.turler,
  para_birimi: f.paraBirimi, firma_kisi_tipi: f.firmaKisiTipi||"tuzel",
  vergi_dairesi_il: f.vergiDairesiIl||"", vergi_dairesi: f.vergiDairesi, vergi_no: f.vergiNo,
  tc_kimlik_no: f.tcKimlikNo||"", sicil_no: f.sicilNo||"", kisa_ad: f.kisaAd||"",
  kategori: f.kategori||"",
  telefon: f.telefon, sabit_telefon: f.sabitTelefon, telefon2: f.telefon2||"",
  web_adresi: f.webAdresi, eposta: f.eposta,
  mahalle: f.mahalle, adres: f.adres, il: f.il, ilce: f.ilce, posta_kodu: f.postaKodu||"",
  banka_adi: f.bankaAdi, iban: f.iban, aktif: f.aktif!==false,
  ilgilendigi_projeler: f.ilgilendigiProjeler||[]
});
const kisiToLocal = (k) => ({
  id: k.id, firmaId: k.firma_id, cinsiyet: k.cinsiyet||"", ad: k.ad||"",
  soyad: k.soyad||"", unvan: k.unvan||"", departman: k.departman||"",
  telefon: k.telefon||"", isTel: k.is_tel||"", isTelDahili: k.is_tel_dahili||"",
  cep: k.cep||"", eposta: k.eposta||"",
  sosyal1: k.sosyal1||"", sosyal2: k.sosyal2||"", sosyal3: k.sosyal3||"",
  dogumTarihi: k.dogum_tarihi||"", notlar: k.notlar||"", resim: k.resim||""
});
const kisiToDb = (k, firmaId) => ({
  firma_id: firmaId, cinsiyet: k.cinsiyet, ad: k.ad, soyad: k.soyad,
  unvan: k.unvan||"", departman: k.departman||"",
  telefon: k.telefon||"", is_tel: k.isTel||"", is_tel_dahili: k.isTelDahili||"",
  cep: k.cep||"", eposta: k.eposta||"",
  sosyal1: k.sosyal1||"", sosyal2: k.sosyal2||"", sosyal3: k.sosyal3||"",
  dogum_tarihi: k.dogumTarihi||null, notlar: k.notlar||"", resim: k.resim||""
});
const notToLocal = (n) => ({
  id: n.id, firmaId: n.firma_id, tarih: n.tarih||"", yazar: n.yazar||"Admin", metin: n.metin||""
});
const malzemeToLocal = (m) => ({
  id: m.id, malzemeKodu: m.malzeme_kodu||"", ad: m.ad||"", tip: m.tip||"M",
  grup: m.grup||"", grupAd: m.grup_ad||"",
  altGrup: m.alt_grup||"", altGrupAd: m.alt_grup_ad||"", birim: m.birim||"adet",
  birimFiyat: parseFloat(m.birim_fiyat)||0, paraBirimi: m.para_birimi||"TL",
  kdvOrani: m.kdv_orani||"20", marka: m.marka||"", model: m.model||"",
  aciklama: m.aciklama||"", tedarikciId: m.tedarikci_id||null, durum: m.durum||"aktif",
  hesaplamaSablonu: m.hesaplama_sablonu||"",
  omurgaProjeTurleri: m.omurga_proje_turleri||[],
  resimler: [], notlar: [],
  createdAt: m.created_at ? m.created_at.split("T")[0] : new Date().toISOString().split("T")[0]
});
const malzemeToDb = (m) => ({
  malzeme_kodu: m.malzemeKodu, ad: m.ad, tip: m.tip,
  grup: m.grup, grup_ad: m.grupAd,
  alt_grup: m.altGrup, alt_grup_ad: m.altGrupAd, birim: m.birim,
  birim_fiyat: m.birimFiyat, para_birimi: m.paraBirimi, kdv_orani: m.kdvOrani,
  marka: m.marka, model: m.model, aciklama: m.aciklama,
  tedarikci_id: m.tedarikciId||null, durum: m.durum,
  hesaplama_sablonu: m.hesaplamaSablonu||null,
  omurga_proje_turleri: m.omurgaProjeTurleri||[]
});
const katToLocal = (k) => ({ id: k.id, kod: k.kod, ad: k.ad });
const altGrpToLocal = (g) => ({
  id: g.id, grupKod: g.grup_kod, grupAd: g.grup_ad,
  kod: g.kod, ad: g.ad
});
/* --- Proje Mapping --- */
const projeToLocal = (p) => ({
  id: p.id, projeKodu: p.proje_kodu||"", ad: p.ad||"", kisaAd: p.kisa_ad||"",
  tur: p.tur||"", durum: p.durum||"", aktif: p.aktif!==false,
  il: p.il||"", ilce: p.ilce||"", mahalle: p.mahalle||"", adres: p.adres||"",
  ada: p.ada||"", parsel: p.parsel||"",
  baslangicTarihi: p.baslangic_tarihi||"", tahminiTeslim: p.tahmini_teslim||"", fiiliTeslim: p.fiili_teslim||"",
  toplamM2: p.toplam_m2||"", katSayisi: p.kat_sayisi||"", toplamBolum: p.toplam_bolum||"",
  arsaM2: p.arsa_m2||"", emsal: p.emsal||"", toplamEmsal: p.toplam_emsal||"",
  anlasmaYontemi: p.anlasma_yontemi||"", arsaSahibiPay: p.arsa_sahibi_pay||"", muteahhitPay: p.muteahhit_pay||"",
  aciklama: p.aciklama||"",
  ongorulenM2KdvHaric: p.ongorulen_m2_kdv_haric!=null?String(p.ongorulen_m2_kdv_haric):"",
  ongorulenM2KdvDahil: p.ongorulen_m2_kdv_dahil!=null?String(p.ongorulen_m2_kdv_dahil):"",
  karMarjiYuzde: p.kar_marji_yuzde!=null?String(p.kar_marji_yuzde):"",
  varsayilanKdvOrani: p.varsayilan_kdv_orani||"20",
  bloklar: p.bloklar||[], bolumler: p.bolumler||[],
  firmaBaglantilari: p.firma_baglantilari||[],
  tumDosyalar: p.tum_dosyalar||[],
  dosyaKategorileri: p.dosya_kategorileri&&p.dosya_kategorileri.length>0?p.dosya_kategorileri:DOSYA_KATEGORILERI.map(k=>({...k,altKategoriler:[...k.altKategoriler]})),
  projeNotlari: p.proje_notlari||[],
  durumTarihce: p.durum_tarihce||[],
  blokSeviyeler: p.blok_seviyeler||[],
  butceKalemleri: p.butce_kalemleri||[],
  dosyaTurleri: p.dosya_turleri&&p.dosya_turleri.length>0?p.dosya_turleri:[...DOSYA_TURLERI],
  projeTurleri: p.proje_turleri&&p.proje_turleri.length>0?p.proje_turleri:PROJE_TURLERI.map(t=>t.label),
  projedurumlari: p.proje_durumlari&&p.proje_durumlari.length>0?p.proje_durumlari:PROJE_DURUMLARI.map(d=>d.label),
  createdAt: p.created_at?p.created_at.split("T")[0]:new Date().toISOString().split("T")[0]
});
const projeToDb = (p) => ({
  proje_kodu: p.projeKodu||"", ad: p.ad||"", kisa_ad: p.kisaAd||"",
  tur: p.tur||"", durum: p.durum||"", aktif: p.aktif!==false,
  il: p.il||"", ilce: p.ilce||"", mahalle: p.mahalle||"", adres: p.adres||"",
  ada: p.ada||"", parsel: p.parsel||"",
  baslangic_tarihi: p.baslangicTarihi||"", tahmini_teslim: p.tahminiTeslim||"", fiili_teslim: p.fiiliTeslim||"",
  toplam_m2: p.toplamM2||"", kat_sayisi: p.katSayisi||"", toplam_bolum: p.toplamBolum||"",
  arsa_m2: p.arsaM2||"", emsal: p.emsal||"", toplam_emsal: p.toplamEmsal||"",
  anlasma_yontemi: p.anlasmaYontemi||"", arsa_sahibi_pay: p.arsaSahibiPay||"", muteahhit_pay: p.muteahhitPay||"",
  aciklama: p.aciklama||"",
  ongorulen_m2_kdv_haric: p.ongorulenM2KdvHaric!==""&&p.ongorulenM2KdvHaric!=null?Number(p.ongorulenM2KdvHaric):null,
  ongorulen_m2_kdv_dahil: p.ongorulenM2KdvDahil!==""&&p.ongorulenM2KdvDahil!=null?Number(p.ongorulenM2KdvDahil):null,
  kar_marji_yuzde: p.karMarjiYuzde!==""&&p.karMarjiYuzde!=null?Number(p.karMarjiYuzde):null,
  varsayilan_kdv_orani: p.varsayilanKdvOrani||"20",
  // bloklar ve bolumler ayrı tablolarda tutuluyor — JSONB sütunları paralel, bu sütunlara yazmıyoruz
  firma_baglantilari: p.firmaBaglantilari||[],
  tum_dosyalar: p.tumDosyalar||[],
  dosya_kategorileri: p.dosyaKategorileri||[],
  proje_notlari: p.projeNotlari||[],
  durum_tarihce: p.durumTarihce||[],
  blok_seviyeler: p.blokSeviyeler||[],
  butce_kalemleri: p.butceKalemleri||[],
  dosya_turleri: p.dosyaTurleri||[],
  proje_turleri: p.projeTurleri||[],
  proje_durumlari: p.projedurumlari||[]
});

// Bütçe kalemi dönüşümleri (Maliyet için)
const butceKalemiToLocal = (b) => ({
  id: b.id,
  projeId: b.proje_id,
  malzemeId: b.malzeme_id,
  malzemeKodu: b.malzeme_kodu||"",
  malzemeAd: b.malzeme_ad||"",
  birim: b.birim||"",
  bloklar: b.bloklar||[],
  planlananMiktar: b.planlanan_miktar!=null?String(b.planlanan_miktar):"",
  planlananBirimFiyat: b.planlanan_birim_fiyat!=null?String(b.planlanan_birim_fiyat):"",
  planlananToplam: b.planlanan_toplam!=null?Number(b.planlanan_toplam):0,
  planlananSatirlari: b.planlanan_satirlari||[],
  firmaSatirlari: b.firma_satirlari||[],
  aciklama: b.aciklama||"",
  tamamlandi: b.tamamlandi||false,
  tamamlandiKaynak: b.tamamlandi_kaynak||"",
  siraNo: b.sira_no||0
});
const butceKalemiToDb = (k, projeId) => ({
  proje_id: projeId||k.projeId,
  malzeme_id: k.malzemeId||null,
  malzeme_kodu: k.malzemeKodu||"",
  malzeme_ad: k.malzemeAd||"",
  birim: k.birim||"",
  bloklar: k.bloklar||[],
  planlanan_miktar: k.planlananMiktar!==""&&k.planlananMiktar!=null?Number(k.planlananMiktar):null,
  planlanan_birim_fiyat: k.planlananBirimFiyat!==""&&k.planlananBirimFiyat!=null?Number(k.planlananBirimFiyat):null,
  planlanan_toplam: Number(k.planlananToplam)||0,
  planlanan_satirlari: k.planlananSatirlari||[],
  firma_satirlari: k.firmaSatirlari||[],
  aciklama: k.aciklama||"",
  tamamlandi: k.tamamlandi===true,
  tamamlandi_kaynak: k.tamamlandiKaynak||null,
  sira_no: k.siraNo||0
});

// Bütçe kalemi otomatik kapatma kontrolü — saveFatura + backfill effect ortak kullanır
const isBkAutoClosed = (bk, faturalarList) => {
  if(!bk || bk.tamamlandi) return false;
  const fkAll = (faturalarList||[])
    .filter(f=>f.durum!=='iptal')
    .flatMap(f=>(f.kalemler||[]).filter(fk=>String(fk.butceKalemiId)===String(bk.id)));
  if(fkAll.length===0) return false;
  const planSatirlari = bk.planlananSatirlari||[];
  if(planSatirlari.length>0) {
    const strictOk = planSatirlari.every(ps=>{
      const pm=parseFloat(ps.miktar)||0, pf=parseFloat(ps.birimFiyat)||0;
      if(pm<=0||pf<=0) return false;
      const fk = fkAll.filter(x=>String(x.butceKalemiSatirId)===String(ps.id));
      const fm = fk.reduce((s,x)=>s+(parseFloat(x.miktar)||0),0);
      const miktarOk = Math.abs(fm-pm)<0.001;
      const fiyatOk = fk.length>0 && fk.every(x=>Math.abs((parseFloat(x.netFiyat)||0)-pf)<0.001);
      return miktarOk && fiyatOk;
    });
    if(strictOk) return true;
    // Fallback: eski faturalarda butceKalemiSatirId boş olabilir — toplam miktar + toplam tutar eşleşirse kapat
    const anyMissingSatirId = fkAll.some(x=>!x.butceKalemiSatirId);
    if(anyMissingSatirId) {
      const planToplamMiktar = planSatirlari.reduce((s,p)=>s+(parseFloat(p.miktar)||0),0);
      const planToplamTutar = planSatirlari.reduce((s,p)=>s+(parseFloat(p.miktar)||0)*(parseFloat(p.birimFiyat)||0),0);
      if(planToplamMiktar<=0||planToplamTutar<=0) return false;
      const faturaToplamMiktar = fkAll.reduce((s,x)=>s+(parseFloat(x.miktar)||0),0);
      const faturaToplamTutar = fkAll.reduce((s,x)=>s+(parseFloat(x.miktar)||0)*(parseFloat(x.netFiyat)||0),0);
      const miktarOk = Math.abs(faturaToplamMiktar-planToplamMiktar)<0.001;
      const tutarOk = Math.abs(faturaToplamTutar-planToplamTutar)<0.01;
      return miktarOk && tutarOk;
    }
    return false;
  }
  const pm=parseFloat(bk.planlananMiktar)||0, pf=parseFloat(bk.planlananBirimFiyat)||0;
  if(pm<=0||pf<=0) return false;
  const fm = fkAll.reduce((s,x)=>s+(parseFloat(x.miktar)||0),0);
  const miktarOk = Math.abs(fm-pm)<0.001;
  const fiyatOk = fkAll.every(x=>Math.abs((parseFloat(x.netFiyat)||0)-pf)<0.001);
  return miktarOk && fiyatOk;
};

// Blok dönüşümleri
const blokToLocal = (b) => ({
  id: b.id,
  projeId: b.proje_id,
  ad: b.ad||"",
  ortakAlanM2: b.ortak_alan_m2!=null?String(b.ortak_alan_m2):"",
  ongorulenM2KdvHaric: b.ongorulen_m2_kdv_haric!=null?String(b.ongorulen_m2_kdv_haric):"",
  ongorulenM2KdvDahil: b.ongorulen_m2_kdv_dahil!=null?String(b.ongorulen_m2_kdv_dahil):""
});
const blokToDb = (b, projeId) => ({
  proje_id: projeId||b.projeId,
  ad: b.ad||"",
  ortak_alan_m2: b.ortakAlanM2!==""&&b.ortakAlanM2!=null?Number(b.ortakAlanM2):null,
  ongorulen_m2_kdv_haric: b.ongorulenM2KdvHaric!==""&&b.ongorulenM2KdvHaric!=null?Number(b.ongorulenM2KdvHaric):null,
  ongorulen_m2_kdv_dahil: b.ongorulenM2KdvDahil!==""&&b.ongorulenM2KdvDahil!=null?Number(b.ongorulenM2KdvDahil):null
});

// Bölüm dönüşümleri
const bolumToLocal = (b) => ({
  id: b.id,
  projeId: b.proje_id,
  tipi: b.tipi||"Daire",
  blok: b.blok||"",
  no: b.no||"",
  kat: b.kat!=null?String(b.kat):"",
  brutM2: b.brut_m2!=null?String(b.brut_m2):"",
  netM2: b.net_m2!=null?String(b.net_m2):"",
  odaSayisi: b.oda_sayisi||"",
  cephe: b.cephe||"",
  durum: b.durum||"musait",
  sahiplik: b.sahiplik||"",
  satisFiyati: b.satis_fiyati!=null?String(b.satis_fiyati):"",
  paraBirimi: b.para_birimi||"TL",
  sozlesmeTarihi: b.sozlesme_tarihi||"",
  aliciFirmaId: b.alici_firma_id||"",
  aliciFirmaAd: b.alici_firma_ad||"",
  notlar: b.notlar||"",
  gorseller: b.gorseller||[],
  kdvOrani: b.kdv_orani||"",
  katSerefiyesiTl: b.kat_serefiyesi_tl!=null?String(b.kat_serefiyesi_tl):"",
  cepheSerefiyesiTl: b.cephe_serefiyesi_tl!=null?String(b.cephe_serefiyesi_tl):"",
  listeFiyatiKdvHaric: b.liste_fiyati_kdv_haric!=null?String(b.liste_fiyati_kdv_haric):"",
  listeFiyatiKdvDahil: b.liste_fiyati_kdv_dahil!=null?String(b.liste_fiyati_kdv_dahil):""
});
const bolumToDb = (b, projeId) => ({
  proje_id: projeId||b.projeId,
  tipi: b.tipi||"Daire",
  blok: b.blok||"",
  no: b.no||"",
  kat: b.kat!==""&&b.kat!=null?parseInt(b.kat):null,
  brut_m2: b.brutM2!==""&&b.brutM2!=null?Number(b.brutM2):null,
  net_m2: b.netM2!==""&&b.netM2!=null?Number(b.netM2):null,
  oda_sayisi: b.odaSayisi||"",
  cephe: b.cephe||"",
  durum: b.durum||"musait",
  sahiplik: b.sahiplik||"",
  satis_fiyati: b.satisFiyati!==""&&b.satisFiyati!=null?Number(b.satisFiyati):null,
  para_birimi: b.paraBirimi||"TL",
  sozlesme_tarihi: b.sozlesmeTarihi||null,
  alici_firma_id: b.aliciFirmaId||null,
  alici_firma_ad: b.aliciFirmaAd||"",
  notlar: b.notlar||"",
  gorseller: b.gorseller||[],
  kdv_orani: b.kdvOrani||null,
  kat_serefiyesi_tl: b.katSerefiyesiTl!==""&&b.katSerefiyesiTl!=null?Number(b.katSerefiyesiTl):0,
  cephe_serefiyesi_tl: b.cepheSerefiyesiTl!==""&&b.cepheSerefiyesiTl!=null?Number(b.cepheSerefiyesiTl):0,
  liste_fiyati_kdv_haric: b.listeFiyatiKdvHaric!==""&&b.listeFiyatiKdvHaric!=null?Number(b.listeFiyatiKdvHaric):null,
  liste_fiyati_kdv_dahil: b.listeFiyatiKdvDahil!==""&&b.listeFiyatiKdvDahil!=null?Number(b.listeFiyatiKdvDahil):null
});

const teklifToLocal = (t, kalemler=[]) => ({
  id: t.id, teklifNo: t.teklif_no||"", firmaId: t.firma_id, firmaAd: t.firma_ad||"",
  teklifTarihi: t.teklif_tarihi||"", gecerlilikTarihi: t.gecerlilik_tarihi||"",
  paraBirimi: t.para_birimi||"TL", aciklama: t.aciklama||"", durum: t.durum||"aktif",
  kalemler: kalemler
});
const kalemToLocal = (k) => ({
  id: k.id, teklifId: k.teklif_id, malzemeId: k.malzeme_id, malzemeAd: k.malzeme_ad||"",
  malzemeKodu: k.malzeme_kodu||"", birim: k.birim||"", miktar: parseFloat(k.miktar)||1,
  fiyatTipi: k.fiyat_tipi||"net", listeFiyati: parseFloat(k.liste_fiyati)||0,
  iskonto1: parseFloat(k.iskonto1)||0, iskonto2: parseFloat(k.iskonto2)||0,
  netFiyat: parseFloat(k.net_fiyat)||0, kdvOrani: k.kdv_orani||"20",
  maliyetEsas: k.maliyet_esas||"net", not: k.kalem_notu||""
});

// Sipariş dönüşüm fonksiyonları
const siparisToLocal = (s, kalemler=[]) => ({
  id:s.id, spNo:s.sp_no||"", teklifId:s.teklif_id, teklifNo:s.teklif_no||"",
  firmaId:s.firma_id, firmaAd:s.firma_ad||"", projeId:s.proje_id, projeAd:s.proje_ad||"",
  siparisTarihi:s.siparis_tarihi||"", terminTarihi:s.termin_tarihi||"",
  teslimatAdresi:s.teslimat_adresi||"", teslimKosulu:s.teslim_kosulu||"Şantiye Teslim",
  odemeSekli:s.odeme_sekli||s.odeme_vadesi||"", vadeGun:s.vade_gun!==null&&s.vade_gun!==undefined?String(s.vade_gun):"", vadeTarihi:s.vade_tarihi||"", paraBirimi:s.para_birimi||"TL",
  aciklama:s.aciklama||"", durum:s.durum||"taslak", kalemler
});
const siparisKalemToLocal = (k) => ({
  id:k.id, siparisId:k.siparis_id, malzemeId:k.malzeme_id, malzemeAd:k.malzeme_ad||"",
  malzemeKodu:k.malzeme_kodu||"", birim:k.birim||"", miktar:parseFloat(k.miktar)||0,
  netFiyat:parseFloat(k.net_fiyat)||0, kdvOrani:k.kdv_orani||"20",
  teslimMiktar:parseFloat(k.teslim_miktar)||0, aciklama:k.aciklama||"",
  butceKalemiId:k.butce_kalemi_id||null, butceKalemiSatirId:k.butce_kalemi_satir_id||null
});
const siparisToDb = (s) => ({
  sp_no:s.spNo||"", teklif_id:s.teklifId||null, teklif_no:s.teklifNo||"",
  firma_id:s.firmaId||null, firma_ad:s.firmaAd||"", proje_id:s.projeId||null, proje_ad:s.projeAd||"",
  siparis_tarihi:s.siparisTarihi||null, termin_tarihi:s.terminTarihi||null,
  teslimat_adresi:s.teslimatAdresi||"", teslim_kosulu:s.teslimKosulu||"",
  odeme_sekli:s.odemeSekli||"", vade_gun:s.vadeGun!==""&&s.vadeGun!==null&&s.vadeGun!==undefined?parseInt(s.vadeGun):null, vade_tarihi:s.vadeTarihi||null, para_birimi:s.paraBirimi||"TL",
  aciklama:s.aciklama||"", durum:s.durum||"taslak"
});
const siparisKalemToDb = (k, siparisId) => ({
  siparis_id:siparisId, malzeme_id:k.malzemeId||null, malzeme_ad:k.malzemeAd||"",
  malzeme_kodu:k.malzemeKodu||"", birim:k.birim||"", miktar:k.miktar||0,
  net_fiyat:k.netFiyat||0, kdv_orani:k.kdvOrani||"20", teslim_miktar:k.teslimMiktar||0,
  aciklama:k.aciklama||"", butce_kalemi_id:k.butceKalemiId||null,
  butce_kalemi_satir_id:k.butceKalemiSatirId||null
});

// Fatura dönüşüm fonksiyonları
const faturaToLocal = (f, kalemler=[]) => ({
  id:f.id, afNo:f.af_no||"", spId:f.siparis_id, spNo:f.sp_no||"",
  teklifId:f.teklif_id, teklifNo:f.teklif_no||"",
  firmaId:f.firma_id, firmaAd:f.firma_ad||"", projeId:f.proje_id, projeAd:f.proje_ad||"",
  faturaNo:f.fatura_no||"", faturaTarihi:f.fatura_tarihi||"", odemeSekli:f.odeme_sekli||"", vadeGun:f.vade_gun!==null&&f.vade_gun!==undefined?String(f.vade_gun):"", vadeTarihi:f.vade_tarihi||"",
  paraBirimi:f.para_birimi||"TL", aciklama:f.aciklama||"", durum:f.durum||"beklemede", kalemler
});
const faturaKalemToLocal = (k) => ({
  id:k.id, faturaId:k.fatura_id, malzemeId:k.malzeme_id, malzemeAd:k.malzeme_ad||"",
  malzemeKodu:k.malzeme_kodu||"", birim:k.birim||"", miktar:parseFloat(k.miktar)||0,
  netFiyat:parseFloat(k.net_fiyat)||0, kdvOrani:k.kdv_orani||"20",
  aciklama:k.aciklama||"", butceKalemiId:k.butce_kalemi_id||null,
  butceKalemiSatirId:k.butce_kalemi_satir_id||null
});
const faturaToDb = (f) => ({
  af_no:f.afNo||"", siparis_id:f.spId||null, sp_no:f.spNo||"",
  teklif_id:f.teklifId||null, teklif_no:f.teklifNo||"",
  firma_id:f.firmaId||null, firma_ad:f.firmaAd||"", proje_id:f.projeId||null, proje_ad:f.projeAd||"",
  fatura_no:f.faturaNo||"", fatura_tarihi:f.faturaTarihi||null, odeme_sekli:f.odemeSekli||"", vade_gun:f.vadeGun!==""&&f.vadeGun!==null&&f.vadeGun!==undefined?parseInt(f.vadeGun):null, vade_tarihi:f.vadeTarihi||null,
  para_birimi:f.paraBirimi||"TL", aciklama:f.aciklama||"", durum:f.durum||"beklemede"
});
const faturaKalemToDb = (k, faturaId) => ({
  fatura_id:faturaId, malzeme_id:k.malzemeId||null, malzeme_ad:k.malzemeAd||"",
  malzeme_kodu:k.malzemeKodu||"", birim:k.birim||"", miktar:k.miktar||0,
  net_fiyat:k.netFiyat||0, kdv_orani:k.kdvOrani||"20",
  aciklama:k.aciklama||"", butce_kalemi_id:k.butceKalemiId||null,
  butce_kalemi_satir_id:k.butceKalemiSatirId||null
});

/* ========== PROJELER MODÜLÜ ========== */
const PROJE_TURLERI=[{id:"konut",label:"Konut",icon:"🏘️",color:"#1677ff",bg:"#e6f4ff"},{id:"ticari",label:"Ticari",icon:"🏢",color:"#fa8c16",bg:"#fff7e6"},{id:"karma",label:"Karma",icon:"🏙️",color:"#722ed1",bg:"#f9f0ff"},{id:"altyapi",label:"Altyapı",icon:"🏗️",color:"#52c41a",bg:"#f6ffed"}];
const PROJE_DURUMLARI=[{id:"planlama",label:"Planlama",color:"#fa8c16",bg:"#fff7e6",icon:"📐"},{id:"basladi",label:"Başladı",color:"#1677ff",bg:"#e6f4ff",icon:"⚙️"},{id:"tamamlandi",label:"Tamamlandı",color:"#52c41a",bg:"#f6ffed",icon:"✅"},{id:"iptal",label:"İptal",color:"#ff4d4f",bg:"#fff1f0",icon:"❌"}];
const BOLUM_TURLERI=["Daire","Dükkan","Ofis","Depo","Villa","Arsa"];
const BOLUM_DURUMLARI=[{id:"musait",label:"Müsait",color:"#52c41a",bg:"#f6ffed"},{id:"opsiyonlu",label:"Opsiyonlu",color:"#fa8c16",bg:"#fff7e6"},{id:"satildi",label:"Satıldı",color:"#1677ff",bg:"#e6f4ff"},{id:"kiralik",label:"Kiralık",color:"#722ed1",bg:"#f9f0ff"}];
const DOSYA_TURLERI=["Mimari Proje","Statik Proje","Elektrik Projesi","Mekanik Proje","Zemin Etüdü","İmar Planı","Ruhsat","Sözleşme","Diğer"];

const DOSYA_KATEGORILERI=[
  {id:"proje-gorselleri",ad:"Proje Görselleri",icon:"📷",altKategoriler:["Genel Görseller","Şantiye Fotoğrafları","Render / 3D","Drone Çekimleri"]},
  {id:"resmi-evraklar",ad:"Resmi Evraklar",icon:"📋",altKategoriler:["Yapı Denetim","Ruhsat & İzinler","İskan","Tapu","Vergi"]},
  {id:"teknik-projeler",ad:"Teknik Projeler",icon:"📐",altKategoriler:["Mimari Proje","Statik Proje","Elektrik Projesi","Mekanik Proje","Peyzaj Projesi","Zemin Etüdü"]},
  {id:"sozlesmeler",ad:"Sözleşmeler",icon:"📝",altKategoriler:["Müteahhit Sözleşmesi","Taşeron Sözleşmesi","Satış Sözleşmesi","Kiralama Sözleşmesi"]},
  {id:"yapi-denetim",ad:"Yapı Denetim Seviyeleri",icon:"🏗️",altKategoriler:[]},
  {id:"bagimsiz-bolumler",ad:"Bağımsız Bölümler",icon:"🏠",altKategoriler:[]},
  {id:"diger",ad:"Diğer",icon:"📎",altKategoriler:["Genel"]},
];

/* ========== YAPI DENETİM SEVİYELERİ (4708 Sayılı Kanun / Madde 27) ========== */
const YAPI_DENETIM_SEVIYELERI=[
  {id:1,label:"Proje İnceleme",oran:10,aciklama:"Yapı ruhsatı aşaması, proje inceleme bedeli",icon:"📐",color:"#722ed1",bg:"#f9f0ff"},
  {id:2,label:"Subasman Seviyesi",oran:10,aciklama:"Kazı ve temel üst kotu (subasman) tamamlandı",icon:"🏗️",color:"#fa8c16",bg:"#fff7e6"},
  {id:3,label:"Taşıyıcı Sistem (Kaba İnşaat)",oran:40,aciklama:"Betonarme karkas, kolon, kiriş, döşeme tamamlandı",icon:"🏛️",color:"#1677ff",bg:"#e6f4ff"},
  {id:4,label:"Çatı ve Duvar",oran:20,aciklama:"Çatı örtüsü, dolgu duvarları, doğrama kasaları, tesisat altyapısı — sıvaya hazır seviye",icon:"🧱",color:"#13c2c2",bg:"#e6fffb"},
  {id:5,label:"Mekanik ve Elektrik Tesisat",oran:15,aciklama:"Mekanik/elektrik tesisat ve kalan yapı bölümleri tamamlandı",icon:"⚡",color:"#52c41a",bg:"#f6ffed"},
  {id:6,label:"İş Bitirme",oran:5,aciklama:"Yapı kullanma izin belgesi, iş bitirme onayı",icon:"✅",color:"#389e0d",bg:"#f6ffed"},
];

const newProjeId=()=>"PRJ-"+new Date().getFullYear()+"-"+String(Date.now()).slice(-4);

/* --- Görsel Portal --- */
const GorselPortal=({gorseller,setGorseller,readonly})=>{
  const[light,setLight]=useState(null);
  const ekle=async(e)=>{
    const files=Array.from(e.target.files);
    for(const f of files){
      const dosyaId=Date.now()+Math.floor(Math.random()*1000);
      const path=`gorseller/${dosyaId}_${safeName(f.name)}`;
      try{
        await sbUpload(path,f);
        setGorseller(prev=>[...prev,{id:dosyaId,ad:f.name,aciklama:"",storagePath:path,data:"",tarih:new Date().toISOString().split("T")[0]}]);
      }catch(err){console.error("Görsel yükleme hatası:",err);alert(`${f.name} yüklenemedi`);}
    }
    e.target.value="";
  };
  const sil=(id)=>{if(!confirm("Görseli silmek istiyor musunuz?"))return;const g=gorseller.find(x=>x.id===id);if(g?.storagePath)sbStorageDel(g.storagePath).catch(()=>{});setGorseller(prev=>prev.filter(g=>g.id!==id));};
  const upAciklama=(id,v)=>setGorseller(prev=>prev.map(g=>g.id===id?{...g,aciklama:v}:g));
  return <div>
    {!readonly&&<label style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:T.r,border:`2px dashed ${T.primary}`,color:T.primary,fontSize:"13px",fontWeight:500,cursor:"pointer",marginBottom:"16px",background:T.pBg}}>
      📷 Görsel Ekle <input type="file" accept="image/*" multiple style={{display:"none"}} onChange={ekle}/>
    </label>}
    {gorseller.length===0&&<div style={{padding:"40px",textAlign:"center",color:T.t3,fontSize:"13px",border:`1px dashed ${T.border}`,borderRadius:T.r}}>Henüz görsel eklenmemiş</div>}
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"14px"}}>
      {gorseller.map(g=><div key={g.id} style={{position:"relative",borderRadius:T.r,border:`1px solid ${T.border}`,background:"#fafafa",overflow:"hidden"}}>
        <img src={dosyaUrl(g)} alt={g.ad} onClick={()=>setLight(g)} style={{width:"100%",height:"130px",objectFit:"cover",cursor:"pointer",display:"block"}}/>
        {!readonly&&<button onClick={()=>sil(g.id)} style={{position:"absolute",top:"6px",right:"6px",background:"rgba(0,0,0,0.6)",border:"none",color:"#fff",borderRadius:"50%",width:"24px",height:"24px",cursor:"pointer",fontSize:"13px",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1}}>×</button>}
        <div style={{padding:"8px"}}>
          {!readonly
            ?<input
                value={g.aciklama||""}
                onChange={e=>upAciklama(g.id,e.target.value)}
                placeholder="Açıklama... (örn: Mutfak görseli)"
                style={{...iS,fontSize:"12px",padding:"5px 8px"}}
                onFocus={foc} onBlur={blr}
              />
            :<div style={{fontSize:"12px",color:T.t2,fontStyle:g.aciklama?"normal":"italic"}}>{g.aciklama||g.ad}</div>
          }
        </div>
      </div>)}
    </div>
    {light&&<div onClick={()=>setLight(null)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.88)",zIndex:9999,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px"}}>
      <img src={dosyaUrl(light)} alt={light.ad} style={{maxWidth:"90vw",maxHeight:"82vh",objectFit:"contain",borderRadius:"8px"}}/>
      {light.aciklama&&<div style={{color:"#fff",fontSize:"14px",opacity:0.85,background:"rgba(0,0,0,0.4)",padding:"6px 16px",borderRadius:"20px"}}>{light.aciklama}</div>}
      <button onClick={()=>setLight(null)} style={{position:"fixed",top:"20px",right:"24px",background:"rgba(255,255,255,0.15)",border:"none",color:"#fff",fontSize:"24px",cursor:"pointer",borderRadius:"50%",width:"40px",height:"40px"}}>×</button>
    </div>}
  </div>;
};

/* --- Arama Destekli Dropdown (iller gibi) --- */
const SearchSel=({value,options,onChange,placeholder,width})=>{
  const[open,setOpen]=useState(false);
  const[s,setS]=useState("");
  const[hi,setHi]=useState(-1);
  const listRef=React.useRef(null);
  const fil=options.filter(o=>nTR(o).includes(nTR(s)));
  const onKey=(e)=>{
    if(e.key==="ArrowDown"){e.preventDefault();setHi(p=>p<fil.length-1?p+1:0);}
    else if(e.key==="ArrowUp"){e.preventDefault();setHi(p=>p>0?p-1:fil.length-1);}
    else if(e.key==="Enter"&&hi>=0&&hi<fil.length){e.preventDefault();onChange(fil[hi]);setOpen(false);setS("");setHi(-1);}
    else if(e.key==="Escape"){setOpen(false);setS("");setHi(-1);}
  };
  React.useEffect(()=>{if(hi>=0&&listRef.current){const el=listRef.current.children[hi];if(el)el.scrollIntoView({block:"nearest"});}},[hi]);
  React.useEffect(()=>{setHi(-1);},[s]);
  return <div style={{position:"relative",width:width||"100%"}}>
    <button type="button" onClick={()=>{setOpen(!open);setS("");setHi(-1);}} style={{width:"100%",height:"36px",padding:"0 8px",borderRadius:T.r,border:`1px solid ${open?T.primary:T.bDark}`,background:"#fff",color:value?T.text:T.t3,fontSize:"16px",textAlign:"left",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:open?`0 0 0 2px ${T.primary}1a`:"none",boxSizing:"border-box"}}>
      <span style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{value||placeholder||"Seçiniz..."}</span>
      <span style={{color:T.t3,fontSize:"10px",flexShrink:0}}>{open?"▲":"▼"}</span>
    </button>
    {open&&<><div style={{position:"absolute",top:"100%",left:0,right:0,zIndex:200,background:"#fff",border:`1px solid ${T.border}`,borderRadius:T.r,marginTop:"2px",maxHeight:"220px",overflow:"hidden",boxShadow:T.shM,display:"flex",flexDirection:"column"}}>
      <div style={{padding:"6px"}}><input autoFocus style={{...iS,padding:"0 8px",fontSize:"16px"}} value={s} onChange={e=>setS(e.target.value)} onKeyDown={onKey} placeholder="Ara..." onFocus={foc} onBlur={blr}/></div>
      <div ref={listRef} style={{overflow:"auto",flex:1}}>
        {fil.length===0?<div style={{padding:"10px",color:T.t3,fontSize:"16px",textAlign:"center"}}>Sonuç yok</div>
        :fil.map((o,idx)=><button key={o} onClick={()=>{onChange(o);setOpen(false);setS("");setHi(-1);}} style={{width:"100%",padding:"6px 10px",border:"none",background:hi===idx?T.pBg:value===o?T.pBg:"#fff",color:hi===idx?T.primary:value===o?T.primary:T.text,fontSize:"16px",cursor:"pointer",textAlign:"left",fontWeight:(hi===idx||value===o)?500:400}} onMouseEnter={()=>setHi(idx)} onMouseLeave={()=>{}}>{o}</button>)}
      </div>
    </div><div style={{position:"fixed",inset:0,zIndex:199}} onClick={()=>{setOpen(false);setS("");setHi(-1);}}/></>}
  </div>;
};

/* --- Dosya Portalı --- */
const DosyaPortal=({dosyalar,setDosyalar,readonly,dosyaTurleri,setDosyaTurleri})=>{
  const tumTurler=dosyaTurleri&&dosyaTurleri.length>0?dosyaTurleri:DOSYA_TURLERI;
  const[yeniTur,setYeniTur]=useState("");
  const ekle=async(e)=>{
    const files=Array.from(e.target.files);
    for(const f of files){
      const dosyaId=Date.now()+Math.floor(Math.random()*1000);
      const path=`dosyalar/${dosyaId}_${safeName(f.name)}`;
      try{
        await sbUpload(path,f);
        setDosyalar(prev=>[...prev,{id:dosyaId,ad:f.name,tur:"Diğer",boyut:Math.round(f.size/1024),storagePath:path,data:"",tarih:new Date().toISOString().split("T")[0]}]);
      }catch(err){console.error("Dosya yükleme hatası:",err);alert(`${f.name} yüklenemedi`);}
    }
    e.target.value="";
  };
  const sil=(id)=>{if(!confirm("Dosyayı silmek istiyor musunuz?"))return;const d=dosyalar.find(x=>x.id===id);if(d?.storagePath)sbStorageDel(d.storagePath).catch(()=>{});setDosyalar(prev=>prev.filter(d=>d.id!==id));};
  const indir=(d)=>{const url=dosyaUrl(d);const a=document.createElement("a");a.href=url;a.download=d.ad;a.target="_blank";a.click();};
  const dosyaIkon=(ad)=>{const ext=(ad||"").split(".").pop().toLowerCase();if(["pdf"].includes(ext))return"📄";if(["doc","docx"].includes(ext))return"📝";if(["xls","xlsx"].includes(ext))return"📊";if(["dwg","dxf"].includes(ext))return"📐";if(["jpg","jpeg","png","gif"].includes(ext))return"🖼️";return"📎";};
  const turEkle=()=>{const t=yeniTur.trim();if(!t||tumTurler.includes(t))return;if(setDosyaTurleri)setDosyaTurleri(prev=>[...prev,t]);setYeniTur("");};
  const turSil=(t)=>{if(!setDosyaTurleri)return;if(!confirm(`"${t}" türünü silmek istiyor musunuz?`))return;setDosyaTurleri(prev=>prev.filter(x=>x!==t));};
  return <div>
    {/* TÜR YÖNETİMİ */}
    {!readonly&&setDosyaTurleri&&<div style={{marginBottom:"16px",padding:"12px",borderRadius:T.r,border:`1px solid ${T.border}`,background:"#fafafa"}}>
      <div style={{fontSize:"12px",fontWeight:600,color:T.t2,marginBottom:"8px"}}>📂 Dosya Türlerini Düzenle</div>
      <div style={{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"8px"}}>
        {tumTurler.map(t=><span key={t} style={{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 10px",borderRadius:"12px",background:T.pBg,color:T.primary,fontSize:"12px",border:`1px solid ${T.primary}33`}}>
          {t}{!DOSYA_TURLERI.includes(t)&&<button onClick={()=>turSil(t)} style={{background:"none",border:"none",color:T.err,cursor:"pointer",fontSize:"13px",lineHeight:1,padding:0}}>×</button>}
        </span>)}
      </div>
      <div style={{display:"flex",gap:"8px"}}>
        <input style={{...iS,flex:1,fontSize:"12px",padding:"5px 8px"}} value={yeniTur} onChange={e=>setYeniTur(e.target.value)} onKeyDown={e=>e.key==="Enter"&&turEkle()} placeholder="Yeni tür ekle..." onFocus={foc} onBlur={blr}/>
        <button onClick={turEkle} style={{padding:"5px 14px",borderRadius:T.r,border:"none",background:T.primary,color:"#fff",fontSize:"12px",cursor:"pointer",whiteSpace:"nowrap"}}>+ Ekle</button>
      </div>
    </div>}
    {!readonly&&<label style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:T.r,border:`2px dashed ${T.primary}`,color:T.primary,fontSize:"13px",fontWeight:500,cursor:"pointer",marginBottom:"16px",background:T.pBg}}>
      📎 Dosya Ekle <input type="file" multiple style={{display:"none"}} onChange={ekle}/>
    </label>}
    {dosyalar.length===0&&<div style={{padding:"40px",textAlign:"center",color:T.t3,fontSize:"13px",border:`1px dashed ${T.border}`,borderRadius:T.r}}>Henüz dosya eklenmemiş</div>}
    <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
      {dosyalar.map(d=><div key={d.id} style={{display:"flex",alignItems:"center",gap:"12px",padding:"10px 14px",borderRadius:T.r,border:`1px solid ${T.border}`,background:"#fff"}}>
        <span style={{fontSize:"22px"}}>{dosyaIkon(d.ad)}</span>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:"13px",fontWeight:500,color:T.text,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{d.ad}</div>
          <div style={{fontSize:"11px",color:T.t3}}>{d.tur} · {d.boyut} KB · {fmtDate(d.tarih)}</div>
        </div>
        {!readonly&&<SearchSel value={d.tur} options={tumTurler} onChange={v=>setDosyalar(prev=>prev.map(x=>x.id===d.id?{...x,tur:v}:x))} placeholder="Tür..." width="150px"/>}
        <button onClick={()=>indir(d)} style={{padding:"4px 10px",borderRadius:"4px",border:`1px solid ${T.bDark}`,background:"#fff",color:T.t2,fontSize:"12px",cursor:"pointer",whiteSpace:"nowrap"}}>⬇ İndir</button>
        {!readonly&&<button onClick={()=>sil(d.id)} style={{padding:"4px 10px",borderRadius:"4px",border:`1px solid #ffa39e`,background:"#fff2f0",color:T.err,fontSize:"12px",cursor:"pointer"}}>Sil</button>}
      </div>)}
    </div>
  </div>;
};

/* --- Dosya Detay Modal --- */
const DosyaModal=({dosya,onSave,onClose,onDel,kategoriler,getAltKatlar})=>{
  const[form,setForm]=useState({...dosya});
  const u=(f,v)=>setForm(p=>({...p,[f]:v}));
  const dosyaIkon=(ad)=>{const ext=(ad||"").split(".").pop().toLowerCase();if(["pdf"].includes(ext))return"📄";if(["doc","docx"].includes(ext))return"📝";if(["xls","xlsx"].includes(ext))return"📊";if(["dwg","dxf"].includes(ext))return"📐";if(["jpg","jpeg","png","gif","webp"].includes(ext))return"🖼️";return"📎";};
  const fmtBoyut=(kb)=>{if(!kb)return"—";if(kb<1024)return kb+" KB";return(kb/1024).toFixed(1)+" MB";};
  const secDosya=()=>{
    const input=document.createElement("input");
    input.type="file";
    input.onchange=async(e)=>{
      const file=e.target.files[0];if(!file)return;
      const dosyaId=Date.now()+Math.floor(Math.random()*1000);
      const path=`projeler/${dosyaId}_${safeName(file.name)}`;
      try{
        await sbUpload(path,file);
        u("ad",file.name);u("boyut",Math.round(file.size/1024));u("tip",file.type);u("storagePath",path);u("data","");u("resim",file.type.startsWith("image/"));
        const ext=(file.name||"").split(".").pop().toLowerCase();
        const turMap={"pdf":"PDF","doc":"Word","docx":"Word","xls":"Excel","xlsx":"Excel","csv":"Excel","dwg":"AutoCAD","dxf":"AutoCAD","jpg":"Görsel","jpeg":"Görsel","png":"Görsel","gif":"Görsel","webp":"Görsel","tif":"Taranmış Belge","tiff":"Taranmış Belge","bmp":"Görsel"};
        u("dosyaTuru",turMap[ext]||"Diğer");
        if(!form.tarih)u("tarih",new Date().toISOString().split("T")[0]);
      }catch(err){console.error("Dosya yükleme hatası:",err);alert("Dosya yüklenemedi: "+err.message);}
    };
    input.click();
  };
  const altKatlar=(()=>{const kat=kategoriler.find(k=>k.ad===form.anaKategori);return kat?getAltKatlar(kat.id):[];})();

  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}}>
    <div style={{background:"#fff",borderRadius:T.rl,width:"100%",maxWidth:"640px",maxHeight:"90vh",display:"flex",flexDirection:"column",overflow:"hidden"}}>
      {/* HEADER */}
      <div style={{padding:"12px 20px",background:"#384248",display:"flex",alignItems:"center",gap:"16px",borderRadius:`${T.rl} ${T.rl} 0 0`}}>
        <button onClick={onClose} title="Kapat" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><MoveLeft size={28}/></button>
        <div style={{flex:1,textAlign:"center"}}>
          <span style={{fontSize:"18px",fontWeight:600,color:"#8799a3",textTransform:"uppercase"}}>{form.ad?(form.aciklama||form.ad):"YENİ DOSYA"}</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
          <button onClick={()=>onSave(form)} title="Kaydet" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><Save size={30}/></button>
          {onDel&&<button onClick={()=>{if(!confirm("Bu dosyayı silmek istiyor musunuz?"))return;onDel(form.id);onClose();}} title="Sil" style={{padding:"0",border:"none",background:"transparent",color:"#ff6b6b",cursor:"pointer",display:"flex",alignItems:"center"}}><Trash2 size={30}/></button>}
        </div>
      </div>
      {/* İÇERİK */}
      <div style={{flex:1,overflow:"auto",padding:"20px",display:"flex",flexDirection:"column",gap:"14px"}}>
        {/* DOSYA SEÇ */}
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Dosya</label>
          <div style={{display:"flex",alignItems:"center",gap:"8px",height:"36px"}}>
            {(form.storagePath||form.data)
              ?<div style={{display:"flex",alignItems:"center",gap:"8px",flex:1,height:"36px"}}>
                {form.resim&&<img src={dosyaUrl(form)} alt="" style={{width:"32px",height:"32px",objectFit:"cover",borderRadius:"4px"}}/>}
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:"14px",color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",lineHeight:"18px"}}>{form.ad}</div>
                  <div style={{fontSize:"12px",color:T.t3,lineHeight:"16px"}}>{fmtBoyut(form.boyut)} · {form.tarih}</div>
                </div>
                <button onClick={secDosya} title="Dosya Değiştir" style={{padding:"0",border:"none",background:"transparent",color:"#384248",cursor:"pointer",display:"flex",alignItems:"center"}}><ArrowDownFromLine size={23}/></button>
              </div>
              :<button onClick={secDosya} style={{...iS,cursor:"pointer",color:T.t3,display:"flex",alignItems:"center",gap:"8px",height:"36px",lineHeight:"36px"}}><FolderPlus size={20}/> Dosya Seçiniz...</button>
            }
          </div>
        </div>
        {/* ANA KATEGORİ */}
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Ana Kategori</label>
          <select style={iS} value={form.anaKategori||""} onChange={e=>{u("anaKategori",e.target.value);u("altKategori","");}}>
            <option value="">— Seçiniz —</option>
            {kategoriler.map(k=><option key={k.id} value={k.ad}>{k.ad}</option>)}
          </select>
        </div>
        {/* ALT KATEGORİ */}
        {altKatlar.length>0&&<div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Alt Kategori</label>
          <select style={iS} value={form.altKategori||""} onChange={e=>u("altKategori",e.target.value)}>
            <option value="">— Seçiniz —</option>
            {altKatlar.map(a=><option key={a} value={a}>{a}</option>)}
          </select>
        </div>}
        {/* AÇIKLAMA */}
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Açıklama</label>
          <input style={iS} value={form.aciklama||""} onChange={e=>u("aciklama",e.target.value)} placeholder="Dosya açıklaması..." onFocus={foc} onBlur={blr}/>
        </div>
        {/* DOSYA TÜRÜ */}
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Dosya Türü</label>
          <select style={iS} value={form.dosyaTuru||""} onChange={e=>u("dosyaTuru",e.target.value)}>
            <option value="">— Seçiniz —</option>
            {["PDF","Word","Excel","AutoCAD","Görsel","Taranmış Belge","Diğer"].map(t=><option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        {/* TARİH */}
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Tarih</label>
          <input style={{...iS,maxWidth:"220px"}} type="date" value={form.tarih||""} onChange={e=>u("tarih",e.target.value)} onFocus={foc} onBlur={blr}/>
        </div>
        {/* BÜYÜK GÖRSEL ÖNİZLEME */}
        {form.resim&&form.data&&<div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px"}}>
          <div></div>
          <img src={dosyaUrl(form)} alt={form.ad} style={{maxWidth:"100%",maxHeight:"300px",objectFit:"contain",borderRadius:T.r,border:`1px solid ${T.border}`}}/>
        </div>}
      </div>
    </div>
  </div>;
};

/* --- Merkezi Dosya Yönetim Portalı --- */
const MerkeziDosyaPortal=({tumDosyalar,setTumDosyalar,dosyaKategorileri,bloklar=[],bolumler=[],blokSeviyeler=[]})=>{
  const kategoriler=dosyaKategorileri&&dosyaKategorileri.length>0?dosyaKategorileri:DOSYA_KATEGORILERI;
  const[filAnaKat,setFilAnaKat]=useState("hepsi");
  const[filAltKat,setFilAltKat]=useState("hepsi");
  const[light,setLight]=useState(null);
  const[dosyaModal,setDosyaModal]=useState(null);

  // Dinamik alt kategoriler üret
  const dinamikAltKatlar=useMemo(()=>{
    const ydAltlar=[];
    (blokSeviyeler||[]).forEach(bs=>{
      (bs.seviyeler||[]).forEach(s=>{
        const def=YAPI_DENETIM_SEVIYELERI.find(d=>d.id===s.seviyeId);
        if(def) ydAltlar.push(`${bs.blokAd} Blok - ${def.label}`);
      });
    });
    const bbAltlar=[];
    (bolumler||[]).forEach(b=>{
      bbAltlar.push(`${b.blok||"?"} Blok - ${b.tipi} ${b.no}`);
    });
    return{"yapi-denetim":ydAltlar,"bagimsiz-bolumler":bbAltlar};
  },[blokSeviyeler,bolumler]);

  const getAltKatlar=(anaKatId)=>{
    const kat=kategoriler.find(k=>k.id===anaKatId);
    if(!kat)return[];
    return[...(kat.altKategoriler||[]),...(dinamikAltKatlar[anaKatId]||[])];
  };

  const filtrelenmis=useMemo(()=>{
    return(tumDosyalar||[]).filter(d=>{
      if(filAnaKat!=="hepsi"&&d.anaKategori!==filAnaKat)return false;
      if(filAltKat!=="hepsi"&&d.altKategori!==filAltKat)return false;
      return true;
    });
  },[tumDosyalar,filAnaKat,filAltKat]);

  const dosyaIkon=(ad)=>{const ext=(ad||"").split(".").pop().toLowerCase();if(["pdf"].includes(ext))return"📄";if(["doc","docx"].includes(ext))return"📝";if(["xls","xlsx"].includes(ext))return"📊";if(["dwg","dxf"].includes(ext))return"📐";if(["jpg","jpeg","png","gif","webp"].includes(ext))return"🖼️";return"📎";};
  const fmtBoyut=(kb)=>{if(!kb)return"—";if(kb<1024)return kb+" KB";return(kb/1024).toFixed(1)+" MB";};

  const yeniDosya=()=>{
    const varsayilanAna=filAnaKat!=="hepsi"?filAnaKat:"";
    const varsayilanAlt=filAltKat!=="hepsi"?filAltKat:"";
    setDosyaModal({id:Date.now()+Math.random(),ad:"",aciklama:"",anaKategori:varsayilanAna,altKategori:varsayilanAlt,boyut:0,tip:"",data:"",tarih:new Date().toISOString().split("T")[0],resim:false,_isNew:true});
  };

  const saveDosya=(d)=>{
    // Mevcut dosyalar Supabase Storage'dan gelir (storagePath),
    // yeni yüklenenler base64 (data) içinde tutulur.
    const hasSource=d.data||d.storagePath;
    if(!hasSource){alert("Lütfen bir dosya seçiniz.");return;}
    setTumDosyalar(prev=>{
      const exists=prev.find(x=>x.id===d.id);
      if(exists)return prev.map(x=>x.id===d.id?d:x);
      return[...prev,d];
    });
    setDosyaModal(null);
  };

  const delDosya=(id)=>{const d=(tumDosyalar||[]).find(x=>x.id===id);if(d?.storagePath)sbStorageDel(d.storagePath).catch(()=>{});setTumDosyalar(prev=>prev.filter(d=>d.id!==id));};
  const indir=(d)=>{const url=dosyaUrl(d);const a=document.createElement("a");a.href=url;a.download=d.ad;a.target="_blank";a.click();};

  return <div>
    {dosyaModal&&<DosyaModal dosya={dosyaModal} onSave={saveDosya} onDel={delDosya} onClose={()=>setDosyaModal(null)} kategoriler={kategoriler} getAltKatlar={getAltKatlar}/>}

    {/* FİLTRE BAR */}
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px",flexWrap:"wrap",gap:"10px"}}>
      <div style={{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"}}>
        <select style={{...iS,width:"auto",minWidth:"180px"}} value={filAnaKat} onChange={e=>{setFilAnaKat(e.target.value);setFilAltKat("hepsi");}}>
          <option value="hepsi">Tüm Kategoriler</option>
          {kategoriler.map(k=><option key={k.id} value={k.ad}>{k.ad}</option>)}
        </select>
        {filAnaKat!=="hepsi"&&(()=>{
          const kat=kategoriler.find(k=>k.ad===filAnaKat);
          const altlar=kat?getAltKatlar(kat.id):[];
          return altlar.length>0?<select style={{...iS,width:"auto",minWidth:"200px"}} value={filAltKat} onChange={e=>setFilAltKat(e.target.value)}>
            <option value="hepsi">Tüm Alt Kategoriler</option>
            {altlar.map(a=><option key={a} value={a}>{a}</option>)}
          </select>:null;
        })()}
      </div>
    </div>

    {/* DOSYA PORTAL */}
    <div style={{border:`1px solid ${T.border}`,borderRadius:"8px",overflow:"hidden"}}>
      {/* PORTAL HEADER - Blok portalı gibi */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",background:"#384248",flexWrap:"wrap",gap:"8px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <span style={{fontSize:"18px",fontWeight:700,color:"#fff"}}>Dosyalar</span>
          <span style={{fontSize:"13px",color:"#8799a3"}}>{filtrelenmis.length} dosya</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
          <button onClick={yeniDosya} title="Dosya Ekle" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><FolderPlus size={30}/></button>
          <button onClick={()=>{
            const rows=[["Dosya Adı","Açıklama","Ana Kategori","Alt Kategori","Türü","Boyut (KB)","Tarih"]];
            filtrelenmis.forEach(d=>rows.push([d.ad||"",d.aciklama||"",d.anaKategori||"",d.altKategori||"",d.dosyaTuru||"",d.boyut||"",d.tarih||""]));
            const csv=rows.map(r=>r.map(c=>`"${c}"`).join(";")).join("\n");
            const blob=new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8;"});
            const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="dosyalar.csv";a.click();
          }} title="Excel'e Aktar" style={{padding:"0",border:"none",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center"}}><img src={excelIcon} alt="Excel" style={{width:"35px",height:"35px"}}/></button>
        </div>
      </div>

      {/* TABLO */}
      {filtrelenmis.length===0
        ?<div style={{padding:"30px",textAlign:"center",color:T.t3,fontSize:"14px",background:"#fff"}}>
          {(tumDosyalar||[]).length===0?"Henüz dosya eklenmemiş.":"Bu kategoride dosya bulunamadı."}
        </div>
        :<>
          {/* TABLO BAŞLIK */}
          <div style={{display:"grid",gridTemplateColumns:"64px 160px 160px 90px 80px 80px 1fr",background:"#fafafa",borderBottom:`1px solid ${T.border}`,padding:"8px 12px",gap:"8px"}}>
            {["","Ana Kategori","Alt Kategori","Türü","Boyut","Tarih","Dosya Adı"].map((h,i)=><div key={i} style={{fontSize:"12px",fontWeight:600,color:T.t2,textTransform:"uppercase",letterSpacing:"0.3px"}}>{h}</div>)}
          </div>
          {/* SATIRLAR */}
          {filtrelenmis.map((d,idx)=>
            <div key={d.id} onClick={()=>setDosyaModal(d)} style={{display:"grid",gridTemplateColumns:"64px 160px 160px 90px 80px 80px 1fr",padding:"6px 12px",gap:"8px",alignItems:"center",borderBottom:idx<filtrelenmis.length-1?`1px solid ${T.border}`:"none",background:idx%2===0?"#fff":"#fafafa",cursor:"pointer",height:"80px"}}
              onMouseEnter={e=>e.currentTarget.style.background=T.pBg}
              onMouseLeave={e=>e.currentTarget.style.background=idx%2===0?"#fff":"#fafafa"}>
              {d.resim?<img src={dosyaUrl(d)} alt="" style={{width:"68px",height:"68px",objectFit:"cover",borderRadius:"4px"}}/>:<span style={{fontSize:"28px",textAlign:"center",display:"block"}}>{dosyaIkon(d.ad)}</span>}
              <div style={{fontSize:"14px",color:T.t2}}>{d.anaKategori||"—"}</div>
              <div style={{fontSize:"14px",color:T.t2}}>{d.altKategori||"—"}</div>
              <div style={{fontSize:"14px",color:T.t2}}>{d.dosyaTuru||"—"}</div>
              <div style={{fontSize:"13px",color:T.t3}}>{fmtBoyut(d.boyut)}</div>
              <div style={{fontSize:"13px",color:T.t3}}>{d.tarih||"—"}</div>
              <div style={{minWidth:0}}>
                <div style={{fontSize:"14px",fontWeight:500,color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{d.aciklama||d.ad}</div>
                {d.aciklama&&<div style={{fontSize:"12px",color:T.t3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{d.ad}</div>}
              </div>
            </div>
          )}
        </>
      }
    </div>

    {/* LIGHTBOX */}
    {light&&<div onClick={()=>setLight(null)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.88)",zIndex:9999,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px"}}>
      <img src={dosyaUrl(light)} alt={light.ad} style={{maxWidth:"90vw",maxHeight:"82vh",objectFit:"contain",borderRadius:"8px"}}/>
      <button onClick={()=>setLight(null)} style={{position:"fixed",top:"20px",right:"24px",background:"rgba(255,255,255,0.15)",border:"none",color:"#fff",fontSize:"24px",cursor:"pointer",borderRadius:"50%",width:"40px",height:"40px"}}>×</button>
    </div>}
  </div>;
};

/* --- Bağımsız Bölüm Detay Modal --- */
/* --- Firma Bağlantı Detay Modal --- */
const FirmaBaglantiModal=({baglanti,onSave,onClose,onDel,firmalar,onGoFirma})=>{
  const[form,setForm]=useState({...baglanti});
  const u=(f,v)=>setForm(p=>({...p,[f]:v}));
  const seciliFirma=firmalar.find(f=>f.id===parseInt(form.firmaId))||null;
  const kisiler=seciliFirma?.kisiler||[];

  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}}>
    <div style={{background:"#fff",borderRadius:T.rl,width:"100%",maxWidth:"640px",maxHeight:"90vh",display:"flex",flexDirection:"column",overflow:"hidden"}}>
      {/* HEADER */}
      <div style={{padding:"12px 20px",background:"#384248",display:"flex",alignItems:"center",gap:"16px",borderRadius:`${T.rl} ${T.rl} 0 0`}}>
        <button onClick={onClose} title="Kapat" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><MoveLeft size={28}/></button>
        <div style={{flex:1,textAlign:"center"}}>
          <span style={{fontSize:"16px",fontWeight:600,color:"#8799a3",textTransform:"uppercase"}}>{seciliFirma?seciliFirma.ad:"Firma Bağlantısı"}</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
          <button onClick={()=>onSave(form)} title="Kaydet" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><Save size={30}/></button>
          {onDel&&<button onClick={()=>{if(!confirm("Bu firma bağlantısını silmek istiyor musunuz?"))return;onDel(form.id);onClose();}} title="Sil" style={{padding:"0",border:"none",background:"transparent",color:"#ff6b6b",cursor:"pointer",display:"flex",alignItems:"center"}}><Trash2 size={30}/></button>}
        </div>
      </div>
      {/* İÇERİK */}
      <div style={{flex:1,overflow:"auto",padding:"20px",display:"flex",flexDirection:"column",gap:"14px"}}>
        {/* FİRMA SEÇİMİ */}
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Firma</label>
          <select style={iS} value={form.firmaId||""} onChange={e=>{const f=firmalar.find(x=>x.id===parseInt(e.target.value));u("firmaId",f?f.id:"");u("firmaAd",f?f.ad:"");u("kisiId","");u("kisiAd","");}}>
            <option value="">— Firma Seçiniz —</option>
            {firmalar.map(f=><option key={f.id} value={f.id}>{f.ad}</option>)}
          </select>
        </div>
        {/* ROL */}
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Rol</label>
          <select style={iS} value={form.rol||""} onChange={e=>u("rol",e.target.value)}>
            <option value="">— Seçiniz —</option>
            {["Müteahhit","Arsa Sahibi","Yatırımcı","Danışman","Mimar","Mühendis","Taşeron","Tedarikçi","Alıcı","Kiracı","Yapı Denetim","Diğer"].map(r=><option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        {/* FİRMA İLETİŞİM BİLGİLERİ - Firma seçilince otomatik gelir */}
        {seciliFirma&&<div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"flex-start"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Firma İletişim</label>
          <div style={{border:`1px solid ${T.border}`,borderRadius:T.r,padding:"12px",background:"#fafafa",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}}>
            {seciliFirma.telefon&&<div style={{fontSize:"14px",color:T.text}}>Tel: {seciliFirma.telefon}</div>}
            {seciliFirma.sabitTelefon&&<div style={{fontSize:"14px",color:T.text}}>Sabit: {seciliFirma.sabitTelefon}</div>}
            {seciliFirma.telefon2&&<div style={{fontSize:"14px",color:T.text}}>Tel 2: {seciliFirma.telefon2}</div>}
            {seciliFirma.eposta&&<div style={{fontSize:"14px",color:T.text}}>E-posta: {seciliFirma.eposta}</div>}
            {seciliFirma.webAdresi&&<div style={{fontSize:"14px",color:T.text}}>Web: {seciliFirma.webAdresi}</div>}
            {(seciliFirma.il||seciliFirma.adres)&&<div style={{fontSize:"13px",color:T.t3,gridColumn:"1/3"}}>{seciliFirma.mahalle?seciliFirma.mahalle+", ":""}{seciliFirma.adres||""}{seciliFirma.ilce?", "+seciliFirma.ilce:""}{seciliFirma.il?" / "+seciliFirma.il:""}</div>}
            <div style={{gridColumn:"1/3"}}>
              <button onClick={()=>{onSave(form);if(onGoFirma)onGoFirma(seciliFirma.id);}} style={{padding:"0",border:"none",background:"transparent",color:T.primary,cursor:"pointer",fontSize:"13px",display:"flex",alignItems:"center",gap:"6px"}}><ExternalLink size={16}/> Firma Kartına Git</button>
            </div>
          </div>
        </div>}
        {/* YETKİLİ KİŞİ SEÇİMİ */}
        {seciliFirma&&<div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Yetkili Kişi</label>
          {kisiler.length>0
            ?<select style={iS} value={form.kisiId||""} onChange={e=>{const k=kisiler.find(x=>x.id===parseInt(e.target.value));u("kisiId",k?k.id:"");u("kisiAd",k?`${k.ad} ${k.soyad}`:"");}}>
              <option value="">— Kişi Seçiniz —</option>
              {kisiler.map(k=><option key={k.id} value={k.id}>{k.ad} {k.soyad}{k.unvan?` (${k.unvan})`:""}</option>)}
            </select>
            :<div style={{...iS,background:"#fafafa",color:T.t3,cursor:"default"}}>Bu firmada kayıtlı kişi yok</div>
          }
        </div>}
        {/* SEÇİLİ KİŞİ İLETİŞİM BİLGİLERİ */}
        {form.kisiId&&(()=>{
          const kisi=kisiler.find(k=>k.id===parseInt(form.kisiId));
          if(!kisi)return null;
          return <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"flex-start"}}>
            <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Kişi İletişim</label>
            <div style={{border:`1px solid ${T.border}`,borderRadius:T.r,padding:"12px",background:"#fafafa",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}}>
              <div style={{fontSize:"14px",fontWeight:600,color:T.text,gridColumn:"1/3"}}>{kisi.ad} {kisi.soyad}{kisi.unvan?` — ${kisi.unvan}`:""}</div>
              {kisi.telefon&&<div style={{fontSize:"14px",color:T.text}}>Tel: {kisi.telefon}</div>}
              {kisi.cep&&<div style={{fontSize:"14px",color:T.text}}>Cep: {kisi.cep}</div>}
              {(kisi.isTel)&&<div style={{fontSize:"14px",color:T.text}}>İş Tel: {kisi.isTel}{kisi.isTelDahili?` (Dahili: ${kisi.isTelDahili})`:""}</div>}
              {kisi.eposta&&<div style={{fontSize:"14px",color:T.text}}>E-posta: {kisi.eposta}</div>}
              {kisi.departman&&<div style={{fontSize:"13px",color:T.t3}}>Departman: {kisi.departman}</div>}
            </div>
          </div>;
        })()}
        {/* NOTLAR */}
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Notlar</label>
          <textarea style={{...iS,height:"72px",resize:"vertical",lineHeight:"1.4",padding:"8px 11px"}} value={form.notlar||""} onChange={e=>u("notlar",e.target.value)} placeholder="Açıklama ve notlar..." onFocus={foc} onBlur={blr}/>
        </div>
      </div>
    </div>
  </div>;
};

/* --- Seviye Detay Modal --- */
const SeviyeModal=({blokAd,sev,onSave,onClose,onDosyaEkle,ilgiliDosyalar=[]})=>{
  const def=YAPI_DENETIM_SEVIYELERI.find(d=>d.id===sev.seviyeId);
  const[fm,setFm]=useState({...sev});
  const uf=(f,v)=>setFm(p=>({...p,[f]:v}));
  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}}>
    <div style={{background:"#fff",borderRadius:T.rl,width:"100%",maxWidth:"540px",maxHeight:"90vh",display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{padding:"12px 20px",background:"#384248",display:"flex",alignItems:"center",gap:"16px",borderRadius:`${T.rl} ${T.rl} 0 0`}}>
        <button onClick={onClose} title="Kapat" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><MoveLeft size={28}/></button>
        <div style={{flex:1,textAlign:"center"}}>
          <span style={{fontSize:"16px",fontWeight:600,color:"#8799a3",textTransform:"uppercase"}}>{blokAd} - {def?.label||""}</span>
        </div>
        <button onClick={()=>onSave(blokAd,fm)} title="Kaydet" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><Save size={30}/></button>
      </div>
      <div style={{flex:1,overflow:"auto",padding:"20px",display:"flex",flexDirection:"column",gap:"14px"}}>
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Seviye</label>
          <div style={{...iS,background:"#fff",fontWeight:600,cursor:"default"}}>{def?.id}. {def?.label} (%{def?.oran})</div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Durum</label>
          <select style={iS} value={fm.tamamlandi?"tamamlandi":"beklemede"} onChange={e=>{const v=e.target.value==="tamamlandi";uf("tamamlandi",v);if(v&&!fm.tarih)uf("tarih",new Date().toISOString().split("T")[0]);}}>
            <option value="beklemede">Beklemede</option>
            <option value="tamamlandi">Tamamlandı</option>
          </select>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Tarih</label>
          <input style={{...iS,maxWidth:"220px"}} type="date" value={fm.tarih||""} onChange={e=>uf("tarih",e.target.value)} onFocus={foc} onBlur={blr}/>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Açıklama</label>
          <input style={iS} value={fm.aciklama||""} onChange={e=>uf("aciklama",e.target.value)} placeholder="Seviye ile ilgili notlar..." onFocus={foc} onBlur={blr}/>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"flex-start"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Dosyalar</label>
          <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
            <button onClick={()=>{if(onDosyaEkle)onDosyaEkle(blokAd,sev.seviyeId);}} style={{...iS,cursor:"pointer",color:T.primary,display:"flex",alignItems:"center",gap:"8px",background:"#fff"}}><FolderPlus size={18}/> Dosya Ekle</button>
            {ilgiliDosyalar.length>0&&<div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
              {ilgiliDosyalar.map(d=><div key={d.id} style={{display:"flex",alignItems:"center",gap:"8px",padding:"4px 8px",borderRadius:"4px",background:"#fafafa",border:`1px solid ${T.border}`,fontSize:"13px",color:T.text}}>
                {d.resim?<img src={dosyaUrl(d)} alt="" style={{width:"24px",height:"24px",objectFit:"cover",borderRadius:"3px"}}/>:<span style={{fontSize:"16px"}}>{(()=>{const ext=(d.ad||"").split(".").pop().toLowerCase();if(["pdf"].includes(ext))return"📄";if(["doc","docx"].includes(ext))return"📝";if(["xls","xlsx"].includes(ext))return"📊";return"📎";})()}</span>}
                <span style={{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{d.aciklama||d.ad}</span>
                <span style={{fontSize:"11px",color:T.t3}}>{d.tarih}</span>
              </div>)}
            </div>}
          </div>
        </div>
      </div>
    </div>
  </div>;
};

/* --- Bağımsız Bölüm Detay Modal --- */
const BolumModal=({bolum,onSave,onClose,onDel,firmalar,bloklar=[],anlasmaYontemi=""})=>{
  const[form,setForm]=useState({...bolum});
  const u=(f,v)=>setForm(p=>({...p,[f]:v}));
  const[tab,setTab]=useState("bilgi");
  const[saved,setSaved]=useState(false);
  const save=()=>{onSave(form);setSaved(true);setTimeout(()=>setSaved(false),2000);};
  const tabs=[{id:"bilgi",label:"Bilgiler",icon:"📋"},{id:"dosyalar",label:"Dosyalar",icon:"📂"}];
  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}}>
    <div style={{background:"#fff",borderRadius:T.rl,width:"100%",maxWidth:"640px",maxHeight:"90vh",display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{padding:"12px 20px",background:"#384248",display:"flex",alignItems:"center",gap:"16px",borderRadius:`${T.rl} ${T.rl} 0 0`}}>
        <button onClick={onClose} title="Kapat" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><MoveLeft size={28}/></button>
        <div style={{flex:1,textAlign:"center"}}>
          <span style={{fontSize:"18px",fontWeight:600,color:"#8799a3"}}>{form.blok?`${form.blok} · `:""}Kat {form.kat||"?"} · {form.tipi}: {form.no||"?"}</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
          <button onClick={save} title={saved?"Kaydedildi":"Kaydet"} style={{padding:"0",border:"none",background:"transparent",color:saved?"#52c41a":"#8799a3",cursor:"pointer",display:"flex",alignItems:"center",transition:"color .3s"}}><Save size={30}/></button>
          {onDel&&<button onClick={()=>{if(!confirm("Bu bölümü silmek istiyor musunuz?"))return;onDel(form.id);onClose();}} title="Sil" style={{padding:"0",border:"none",background:"transparent",color:"#ff6b6b",cursor:"pointer",display:"flex",alignItems:"center"}}><Trash2 size={30}/></button>}
        </div>
      </div>
      <div style={{display:"flex",gap:"4px",padding:"12px 20px 0",borderBottom:`1px solid ${T.border}`}}>
        {tabs.map(t=><button key={t.id} onClick={()=>setTab(t.id)} style={{padding:"6px 14px",borderRadius:"6px 6px 0 0",border:`1px solid ${tab===t.id?T.primary:T.border}`,borderBottom:tab===t.id?"none":"",background:tab===t.id?"#fff":T.bg,color:tab===t.id?T.primary:T.t2,fontWeight:tab===t.id?600:400,fontSize:"13px",cursor:"pointer",marginBottom:"-1px"}}>{t.icon} {t.label}</button>)}
      </div>
      <div style={{flex:1,overflow:"auto",padding:"20px"}}>
        {tab==="bilgi"&&<div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px"}}>
            <div><label style={lS}>Tip</label><select style={iS} value={form.tipi||""} onChange={e=>u("tipi",e.target.value)}>{BOLUM_TURLERI.map(t=><option key={t}>{t}</option>)}</select></div>
            <div><label style={lS}>Blok</label>{bloklar.length>0
              ?<select style={iS} value={form.blok||""} onChange={e=>u("blok",e.target.value)}>
                <option value="">— Blok seçiniz —</option>
                {bloklar.map(b=><option key={b.id} value={b.ad}>{b.ad}</option>)}
              </select>
              :<input style={iS} value={form.blok||""} onChange={e=>u("blok",toTitleCase(e.target.value))} placeholder="A, B, C..." onFocus={foc} onBlur={blr}/>
            }</div>
            <div><label style={lS}>No</label><input style={iS} value={form.no||""} onChange={e=>u("no",e.target.value)} placeholder="1, 2A..." onFocus={foc} onBlur={blr}/></div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px"}}>
            <div><label style={lS}>Kat</label><input style={iS} type="number" value={form.kat||""} onChange={e=>u("kat",e.target.value)} placeholder="1" onFocus={foc} onBlur={blr}/></div>
            <div><label style={lS}>Brüt m²</label><input style={iS} type="number" value={form.brutM2||""} onChange={e=>u("brutM2",e.target.value)} placeholder="0" onFocus={foc} onBlur={blr}/></div>
            <div><label style={lS}>Net m²</label><input style={iS} type="number" value={form.netM2||""} onChange={e=>u("netM2",e.target.value)} placeholder="0" onFocus={foc} onBlur={blr}/></div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
            <div><label style={lS}>Oda Sayısı</label><select style={iS} value={form.odaSayisi||""} onChange={e=>u("odaSayisi",e.target.value)}><option value="">—</option>{["1+0","1+1","2+1","3+1","4+1","4+2","5+1","5+2","Stüdyo","Dubleks"].map(o=><option key={o}>{o}</option>)}</select></div>
            <div><label style={lS}>Cephe</label><select style={iS} value={form.cephe||""} onChange={e=>u("cephe",e.target.value)}><option value="">—</option>{["Kuzey","Güney","Doğu","Batı","Kuzey-Doğu","Kuzey-Batı","Güney-Doğu","Güney-Batı"].map(o=><option key={o}>{o}</option>)}</select></div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
            <div><label style={lS}>Durum</label><select style={iS} value={form.durum||"musait"} onChange={e=>u("durum",e.target.value)}>{BOLUM_DURUMLARI.map(d=><option key={d.id} value={d.id}>{d.label}</option>)}</select></div>
            <div><label style={lS}>Para Birimi</label><select style={iS} value={form.paraBirimi||"TL"} onChange={e=>u("paraBirimi",e.target.value)}>{PARA_BIRIMLERI.map(p=><option key={p.id} value={p.id}>{p.id}</option>)}</select></div>
          </div>
          {/* SAHİPLİK - anlaşma yöntemi varsa göster */}
          {anlasmaYontemi&&<div>
            <label style={lS}>Sahiplik</label>
            <div style={{display:"flex",gap:"16px",padding:"8px 0"}}>
              {["Arsa Sahibi","Müteahhit"].map(opt=><label key={opt} style={{display:"flex",alignItems:"center",gap:"6px",cursor:"pointer",fontSize:"14px",color:T.text}}>
                <input type="radio" name="sahiplik" checked={form.sahiplik===opt} onChange={()=>u("sahiplik",opt)} style={{accentColor:opt==="Arsa Sahibi"?"#d4880f":"#1677ff",width:"16px",height:"16px",cursor:"pointer"}}/>
                <span style={{fontWeight:form.sahiplik===opt?600:400,color:form.sahiplik===opt?(opt==="Arsa Sahibi"?"#d4880f":"#1677ff"):T.text}}>{opt}</span>
              </label>)}
            </div>
          </div>}
          <div><label style={lS}>Satış Fiyatı</label><input style={iS} value={form.satisFiyati?Number(form.satisFiyati).toLocaleString("tr-TR"):""} onChange={e=>{const v=e.target.value.replace(/\./g,"").replace(/[^0-9]/g,"");u("satisFiyati",v);}} placeholder="0" onFocus={foc} onBlur={blr}/></div>
          {/* SÖZLEŞMELER MODÜLÜNDEN GELECEK */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
            <div>
              <label style={lS}>Alıcı</label>
              <div style={{...iS,background:"#f5f5f5",color:T.t3,cursor:"not-allowed",display:"flex",alignItems:"center",gap:"8px",userSelect:"none"}}>
                <span style={{fontSize:"13px"}}>🔗</span>
                <span style={{fontSize:"12px",fontStyle:"italic"}}>{form.aliciFirmaAd||"Sözleşmeler modülünden gelecek"}</span>
              </div>
              <div style={{fontSize:"11px",color:T.t3,marginTop:"4px"}}>ℹ️ Sözleşmeler modülü ile ilişkilendirilecek</div>
            </div>
            <div>
              <label style={lS}>Sözleşme Tarihi</label>
              <div style={{...iS,background:"#f5f5f5",color:T.t3,cursor:"not-allowed",display:"flex",alignItems:"center",gap:"8px",userSelect:"none"}}>
                <span style={{fontSize:"13px"}}>🔗</span>
                <span style={{fontSize:"12px",fontStyle:"italic"}}>{form.sozlesmeTarihi?fmtDate(form.sozlesmeTarihi):"Sözleşmeler modülünden gelecek"}</span>
              </div>
              <div style={{fontSize:"11px",color:T.t3,marginTop:"4px"}}>ℹ️ Sözleşmeler modülü ile ilişkilendirilecek</div>
            </div>
          </div>
          <div><label style={lS}>Notlar</label><textarea style={{...iS,height:"72px",resize:"vertical"}} value={form.notlar||""} onChange={e=>u("notlar",e.target.value)} onFocus={foc} onBlur={blr}/></div>
        </div>}
        {tab==="dosyalar"&&<div style={{padding:"20px",textAlign:"center",color:T.t3}}>
          <div style={{fontSize:"32px",marginBottom:"8px"}}>📂</div>
          <div style={{fontSize:"13px",marginBottom:"12px"}}>Bu bölümün dosyaları merkezi dosya yönetiminden yönetilir.</div>
          <div style={{fontSize:"12px",color:T.t2}}>Dosya yüklemek için projenin <strong>"Dosya Yönetimi"</strong> sekmesine gidin ve <strong>"Bağımsız Bölümler › {form.blok||"?"} Blok - {form.tipi} {form.no}"</strong> alt kategorisini seçin.</div>
        </div>}
      </div>
    </div>
  </div>;
};

/* --- Proje Kartı (Form + Sekmeler) --- */
const ProjeKarti=({proje,isNew,onSave,onDel,onBack,firmalar,setPage:setMainPage,goToFirma})=>{
  const emptyProje={
    id:null,projeKodu:"",ad:"",kisaAd:"",tur:"",durum:"",aktif:true,
    il:"",ilce:"",mahalle:"",adres:"",ada:"",parsel:"",
    baslangicTarihi:"",tahminiTeslim:"",fiiliTeslim:"",
    toplamM2:"",katSayisi:"",toplamBolum:"",
    arsaM2:"",emsal:"",toplamEmsal:"",
    anlasmaYontemi:"",arsaSahibiPay:"",muteahhitPay:"",
    aciklama:"",
    firmaBaglantilari:[],
    bloklar:[],
    bolumler:[],
    gorseller:[],
    dosyalar:[],
    tumDosyalar:[],
    dosyaKategorileri:DOSYA_KATEGORILERI.map(k=>({...k,altKategoriler:[...k.altKategoriler]})),
    projeNotlari:[],
    durumTarihce:[],
    blokSeviyeler:[],
    dosyaTurleri:[...DOSYA_TURLERI],
    projeTurleri:[...PROJE_TURLERI.map(t=>t.label)],
    projedurumlari:[...PROJE_DURUMLARI.map(d=>d.label)],
    createdAt:new Date().toISOString().split("T")[0],
    _isNew:true
  };
  const[form,setForm]=useState(()=>proje?{
    dosyaTurleri:[...DOSYA_TURLERI],
    projeTurleri:[...PROJE_TURLERI.map(t=>t.label)],
    projedurumlari:[...PROJE_DURUMLARI.map(d=>d.label)],
    ...proje
  }:{...emptyProje,id:Date.now()});
  const[tab,setTab]=useState("genel");
  const[saved,setSaved]=useState(false);
  const[bolumModal,setBolumModal]=useState(null);
  const[seviyeModal,setSeviyeModal]=useState(null);
  const[firmaBagModal,setFirmaBagModal]=useState(null);
  const[nn,setNn]=useState("");
  // Tür/Durum dropdown edit state
  const[turEditMode,setTurEditMode]=useState(false);
  const[durumEditMode,setDurumEditMode]=useState(false);
  const[yeniTurInput,setYeniTurInput]=useState("");
  const[yeniDurumInput,setYeniDurumInput]=useState("");
  const u=(f,v)=>setForm(p=>({...p,[f]:v}));
  const ilceler=useMemo(()=>ILLER_ILCELER[form.il]||[],[form.il]);

  // Proje türleri (edit edilebilir)
  const projeTurleri=form.projeTurleri&&form.projeTurleri.length>0?form.projeTurleri:PROJE_TURLERI.map(t=>t.label);
  const projedurumlari=form.projedurumlari&&form.projedurumlari.length>0?form.projedurumlari:PROJE_DURUMLARI.map(d=>d.label);
  const addTur=()=>{const t=yeniTurInput.trim();if(!t||projeTurleri.includes(t))return;u("projeTurleri",[...projeTurleri,t]);setYeniTurInput("");};
  const delTur=(t)=>{if(PROJE_TURLERI.map(x=>x.label).includes(t))return;u("projeTurleri",projeTurleri.filter(x=>x!==t));};
  const addDurum=()=>{const d=yeniDurumInput.trim();if(!d||projedurumlari.includes(d))return;u("projedurumlari",[...projedurumlari,d]);setYeniDurumInput("");};
  const delDurum=(d)=>{if(PROJE_DURUMLARI.map(x=>x.label).includes(d))return;u("projedurumlari",projedurumlari.filter(x=>x!==d));};

  // Durum değişikliği tarihçe ile
  const durumDegistir=(yeniDurum)=>{
    const eskiDurum=form.durum;
    if(eskiDurum===yeniDurum)return;
    const kayit={id:Date.now(),eskiDurum:eskiDurum||"(Yok)",yeniDurum,tarih:new Date().toISOString(),kullanici:"Admin"};
    setForm(p=>{const updated={...p,durum:yeniDurum,durumTarihce:[...(p.durumTarihce||[]),kayit]};setTimeout(()=>onSave(updated),0);return updated;});
  };

  const tabs=[
    {id:"genel",label:"Genel",icon:"📋"},
    {id:"bolumler",label:`Bağımsız Bölümler (${form.bolumler.length})`,icon:"🏠"},
    {id:"dosyaYonetimi",label:`Dosya Yönetimi (${(form.tumDosyalar||[]).length})`,icon:"📂"},
    {id:"yapiDenetim",label:`Yapı Denetim (${(form.blokSeviyeler||[]).length})`,icon:"🏗️"},
    {id:"firmalar",label:`Firmalar (${form.firmaBaglantilari.length})`,icon:"🤝"},
    {id:"notlar",label:`Notlar (${form.projeNotlari.length})`,icon:"📝"},
  ];

  const save=()=>{
    if(!form.ad.trim()){alert("Proje adı zorunludur!");return;}
    const toplamEmsal=(parseFloat(form.arsaM2||0)*parseFloat(form.emsal||0));
    onSave({...form,toplamEmsal:toplamEmsal>0?String(toplamEmsal):""});setSaved(true);setTimeout(()=>setSaved(false),2000);
  };

  // Bölüm işlemleri
  const addBolum=()=>{
    const yeni={id:Date.now(),tipi:"Daire",blok:"",no:"",kat:"",brutM2:"",netM2:"",odaSayisi:"",cephe:"",durum:"musait",sahiplik:"",satisFiyati:"",paraBirimi:"TL",sozlesmeTarihi:"",aliciFirmaId:"",aliciFirmaAd:"",notlar:"",gorseller:[]};
    setBolumModal(yeni);
  };
  const saveBolum=(b)=>{
    setForm(p=>{
      const exists=p.bolumler.find(x=>x.id===b.id);
      const updated={...p,bolumler:exists?p.bolumler.map(x=>x.id===b.id?b:x):[...p.bolumler,b]};
      setTimeout(()=>onSave(updated),0);
      return updated;
    });
  };
  const delBolum=(id)=>{if(!confirm("Bölümü silmek istiyor musunuz?"))return;setForm(p=>{const updated={...p,bolumler:p.bolumler.filter(b=>b.id!==id)};setTimeout(()=>onSave(updated),0);return updated;});};

  // Firma bağlantısı
  const addFirmaBaglanti=()=>setForm(p=>{const updated={...p,firmaBaglantilari:[...p.firmaBaglantilari,{id:Date.now(),firmaId:"",firmaAd:"",rol:"",notlar:""}]};setTimeout(()=>onSave(updated),0);return updated;});
  const upFirma=(i,f,v)=>setForm(p=>{const arr=[...p.firmaBaglantilari];arr[i]={...arr[i],[f]:v};const updated={...p,firmaBaglantilari:arr};setTimeout(()=>onSave(updated),0);return updated;});
  const delFirmaBaglanti=(i)=>setForm(p=>{const updated={...p,firmaBaglantilari:p.firmaBaglantilari.filter((_,j)=>j!==i)};setTimeout(()=>onSave(updated),0);return updated;});

  // Not ekle
  const addNot=()=>{if(!nn.trim())return;setForm(p=>{const updated={...p,projeNotlari:[...p.projeNotlari,{id:Date.now(),tarih:new Date().toISOString().split("T")[0],yazar:"Admin",metin:nn}]};setTimeout(()=>onSave(updated),0);return updated;});setNn("");};

  // Bölüm durum özeti
  const durumOzet=useMemo(()=>{
    const o={};BOLUM_DURUMLARI.forEach(d=>{o[d.id]=form.bolumler.filter(b=>b.durum===d.id).length;});return o;
  },[form.bolumler]);

  const turObj=PROJE_TURLERI.find(t=>t.label===form.tur)||null;
  const durumObj=PROJE_DURUMLARI.find(d=>d.label===form.durum)||null;

  return <div>
    {bolumModal&&<BolumModal bolum={bolumModal} onSave={saveBolum} onDel={delBolum} onClose={()=>setBolumModal(null)} firmalar={firmalar} bloklar={form.bloklar||[]} anlasmaYontemi={form.anlasmaYontemi||""}/>}
    {/* HEADER */}
    <div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"0",padding:"12px 20px",background:"#384248",borderRadius:"8px 8px 0 0",paddingBottom:"8px"}}>
      <button onClick={onBack} title="Geri" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><MoveLeft size={32}/></button>
      <div style={{flex:1,textAlign:"center"}}>
        <span style={{fontSize:"20px",fontWeight:600,color:"#8799a3",letterSpacing:"0.3px"}}>{form.projeKodu?`${form.projeKodu} - `:""}{form.ad||"Yeni Proje"}</span>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
        <div style={{marginRight:"20px"}}><AktifPasifToggle aktif={form.aktif!==false} onChange={v=>u("aktif",v)}/></div>
        <button onClick={save} title={saved?"Kaydedildi":"Kaydet"} style={{padding:"0",border:"none",background:"transparent",color:saved?"#52c41a":"#8799a3",cursor:"pointer",display:"flex",alignItems:"center",transition:"color .3s"}}><Save size={32}/></button>
      </div>
    </div>

    {/* SEKMELER */}
    <div style={{display:"flex",gap:"0",marginBottom:"0",background:"#384248",padding:"0 0 0 0"}}>
      {tabs.map(t=><button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,padding:"10px 0",border:`1px solid #8799a3`,borderBottom:"none",borderRadius:"12px 12px 0 0",background:tab===t.id?"#8799a3":"#384248",color:tab===t.id?"#000":"#fff",fontWeight:tab===t.id?600:400,fontSize:"14px",fontFamily:"'Inter',sans-serif",cursor:"pointer",whiteSpace:"nowrap",transition:"all .15s",letterSpacing:"0.2px"}}
        onMouseEnter={e=>{if(tab!==t.id){e.currentTarget.style.background="#8799a3";e.currentTarget.style.color="#000";}}}
        onMouseLeave={e=>{if(tab!==t.id){e.currentTarget.style.background="#384248";e.currentTarget.style.color="#fff";}}}
      >{t.label}</button>)}
    </div>

    <div style={{background:"#fff",borderRadius:"0 0 8px 8px",border:`1px solid ${T.border}`,borderTop:"none",padding:"24px"}}>

      {/* GENEL */}
      {tab==="genel"&&<div style={{display:"flex",flexDirection:"column",gap:"14px",maxWidth:"732px"}}>
        {/* Satır stili: label solda (120px), input sağda - tüm inputlar aynı hizada */}
        {/* KODU + KISA AD */}
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Kodu</label>
          <div style={{display:"grid",gridTemplateColumns:"1fr auto 1fr",gap:"12px",alignItems:"center"}}>
            <input style={iS} value={form.projeKodu||""} onChange={e=>u("projeKodu",e.target.value)} placeholder="017" onFocus={foc} onBlur={blr}/>
            <label style={{fontSize:"13px",fontWeight:600,color:T.text,height:"36px",lineHeight:"36px"}}>Kısa Ad</label>
            <input style={iS} value={form.kisaAd} onChange={e=>u("kisaAd",toUpperCase(e.target.value))} placeholder="Kısa Ad" onFocus={foc} onBlur={blr}/>
          </div>
        </div>
        {/* ADI */}
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Adı</label>
          <input style={iS} value={form.ad} onChange={e=>u("ad",toUpperCase(e.target.value))} placeholder="PROJE ADI" onFocus={foc} onBlur={blr}/>
        </div>
        {/* İL + İLÇE */}
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>İl</label>
          <div style={{display:"grid",gridTemplateColumns:"1fr auto 1fr",gap:"12px",alignItems:"center"}}>
            <Sel value={form.il} options={IL_LISTESI} onChange={v=>{u("il",v);u("ilce","");}} placeholder="İl Seçiniz"/>
            <label style={{fontSize:"13px",fontWeight:600,color:T.text,height:"36px",lineHeight:"36px"}}>İlçe</label>
            <Sel value={form.ilce} options={ilceler} onChange={v=>u("ilce",v)} placeholder="İlçe Seçiniz"/>
          </div>
        </div>
        {/* MAHALLE */}
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Mahalle</label>
          <input style={iS} value={form.mahalle||""} onChange={e=>u("mahalle",toTitleCase(e.target.value))} placeholder="Mahalle" onFocus={foc} onBlur={blr}/>
        </div>
        {/* ADRES + HARİTA */}
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr 35px",gap:"8px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Adres</label>
          <input style={iS} value={form.adres||""} onChange={e=>u("adres",toTitleCase(e.target.value))} placeholder="Adres ve Sokak Bilgileri" onFocus={foc} onBlur={blr}/>
          <button onClick={()=>{
            const parts=[form.adres,form.mahalle,form.ilce,form.il].filter(Boolean).join(", ");
            if(parts)window.open(`https://www.google.com/maps/search/${encodeURIComponent(parts)}`,"_blank");
            else alert("Adres bilgisi giriniz.");
          }} title="Haritada Göster" style={{padding:"0",border:"none",background:"transparent",color:"#384248",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"flex-end"}}><Map size={28}/></button>
        </div>
        {/* PROJE TÜRÜ */}
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr 35px",gap:"8px",alignItems:"start"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Proje Türü</label>
          <div>
            {turEditMode
              ?<div style={{border:`1px solid ${T.border}`,borderRadius:T.r,padding:"10px",background:"#fafafa"}}>
                <div style={{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"8px"}}>
                  {projeTurleri.map(t=><span key={t} style={{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 10px",borderRadius:"12px",background:T.pBg,color:T.primary,fontSize:"12px",border:`1px solid ${T.primary}33`}}>
                    {t}{!PROJE_TURLERI.map(x=>x.label).includes(t)&&<button onClick={()=>delTur(t)} style={{background:"none",border:"none",color:T.err,cursor:"pointer",fontSize:"13px",lineHeight:1,padding:0}}>×</button>}
                  </span>)}
                </div>
                <div style={{display:"flex",gap:"6px"}}>
                  <input style={{...iS,flex:1,fontSize:"12px",padding:"4px 8px"}} value={yeniTurInput} onChange={e=>setYeniTurInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addTur()} placeholder="Yeni tür..." onFocus={foc} onBlur={blr}/>
                  <button onClick={addTur} style={{padding:"4px 12px",borderRadius:T.r,border:"none",background:T.primary,color:"#fff",fontSize:"12px",cursor:"pointer"}}>+ Ekle</button>
                </div>
              </div>
              :<SearchSel value={form.tur} options={projeTurleri} onChange={v=>u("tur",v)} placeholder="Proje Türü Seçiniz"/>
            }
          </div>
          <button onClick={()=>setTurEditMode(!turEditMode)} title={turEditMode?"Tamam":"Düzenle"} style={{padding:"0",border:"none",background:"transparent",color:"#384248",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"flex-end",marginTop:"6px"}}><SquarePen size={23}/></button>
        </div>
        {/* DURUM */}
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr 35px",gap:"8px",alignItems:"start"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Durum</label>
          <div>
            {durumEditMode
              ?<div style={{border:`1px solid ${T.border}`,borderRadius:T.r,padding:"10px",background:"#fafafa"}}>
                <div style={{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"8px"}}>
                  {projedurumlari.map(d=><span key={d} style={{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 10px",borderRadius:"12px",background:"#f6ffed",color:"#52c41a",fontSize:"12px",border:"1px solid #b7eb8f"}}>
                    {d}{!PROJE_DURUMLARI.map(x=>x.label).includes(d)&&<button onClick={()=>delDurum(d)} style={{background:"none",border:"none",color:T.err,cursor:"pointer",fontSize:"13px",lineHeight:1,padding:0}}>×</button>}
                  </span>)}
                </div>
                <div style={{display:"flex",gap:"6px"}}>
                  <input style={{...iS,flex:1,fontSize:"12px",padding:"4px 8px"}} value={yeniDurumInput} onChange={e=>setYeniDurumInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addDurum()} placeholder="Yeni durum..." onFocus={foc} onBlur={blr}/>
                  <button onClick={addDurum} style={{padding:"4px 12px",borderRadius:T.r,border:"none",background:T.primary,color:"#fff",fontSize:"12px",cursor:"pointer"}}>+ Ekle</button>
                </div>
              </div>
              :<SearchSel value={form.durum} options={projedurumlari} onChange={durumDegistir} placeholder="Durum Seçiniz"/>
            }
          </div>
          <button onClick={()=>setDurumEditMode(!durumEditMode)} title={durumEditMode?"Tamam":"Düzenle"} style={{padding:"0",border:"none",background:"transparent",color:"#384248",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"flex-end",marginTop:"6px"}}><SquarePen size={23}/></button>
        </div>
        {/* DURUM TARİHÇESİ */}
        {(form.durumTarihce||[]).length>0&&<div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"start"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Durum Tarihçe</label>
          <div style={{border:`1px solid ${T.border}`,borderRadius:T.r,overflow:"hidden"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",background:"#fafafa",borderBottom:`1px solid ${T.border}`,padding:"8px 12px",gap:"8px"}}>
              {["Tarih","Kullanıcı","Eski Durum","Yeni Durum"].map((h,i)=><div key={i} style={{fontSize:"11px",fontWeight:600,color:T.t2,textTransform:"uppercase",letterSpacing:"0.3px"}}>{h}</div>)}
            </div>
            {[...(form.durumTarihce||[])].reverse().map((dt,idx)=>{
              const eskiObj=PROJE_DURUMLARI.find(d=>d.label===dt.eskiDurum);
              const yeniObj=PROJE_DURUMLARI.find(d=>d.label===dt.yeniDurum);
              return <div key={dt.id} style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",padding:"8px 12px",gap:"8px",borderBottom:idx<(form.durumTarihce||[]).length-1?`1px solid ${T.border}`:"none",background:idx%2===0?"#fff":"#fafafa",alignItems:"center"}}>
                <div style={{fontSize:"12px",color:T.text}}>{new Date(dt.tarih).toLocaleDateString("tr-TR")}</div>
                <div style={{fontSize:"12px",color:T.t2}}>{dt.kullanici}</div>
                <div style={{fontSize:"12px",color:T.t3}}>{dt.eskiDurum}</div>
                <div style={{fontSize:"12px",color:T.text,fontWeight:500}}>{dt.yeniDurum}</div>
              </div>;
            })}
          </div>
        </div>}
        {/* TARİHLER + ÖZET BİLGİLER YAN YANA */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"}}>
          {/* SOL: TARİHLER */}
          <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
            <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
              <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Başlangıç Tarihi</label>
              <input style={iS} type="date" value={form.baslangicTarihi||""} onChange={e=>u("baslangicTarihi",e.target.value)} onFocus={foc} onBlur={blr}/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
              <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Tahmini Teslim</label>
              <input style={iS} type="date" value={form.tahminiTeslim||""} onChange={e=>u("tahminiTeslim",e.target.value)} onFocus={foc} onBlur={blr}/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",alignItems:"center"}}>
              <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Fiili Teslim</label>
              <input style={iS} type="date" value={form.fiiliTeslim||""} onChange={e=>u("fiiliTeslim",e.target.value)} onFocus={foc} onBlur={blr}/>
            </div>
          </div>
          {/* SAĞ: ARSA + ANLAŞMA + ÖZET BİLGİLER */}
          <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
            {/* ADA + PARSEL */}
            <div style={{display:"grid",gridTemplateColumns:"140px 1fr",gap:"12px",alignItems:"center"}}>
              <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Ada</label>
              <div style={{display:"grid",gridTemplateColumns:"1fr auto 1fr",gap:"12px",alignItems:"center"}}>
                <input style={iS} value={form.ada||""} onChange={e=>u("ada",e.target.value)} placeholder="Ada" onFocus={foc} onBlur={blr}/>
                <label style={{fontSize:"13px",fontWeight:600,color:T.text,height:"36px",lineHeight:"36px"}}>Parsel</label>
                <input style={iS} value={form.parsel||""} onChange={e=>u("parsel",e.target.value)} placeholder="Parsel" onFocus={foc} onBlur={blr}/>
              </div>
            </div>
            {/* ARSA M² */}
            <div style={{display:"grid",gridTemplateColumns:"140px 1fr",gap:"12px",alignItems:"center"}}>
              <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Arsa m²</label>
              <input style={{...iS,fontWeight:700}} value={form._arsaEdit?form.arsaM2||"":(form.arsaM2?form.arsaM2+" m²":"")} onChange={e=>{const v=e.target.value.replace(/[^0-9.,]/g,"").replace(",",".");u("arsaM2",v);}} placeholder="0" onFocus={()=>u("_arsaEdit",true)} onBlur={()=>u("_arsaEdit",false)}/>
            </div>
            {/* EMSAL */}
            <div style={{display:"grid",gridTemplateColumns:"140px 1fr",gap:"12px",alignItems:"center"}}>
              <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Emsal</label>
              <input style={iS} type="text" value={form.emsal||""} onChange={e=>{const v=e.target.value.replace(/[^0-9.,]/g,"").replace(",",".");u("emsal",v);}} placeholder="0" onFocus={foc} onBlur={blr}/>
            </div>
            {/* TOPLAM EMSAL (otomatik: arsa m² × emsal) */}
            <div style={{display:"grid",gridTemplateColumns:"140px 1fr",gap:"12px",alignItems:"center"}}>
              <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Toplam Emsal</label>
              <div style={{...iS,background:"#fff",color:T.text,fontWeight:700,cursor:"default",userSelect:"none"}}>{(parseFloat(form.arsaM2||0)*parseFloat(form.emsal||0))>0?(parseFloat(form.arsaM2||0)*parseFloat(form.emsal||0)).toLocaleString("tr-TR")+" m²":"—"}</div>
            </div>
            {/* ANLAŞMA YÖNTEMİ */}
            <div style={{display:"grid",gridTemplateColumns:"140px 1fr",gap:"12px",alignItems:"center"}}>
              <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Anlaşma Yöntemi</label>
              <select style={iS} value={form.anlasmaYontemi||""} onChange={e=>u("anlasmaYontemi",e.target.value)}>
                <option value="">—</option>
                <option value="Kat Karşılığı">Kat Karşılığı</option>
                <option value="Hasılat Paylaşımı">Hasılat Paylaşımı</option>
              </select>
            </div>
            {/* PAY ORANLARI - sadece anlaşma yöntemi seçiliyse */}
            {form.anlasmaYontemi&&<>
              <div style={{display:"grid",gridTemplateColumns:"140px 1fr",gap:"12px",alignItems:"center"}}>
                <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Arsa Sahibi Payı</label>
                <input style={{...iS,fontWeight:700}} value={form._asPayEdit?form.arsaSahibiPay||"":(form.arsaSahibiPay?form.arsaSahibiPay+" %":"")} onChange={e=>{const v=e.target.value.replace(/[^0-9.,]/g,"").replace(",",".");u("arsaSahibiPay",v);}} placeholder="0" onFocus={()=>u("_asPayEdit",true)} onBlur={()=>u("_asPayEdit",false)}/>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"140px 1fr",gap:"12px",alignItems:"center"}}>
                <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Müteahhit Payı</label>
                <input style={{...iS,fontWeight:700}} value={form._mutPayEdit?form.muteahhitPay||"":(form.muteahhitPay?form.muteahhitPay+" %":"")} onChange={e=>{const v=e.target.value.replace(/[^0-9.,]/g,"").replace(",",".");u("muteahhitPay",v);}} placeholder="0" onFocus={()=>u("_mutPayEdit",true)} onBlur={()=>u("_mutPayEdit",false)}/>
              </div>
            </>}
            {/* AYIRICI */}
            <div style={{borderTop:`1px solid ${T.border}`,margin:"4px 0"}}/>
            {/* TOPLAM BAĞ. BÖLÜM */}
            <div style={{display:"grid",gridTemplateColumns:"140px 1fr",gap:"12px",alignItems:"center"}}>
              <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Toplam Bağ. Bölüm</label>
              <div style={{...iS,background:"#fff",color:T.text,fontWeight:700,cursor:"default",userSelect:"none"}}>{(form.bolumler||[]).length||"0"}</div>
            </div>
            {/* BRÜT TOPLAM */}
            <div style={{display:"grid",gridTemplateColumns:"140px 1fr",gap:"12px",alignItems:"center"}}>
              <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Brüt Toplam m²</label>
              <div style={{...iS,background:"#fff",color:T.text,fontWeight:700,cursor:"default",userSelect:"none"}}>{(form.bolumler||[]).length>0?(form.bolumler||[]).reduce((s,b)=>s+parseFloat(b.brutM2||0),0).toLocaleString("tr-TR")+" m²":"—"}</div>
            </div>
            {/* NET TOPLAM */}
            <div style={{display:"grid",gridTemplateColumns:"140px 1fr",gap:"12px",alignItems:"center"}}>
              <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Net Toplam m²</label>
              <div style={{...iS,background:"#fff",color:T.text,fontWeight:700,cursor:"default",userSelect:"none"}}>{(form.bolumler||[]).length>0?(form.bolumler||[]).reduce((s,b)=>s+parseFloat(b.netM2||0),0).toLocaleString("tr-TR")+" m²":"—"}</div>
            </div>
            {/* ORTAK ALAN TOPLAM (blok bazlı) */}
            <div style={{display:"grid",gridTemplateColumns:"140px 1fr",gap:"12px",alignItems:"center"}}>
              <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Ortak Alan m²</label>
              <div style={{...iS,background:"#fff",color:T.text,fontWeight:700,cursor:"default",userSelect:"none"}}>{(()=>{const t=(form.bloklar||[]).reduce((s,b)=>s+parseFloat(b.ortakAlanM2||0),0);return t>0?t.toLocaleString("tr-TR")+" m²":"—";})()}</div>
            </div>
            {/* PROJE TOPLAM ALAN */}
            <div style={{display:"grid",gridTemplateColumns:"140px 1fr",gap:"12px",alignItems:"center"}}>
              <label style={{fontSize:"13px",fontWeight:600,color:T.primary,textAlign:"right",height:"36px",lineHeight:"36px"}}>Proje Toplam Alan</label>
              <div style={{...iS,background:"#e6f4ff",color:T.primary,fontWeight:700,cursor:"default",userSelect:"none",border:"1px solid #1677ff33"}}>{(()=>{const bloklar=form.bloklar||[];const bolumler=form.bolumler||[];const t=bloklar.reduce((s,bl)=>{const blBrut=bolumler.filter(b=>b.blok===bl.ad).reduce((ss,b)=>ss+parseFloat(b.brutM2||0),0);return s+blBrut+parseFloat(bl.ortakAlanM2||0);},0);return t>0?t.toLocaleString("tr-TR")+" m²":"—";})()}</div>
            </div>
            {/* SAHİPLİK ÖZET - anlaşma yöntemi varsa */}
            {form.anlasmaYontemi&&(()=>{
              const bolumler=form.bolumler||[];
              const asBolum=bolumler.filter(b=>b.sahiplik==="Arsa Sahibi");
              const mutBolum=bolumler.filter(b=>b.sahiplik==="Müteahhit");
              const asBrut=asBolum.reduce((s,b)=>s+parseFloat(b.brutM2||0),0);
              const mutBrut=mutBolum.reduce((s,b)=>s+parseFloat(b.brutM2||0),0);
              const asNet=asBolum.reduce((s,b)=>s+parseFloat(b.netM2||0),0);
              const mutNet=mutBolum.reduce((s,b)=>s+parseFloat(b.netM2||0),0);
              const topBolum=bolumler.length;
              const fiiliAs=topBolum>0?((asBolum.length/topBolum)*100).toFixed(1):"0";
              const fiiliMut=topBolum>0?((mutBolum.length/topBolum)*100).toFixed(1):"0";
              return <>
                <div style={{borderTop:`1px solid ${T.border}`,margin:"4px 0"}}/>
                <div style={{fontSize:"12px",fontWeight:700,color:T.t2,textTransform:"uppercase",letterSpacing:"0.5px",textAlign:"right",paddingRight:"12px"}}>Sahiplik Dağılımı</div>
                <div style={{border:`1px solid ${T.border}`,borderRadius:T.r,overflow:"hidden"}}>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",background:"#fafafa",borderBottom:`1px solid ${T.border}`,padding:"6px 12px",gap:"8px"}}>
                    {["","Bölüm","Brüt m²","Net m²"].map((h,i)=><div key={i} style={{fontSize:"11px",fontWeight:600,color:T.t2,textTransform:"uppercase"}}>{h}</div>)}
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",padding:"6px 12px",gap:"8px",borderBottom:`1px solid ${T.border}`}}>
                    <div style={{fontSize:"12px",fontWeight:600,color:"#d4880f"}}>Arsa Sahibi</div>
                    <div style={{fontSize:"12px",fontWeight:700,color:T.text}}>{asBolum.length}</div>
                    <div style={{fontSize:"12px",color:T.text}}>{asBrut.toLocaleString("tr-TR")} m²</div>
                    <div style={{fontSize:"12px",color:T.text}}>{asNet.toLocaleString("tr-TR")} m²</div>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",padding:"6px 12px",gap:"8px"}}>
                    <div style={{fontSize:"12px",fontWeight:600,color:"#1677ff"}}>Müteahhit</div>
                    <div style={{fontSize:"12px",fontWeight:700,color:T.text}}>{mutBolum.length}</div>
                    <div style={{fontSize:"12px",color:T.text}}>{mutBrut.toLocaleString("tr-TR")} m²</div>
                    <div style={{fontSize:"12px",color:T.text}}>{mutNet.toLocaleString("tr-TR")} m²</div>
                  </div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"140px 1fr",gap:"12px",alignItems:"center"}}>
                  <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Fiili Oran</label>
                  <div style={{...iS,background:"#fff",color:T.text,fontWeight:700,cursor:"default",userSelect:"none",fontSize:"13px"}}>
                    <span style={{color:"#d4880f"}}>AS %{fiiliAs}</span> / <span style={{color:"#1677ff"}}>MÜT %{fiiliMut}</span>
                  </div>
                </div>
              </>;
            })()}
          </div>
        </div>
      </div>}

      {/* BAĞIMSIZ BÖLÜMLER */}
      {tab==="bolumler"&&(()=>{
        const bloklar=form.bloklar||[];
        const bolumler=form.bolumler||[];
        const bloksuzBolumler=bolumler.filter(b=>!b.blok||!bloklar.some(bl=>bl.ad===b.blok));

        const addBlok=()=>{
          const ad=prompt("Blok adı giriniz (örn: A, B, C):");
          if(!ad||!ad.trim())return;
          const upper=toTitleCase(ad.trim());
          if(bloklar.some(b=>b.ad===upper)){alert("Bu blok zaten ekli!");return;}
          setForm(p=>{
            const yeniBloklar=[...(p.bloklar||[]),{id:Date.now(),ad:upper,ortakAlanM2:""}];
            const mevcutSeviyeler=p.blokSeviyeler||[];
            const yeniSeviyeler=mevcutSeviyeler.some(bs=>bs.blokAd===upper)?mevcutSeviyeler:[...mevcutSeviyeler,{id:Date.now()+1,blokAd:upper,seviyeler:YAPI_DENETIM_SEVIYELERI.map(s=>({seviyeId:s.id,tamamlandi:false,tarih:"",aciklama:"",dosyalar:[],gorseller:[]}))}];
            const updated={...p,bloklar:yeniBloklar,blokSeviyeler:yeniSeviyeler};
            setTimeout(()=>onSave(updated),0);
            return updated;
          });
        };

        const addBolumToBlok=(blokAd)=>{
          const yeni={id:Date.now(),tipi:"Daire",blok:blokAd,no:"",kat:"",brutM2:"",netM2:"",odaSayisi:"",cephe:"",durum:"musait",sahiplik:"",satisFiyati:"",paraBirimi:"TL",sozlesmeTarihi:"",aliciFirmaId:"",aliciFirmaAd:"",notlar:"",gorseller:[]};
          setBolumModal(yeni);
        };

        const renderBlokTable=(blokAd,blokBolumler)=>{
          const topBrut=blokBolumler.reduce((s,b)=>s+parseFloat(b.brutM2||0),0);
          const topNet=blokBolumler.reduce((s,b)=>s+parseFloat(b.netM2||0),0);
          const blokObj=(form.bloklar||[]).find(b=>b.ad===blokAd);
          const ortakAlan=parseFloat(blokObj?.ortakAlanM2||0);
          const brutToplami=topBrut+ortakAlan;

          return <div key={blokAd} style={{border:`1px solid ${T.border}`,borderRadius:"8px",overflow:"hidden",marginBottom:"16px"}}>
            {/* BLOK HEADER */}
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",background:"#384248",flexWrap:"wrap",gap:"8px"}}>
              <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                <span style={{fontSize:"18px",fontWeight:700,color:"#fff"}}>{blokAd}</span>
                <span style={{fontSize:"13px",color:"#8799a3"}}>{blokBolumler.length} bölüm</span>
                <span style={{fontSize:"14px",color:"#8799a3",borderLeft:"1px solid #8799a355",paddingLeft:"12px"}}>Brüt: {topBrut>0?topBrut.toLocaleString("tr-TR"):"0"} · Net: {topNet>0?topNet.toLocaleString("tr-TR"):"0"} · Ortak: {ortakAlan>0?ortakAlan.toLocaleString("tr-TR"):"0"} · <span style={{color:"#52c41a",fontWeight:600}}>Toplam: {brutToplami>0?brutToplami.toLocaleString("tr-TR"):"0"} m²</span></span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
                <button onClick={()=>addBolumToBlok(blokAd)} title="Bölüm Ekle" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePlus size={30}/></button>
                <button onClick={()=>{
                  const yeniAd=prompt("Blok adını düzenleyin:",blokAd);
                  if(!yeniAd||!yeniAd.trim()||yeniAd.trim()===blokAd)return;
                  const upper=toTitleCase(yeniAd.trim());
                  u("bloklar",(form.bloklar||[]).map(b=>b.ad===blokAd?{...b,ad:upper}:b));
                  u("bolumler",(form.bolumler||[]).map(b=>b.blok===blokAd?{...b,blok:upper}:b));
                  u("blokSeviyeler",(form.blokSeviyeler||[]).map(bs=>bs.blokAd===blokAd?{...bs,blokAd:upper}:bs));
                }} title="Blok Düzenle" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePen size={30}/></button>
                <button onClick={()=>{
                  const rows=[["No","Kat","Tip","Brüt m²","Net m²","Oda","Cephe","Fiyat","Durum"]];
                  blokBolumler.forEach(b=>{const ds=BOLUM_DURUMLARI.find(d=>d.id===b.durum);rows.push([b.no||"",b.kat||"",b.tipi||"",b.brutM2||"",b.netM2||"",b.odaSayisi||"",b.cephe||"",b.satisFiyati||"",ds?ds.label:""]);});
                  rows.push(["","","TOPLAM",topBrut,topNet,"","",blokBolumler.reduce((s,b)=>s+parseFloat(b.satisFiyati||0),0),""]);
                  const csv=rows.map(r=>r.map(c=>`"${c}"`).join(";")).join("\n");
                  const blob=new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8;"});
                  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`${blokAd}_bolumler.csv`;a.click();
                }} title="Excel'e Aktar" style={{padding:"0",border:"none",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center"}}><img src={excelIcon} alt="Excel" style={{width:"35px",height:"35px"}}/></button>
                <button onClick={()=>{
                  if(!confirm(`"${blokAd}" bloğunu ve tüm bölümlerini silmek istiyor musunuz?`))return;
                  setForm(p=>{
                    const updated={...p,bloklar:(p.bloklar||[]).filter(b=>b.ad!==blokAd),bolumler:(p.bolumler||[]).filter(b=>b.blok!==blokAd),blokSeviyeler:(p.blokSeviyeler||[]).filter(bs=>bs.blokAd!==blokAd)};
                    setTimeout(()=>onSave(updated),0);
                    return updated;
                  });
                }} title="Blok Sil" style={{padding:"0",border:"none",background:"transparent",color:"#ff6b6b",cursor:"pointer",display:"flex",alignItems:"center"}}><Trash2 size={30}/></button>
              </div>
            </div>
            {/* TABLO */}
            {(()=>{
              const hasAnlasma=!!(form.anlasmaYontemi);
              const cols=hasAnlasma?"60px 60px 70px 90px 90px 100px 100px 120px 100px 100px":"60px 60px 70px 90px 90px 100px 100px 120px 100px";
              const headers=hasAnlasma?["No","Kat","Tip","Brüt m²","Net m²","Oda","Cephe","Fiyat","Durum","Sahiplik"]:["No","Kat","Tip","Brüt m²","Net m²","Oda","Cephe","Fiyat","Durum"];
              return blokBolumler.length===0
                ?<div style={{padding:"30px",textAlign:"center",color:T.t3,fontSize:"14px",background:"#fff"}}>Bu blokta henüz bölüm yok.</div>
                :<>
                  <div style={{display:"grid",gridTemplateColumns:cols,background:"#fafafa",borderBottom:`1px solid ${T.border}`,padding:"8px 12px",gap:"8px"}}>
                    {headers.map((h,i)=><div key={i} style={{fontSize:"12px",fontWeight:600,color:T.t2,textTransform:"uppercase",letterSpacing:"0.3px"}}>{h}</div>)}
                  </div>
                  {blokBolumler.map((b,idx)=>{
                    const ds=BOLUM_DURUMLARI.find(d=>d.id===b.durum)||BOLUM_DURUMLARI[0];
                    const pb=PARA_BIRIMLERI.find(p=>p.id===b.paraBirimi)||PARA_BIRIMLERI[0];
                    return <div key={b.id} onClick={()=>setBolumModal(b)} style={{display:"grid",gridTemplateColumns:cols,padding:"8px 12px",gap:"8px",alignItems:"center",borderBottom:idx<blokBolumler.length-1?`1px solid ${T.border}`:"none",background:idx%2===0?"#fff":"#fafafa",cursor:"pointer"}}
                      onMouseEnter={e=>e.currentTarget.style.background=T.pBg}
                      onMouseLeave={e=>e.currentTarget.style.background=idx%2===0?"#fff":"#fafafa"}>
                      <div style={{fontSize:"14px",fontWeight:600,color:T.text}}>{b.no||"—"}</div>
                      <div style={{fontSize:"14px",color:T.text}}>{b.kat||"—"}</div>
                      <div style={{fontSize:"14px",color:T.t2}}>{b.tipi}</div>
                      <div style={{fontSize:"14px",color:T.text}}>{b.brutM2||"—"}</div>
                      <div style={{fontSize:"14px",color:T.text}}>{b.netM2||"—"}</div>
                      <div style={{fontSize:"14px",color:T.t2}}>{b.odaSayisi||"—"}</div>
                      <div style={{fontSize:"14px",color:T.t2}}>{b.cephe||"—"}</div>
                      <div style={{fontSize:"13px",fontWeight:600,color:T.text}}>{b.satisFiyati?Number(b.satisFiyati).toLocaleString("tr-TR")+" "+pb.symbol:"—"}</div>
                      <div><span style={{padding:"2px 8px",borderRadius:"4px",fontSize:"12px",color:ds.color,background:ds.bg,border:`1px solid ${ds.color}33`,whiteSpace:"nowrap"}}>{ds.label}</span></div>
                      {hasAnlasma&&<div><span style={{padding:"2px 8px",borderRadius:"4px",fontSize:"12px",fontWeight:600,whiteSpace:"nowrap",color:b.sahiplik==="Arsa Sahibi"?"#d4880f":b.sahiplik==="Müteahhit"?"#1677ff":"#999",background:b.sahiplik==="Arsa Sahibi"?"#fff7e6":b.sahiplik==="Müteahhit"?"#e6f4ff":"#f5f5f5",border:`1px solid ${b.sahiplik==="Arsa Sahibi"?"#d4880f33":b.sahiplik==="Müteahhit"?"#1677ff33":"#ddd"}`}}>{b.sahiplik||"—"}</span></div>}
                    </div>;
                  })}
                  {/* ALT TOPLAM */}
                  <div style={{display:"grid",gridTemplateColumns:cols,padding:"8px 12px",gap:"8px",alignItems:"center",background:"#8799a3",borderTop:`2px solid ${T.border}`}}>
                    <div></div>
                    <div></div>
                    <div style={{fontSize:"16px",fontWeight:700,color:"#fff",textAlign:"right"}}>Toplam</div>
                    <div style={{fontSize:"16px",fontWeight:700,color:"#fff"}}>{topBrut>0?topBrut.toLocaleString("tr-TR"):"—"}</div>
                    <div style={{fontSize:"16px",fontWeight:700,color:"#fff"}}>{topNet>0?topNet.toLocaleString("tr-TR"):"—"}</div>
                    <div></div><div></div>
                    <div style={{fontSize:"16px",fontWeight:700,color:"#fff"}}>{(()=>{const t=blokBolumler.reduce((s,b)=>s+parseFloat(b.satisFiyati||0),0);return t>0?t.toLocaleString("tr-TR"):"—";})()}</div>
                    <div></div>
                    {hasAnlasma&&<div></div>}
                  </div>
                  {/* ORTAK ALAN + BRÜT TOPLAMI */}
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 16px",background:"#384248",gap:"12px",flexWrap:"wrap"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                      <span style={{fontSize:"13px",fontWeight:600,color:"#8799a3"}}>Ortak Alan m²:</span>
                      <input style={{width:"90px",padding:"4px 8px",borderRadius:"4px",border:"1px solid #8799a355",background:"#fff",fontSize:"13px",fontWeight:700,color:"#384248",textAlign:"center"}} value={blokObj?.ortakAlanM2||""} onChange={e=>{const v=e.target.value.replace(/[^0-9.,]/g,"").replace(",",".");setForm(p=>{const updated={...p,bloklar:(p.bloklar||[]).map(b=>b.ad===blokAd?{...b,ortakAlanM2:v}:b)};setTimeout(()=>onSave(updated),0);return updated;});}} placeholder="0"/>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:"16px"}}>
                      <span style={{fontSize:"13px",color:"#8799a3"}}>Brüt: <strong style={{color:"#fff"}}>{topBrut.toLocaleString("tr-TR")}</strong></span>
                      <span style={{fontSize:"13px",color:"#8799a3"}}>+ Ortak: <strong style={{color:"#fff"}}>{ortakAlan.toLocaleString("tr-TR")}</strong></span>
                      <span style={{fontSize:"14px",fontWeight:700,color:"#52c41a",background:"#52c41a22",padding:"4px 12px",borderRadius:"4px"}}>= Brüt Toplamı: {brutToplami.toLocaleString("tr-TR")} m²</span>
                    </div>
                  </div>
                </>;
            })()}
          </div>;
        };

        return <div>
          {/* ÜST BAR */}
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px",flexWrap:"wrap",gap:"12px"}}>
            <div style={{display:"flex",gap:"16px",flexWrap:"wrap",alignItems:"center"}}>
              {BOLUM_DURUMLARI.map(d=>{
                const adet=bolumler.filter(b=>b.durum===d.id).length;
                const topFiyat=bolumler.filter(b=>b.durum===d.id).reduce((s,b)=>s+parseFloat(b.satisFiyati||0),0);
                return <div key={d.id} style={{display:"flex",alignItems:"center",gap:"8px",padding:"0 14px",borderRadius:"6px",background:"#384248",fontSize:"16px",height:"36px"}}>
                  <span style={{color:"#8799a3"}}>{d.label}:</span>
                  <span style={{color:"#fff",fontWeight:600}}>{adet}</span>
                  {topFiyat>0&&<span style={{color:"#8799a3",fontSize:"16px"}}>— {topFiyat.toLocaleString("tr-TR")} ₺</span>}
                </div>;
              })}
            </div>
            <button onClick={addBlok} title="Blok Ekle" style={{padding:"0",border:"none",background:"transparent",color:"#384248",cursor:"pointer",display:"flex",alignItems:"center"}}><Grid2x2Plus size={40}/></button>
          </div>

          {/* BLOKLAR */}
          {bloklar.length===0
            ?<div style={{padding:"60px",textAlign:"center",color:T.t3,fontSize:"14px",border:`1px dashed ${T.border}`,borderRadius:T.r}}>
              Henüz blok tanımlanmamış. Sağ üstteki <strong>blok ekle</strong> ikonunu kullanarak başlayın.
            </div>
            :<>
              {bloklar.map(blk=>{
                const blokBolumler=bolumler.filter(b=>b.blok===blk.ad);
                return renderBlokTable(blk.ad,blokBolumler);
              })}
              {bloksuzBolumler.length>0&&renderBlokTable("Bloksuz",bloksuzBolumler)}
            </>
          }
        </div>;
      })()}

      {/* DOSYA YÖNETİMİ */}
      {tab==="dosyaYonetimi"&&<MerkeziDosyaPortal tumDosyalar={form.tumDosyalar||[]} setTumDosyalar={v=>{setForm(p=>{const yeniDosyalar=typeof v==="function"?v(p.tumDosyalar||[]):v;const updated={...p,tumDosyalar:yeniDosyalar};setTimeout(()=>onSave(updated),0);return updated;});}} dosyaKategorileri={form.dosyaKategorileri||DOSYA_KATEGORILERI} bloklar={form.bloklar||[]} bolumler={form.bolumler||[]} blokSeviyeler={form.blokSeviyeler||[]}/>}

      {/* YAPI DENETİM SEVİYELERİ */}
      {tab==="yapiDenetim"&&(()=>{
        const blokSeviyeler=form.blokSeviyeler||[];
        const tanimliBloklar=form.bloklar||[];

        const saveSeviye=(blokAd,sev)=>{
          setForm(p=>{
            const yeniSeviyeler=(p.blokSeviyeler||[]).map(b=>{
              if(b.blokAd!==blokAd)return b;
              return{...b,seviyeler:b.seviyeler.map(s=>s.seviyeId===sev.seviyeId?sev:s)};
            });
            const updated={...p,blokSeviyeler:yeniSeviyeler};
            setTimeout(()=>onSave(updated),0);
            return updated;
          });
          setSeviyeModal(null);
        };

        return <div>
          {/* ÜST BAR */}
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px",flexWrap:"wrap",gap:"8px"}}>
            <div style={{fontSize:"14px",color:T.t2}}>{tanimliBloklar.length} blok · Blok eklemek için <button onClick={()=>setTab("bolumler")} style={{background:"none",border:"none",color:T.primary,cursor:"pointer",fontSize:"14px",textDecoration:"underline",padding:0}}>Bağımsız Bölümler</button> sekmesini kullanın.</div>
          </div>

          {/* SEVİYE MODAL */}
          {seviyeModal&&(()=>{
            const def=YAPI_DENETIM_SEVIYELERI.find(d=>d.id===seviyeModal.sev.seviyeId);
            const altKatAd=`${seviyeModal.blokAd} Blok - ${def?.label||""}`;
            const ilgili=(form.tumDosyalar||[]).filter(d=>d.anaKategori==="Yapı Denetim Seviyeleri"&&d.altKategori===altKatAd);
            const dosyaEkle=(blokAd,seviyeId)=>{
              const input=document.createElement("input");
              input.type="file";input.multiple=true;
              input.onchange=async(e)=>{
                for(const file of Array.from(e.target.files)){
                  const dosyaId=Date.now()+Math.floor(Math.random()*1000);
                  const path=`projeler/yd_${dosyaId}_${safeName(file.name)}`;
                  try{
                    await sbUpload(path,file);
                    const isImg=file.type.startsWith("image/");
                    const ext=(file.name||"").split(".").pop().toLowerCase();
                    const turMap={"pdf":"PDF","doc":"Word","docx":"Word","xls":"Excel","xlsx":"Excel","dwg":"AutoCAD","dxf":"AutoCAD","jpg":"Görsel","jpeg":"Görsel","png":"Görsel","gif":"Görsel","webp":"Görsel","tif":"Taranmış Belge","tiff":"Taranmış Belge"};
                    const yeni={id:dosyaId,ad:file.name,aciklama:"",anaKategori:"Yapı Denetim Seviyeleri",altKategori:altKatAd,dosyaTuru:turMap[ext]||"Diğer",boyut:Math.round(file.size/1024),tip:file.type,storagePath:path,data:"",tarih:new Date().toISOString().split("T")[0],resim:isImg};
                    u("tumDosyalar",[...(form.tumDosyalar||[]),yeni]);
                  }catch(err){console.error("Dosya yükleme hatası:",err);alert(`${file.name} yüklenemedi`);}
                }
              };
              input.click();
            };
            return <SeviyeModal blokAd={seviyeModal.blokAd} sev={seviyeModal.sev} onSave={saveSeviye} onClose={()=>setSeviyeModal(null)} onDosyaEkle={dosyaEkle} ilgiliDosyalar={ilgili}/>;
          })()}

          {tanimliBloklar.length===0
            ?<div style={{padding:"60px",textAlign:"center",color:T.t3,fontSize:"14px",border:`1px dashed ${T.border}`,borderRadius:T.r}}>
              Henüz blok tanımlanmamış. Önce "Bağımsız Bölümler" sekmesinden blok ekleyin.
            </div>
            :<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))",gap:"16px"}}>
              {blokSeviyeler.map(blk=>{
                const tamamlanan=blk.seviyeler.filter(s=>s.tamamlandi).length;
                const toplamOran=blk.seviyeler.filter(s=>s.tamamlandi).reduce((t,s)=>{
                  const def=YAPI_DENETIM_SEVIYELERI.find(d=>d.id===s.seviyeId);
                  return t+(def?def.oran:0);
                },0);

                return <div key={blk.blokAd} style={{border:`1px solid ${T.border}`,borderRadius:"8px",overflow:"hidden"}}>
                  {/* BLOK HEADER */}
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",background:"#384248"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                      <span style={{fontSize:"16px",fontWeight:700,color:"#fff"}}>{blk.blokAd}</span>
                      <span style={{fontSize:"13px",color:"#8799a3"}}>{tamamlanan}/6</span>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                      <div style={{width:"80px",height:"6px",borderRadius:"3px",background:"rgba(255,255,255,0.2)",overflow:"hidden"}}>
                        <div style={{width:`${toplamOran}%`,height:"100%",borderRadius:"3px",background:toplamOran===100?"#52c41a":"#8799a3",transition:"width .3s"}}/>
                      </div>
                      <span style={{fontSize:"13px",fontWeight:600,color:"#8799a3"}}>%{toplamOran}</span>
                    </div>
                  </div>
                  {/* SEVİYE LİSTESİ */}
                  {blk.seviyeler.map((sev,idx)=>{
                    const def=YAPI_DENETIM_SEVIYELERI.find(d=>d.id===sev.seviyeId);
                    if(!def)return null;
                    return <div key={sev.seviyeId} onClick={()=>setSeviyeModal({blokAd:blk.blokAd,sev})}
                      style={{display:"grid",gridTemplateColumns:"auto 1fr auto",gap:"10px",padding:"8px 16px",alignItems:"center",borderBottom:idx<5?`1px solid ${T.border}`:"none",background:idx%2===0?"#fff":"#fafafa",cursor:"pointer"}}
                      onMouseEnter={e=>e.currentTarget.style.background=T.pBg}
                      onMouseLeave={e=>e.currentTarget.style.background=idx%2===0?"#fff":"#fafafa"}>
                      <div style={{width:"20px",height:"20px",borderRadius:"4px",border:`2px solid ${sev.tamamlandi?"#52c41a":T.border}`,background:sev.tamamlandi?"#52c41a":"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                        {sev.tamamlandi&&<span style={{color:"#fff",fontSize:"12px",fontWeight:700}}>✓</span>}
                      </div>
                      <div style={{minWidth:0}}>
                        <div style={{fontSize:"14px",fontWeight:500,color:sev.tamamlandi?"#389e0d":T.text}}>{def.id}. {def.label}</div>
                        {sev.tarih&&<div style={{fontSize:"12px",color:T.t3}}>{fmtDate(sev.tarih)}{sev.aciklama?` · ${sev.aciklama}`:""}</div>}
                      </div>
                      <span style={{fontSize:"13px",fontWeight:600,color:T.t3}}>%{def.oran}</span>
                    </div>;
                  })}
                </div>;
              })}
            </div>
          }
        </div>;
      })()}

      {/* FİRMALAR */}
      {tab==="firmalar"&&(()=>{
        const baglantilar=form.firmaBaglantilari||[];

        const saveFirmaBag=(fb)=>{
          setForm(p=>{
            const exists=p.firmaBaglantilari.find(x=>x.id===fb.id);
            return{...p,firmaBaglantilari:exists?p.firmaBaglantilari.map(x=>x.id===fb.id?fb:x):[...p.firmaBaglantilari,fb]};
          });
          setFirmaBagModal(null);
        };

        const delFirmaBag=(id)=>{
          setForm(p=>({...p,firmaBaglantilari:p.firmaBaglantilari.filter(x=>x.id!==id)}));
        };

        const yeniBaglanti=()=>{
          setFirmaBagModal({id:Date.now(),firmaId:"",firmaAd:"",rol:"",kisiId:"",kisiAd:"",notlar:"",_isNew:true});
        };

        return <div>
          {firmaBagModal&&<FirmaBaglantiModal baglanti={firmaBagModal} onSave={(fb)=>{
            saveFirmaBag(fb);
            // Projeyi de kaydet
            setTimeout(()=>save(),100);
          }} onDel={delFirmaBag} onClose={()=>setFirmaBagModal(null)} firmalar={firmalar} onGoFirma={(firmaId)=>{
            setFirmaBagModal(null);
            setTimeout(()=>{save();if(goToFirma)goToFirma(firmaId);},150);
          }}/>}

          {/* PORTAL */}
          <div style={{border:`1px solid ${T.border}`,borderRadius:"8px",overflow:"hidden"}}>
            {/* HEADER */}
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",background:"#384248"}}>
              <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                <span style={{fontSize:"16px",fontWeight:700,color:"#fff"}}>Proje Firmaları</span>
                <span style={{fontSize:"13px",color:"#8799a3"}}>{baglantilar.length} firma</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
                <button onClick={yeniBaglanti} title="Firma Ekle" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePlus size={30}/></button>
                <button onClick={()=>{
                  const rows=[["Firma Adı","Rol","Notlar"]];
                  baglantilar.forEach(b=>{const f=firmalar.find(x=>x.id===parseInt(b.firmaId));rows.push([f?.ad||b.firmaAd||"",b.rol||"",b.notlar||""]);});
                  const csv=rows.map(r=>r.map(c=>`"${c}"`).join(";")).join("\n");
                  const blob=new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8;"});
                  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`${form.ad||"proje"}_firmalar.csv`;a.click();
                }} title="Excel'e Aktar" style={{padding:"0",border:"none",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center"}}><img src={excelIcon} alt="Excel" style={{width:"35px",height:"35px"}}/></button>
              </div>
            </div>
            {/* LİSTE */}
            {baglantilar.length===0
              ?<div style={{padding:"40px",textAlign:"center",color:T.t3,fontSize:"14px",background:"#fff"}}>Henüz firma bağlantısı eklenmemiş.</div>
              :<>
                <div style={{display:"grid",gridTemplateColumns:"1fr 120px 160px 160px 1fr",background:"#fafafa",borderBottom:`1px solid ${T.border}`,padding:"8px 12px",gap:"8px"}}>
                  {["Firma","Rol","Firma İletişim","Yetkili Kişi","Kişi İletişim"].map((h,i)=><div key={i} style={{fontSize:"12px",fontWeight:600,color:T.t2,textTransform:"uppercase",letterSpacing:"0.3px"}}>{h}</div>)}
                </div>
                {baglantilar.map((fb,idx)=>{
                  const firma=firmalar.find(f=>f.id===parseInt(fb.firmaId));
                  const kisi=firma?.kisiler?.find(k=>k.id===parseInt(fb.kisiId));
                  return <div key={fb.id} onClick={()=>setFirmaBagModal(fb)} style={{display:"grid",gridTemplateColumns:"1fr 120px 160px 160px 1fr",padding:"8px 12px",gap:"8px",alignItems:"center",borderBottom:idx<baglantilar.length-1?`1px solid ${T.border}`:"none",background:idx%2===0?"#fff":"#fafafa",cursor:"pointer",height:"40px"}}
                    onMouseEnter={e=>e.currentTarget.style.background=T.pBg}
                    onMouseLeave={e=>e.currentTarget.style.background=idx%2===0?"#fff":"#fafafa"}>
                    <div style={{fontSize:"14px",fontWeight:600,color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{firma?firma.ad:(fb.firmaAd||"—")}</div>
                    <div style={{fontSize:"14px",color:T.t2,fontWeight:500}}>{fb.rol||"—"}</div>
                    <div style={{fontSize:"13px",color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{firma?.telefon||firma?.sabitTelefon||"—"}</div>
                    <div style={{fontSize:"13px",color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{kisi?`${kisi.ad} ${kisi.soyad}${kisi.unvan?" ("+kisi.unvan+")":""}` :"—"}</div>
                    <div style={{fontSize:"13px",color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{kisi?.telefon||kisi?.eposta||"—"}</div>
                  </div>;
                })}
              </>
            }
          </div>
        </div>;
      })()}

      {/* NOTLAR */}
      {tab==="notlar"&&<div>
        <div style={{display:"flex",gap:"8px",marginBottom:"16px"}}>
          <input style={{...iS,flex:1}} value={nn} onChange={e=>setNn(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addNot()} placeholder="Not ekle..." onFocus={foc} onBlur={blr}/>
          <button onClick={addNot} style={{padding:"7px 20px",borderRadius:T.r,border:"none",background:T.primary,color:"#fff",fontWeight:500,cursor:"pointer",fontSize:"13px",whiteSpace:"nowrap"}}>+ Ekle</button>
        </div>
        {form.projeNotlari.length===0&&<div style={{padding:"40px",textAlign:"center",color:T.t3,fontSize:"13px",border:`1px dashed ${T.border}`,borderRadius:T.r}}>Henüz not eklenmemiş.</div>}
        <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
          {[...form.projeNotlari].reverse().map(n=><div key={n.id} style={{padding:"12px 16px",borderRadius:T.r,border:`1px solid ${T.border}`,background:"#fafafa"}}>
            <div style={{fontSize:"12px",color:T.t3,marginBottom:"4px"}}>{fmtDate(n.tarih)} · {n.yazar}</div>
            <div style={{fontSize:"13px",color:T.text}}>{n.metin}</div>
          </div>)}
        </div>
      </div>}

    </div>
  </div>;
};

/* --- Dosya Kategori Yönetim --- */
/* --- Bütçe Kalem Modal --- */
const ButceKalemModal=({kalem,onSave,onDel,onClose,malzemeler,projeBloklar=[],projeBolumler=[],ortakAlanM2="",siparisler=[],faturalar=[],firmalar=[]})=>{
  const kalemInit=(k)=>({
    ...k,
    bloklar:k.bloklar||[],
    detaylar:k.detaylar||[],
    ilkPlanlananFiyat:k.ilkPlanlananFiyat||k.planlananBirimFiyat||"",
    firmaFiyat:k.firmaFiyat||"",
    revizyonlar:k.revizyonlar||[],
    firmaSatirlari:k.firmaSatirlari||[],
    planlananSatirlari:k.planlananSatirlari||[],
  });
  const[fm,setFm]=useState(kalemInit(kalem));
  useEffect(()=>{setFm(kalemInit(kalem));},[kalem.id]);
  const uf=(f,v)=>setFm(p=>({...p,[f]:v}));
  const[saved,setSaved]=useState(false);
  const[hatalar,setHatalar]=useState({});
  const[hesapModalAcik,setHesapModalAcik]=useState(false);
  const[modalTab,setModalTab]=useState("plan");
  const bagliSp=useMemo(()=>siparisler.filter(s=>(s.kalemler||[]).some(k=>String(k.butceKalemiId)===String(fm.id))),[siparisler,fm.id]);
  const bagliAf=useMemo(()=>faturalar.filter(f=>(f.kalemler||[]).some(k=>String(k.butceKalemiId)===String(fm.id))),[faturalar,fm.id]);

  // Malzeme referansı (erken tanımla — fiyat fonksiyonları kullanıyor)
  const _mlzRef=malzemeler?.find(m=>m.id===fm.malzemeId);
  const _hesaplamaVar=_mlzRef?.hesaplamaSablonu&&HESAPLAMA_SABLONLARI[_mlzRef.hesaplamaSablonu];

  const delFiyatSatir=(sekme,idx)=>{const alan=fiyatAlanMap[sekme];uf(alan,(fm[alan]||[]).filter((_,i)=>i!==idx));};
  const fiyatToplamHesapla=(satirlar)=>{
    let miktarTop=0,kdvHaricTop=0,kdvTop=0;
    (satirlar||[]).forEach(s=>{const m=parseFloat(s.miktar||0);const bf=parseFloat(s.birimFiyat||0);const kdvH=m*bf;const kdv=kdvH*(parseInt(s.kdvOrani||0)/100);miktarTop+=m;kdvHaricTop+=kdvH;kdvTop+=kdv;});
    return{miktarTop,kdvHaricTop,kdvTop,genelTop:kdvHaricTop+kdvTop};
  };

  const kaydetValidasyon=()=>{
    const h={};
    // 1. Blok seçimi zorunlu
    if(projeBloklar.length>0&&(!fm.bloklar||fm.bloklar.length===0))h.bloklar="Blok seçimi zorunludur";
    // Planlanan sekmesinde en az 1 satır ve toplam > 0
    const pt=fiyatToplamHesapla(fm.planlananSatirlari);
    if((fm.planlananSatirlari||[]).length===0)h.planlanan="Planlanan fiyat sekmesine en az 1 satır ekleyin";
    else if(pt.kdvHaricTop<=0)h.planlanan="Planlanan fiyat toplamı sıfırdan büyük olmalıdır";
    setHatalar(h);
    if(Object.keys(h).length>0)return false;
    return true;
  };

  // Fiyat değişikliği
  const fiyatDegistir=(yeniFiyat)=>{
    uf("planlananBirimFiyat",yeniFiyat);
    if(!fm.ilkPlanlananFiyat||parseFloat(fm.ilkPlanlananFiyat)===0){uf("ilkPlanlananFiyat",yeniFiyat);}
  };

  // Revizyon işlemleri
  const[revEkleAcik,setRevEkleAcik]=useState(false);
  const[revForm,setRevForm]=useState({tip:"fiyat",yeniDeger:"",not:""});
  const[revDuzenle,setRevDuzenle]=useState(null);
  const addRevizyon=()=>{
    if(!revForm.yeniDeger)return;
    const eskiDeger=revForm.tip==="fiyat"?fm.planlananBirimFiyat||"0":fm.planlananMiktar||"0";
    const revNo=(fm.revizyonlar||[]).length+1;
    const yeniRev={id:Date.now(),tarih:new Date().toISOString().split("T")[0],tip:revForm.tip,eskiDeger,yeniDeger:revForm.yeniDeger,not:revForm.not,revNo};
    uf("revizyonlar",[...(fm.revizyonlar||[]),yeniRev]);
    if(revForm.tip==="fiyat"){fiyatDegistir(revForm.yeniDeger);}
    else{uf("planlananMiktar",revForm.yeniDeger);}
    setRevForm({tip:"fiyat",yeniDeger:"",not:""});setRevEkleAcik(false);
  };
  const delRevizyon=(id)=>uf("revizyonlar",(fm.revizyonlar||[]).filter(r=>r.id!==id));
  const saveRevDuzenle=(id,field,val)=>{uf("revizyonlar",(fm.revizyonlar||[]).map(r=>r.id===id?{...r,[field]:val}:r));};

  // Toplam planlanan sekmesinden hesaplanır
  const planlananTop=fiyatToplamHesapla(fm.planlananSatirlari);
  const toplam=planlananTop.kdvHaricTop;

  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}}>
    <div style={{background:"#fff",borderRadius:T.rl,width:"100%",maxWidth:"1600px",maxHeight:"95vh",display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{padding:"12px 20px",background:"#384248",display:"flex",alignItems:"center",gap:"16px",borderRadius:`${T.rl} ${T.rl} 0 0`}}>
        <button onClick={onClose} title="Kapat" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><MoveLeft size={28}/></button>
        <div style={{flex:1,textAlign:"center"}}><span style={{fontSize:"16px",fontWeight:600,color:"#8799a3",textTransform:"uppercase"}}>{fm.malzemeKodu?fm.malzemeKodu+" - ":""}{fm.malzemeAd||"Bütçe Kalemi"}</span></div>
        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
          <button onClick={()=>{if(!kaydetValidasyon())return;const pt=fiyatToplamHesapla(fm.planlananSatirlari);onSave({...fm,planlananToplam:pt.kdvHaricTop,planlananMiktar:String(pt.miktarTop||""),planlananBirimFiyat:(pt.miktarTop>0?String(pt.kdvHaricTop/pt.miktarTop):"")});setSaved(true);setTimeout(()=>setSaved(false),2000);setHatalar({});}} title={saved?"Kaydedildi":"Kaydet"} style={{padding:"0",border:"none",background:"transparent",color:saved?"#52c41a":"#8799a3",cursor:"pointer",display:"flex",alignItems:"center",transition:"color .3s"}}><Save size={30}/></button>
          {onDel&&<button onClick={()=>{if(!confirm("Bu bütçe kalemini silmek istiyor musunuz?"))return;onDel(fm.id);onClose();}} title="Sil" style={{padding:"0",border:"none",background:"transparent",color:"#ff6b6b",cursor:"pointer",display:"flex",alignItems:"center"}}><Trash2 size={30}/></button>}
        </div>
      </div>
      <div style={{flex:1,overflow:"auto",padding:"20px",display:"flex",flexDirection:"column",gap:"14px"}}>
        {/* SEKME BARI */}
        <div style={{display:"flex",gap:"4px",borderBottom:`1px solid ${T.border}`,marginBottom:"4px"}}>
          {[
            {id:"plan",label:"Planlanan Fiyat",count:null},
            {id:"sp",label:"Satınalma Siparişleri",count:bagliSp.length},
            {id:"af",label:"Alış Faturaları",count:bagliAf.length}
          ].map(t=><button key={t.id} onClick={()=>setModalTab(t.id)} style={{padding:"8px 16px",border:"none",borderBottom:`3px solid ${modalTab===t.id?T.primary:"transparent"}`,background:"transparent",color:modalTab===t.id?T.primary:T.t2,fontSize:"14px",fontWeight:modalTab===t.id?600:500,cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"}}>
            {t.label}
            {t.count!=null&&<span style={{fontSize:"11px",fontWeight:700,padding:"1px 8px",borderRadius:"10px",background:t.count>0?(modalTab===t.id?T.primary:T.pBg):"#f0f0f0",color:t.count>0?(modalTab===t.id?"#fff":T.primary):T.t3,minWidth:"20px",textAlign:"center"}}>{t.count}</span>}
          </button>)}
        </div>
        {modalTab==="plan"&&<>
        {/* BLOK SEÇİMİ */}
        {projeBloklar.length>0&&<div style={{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text}}>Blok:</label>
          {projeBloklar.map(bl=>{
            const blokM2=(projeBolumler||[]).filter(b=>b.blok===bl.ad).reduce((s,b)=>s+parseFloat(b.brutM2||0),0);
            const checked=(fm.bloklar||[]).includes(bl.ad);
            return <label key={bl.id} style={{display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",borderRadius:"6px",border:`1px solid ${checked?T.primary:T.border}`,background:checked?"#e6f4ff":"#fff",cursor:"pointer",fontSize:"13px",fontWeight:checked?600:400,color:checked?T.primary:T.text}}>
              <input type="checkbox" checked={checked} onChange={e=>{const arr=e.target.checked?[...(fm.bloklar||[]),bl.ad]:(fm.bloklar||[]).filter(x=>x!==bl.ad);uf("bloklar",arr);}} style={{accentColor:T.primary}}/>
              {bl.ad} Blok
            </label>;
          })}
          {(fm.bloklar||[]).length>1&&<span style={{fontSize:"11px",color:"#fa8c16",fontWeight:500}}>Ortak gider — m² oranına göre dağıtılır</span>}
          {hatalar.bloklar&&<span style={{fontSize:"11px",color:T.err,fontWeight:600}}>{hatalar.bloklar}</span>}
        </div>}

        {/* FİYAT PORTALI — Planlanan Fiyat */}
        {(()=>{
          const birim=_mlzRef?.birim||fm.birim||"adet";
          const varsayilanKdv=_mlzRef?.kdvOrani||"20";
          const satirlar=fm.planlananSatirlari||[];

          const addSatir=()=>{
            const yeniId=Date.now();
            uf("planlananSatirlari",[...satirlar,{id:yeniId,siraNo:String(satirlar.length+1),aciklama:"",miktar:"",birimFiyat:"",kdvOrani:varsayilanKdv,tamamlandi:false}]);
          };
          const delSatir=(idx)=>{
            const yeniSatirlar=satirlar.filter((_,i)=>i!==idx);
            const yeniTamamlandi=yeniSatirlar.length>0&&yeniSatirlar.every(s=>s.tamamlandi===true);
            setFm(p=>({...p,planlananSatirlari:yeniSatirlar,tamamlandi:yeniTamamlandi}));
          };
          const upPlan=(idx,field,val)=>{const arr=[...satirlar];arr[idx]={...arr[idx],[field]:val};uf("planlananSatirlari",arr);};
          const toggleAltTamamlandi=(idx)=>{
            const arr=[...satirlar];
            arr[idx]={...arr[idx],tamamlandi:!arr[idx].tamamlandi};
            const yeniTamamlandi=arr.length>0&&arr.every(s=>s.tamamlandi===true);
            setFm(p=>({...p,planlananSatirlari:arr,tamamlandi:yeniTamamlandi}));
          };

          let pMikTop=0,pKdvHTop=0,pKdvTop=0;
          satirlar.forEach(s=>{
            const m=parseFloat(s.miktar||0);
            const pBf=parseFloat(s.birimFiyat||0);
            const pKdvO=parseInt(s.kdvOrani||varsayilanKdv)/100;
            const pH=m*pBf;pMikTop+=m;pKdvHTop+=pH;pKdvTop+=pH*pKdvO;
          });

          const gridCols="30px 40px 1fr 80px 55px 90px 90px 55px 80px 90px 24px";

          return <div style={{border:`1px solid ${T.border}`,borderRadius:T.r,overflow:"hidden"}}>
            {/* HESAPLA BUTONU */}
            {_hesaplamaVar&&<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 14px",background:"#fffbe6",borderBottom:`1px solid ${T.border}`}}>
              <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                <span style={{fontSize:"16px"}}>{HESAPLAMA_SABLONLARI[_mlzRef.hesaplamaSablonu].icon}</span>
                <span style={{fontSize:"12px",fontWeight:600,color:"#d48806"}}>{HESAPLAMA_SABLONLARI[_mlzRef.hesaplamaSablonu].ad}</span>
              </div>
              <button onClick={()=>setHesapModalAcik(true)} style={{padding:"4px 14px",borderRadius:T.r,border:"1px solid #fadb14",background:"#fff",color:"#d48806",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"}}>
                <RefreshCw size={12}/> Hesapla
              </button>
            </div>}
            {/* BAŞLIK */}
            <div style={{display:"grid",gridTemplateColumns:gridCols,gap:"4px",padding:"6px 8px",background:"#384248"}}>
              <div></div><div></div><div></div><div></div><div></div>
              <div style={{gridColumn:"6 / 11",textAlign:"center",fontSize:"11px",fontWeight:700,color:"#52c41a",letterSpacing:"1px"}}>PLANLANAN FİYAT</div>
              <div></div>
            </div>
            {/* TABLO HEADER */}
            <div style={{display:"grid",gridTemplateColumns:gridCols,gap:"4px",padding:"4px 8px",background:"#fafafa",borderBottom:`1px solid ${T.border}`}}>
              {["✓","S.No","Açıklama","Miktar","Birim","B.Fiyat","KDV Hariç","KDV%","KDV Tut.","Toplam",""].map((h,i)=><div key={i} style={{fontSize:"10px",fontWeight:600,color:i>=5?"#52c41a":T.t3,textTransform:"uppercase",textAlign:i===0?"center":(i>=3?"right":"left")}}>{h}</div>)}
            </div>
            {/* SATIRLAR */}
            <div style={{maxHeight:"400px",overflow:"auto"}}>
              {satirlar.length===0
                ?<div style={{padding:"24px",textAlign:"center",color:T.t3,fontSize:"12px"}}>Satır eklemek için aşağıdaki butonu kullanın.</div>
                :satirlar.map((s,idx)=>{
                  const m=parseFloat(s.miktar||0);
                  const pBf=parseFloat(s.birimFiyat||0);const pKdvO=parseInt(s.kdvOrani||varsayilanKdv);
                  const pH=m*pBf;const pKdvT=pH*(pKdvO/100);const pTop=pH+pKdvT;
                  const altTamam=s.tamamlandi===true;
                  const rowBg=altTamam?"#f6ffed":(idx%2===0?"#fff":"#fafafa");
                  const altTxtClr=altTamam?"#52c41a":null;
                  return <div key={s.id} style={{display:"grid",gridTemplateColumns:gridCols,gap:"4px",padding:"3px 8px",alignItems:"center",borderBottom:idx<satirlar.length-1?`1px solid ${T.border}`:"none",background:rowBg}}>
                    <div onClick={()=>toggleAltTamamlandi(idx)} title={altTamam?"Tamamlandı işaretini kaldır":"Tamamlandı olarak işaretle"} style={{display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
                      <div style={{width:"16px",height:"16px",borderRadius:"3px",border:`2px solid ${altTamam?"#52c41a":T.bDark}`,background:altTamam?"#52c41a":"transparent",display:"flex",alignItems:"center",justifyContent:"center",transition:"all .2s"}}>
                        {altTamam&&<span style={{color:"#fff",fontSize:"11px",fontWeight:700,lineHeight:1}}>✓</span>}
                      </div>
                    </div>
                    <input style={{...iS,fontSize:"12px",padding:"4px 4px",textAlign:"center",color:altTxtClr||T.text}} value={s.siraNo||String(idx+1)} onChange={e=>upPlan(idx,"siraNo",e.target.value)} onFocus={foc} onBlur={blr}/>
                    <input style={{...iS,fontSize:"12px",padding:"4px 6px"}} value={s.aciklama||""} onChange={e=>upPlan(idx,"aciklama",e.target.value)} placeholder="Açıklama..." onFocus={foc} onBlur={blr}/>
                    <input style={{...iS,fontSize:"14px",padding:"4px 4px",textAlign:"right",fontWeight:600}} value={s._miktarEdit?s.miktar||"":(parseFloat(s.miktar||0)>0?parseFloat(s.miktar).toLocaleString("tr-TR"):"")} onChange={e=>{const raw=e.target.value.replace(/[^0-9.,]/g,"").replace(/,/g,".");const pts=raw.split(".");const v=pts.length>2?pts[0]+"."+pts.slice(1).join(""):raw;upPlan(idx,"miktar",v);}} placeholder="0" onFocus={e=>{upPlan(idx,"_miktarEdit",true);foc(e);}} onBlur={e=>{upPlan(idx,"_miktarEdit",false);blr(e);}}/>
                    <div style={{fontSize:"11px",color:T.t2,textAlign:"right"}}>{birim}</div>
                    <input style={{...iS,fontSize:"14px",padding:"4px 4px",textAlign:"right",background:"#f6ffed",fontWeight:600}} value={s._bfEdit?s.birimFiyat||"":(parseFloat(s.birimFiyat||0)>0?parseFloat(s.birimFiyat).toLocaleString("tr-TR"):"")} onChange={e=>{const raw=e.target.value.replace(/[^0-9.,]/g,"").replace(/,/g,".");const pts=raw.split(".");const v=pts.length>2?pts[0]+"."+pts.slice(1).join(""):raw;upPlan(idx,"birimFiyat",v);}} placeholder="0" onFocus={e=>{upPlan(idx,"_bfEdit",true);foc(e);}} onBlur={e=>{upPlan(idx,"_bfEdit",false);blr(e);}}/>
                    <div style={{fontSize:"11px",fontWeight:600,color:T.text,textAlign:"right"}}>{pH>0?pH.toLocaleString("tr-TR",{minimumFractionDigits:2}):"—"}</div>
                    <select style={{...iS,fontSize:"10px",padding:"2px",textAlign:"center",background:"#f6ffed"}} value={s.kdvOrani||varsayilanKdv} onChange={e=>upPlan(idx,"kdvOrani",e.target.value)}>{KDV_ORANLARI.map(x=><option key={x.id} value={x.id}>{x.label}</option>)}</select>
                    <div style={{fontSize:"11px",color:T.t2,textAlign:"right"}}>{pKdvT>0?pKdvT.toLocaleString("tr-TR",{minimumFractionDigits:2}):"—"}</div>
                    <div style={{fontSize:"11px",fontWeight:700,color:"#52c41a",textAlign:"right"}}>{pTop>0?pTop.toLocaleString("tr-TR",{minimumFractionDigits:2}):"—"}</div>
                    <button onClick={()=>delSatir(idx)} style={{padding:"0",border:"none",background:"transparent",color:T.err,cursor:"pointer",display:"flex",alignItems:"center"}}><Trash2 size={14}/></button>
                  </div>;
                })
              }
            </div>
            {/* SATIR EKLE */}
            <div style={{padding:"6px 8px",borderTop:`1px solid ${T.border}`}}>
              <button onClick={addSatir} style={{padding:"6px 16px",borderRadius:T.r,border:`1px dashed ${T.border}`,background:"#fff",color:T.t2,fontSize:"12px",cursor:"pointer",width:"100%",fontWeight:500}}>+ Satır Ekle</button>
            </div>
            {/* TOPLAMLAR */}
            {satirlar.length>0&&<div style={{display:"grid",gridTemplateColumns:gridCols,gap:"4px",padding:"6px 8px",background:"#f0f5ff",borderTop:`2px solid ${T.primary}`}}>
              <div></div>
              <div></div>
              <div style={{fontSize:"11px",fontWeight:700,color:T.text,textAlign:"right"}}>TOPLAM</div>
              <div style={{fontSize:"11px",fontWeight:700,color:T.text,textAlign:"right"}}>{pMikTop>0?pMikTop.toLocaleString("tr-TR"):""}</div>
              <div style={{fontSize:"10px",color:T.t3,textAlign:"right"}}>{birim}</div>
              <div></div>
              <div style={{fontSize:"11px",fontWeight:700,color:"#52c41a",textAlign:"right"}}>{pKdvHTop>0?pKdvHTop.toLocaleString("tr-TR",{minimumFractionDigits:2}):"—"}</div>
              <div></div>
              <div style={{fontSize:"11px",fontWeight:700,color:"#52c41a",textAlign:"right"}}>{pKdvTop>0?pKdvTop.toLocaleString("tr-TR",{minimumFractionDigits:2}):"—"}</div>
              <div style={{fontSize:"12px",fontWeight:700,color:"#52c41a",textAlign:"right"}}>{(pKdvHTop+pKdvTop)>0?(pKdvHTop+pKdvTop).toLocaleString("tr-TR",{minimumFractionDigits:2}):"—"}</div>
              <div></div>
            </div>}
          </div>;
        })()}
        {/* VALİDASYON HATALARI */}
        {Object.keys(hatalar).length>0&&<div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
          {Object.values(hatalar).filter(Boolean).map((h,i)=><div key={i} style={{fontSize:"12px",color:T.err,fontWeight:500}}>{h}</div>)}
        </div>}


        {/* REVİZYON TARİHÇESİ */}
        <div style={{border:`1px solid ${T.border}`,borderRadius:T.r,overflow:"hidden"}}>
          <div style={{padding:"6px 12px",background:"#384248",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <span style={{fontSize:"12px",fontWeight:600,color:"#8799a3"}}>Revizyon Tarihçesi ({(fm.revizyonlar||[]).length})</span>
            <button onClick={()=>setRevEkleAcik(!revEkleAcik)} style={{padding:"4px 12px",borderRadius:"4px",border:"1px solid #8799a3",background:"transparent",color:"#8799a3",fontSize:"12px",cursor:"pointer",fontWeight:600}}>{revEkleAcik?"İptal":"+ Revizyon Ekle"}</button>
          </div>
          {/* REVİZYON EKLEME FORMU */}
          {revEkleAcik&&<div style={{padding:"12px",background:"#fff7e6",borderBottom:`1px solid ${T.border}`,display:"flex",flexDirection:"column",gap:"8px"}}>
            <div style={{display:"flex",gap:"16px",alignItems:"center"}}>
              <span style={{fontSize:"12px",fontWeight:600,color:T.t2}}>Tip:</span>
              {["fiyat","miktar"].map(t=><label key={t} style={{display:"flex",alignItems:"center",gap:"4px",cursor:"pointer",fontSize:"13px"}}>
                <input type="radio" checked={revForm.tip===t} onChange={()=>setRevForm(p=>({...p,tip:t}))} style={{accentColor:T.primary}}/>
                <span>{t==="fiyat"?"Fiyat":"Miktar"}</span>
              </label>)}
              <span style={{fontSize:"12px",color:T.t3,marginLeft:"8px"}}>Mevcut: {revForm.tip==="fiyat"?(fm.planlananBirimFiyat?Number(fm.planlananBirimFiyat).toLocaleString("tr-TR"):"0"):(fm.planlananMiktar||"0")}</span>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr auto",gap:"8px",alignItems:"center"}}>
              <input style={iS} value={revForm.yeniDeger} onChange={e=>{const raw=e.target.value.replace(/[^0-9.,]/g,"").replace(/,/g,".");const pts=raw.split(".");const v=pts.length>2?pts.slice(0,-1).join("")+"."+pts[pts.length-1]:raw;setRevForm(p=>({...p,yeniDeger:v}));}} placeholder={revForm.tip==="fiyat"?"Yeni fiyat":"Yeni miktar"} onFocus={foc} onBlur={blr}/>
              <input style={iS} value={revForm.not} onChange={e=>setRevForm(p=>({...p,not:e.target.value}))} placeholder="Revizyon notu..." onFocus={foc} onBlur={blr}/>
              <button onClick={addRevizyon} style={{padding:"6px 16px",borderRadius:T.r,border:"none",background:T.primary,color:"#fff",fontSize:"13px",cursor:"pointer",fontWeight:600}}>Ekle</button>
            </div>
          </div>}
          {/* TABLO */}
          {(fm.revizyonlar||[]).length>0&&<>
            <div style={{display:"grid",gridTemplateColumns:"50px 90px 70px 100px 100px 1fr 60px",gap:"6px",padding:"4px 12px",background:"#fafafa",borderBottom:`1px solid ${T.border}`}}>
              {["Rev","Tarih","Tip","Eski","Yeni","Not",""].map((h,i)=><div key={i} style={{fontSize:"11px",fontWeight:600,color:T.t3,textTransform:"uppercase"}}>{h}</div>)}
            </div>
            {(fm.revizyonlar||[]).map((r,idx)=><div key={r.id} style={{display:"grid",gridTemplateColumns:"50px 90px 70px 100px 100px 1fr 60px",gap:"6px",padding:"4px 12px",alignItems:"center",borderBottom:idx<(fm.revizyonlar||[]).length-1?`1px solid ${T.border}`:"none",background:idx%2===0?"#fff":"#fafafa"}}>
              <div style={{fontSize:"13px",fontWeight:700,color:T.primary}}>R{r.revNo||idx+1}</div>
              <div style={{fontSize:"12px",color:T.t2}}>{fmtDate(r.tarih)}</div>
              <div><span style={{padding:"1px 6px",borderRadius:"3px",fontSize:"11px",fontWeight:600,background:r.tip==="fiyat"?"#e6f4ff":"#f6ffed",color:r.tip==="fiyat"?"#1677ff":"#52c41a"}}>{r.tip==="fiyat"?"Fiyat":"Miktar"}</span></div>
              <div style={{fontSize:"13px",color:T.t3}}>{Number(r.eskiDeger||r.eskiFiyat||0).toLocaleString("tr-TR")}</div>
              <div style={{fontSize:"13px",fontWeight:600,color:parseFloat(r.yeniDeger||r.yeniFiyat||0)>parseFloat(r.eskiDeger||r.eskiFiyat||0)?"#ff4d4f":"#52c41a"}}>{Number(r.yeniDeger||r.yeniFiyat||0).toLocaleString("tr-TR")}</div>
              <input style={{...iS,fontSize:"12px",height:"28px",lineHeight:"28px"}} value={r.not||r.sebep||""} onChange={e=>saveRevDuzenle(r.id,"not",e.target.value)} placeholder="Not..." onFocus={foc} onBlur={blr}/>
              <div style={{display:"flex",gap:"8px"}}>
                <button onClick={()=>delRevizyon(r.id)} title="Sil" style={{padding:"0",border:"none",background:"transparent",color:T.err,cursor:"pointer",display:"flex",alignItems:"center"}}><Trash2 size={16}/></button>
              </div>
            </div>)}
          </>}
          {(fm.revizyonlar||[]).length===0&&!revEkleAcik&&<div style={{padding:"16px",textAlign:"center",color:T.t3,fontSize:"13px",background:"#fff"}}>Henüz revizyon yok.</div>}
        </div>

        {/* AÇIKLAMA */}
        <div style={{display:"grid",gridTemplateColumns:"140px 1fr",gap:"12px",alignItems:"center"}}>
          <label style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right",height:"36px",lineHeight:"36px"}}>Açıklama</label>
          <input style={iS} value={fm.aciklama||""} onChange={e=>uf("aciklama",e.target.value)} placeholder="Not..." onFocus={foc} onBlur={blr}/>
        </div>
        </>}

        {/* SATINALMA SİPARİŞLERİ SEKMESİ */}
        {modalTab==="sp"&&<div style={{border:`1px solid ${T.border}`,borderRadius:T.r,overflow:"hidden"}}>
          {bagliSp.length===0
            ?<div style={{padding:"40px",textAlign:"center",color:T.t3,fontSize:"14px",background:"#fafafa"}}>Bu bütçe kalemine bağlı satınalma siparişi yok.</div>
            :<>
              <div style={{display:"grid",gridTemplateColumns:"130px 1fr 100px 80px 120px 120px",gap:"8px",padding:"8px 14px",background:"#384248",color:"#fff"}}>
                {["SP No","Firma","Tarih","Miktar","Tutar (KDV Haric)","Durum"].map((h,i)=><div key={i} style={{fontSize:"11px",fontWeight:700,letterSpacing:"0.5px",textTransform:"uppercase",color:i>=3&&i<=5?"#8799a3":"#fff",textAlign:i===3||i===4?"right":"left"}}>{h}</div>)}
              </div>
              {bagliSp.map((s,idx)=>{
                const kl=(s.kalemler||[]).filter(k=>String(k.butceKalemiId)===String(fm.id));
                const mik=kl.reduce((t,k)=>t+(parseFloat(k.miktar)||0),0);
                const tut=kl.reduce((t,k)=>t+(parseFloat(k.miktar)||0)*(parseFloat(k.netFiyat)||0),0);
                const durumMap={taslak:{l:"Taslak",c:"#8c8c8c",b:"#f5f5f5"},onaylandi:{l:"Onaylandı",c:"#1677ff",b:"#e6f4ff"},kismen_teslim:{l:"Kısmen",c:"#fa8c16",b:"#fff7e6"},tamamlandi:{l:"Kapandı",c:"#52c41a",b:"#f6ffed"},iptal:{l:"İptal",c:"#ff4d4f",b:"#fff1f0"}};
                const d=durumMap[s.durum]||{l:s.durum||"—",c:T.t2,b:"#fafafa"};
                return <div key={s.id} style={{display:"grid",gridTemplateColumns:"130px 1fr 100px 80px 120px 120px",gap:"8px",padding:"10px 14px",borderBottom:idx<bagliSp.length-1?`1px solid ${T.border}`:"none",background:idx%2===0?"#fff":"#fafafa",alignItems:"center"}}>
                  <div style={{fontSize:"13px",fontWeight:600,color:T.primary,fontFamily:"monospace"}}>{s.spNo||"—"}</div>
                  <div style={{fontSize:"13px",color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.firmaAd||"—"}</div>
                  <div style={{fontSize:"12px",color:T.t2}}>{s.siparisTarihi?fmtDate(s.siparisTarihi):"—"}</div>
                  <div style={{fontSize:"13px",fontWeight:500,color:T.text,textAlign:"right"}}>{mik.toLocaleString("tr-TR",{maximumFractionDigits:2})}</div>
                  <div style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right"}}>{tut.toLocaleString("tr-TR",{maximumFractionDigits:0})} ₺</div>
                  <div><span style={{fontSize:"11px",fontWeight:700,color:d.c,background:d.b,border:`1px solid ${d.c}40`,borderRadius:"10px",padding:"2px 10px"}}>{d.l}</span></div>
                </div>;
              })}
            </>}
        </div>}

        {/* ALIŞ FATURALARI SEKMESİ */}
        {modalTab==="af"&&<div style={{border:`1px solid ${T.border}`,borderRadius:T.r,overflow:"hidden"}}>
          {bagliAf.length===0
            ?<div style={{padding:"40px",textAlign:"center",color:T.t3,fontSize:"14px",background:"#fafafa"}}>Bu bütçe kalemine bağlı alış faturası yok.</div>
            :<>
              <div style={{display:"grid",gridTemplateColumns:"130px 1fr 100px 80px 120px 120px",gap:"8px",padding:"8px 14px",background:"#384248",color:"#fff"}}>
                {["AF No","Firma","Tarih","Miktar","Tutar (KDV Haric)","Durum"].map((h,i)=><div key={i} style={{fontSize:"11px",fontWeight:700,letterSpacing:"0.5px",textTransform:"uppercase",color:i>=3&&i<=5?"#8799a3":"#fff",textAlign:i===3||i===4?"right":"left"}}>{h}</div>)}
              </div>
              {bagliAf.map((f,idx)=>{
                const kl=(f.kalemler||[]).filter(k=>String(k.butceKalemiId)===String(fm.id));
                const mik=kl.reduce((t,k)=>t+(parseFloat(k.miktar)||0),0);
                const tut=kl.reduce((t,k)=>t+(parseFloat(k.miktar)||0)*(parseFloat(k.netFiyat)||0),0);
                const durumMap={beklemede:{l:"Beklemede",c:"#fa8c16",b:"#fff7e6"},kismi_odendi:{l:"Kısmi Ödendi",c:"#722ed1",b:"#f9f0ff"},odendi:{l:"Ödendi",c:"#52c41a",b:"#f6ffed"},iptal:{l:"İptal",c:"#ff4d4f",b:"#fff1f0"}};
                const o=durumMap[f.durum]||{l:f.durum||"—",c:T.t2,b:"#fafafa"};
                return <div key={f.id} style={{display:"grid",gridTemplateColumns:"130px 1fr 100px 80px 120px 120px",gap:"8px",padding:"10px 14px",borderBottom:idx<bagliAf.length-1?`1px solid ${T.border}`:"none",background:idx%2===0?"#fff":"#fafafa",alignItems:"center"}}>
                  <div style={{fontSize:"13px",fontWeight:600,color:T.primary,fontFamily:"monospace"}}>{f.afNo||f.faturaNo||"—"}</div>
                  <div style={{fontSize:"13px",color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{f.firmaAd||"—"}</div>
                  <div style={{fontSize:"12px",color:T.t2}}>{f.faturaTarihi?fmtDate(f.faturaTarihi):"—"}</div>
                  <div style={{fontSize:"13px",fontWeight:500,color:T.text,textAlign:"right"}}>{mik.toLocaleString("tr-TR",{maximumFractionDigits:2})}</div>
                  <div style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right"}}>{tut.toLocaleString("tr-TR",{maximumFractionDigits:0})} ₺</div>
                  <div><span style={{fontSize:"11px",fontWeight:700,color:o.c,background:o.b,border:`1px solid ${o.c}40`,borderRadius:"10px",padding:"2px 10px"}}>{o.l}</span></div>
                </div>;
              })}
            </>}
        </div>}
      </div>
    </div>
    {/* HESAPLAMA YARDIMCI MODAL */}
    {hesapModalAcik&&_hesaplamaVar&&(()=>{
      const sablonKey=_mlzRef.hesaplamaSablonu;
      return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:1100,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}}>
        <div style={{background:"#fff",borderRadius:T.rl,width:"100%",maxWidth:"900px",maxHeight:"90vh",display:"flex",flexDirection:"column",overflow:"hidden"}}>
          <div style={{padding:"12px 20px",background:"#384248",display:"flex",alignItems:"center",gap:"12px",borderRadius:`${T.rl} ${T.rl} 0 0`}}>
            <span style={{fontSize:"22px"}}>{HESAPLAMA_SABLONLARI[sablonKey].icon}</span>
            <div style={{flex:1}}>
              <div style={{fontSize:"15px",fontWeight:600,color:"#fff"}}>{HESAPLAMA_SABLONLARI[sablonKey].ad}</div>
              <div style={{fontSize:"11px",color:"#8799a3"}}>Yardımcı hesap — sonucu "Planlanan Fiyat" sekmesine aktarabilirsiniz</div>
            </div>
            <button onClick={()=>setHesapModalAcik(false)} style={{padding:"6px 14px",borderRadius:"6px",border:"1px solid #8799a3",background:"transparent",color:"#8799a3",fontSize:"12px",cursor:"pointer",fontWeight:600}}>Kapat</button>
          </div>
          <div style={{flex:1,overflow:"auto",padding:"20px"}}>
            <HesaplamaSekmesi
              kategori={_mlzRef.kategori}
              malzemeId={_mlzRef.id}
              malzemeAd={_mlzRef.ad}
              malzemeKodu={_mlzRef.malzemeKodu}
              zorSablon={sablonKey}
              kayitliParams={fm.hesaplamaParams||null}
              kayitliSonuc={fm.hesaplamaSonuc||null}
              onParamsChange={(p,s)=>{uf("hesaplamaParams",p);uf("hesaplamaSonuc",s);}}
              kdvOrani={_mlzRef.kdvOrani||"20"}
              onSonucAktar={(tutar)=>{
                // Sonucu aktif sekmeye yeni satır olarak ekle
                const anaSatir=fm.hesaplamaSonuc?.satirlar?.find(s=>s.ana);
                const miktar=anaSatir?anaSatir.deger:1;
                const birimFiyat=anaSatir&&anaSatir.deger>0?(tutar/anaSatir.deger):tutar;
                const aciklama=`Hesaplama: ${HESAPLAMA_SABLONLARI[sablonKey].ad}`;
                const yeniSatir={id:Date.now(),aciklama,miktar:String(miktar),birimFiyat:String(Math.round(birimFiyat*100)/100),kdvOrani:_mlzRef.kdvOrani||"20"};
                uf("planlananSatirlari",[...(fm.planlananSatirlari||[]),yeniSatir]);
                setHesapModalAcik(false);
                setHatalar(p=>({...p,planlanan:undefined}));
              }}
            />
          </div>
        </div>
      </div>;
    })()}
  </div>;
};

/* ========== OMURGA PICKER MODAL ========== */
const OmurgaPickerModal=({malzemeler,projeTuru,mevcutIds,onEkle,onClose})=>{
  const[src,setSrc]=useState("");
  const[fTip,setFTip]=useState("all");
  const[fGruplar,setFGruplar]=useState([]);
  const[secili,setSecili]=useState(new Set());

  // Proje türüne uygun omurga malzemeleri
  const omurgaMlz=useMemo(()=>malzemeler.filter(m=>(m.omurgaProjeTurleri||[]).includes(projeTuru)),[malzemeler,projeTuru]);

  // Mevcut grup listesi — grup koduna göre sıralı (üretim sırası)
  const gruplar=useMemo(()=>{
    const grupKodMap={};
    omurgaMlz.forEach(m=>{
      if(m.grupAd&&!(m.grupAd in grupKodMap))grupKodMap[m.grupAd]=m.grup||"";
    });
    return Object.keys(grupKodMap).sort((a,b)=>(grupKodMap[a]||"").localeCompare(grupKodMap[b]||"","tr"));
  },[omurgaMlz]);

  // Filtrelenmiş liste
  const filtered=useMemo(()=>{
    const q=nTR(src);
    return omurgaMlz.filter(m=>{
      const ms=nTR(m.ad).includes(q)||nTR(m.malzemeKodu).includes(q)||nTR(m.grupAd).includes(q);
      const mt=fTip==="all"||m.tip===fTip;
      const mg=fGruplar.length===0||fGruplar.includes(m.grupAd||"");
      return ms&&mt&&mg;
    });
  },[omurgaMlz,src,fTip,fGruplar]);

  // Seçilebilir (zaten eklenmemiş) kalemler
  const seciliebilir=filtered.filter(m=>!mevcutIds.has(m.id));
  const tumuSecili=seciliebilir.length>0&&seciliebilir.every(m=>secili.has(m.id));

  const toggle=(id)=>{setSecili(p=>{const n=new Set(p);if(n.has(id))n.delete(id);else n.add(id);return n;});};
  const tumunuSec=()=>{if(tumuSecili)setSecili(new Set());else setSecili(new Set(seciliebilir.map(m=>m.id)));};
  const grupToggle=(g)=>setFGruplar(p=>p.includes(g)?p.filter(x=>x!==g):[...p,g]);

  const ekle=()=>{
    const secilenler=omurgaMlz.filter(m=>secili.has(m.id));
    if(secilenler.length===0){alert("Hiç kalem seçmediniz.");return;}
    onEkle(secilenler);
    onClose();
  };

  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}}>
    <div style={{background:"#fff",borderRadius:T.rl,width:"100%",maxWidth:"900px",maxHeight:"85vh",display:"flex",flexDirection:"column",overflow:"hidden"}}>
      {/* HEADER */}
      <div style={{padding:"12px 20px",background:"#384248",display:"flex",alignItems:"center",gap:"16px",borderRadius:`${T.rl} ${T.rl} 0 0`}}>
        <button onClick={onClose} style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><MoveLeft size={24}/></button>
        <div style={{flex:1,textAlign:"center"}}>
          <div style={{fontSize:"15px",fontWeight:600,color:"#fff"}}>OMURGA KALEMLERİNİ SEÇ</div>
          <div style={{fontSize:"11px",color:"#8799a3",marginTop:"2px"}}>Proje Türü: <strong style={{color:"#fff"}}>{projeTuru}</strong> • {omurgaMlz.length} omurga kalemi</div>
        </div>
        <div style={{width:"24px"}}></div>
      </div>

      {/* FİLTRELER */}
      <div style={{padding:"12px 16px",borderBottom:`1px solid ${T.border}`,background:"#fafafa"}}>
        <div style={{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap",marginBottom:"10px"}}>
          <input style={{...iS,flex:1,minWidth:"200px"}} value={src} onChange={e=>setSrc(e.target.value)} placeholder="Ara: kod, ad, grup..." onFocus={foc} onBlur={blr}/>
          {MLZ_TIPLER.map(k=><button key={k.id} onClick={()=>setFTip(fTip===k.id?"all":k.id)} style={{padding:"6px 12px",borderRadius:"4px",border:`1px solid ${fTip===k.id?k.color:T.border}`,background:fTip===k.id?k.bg:"#fff",color:fTip===k.id?k.color:T.t2,fontSize:"12px",fontWeight:500,cursor:"pointer"}}>{k.icon} {k.label}</button>)}
        </div>
        {gruplar.length>0&&<div style={{display:"flex",gap:"6px",alignItems:"center",flexWrap:"wrap"}}>
          <span style={{fontSize:"11px",color:T.t3,fontWeight:600,textTransform:"uppercase",marginRight:"4px"}}>Gruplar:</span>
          {gruplar.map(g=>{const sel=fGruplar.includes(g);return <button key={g} onClick={()=>grupToggle(g)} style={{padding:"4px 10px",borderRadius:"12px",border:`1px solid ${sel?T.primary:T.border}`,background:sel?T.pBg:"#fff",color:sel?T.primary:T.t2,fontSize:"11px",fontWeight:500,cursor:"pointer"}}>{g}</button>;})}
          {fGruplar.length>0&&<button onClick={()=>setFGruplar([])} style={{padding:"4px 8px",border:"none",background:"transparent",color:T.t3,fontSize:"11px",cursor:"pointer",textDecoration:"underline"}}>temizle</button>}
        </div>}
      </div>

      {/* LİSTE BAŞLIK */}
      <div style={{display:"grid",gridTemplateColumns:"36px 110px 1fr 90px 150px 60px",gap:"8px",padding:"8px 16px",background:"#f5f7fa",borderBottom:`1px solid ${T.border}`,alignItems:"center"}}>
        <div><input type="checkbox" checked={tumuSecili} onChange={tumunuSec} style={{cursor:"pointer",width:"16px",height:"16px"}} disabled={seciliebilir.length===0}/></div>
        <div style={{fontSize:"11px",fontWeight:600,color:T.t2,textTransform:"uppercase"}}>Kod</div>
        <div style={{fontSize:"11px",fontWeight:600,color:T.t2,textTransform:"uppercase"}}>Malzeme/Hizmet</div>
        <div style={{fontSize:"11px",fontWeight:600,color:T.t2,textTransform:"uppercase"}}>Tip</div>
        <div style={{fontSize:"11px",fontWeight:600,color:T.t2,textTransform:"uppercase"}}>Grup</div>
        <div style={{fontSize:"11px",fontWeight:600,color:T.t2,textTransform:"uppercase"}}>Birim</div>
      </div>

      {/* LİSTE */}
      <div style={{flex:1,overflow:"auto"}}>
        {filtered.length===0
          ?<div style={{padding:"40px",textAlign:"center",color:T.t3}}>Sonuç bulunamadı</div>
          :filtered.map(m=>{
            const tip=MLZ_TIPLER.find(t=>t.id===m.tip);
            const ekli=mevcutIds.has(m.id);
            const isSel=secili.has(m.id);
            return <div key={m.id} onClick={ekli?undefined:()=>toggle(m.id)} style={{display:"grid",gridTemplateColumns:"36px 110px 1fr 90px 150px 60px",gap:"8px",padding:"10px 16px",borderBottom:`1px solid ${T.border}`,alignItems:"center",cursor:ekli?"not-allowed":"pointer",background:ekli?"#f5f5f5":(isSel?T.pBg:"#fff"),opacity:ekli?0.55:1}}
              onMouseEnter={e=>{if(!ekli&&!isSel)e.currentTarget.style.background="#fafafa";}} onMouseLeave={e=>{if(!ekli&&!isSel)e.currentTarget.style.background="#fff";}}>
              <div>
                <input type="checkbox" checked={ekli||isSel} disabled={ekli} onChange={()=>toggle(m.id)} onClick={e=>e.stopPropagation()} style={{cursor:ekli?"not-allowed":"pointer",width:"16px",height:"16px"}}/>
              </div>
              <div style={{fontSize:"12px",color:T.t3,fontFamily:"monospace"}}>{m.malzemeKodu}</div>
              <div style={{fontSize:"13px",fontWeight:500,color:T.text,display:"flex",alignItems:"center",gap:"8px"}}>
                {m.ad}
                {ekli&&<span style={{fontSize:"10px",padding:"2px 6px",borderRadius:"3px",background:"#d9d9d9",color:"#595959",fontWeight:600}}>EKLENDİ</span>}
              </div>
              <div>{tip&&<span style={{fontSize:"10px",padding:"2px 6px",borderRadius:"3px",background:tip.bg,color:tip.color,fontWeight:500}}>{tip.icon} {tip.label}</span>}</div>
              <div style={{fontSize:"11px",color:T.t2}}>{m.grupAd||"—"}</div>
              <div style={{fontSize:"12px",color:T.t2}}>{m.birim}</div>
            </div>;
          })}
      </div>

      {/* ALT BAR */}
      <div style={{padding:"12px 16px",borderTop:`1px solid ${T.border}`,background:"#fafafa",display:"flex",alignItems:"center",gap:"12px"}}>
        <div style={{fontSize:"13px",color:T.t2}}><strong style={{color:T.primary,fontSize:"15px"}}>{secili.size}</strong> kalem seçildi</div>
        <div style={{flex:1}}></div>
        <button onClick={onClose} style={{height:"36px",padding:"0 18px",borderRadius:T.r,border:`1px solid ${T.border}`,background:"#fff",color:T.t2,fontSize:"13px",cursor:"pointer"}}>İptal</button>
        <button onClick={ekle} disabled={secili.size===0} style={{height:"36px",padding:"0 20px",borderRadius:T.r,border:"none",background:secili.size===0?"#d9d9d9":T.primary,color:"#fff",fontSize:"13px",fontWeight:600,cursor:secili.size===0?"not-allowed":"pointer"}}>Seçilenleri Ekle ({secili.size})</button>
      </div>
    </div>
  </div>;
};

/* ========== MALZEME PICKER MODAL ========== */
const MalzemePickerModal=({malzemeler,onSelect,onClose})=>{
  const[src,setSrc]=useState("");
  const[fKat,setFKat]=useState("all");
  const filtered=malzemeler.filter(m=>{
    const q=nTR(src);
    const ms=nTR(m.ad).includes(q)||nTR(m.malzemeKodu).includes(q)||nTR(m.grupAd).includes(q);
    const mk=fKat==="all"||m.tip===fKat;
    return ms&&mk;
  });
  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}}>
    <div style={{background:"#fff",borderRadius:T.rl,width:"100%",maxWidth:"700px",maxHeight:"80vh",display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{padding:"12px 20px",background:"#384248",display:"flex",alignItems:"center",gap:"16px",borderRadius:`${T.rl} ${T.rl} 0 0`}}>
        <button onClick={onClose} style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><MoveLeft size={24}/></button>
        <span style={{fontSize:"15px",fontWeight:600,color:"#8799a3",flex:1,textAlign:"center"}}>MALZEME / HİZMET SEÇ</span>
      </div>
      <div style={{padding:"12px 16px",borderBottom:`1px solid ${T.border}`,display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"}}>
        <input style={{...iS,flex:1,minWidth:"200px"}} value={src} onChange={e=>setSrc(e.target.value)} placeholder="Ara: kod, ad, kategori..." onFocus={foc} onBlur={blr}/>
        {MLZ_TIPLER.map(k=><button key={k.id} onClick={()=>setFKat(fKat===k.id?"all":k.id)} style={{padding:"4px 10px",borderRadius:"4px",border:`1px solid ${fKat===k.id?k.color:T.border}`,background:fKat===k.id?k.bg:"#fff",color:fKat===k.id?k.color:T.t2,fontSize:"12px",fontWeight:500,cursor:"pointer"}}>{k.icon} {k.label}</button>)}
      </div>
      <div style={{flex:1,overflow:"auto",padding:"8px 16px"}}>
        {filtered.length===0?<div style={{padding:"40px",textAlign:"center",color:T.t3}}>Sonuç bulunamadı</div>:
        filtered.map(m=><div key={m.id} onClick={()=>{onSelect(m);onClose();}} style={{display:"grid",gridTemplateColumns:"130px 1fr 80px",gap:"8px",padding:"10px 12px",borderBottom:`1px solid ${T.border}`,cursor:"pointer",alignItems:"center"}}
          onMouseEnter={e=>e.currentTarget.style.background=T.pBg} onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
          <div style={{fontSize:"12px",color:T.t3}}>{m.malzemeKodu}</div>
          <div style={{fontSize:"14px",fontWeight:500,color:T.text}}>{m.ad}</div>
          <div style={{fontSize:"12px",color:T.t2}}>{m.birim}</div>
        </div>)}
      </div>
    </div>
  </div>;
};

// Sipariş Seçici Modal — alış faturası için SP seçimi
const SiparisSeciciModal=({siparisler=[],mode="single",onSelect,onConfirm,onClose,kullanilmisKalemSet=new Set()})=>{
  const[src,setSrc]=useState("");
  const[expanded,setExpanded]=useState({});
  const[secili,setSecili]=useState({});
  const q=nTR(src);
  const filtered=siparisler.filter(s=>{
    if(!q)return true;
    return nTR(s.spNo).includes(q)||nTR(s.firmaAd).includes(q)||nTR(s.projeAd).includes(q)||(s.kalemler||[]).some(k=>nTR(k.malzemeAd).includes(q));
  });
  const autoExpanded={...expanded};
  if(q){filtered.forEach(s=>{if((s.kalemler||[]).some(k=>nTR(k.malzemeAd).includes(q)))autoExpanded[s.id]=true;});}
  const toplamHesapla=(kalemler)=>{let t=0;(kalemler||[]).forEach(k=>{t+=(parseFloat(k.miktar)||0)*(parseFloat(k.netFiyat)||0);});return t;};
  const isMulti=mode==="multi";
  const toggleExpand=(id)=>setExpanded(p=>({...p,[id]:!p[id]}));
  const kalemKey=(spId,kId)=>`${spId}:${kId}`;
  const isKalemSecili=(spId,kId)=>!!secili[kalemKey(spId,kId)];
  const isKalemEkli=(spId,kId)=>kullanilmisKalemSet.has(kalemKey(spId,kId));
  const toggleKalem=(sp,k)=>{
    if(isKalemEkli(sp.id,k.id))return;
    const key=kalemKey(sp.id,k.id);
    setSecili(p=>{const n={...p};if(n[key])delete n[key];else n[key]={sp,kalem:k};return n;});
  };
  const anaKalemState=(sp)=>{
    const kls=(sp.kalemler||[]).filter(k=>!isKalemEkli(sp.id,k.id));
    if(kls.length===0)return"disabled";
    const cnt=kls.filter(k=>isKalemSecili(sp.id,k.id)).length;
    if(cnt===0)return"unchecked";if(cnt===kls.length)return"checked";return"indeterminate";
  };
  const toggleSp=(sp)=>{
    const kls=(sp.kalemler||[]).filter(k=>!isKalemEkli(sp.id,k.id));
    if(kls.length===0)return;
    const tumSec=kls.every(k=>isKalemSecili(sp.id,k.id));
    setSecili(p=>{
      const n={...p};
      kls.forEach(k=>{const key=kalemKey(sp.id,k.id);if(tumSec)delete n[key];else n[key]={sp,kalem:k};});
      return n;
    });
    if(!autoExpanded[sp.id])setExpanded(p=>({...p,[sp.id]:true}));
  };
  const seciliCount=Object.keys(secili).length;
  const handleConfirm=()=>{if(seciliCount>0&&onConfirm){onConfirm(Object.values(secili));onClose();}};
  const cbxS=(checked,indet,disabled)=>({width:"16px",height:"16px",borderRadius:"3px",border:`2px solid ${disabled?"#d9d9d9":(checked||indet?"#1677ff":T.t3)}`,background:checked?"#1677ff":indet?"#e6f4ff":"#fff",display:"flex",alignItems:"center",justifyContent:"center",cursor:disabled?"not-allowed":"pointer",flexShrink:0,transition:"all .15s",opacity:disabled?0.5:1});
  const gridCols=isMulti?"24px 24px 100px 1fr 110px 70px 100px 80px":"100px 1fr 120px 80px 110px 90px";
  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}}>
    <div style={{background:"#fff",borderRadius:T.rl,width:"100%",maxWidth:isMulti?"960px":"800px",maxHeight:"82vh",display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{padding:"12px 20px",background:"#384248",display:"flex",alignItems:"center",gap:"16px",borderRadius:`${T.rl} ${T.rl} 0 0`}}>
        <button onClick={onClose} style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><MoveLeft size={24}/></button>
        <span style={{fontSize:"15px",fontWeight:600,color:"#8799a3",flex:1,textAlign:"center"}}>{isMulti?"SİPARİŞTEN KALEM EKLE":"SATINALMA SİPARİŞİ SEÇ"} ({filtered.length})</span>
      </div>
      <div style={{padding:"12px 16px",borderBottom:`1px solid ${T.border}`}}>
        <input style={{width:"100%",padding:"8px 12px",borderRadius:"6px",border:`1px solid ${T.bDark}`,fontSize:"14px",outline:"none",boxSizing:"border-box"}} value={src} onChange={e=>setSrc(e.target.value)} placeholder="Ara: SP no, firma, proje, malzeme..." autoFocus/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:gridCols,gap:"8px",padding:"8px 16px",background:"#fafafa",borderBottom:`1px solid ${T.border}`,fontSize:"10px",fontWeight:700,color:T.t2,textTransform:"uppercase"}}>
        {isMulti?<><div></div><div></div><div>SP NO</div><div>FİRMA / MALZEME</div><div>PROJE</div><div style={{textAlign:"center"}}>KALEM</div><div style={{textAlign:"right"}}>TUTAR</div><div style={{textAlign:"center"}}>DURUM</div></>
                :<><div>SP NO</div><div>FİRMA</div><div>PROJE</div><div style={{textAlign:"center"}}>KALEM</div><div style={{textAlign:"right"}}>TUTAR</div><div style={{textAlign:"center"}}>DURUM</div></>}
      </div>
      <div style={{flex:1,overflow:"auto"}}>
        {filtered.length===0?<div style={{padding:"40px",textAlign:"center",color:T.t3,fontSize:"13px"}}>Sonuç bulunamadı</div>:
        filtered.map((s,idx)=>{
          const top=toplamHesapla(s.kalemler);
          if(!isMulti){
            return <div key={s.id} onClick={()=>{onSelect(s);onClose();}} style={{display:"grid",gridTemplateColumns:gridCols,gap:"8px",padding:"10px 16px",borderBottom:`1px solid ${T.border}`,cursor:"pointer",alignItems:"center",background:idx%2===0?"#fff":"#fafafa"}}
              onMouseEnter={e=>e.currentTarget.style.background=T.pBg}
              onMouseLeave={e=>e.currentTarget.style.background=idx%2===0?"#fff":"#fafafa"}>
              <div style={{fontSize:"13px",fontWeight:600,color:"#52c41a",fontFamily:"monospace"}}>{s.spNo}</div>
              <div style={{fontSize:"13px",fontWeight:500,color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.firmaAd||"—"}</div>
              <div style={{fontSize:"12px",color:T.t2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.projeAd||"—"}</div>
              <div style={{fontSize:"13px",fontWeight:600,color:T.t2,textAlign:"center"}}>{(s.kalemler||[]).length}</div>
              <div style={{fontSize:"13px",fontWeight:600,textAlign:"right"}}>{top>0?top.toLocaleString("tr-TR",{minimumFractionDigits:2})+" ₺":"—"}</div>
              <div style={{textAlign:"center"}}><span style={{fontSize:"10px",fontWeight:700,padding:"2px 8px",borderRadius:"10px",background:s.durum==="onaylandi"?"#f6ffed":s.durum==="taslak"?"#f5f5f5":"#e6f4ff",color:s.durum==="onaylandi"?"#52c41a":s.durum==="taslak"?"#8c8c8c":"#1677ff",border:`1px solid ${s.durum==="onaylandi"?"#b7eb8f":s.durum==="taslak"?"#d9d9d9":"#91caff"}`}}>{s.durum==="onaylandi"?"Onaylı":s.durum==="taslak"?"Taslak":s.durum||"—"}</span></div>
            </div>;
          }
          // MULTI MODE — expandable SP + kalemler
          const kls=s.kalemler||[];
          const anaState=anaKalemState(s);
          const isOpen=autoExpanded[s.id]===true;
          const allEkli=anaState==="disabled";
          const anaBg=idx%2===0?"#fff":"#fafafa";
          return <div key={s.id}>
            <div onClick={()=>toggleExpand(s.id)} style={{display:"grid",gridTemplateColumns:gridCols,gap:"8px",padding:"10px 16px",borderBottom:`1px solid ${T.border}`,cursor:"pointer",alignItems:"center",background:allEkli?"#f5f5f5":anaBg,opacity:allEkli?0.65:1}}
              onMouseEnter={e=>{if(!allEkli)e.currentTarget.style.background=T.pBg;}}
              onMouseLeave={e=>{if(!allEkli)e.currentTarget.style.background=anaBg;}}>
              <div onClick={e=>{e.stopPropagation();toggleSp(s);}} style={cbxS(anaState==="checked",anaState==="indeterminate",allEkli)}>
                {anaState==="checked"&&<Check size={12} color="#fff"/>}
                {anaState==="indeterminate"&&<div style={{width:"8px",height:"2px",background:"#1677ff",borderRadius:"1px"}}/>}
              </div>
              <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>{kls.length>0?(isOpen?<ChevronDown size={16} style={{color:T.t2}}/>:<ChevronRight size={16} style={{color:T.t2}}/>):null}</div>
              <div style={{fontSize:"13px",fontWeight:600,color:"#52c41a",fontFamily:"monospace"}}>{s.spNo}</div>
              <div style={{fontSize:"13px",fontWeight:500,color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"8px"}}>
                <span style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.firmaAd||"—"}</span>
                {allEkli&&<span style={{fontSize:"10px",padding:"2px 6px",borderRadius:"3px",background:"#d9d9d9",color:"#595959",fontWeight:600,flexShrink:0}}>TÜMÜ EKLENDİ</span>}
              </div>
              <div style={{fontSize:"12px",color:T.t2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.projeAd||"—"}</div>
              <div style={{fontSize:"13px",fontWeight:600,color:T.t2,textAlign:"center"}}>{kls.length}</div>
              <div style={{fontSize:"13px",fontWeight:600,textAlign:"right"}}>{top>0?top.toLocaleString("tr-TR",{minimumFractionDigits:2})+" ₺":"—"}</div>
              <div style={{textAlign:"center"}}><span style={{fontSize:"10px",fontWeight:700,padding:"2px 8px",borderRadius:"10px",background:s.durum==="onaylandi"?"#f6ffed":s.durum==="taslak"?"#f5f5f5":"#e6f4ff",color:s.durum==="onaylandi"?"#52c41a":s.durum==="taslak"?"#8c8c8c":"#1677ff",border:`1px solid ${s.durum==="onaylandi"?"#b7eb8f":s.durum==="taslak"?"#d9d9d9":"#91caff"}`}}>{s.durum==="onaylandi"?"Onaylı":s.durum==="taslak"?"Taslak":s.durum||"—"}</span></div>
            </div>
            {isOpen&&kls.map((k,ki)=>{
              const kEkli=isKalemEkli(s.id,k.id);
              const kSec=isKalemSecili(s.id,k.id);
              const kTut=(parseFloat(k.miktar)||0)*(parseFloat(k.netFiyat)||0);
              const kBg=kEkli?"#f5f5f5":(kSec?"#e6f4ff":"#fafcff");
              return <div key={k.id||ki} onClick={e=>{e.stopPropagation();if(!kEkli)toggleKalem(s,k);}}
                style={{display:"grid",gridTemplateColumns:gridCols,gap:"8px",padding:"8px 16px 8px 44px",borderBottom:`1px solid ${T.border}`,cursor:kEkli?"not-allowed":"pointer",alignItems:"center",background:kBg,borderLeft:`3px solid ${kEkli?"#d9d9d9":(kSec?"#1677ff":"#91caff")}`,opacity:kEkli?0.55:1}}
                onMouseEnter={e=>{if(!kEkli)e.currentTarget.style.background="#e6f4ff";}}
                onMouseLeave={e=>{if(!kEkli)e.currentTarget.style.background=kBg;}}>
                <div onClick={e=>{e.stopPropagation();if(!kEkli)toggleKalem(s,k);}} style={cbxS(kSec,false,kEkli)}>
                  {kSec&&<Check size={12} color="#fff"/>}
                </div>
                <div style={{fontSize:"10px",color:T.t3,textAlign:"center"}}>↳</div>
                <div style={{fontSize:"11px",color:T.t3,fontFamily:"monospace"}}>{k.malzemeKodu||"—"}</div>
                <div style={{fontSize:"12px",fontWeight:500,color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"8px"}}>
                  <span style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{k.malzemeAd||"—"} {k.miktar>0&&<span style={{color:T.t3,fontWeight:400,marginLeft:"6px"}}>· {parseFloat(k.miktar).toLocaleString("tr-TR")} {k.birim||""}</span>}</span>
                  {kEkli&&<span style={{fontSize:"10px",padding:"2px 6px",borderRadius:"3px",background:"#d9d9d9",color:"#595959",fontWeight:600,flexShrink:0}}>EKLENDİ</span>}
                </div>
                <div></div>
                <div style={{fontSize:"11px",color:T.t2,textAlign:"right"}}>{parseFloat(k.netFiyat||0).toLocaleString("tr-TR",{maximumFractionDigits:2})} ₺</div>
                <div style={{fontSize:"12px",fontWeight:600,textAlign:"right"}}>{kTut>0?kTut.toLocaleString("tr-TR",{maximumFractionDigits:0})+" ₺":"—"}</div>
                <div></div>
              </div>;
            })}
          </div>;
        })}
      </div>
      {isMulti&&<div style={{padding:"10px 16px",background:"#f0f5ff",borderTop:`1px solid ${T.border}`,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <span style={{fontSize:"12px",color:T.t2}}>{seciliCount>0?`${seciliCount} kalem seçildi`:"Eklemek istediğiniz kalemleri seçin"}</span>
        <div style={{display:"flex",gap:"8px"}}>
          <button onClick={onClose} style={{padding:"6px 16px",borderRadius:"6px",border:`1px solid ${T.border}`,background:"#fff",color:T.t2,fontSize:"13px",cursor:"pointer"}}>Vazgeç</button>
          <button onClick={handleConfirm} disabled={seciliCount===0} style={{padding:"6px 20px",borderRadius:"6px",border:"none",background:seciliCount>0?T.primary:"#d9d9d9",color:"#fff",fontSize:"13px",cursor:seciliCount>0?"pointer":"not-allowed",fontWeight:600}}>Seçilenleri Ekle ({seciliCount})</button>
        </div>
      </div>}
    </div>
  </div>;
};

// Bütçe Kalemi Seçici Modal — mode="single" (tekil eşleştirme) | "multi" (çoklu seçim → toplu kalem ekleme)
const ButceKalemiSeciciModal=({butceKalemleri=[],mode="single",onSelect,onConfirm,onClose,kullanilmisHaritasi={}})=>{
  const[src,setSrc]=useState("");
  const[expanded,setExpanded]=useState({});
  const[secili,setSecili]=useState({}); // multi mod: {"bkId:satirId": {bk, satirId}}
  const q=nTR(src);
  const kulKey=(bkId,satirId)=>`${bkId}:${satirId||"null"}`;
  const kulEkli=(bkId,satirId)=>Array.isArray(kullanilmisHaritasi[kulKey(bkId,satirId)])&&kullanilmisHaritasi[kulKey(bkId,satirId)].length>0;
  const kulEtiket=(bkId,satirId)=>(kullanilmisHaritasi[kulKey(bkId,satirId)]||[]).join(" · ");
  const anaKalemKullanilmis=(bk)=>{
    const sat=bk.planlananSatirlari||[];
    if(sat.length===0)return kulEkli(bk.id,null);
    return sat.every(s=>kulEkli(bk.id,s.id));
  };
  const filtered=butceKalemleri.filter(b=>{
    if(!q)return true;
    if(nTR(b.malzemeKodu).includes(q))return true;
    if(nTR(b.malzemeAd).includes(q))return true;
    if(nTR(b.aciklama).includes(q))return true;
    if(nTR((b.bloklar||[]).join(" ")).includes(q))return true;
    return(b.planlananSatirlari||[]).some(s=>nTR(s.aciklama).includes(q));
  });
  const autoExpanded={...expanded};
  if(q){filtered.forEach(b=>{if((b.planlananSatirlari||[]).some(s=>nTR(s.aciklama).includes(q)))autoExpanded[b.id]=true;});}
  const toggleExpand=(id)=>setExpanded(p=>({...p,[id]:!p[id]}));
  // Multi mode helpers
  const secKey=(bkId,satirId)=>`${bkId}:${satirId||"null"}`;
  const isChecked=(bkId,satirId)=>!!secili[secKey(bkId,satirId)];
  const toggleItem=(bk,satirId)=>{
    const k=secKey(bk.id,satirId);
    setSecili(p=>{const n={...p};if(n[k])delete n[k];else n[k]={bk,satirId};return n;});
  };
  const toggleAnaKalem=(bk)=>{
    const satirlar=bk.planlananSatirlari||[];
    if(satirlar.length===0){toggleItem(bk,null);return;}
    // Alt satırı var: tümünü toggle
    const tumSecili=satirlar.every(s=>isChecked(bk.id,s.id));
    setSecili(p=>{
      const n={...p};
      satirlar.forEach(s=>{const k=secKey(bk.id,s.id);if(tumSecili)delete n[k];else n[k]={bk,satirId:s.id};});
      return n;
    });
    if(!autoExpanded[bk.id])setExpanded(p=>({...p,[bk.id]:true}));
  };
  const anaKalemState=(bk)=>{
    const satirlar=bk.planlananSatirlari||[];
    if(satirlar.length===0)return isChecked(bk.id,null)?"checked":"unchecked";
    const cnt=satirlar.filter(s=>isChecked(bk.id,s.id)).length;
    if(cnt===0)return"unchecked";if(cnt===satirlar.length)return"checked";return"indeterminate";
  };
  const seciliCount=Object.keys(secili).length;
  const handleConfirm=()=>{if(seciliCount>0&&onConfirm){onConfirm(Object.values(secili));onClose();}};
  // Checkbox stil
  const cbxS=(checked,indet)=>({width:"16px",height:"16px",borderRadius:"3px",border:`2px solid ${checked||indet?"#1677ff":T.t3}`,background:checked?"#1677ff":indet?"#e6f4ff":"#fff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0,transition:"all .15s"});
  const isMulti=mode==="multi";
  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}}>
    <div style={{background:"#fff",borderRadius:T.rl,width:"100%",maxWidth:"880px",maxHeight:"82vh",display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{padding:"12px 20px",background:"#384248",display:"flex",alignItems:"center",gap:"16px",borderRadius:`${T.rl} ${T.rl} 0 0`}}>
        <button onClick={onClose} style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><MoveLeft size={24}/></button>
        <span style={{fontSize:"15px",fontWeight:600,color:"#8799a3",flex:1,textAlign:"center"}}>{isMulti?"BÜTÇEDEN KALEM EKLE":"BÜTÇE KALEMİ SEÇ"} ({filtered.length})</span>
      </div>
      <div style={{padding:"12px 16px",borderBottom:`1px solid ${T.border}`}}>
        <input style={{...iS,fontSize:"14px"}} value={src} onChange={e=>setSrc(e.target.value)} placeholder="Ara: kod, malzeme adı, alt satır açıklaması, blok..." onFocus={foc} onBlur={blr} autoFocus/>
      </div>
      {/* Tablo başlığı */}
      <div style={{display:"grid",gridTemplateColumns:isMulti?"24px 24px 110px 1fr 100px 70px 70px":"24px 110px 1fr 100px 70px 70px",gap:"8px",padding:"8px 16px",background:"#fafafa",borderBottom:`1px solid ${T.border}`,fontSize:"10px",fontWeight:700,color:T.t2,textTransform:"uppercase"}}>
        {isMulti&&<div></div>}
        <div></div>
        <div>KOD</div>
        <div>MALZEME / AÇIKLAMA</div>
        <div style={{textAlign:"right"}}>PLAN. TUTAR</div>
        <div>BLOK</div>
        <div style={{textAlign:"center"}}>DURUM</div>
      </div>
      <div style={{flex:1,overflow:"auto"}}>
        {filtered.length===0?<div style={{padding:"40px",textAlign:"center",color:T.t3,fontSize:"13px"}}>Sonuç bulunamadı</div>:
        filtered.map((b,idx)=>{
          const tamam=b.tamamlandi===true;
          const pt=parseFloat(b.planlananToplam||0);
          const blokStr=(b.bloklar||[]).join("+")||"—";
          const satirlar=b.planlananSatirlari||[];
          const altVar=satirlar.length>0;
          const isOpen=autoExpanded[b.id]===true;
          const anaBg=tamam?"#f6ffed":(idx%2===0?"#fff":"#fafafa");
          const anaState=isMulti?anaKalemState(b):null;
          const gridCols=isMulti?"24px 24px 110px 1fr 100px 70px 70px":"24px 110px 1fr 100px 70px 70px";
          const anaEkli=anaKalemKullanilmis(b);
          const anaEtiket=altVar?"":kulEtiket(b.id,null);
          return <div key={b.id}>
            {/* ANA KALEM */}
            <div onClick={()=>{
              if(anaEkli)return;
              if(!isMulti){if(altVar)toggleExpand(b.id);else{onSelect(b,null);onClose();}}
              else{if(altVar)toggleExpand(b.id);else toggleItem(b,null);}
            }} title={anaEkli&&anaEtiket?`Kullanıldı: ${anaEtiket}`:undefined} style={{display:"grid",gridTemplateColumns:gridCols,gap:"8px",padding:"10px 16px",borderBottom:`1px solid ${T.border}`,cursor:anaEkli?"not-allowed":"pointer",alignItems:"center",background:anaEkli?"#f5f5f5":anaBg,opacity:anaEkli?0.55:1}}
              onMouseEnter={e=>{if(!anaEkli)e.currentTarget.style.background=T.pBg;}}
              onMouseLeave={e=>{if(!anaEkli)e.currentTarget.style.background=anaBg;}}>
              {isMulti&&<div onClick={e=>{e.stopPropagation();if(!anaEkli)toggleAnaKalem(b);}} style={{...cbxS(anaState==="checked",anaState==="indeterminate"),cursor:anaEkli?"not-allowed":"pointer",opacity:anaEkli?0.5:1}}>
                {anaState==="checked"&&<Check size={12} color="#fff"/>}
                {anaState==="indeterminate"&&<div style={{width:"8px",height:"2px",background:"#1677ff",borderRadius:"1px"}}/>}
              </div>}
              <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                {altVar?(isOpen?<ChevronDown size={16} style={{color:T.t2}}/>:<ChevronRight size={16} style={{color:T.t2}}/>):null}
              </div>
              <div style={{fontSize:"12px",color:tamam?"#52c41a":T.t3,fontFamily:"monospace"}}>{b.malzemeKodu||"—"}</div>
              <div style={{fontSize:"13px",fontWeight:600,color:tamam?"#52c41a":T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"8px"}}>
                <span style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{b.malzemeAd||"—"}</span>
                {altVar&&<span style={{fontSize:"10px",fontWeight:600,color:T.t3,background:"#f0f0f0",padding:"1px 6px",borderRadius:"8px",flexShrink:0}}>{satirlar.length} alt</span>}
                {anaEkli&&<span style={{fontSize:"10px",padding:"2px 6px",borderRadius:"3px",background:"#d9d9d9",color:"#595959",fontWeight:600,flexShrink:0}}>EKLENDİ</span>}
              </div>
              <div style={{fontSize:"13px",fontWeight:600,color:pt>0?T.text:T.t3,textAlign:"right"}}>{pt>0?pt.toLocaleString("tr-TR",{minimumFractionDigits:2})+" ₺":"—"}</div>
              <div style={{fontSize:"11px",fontWeight:600,color:(b.bloklar||[]).length>1?"#d48806":"#1677ff"}}>{blokStr}</div>
              <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                {tamam?<span style={{fontSize:"9px",fontWeight:700,color:"#52c41a",background:"#f6ffed",border:"1px solid #b7eb8f",borderRadius:"10px",padding:"2px 6px"}}>Tamam</span>
                :pt<=0?<span style={{fontSize:"9px",fontWeight:700,color:"#8c8c8c",background:"#f5f5f5",border:"1px solid #d9d9d9",borderRadius:"10px",padding:"2px 6px"}}>Plansız</span>
                :<span style={{fontSize:"9px",fontWeight:700,color:"#1677ff",background:"#e6f4ff",border:"1px solid #91caff",borderRadius:"10px",padding:"2px 6px"}}>Açık</span>}
              </div>
            </div>
            {/* ALT SATIRLAR */}
            {altVar&&isOpen&&satirlar.map((s,si)=>{
              const sBf=parseFloat(s.birimFiyat||0);
              const sMik=parseFloat(s.miktar||0);
              const sTop=sBf*sMik;
              const sTamam=s.tamamlandi===true;
              const sEkli=kulEkli(b.id,s.id);
              const sEtiket=kulEtiket(b.id,s.id);
              const sSecili=isMulti&&isChecked(b.id,s.id);
              const sBg=sEkli?"#f5f5f5":(sSecili?"#e6f4ff":sTamam?"#f6ffed":"#fafcff");
              return <div key={s.id||si} onClick={e=>{
                e.stopPropagation();
                if(sEkli)return;
                if(!isMulti){onSelect(b,s.id);onClose();}
                else toggleItem(b,s.id);
              }} title={sEkli&&sEtiket?`Kullanıldı: ${sEtiket}`:undefined}
                style={{display:"grid",gridTemplateColumns:gridCols,gap:"8px",padding:"8px 16px 8px 36px",borderBottom:`1px solid ${T.border}`,cursor:sEkli?"not-allowed":"pointer",alignItems:"center",background:sBg,borderLeft:`3px solid ${sEkli?"#d9d9d9":(sSecili?"#1677ff":"#91caff")}`,opacity:sEkli?0.55:1}}
                onMouseEnter={e=>{if(!sEkli)e.currentTarget.style.background="#e6f4ff";}}
                onMouseLeave={e=>{if(!sEkli)e.currentTarget.style.background=sBg;}}>
                {isMulti&&<div onClick={e=>{e.stopPropagation();if(!sEkli)toggleItem(b,s.id);}} style={{...cbxS(sSecili,false),cursor:sEkli?"not-allowed":"pointer",opacity:sEkli?0.5:1}}>
                  {sSecili&&<Check size={12} color="#fff"/>}
                </div>}
                <div style={{fontSize:"10px",color:T.t3,textAlign:"center"}}>↳</div>
                <div style={{fontSize:"11px",color:T.t3,fontFamily:"monospace"}}>#{s.siraNo||(si+1)}</div>
                <div style={{fontSize:"12px",fontWeight:500,color:sTamam?"#52c41a":T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"8px"}}>
                  <span style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.aciklama||<span style={{color:T.t3,fontStyle:"italic"}}>(açıklama yok)</span>} {sMik>0&&<span style={{color:T.t3,fontWeight:400,marginLeft:"6px"}}>· {sMik.toLocaleString("tr-TR")} {b.birim||""}</span>}</span>
                  {sEkli&&<span style={{fontSize:"10px",padding:"2px 6px",borderRadius:"3px",background:"#d9d9d9",color:"#595959",fontWeight:600,flexShrink:0}}>EKLENDİ</span>}
                </div>
                <div style={{fontSize:"12px",fontWeight:600,color:sTop>0?T.text:T.t3,textAlign:"right"}}>{sTop>0?sTop.toLocaleString("tr-TR",{minimumFractionDigits:2})+" ₺":"—"}</div>
                <div></div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                  {sTamam?<span style={{fontSize:"9px",fontWeight:700,color:"#52c41a",background:"#f6ffed",border:"1px solid #b7eb8f",borderRadius:"10px",padding:"1px 6px"}}>Tamam</span>
                  :<span style={{fontSize:"9px",fontWeight:700,color:"#1677ff",background:"#e6f4ff",border:"1px solid #91caff",borderRadius:"10px",padding:"1px 6px"}}>Açık</span>}
                </div>
              </div>;
            })}
          </div>;
        })}
      </div>
      {/* Alt bar — multi modda "Seçilenleri Ekle" butonu */}
      {isMulti?<div style={{padding:"10px 16px",background:"#f0f5ff",borderTop:`1px solid ${T.border}`,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <span style={{fontSize:"12px",color:T.t2}}>{seciliCount>0?`${seciliCount} kalem seçildi`:"Eklemek istediğiniz kalemleri seçin"}</span>
        <div style={{display:"flex",gap:"8px"}}>
          <button onClick={onClose} style={{padding:"6px 16px",borderRadius:"6px",border:`1px solid ${T.border}`,background:"#fff",color:T.t2,fontSize:"13px",cursor:"pointer"}}>Vazgeç</button>
          <button onClick={handleConfirm} disabled={seciliCount===0} style={{padding:"6px 20px",borderRadius:"6px",border:"none",background:seciliCount>0?T.primary:"#d9d9d9",color:"#fff",fontSize:"13px",cursor:seciliCount>0?"pointer":"not-allowed",fontWeight:600}}>Seçilenleri Ekle ({seciliCount})</button>
        </div>
      </div>
      :<div style={{padding:"8px 16px",background:"#fafafa",borderTop:`1px solid ${T.border}`,fontSize:"11px",color:T.t3,textAlign:"center"}}>
        Alt satiri olan kalemlerde ana satira tiklayip aç, alt satiri seç.
      </div>}
    </div>
  </div>;
};

/* ========== MALİYET YÖNETİMİ ========== */
const MaliyetPage=({projeler,setProjeler,malzemeler,faturalar=[],siparisler=[],firmalar=[],butceKalemleri:butceKalemleriGlobal=[],saveButceKalemi:saveBKProp,delButceKalemi:delBKProp,bulkSaveButceKalemleri:bulkSaveBKProp})=>{
  const[selProjeId,setSelProjeId]=useState(null);
  const[butceModal,setButceModal]=useState(null);
  const[filtre,setFiltre]=useState("hepsi");
  const[kalemAra,setKalemAra]=useState("");
  const[pickerOpen,setPickerOpen]=useState(false);
  const[omurgaPickerOpen,setOmurgaPickerOpen]=useState(false);
  const[aktifSekme,setAktifSekme]=useState("dashboard");
  const[siralama,setSiralama]=useState({alan:"mlzKodu",yon:"asc"});
  const siraToggle=(alan)=>setSiralama(p=>p.alan===alan?{alan,yon:p.yon==="asc"?"desc":"asc"}:{alan,yon:"asc"});
  const selProje=projeler.find(p=>p.id===selProjeId);

  // Fiyatlandırma state
  const[fiyatForm,setFiyatForm]=useState({ongorulenM2KdvHaric:"",ongorulenM2KdvDahil:"",karMarjiYuzde:"",varsayilanKdvOrani:"20"});
  const[fiyatSaved,setFiyatSaved]=useState(false);
  useEffect(()=>{
    if(selProje){
      setFiyatForm({
        ongorulenM2KdvHaric:selProje.ongorulenM2KdvHaric||"",
        ongorulenM2KdvDahil:selProje.ongorulenM2KdvDahil||"",
        karMarjiYuzde:selProje.karMarjiYuzde||"",
        varsayilanKdvOrani:selProje.varsayilanKdvOrani||"20"
      });
    }
  },[selProjeId]);
  const fiyatHaricChange=(v)=>{
    const cleaned=v.replace(/[^0-9.,]/g,"").replace(",",".");
    const kdv=parseFloat(fiyatForm.varsayilanKdvOrani||"20");
    const haricN=parseFloat(cleaned);
    const dahilStr=!isNaN(haricN)?String(Math.round(haricN*(1+kdv/100)*100)/100):"";
    setFiyatForm(p=>({...p,ongorulenM2KdvHaric:cleaned,ongorulenM2KdvDahil:dahilStr}));
  };
  const fiyatDahilChange=(v)=>{
    const cleaned=v.replace(/[^0-9.,]/g,"").replace(",",".");
    const kdv=parseFloat(fiyatForm.varsayilanKdvOrani||"20");
    const dahilN=parseFloat(cleaned);
    const haricStr=!isNaN(dahilN)?String(Math.round(dahilN/(1+kdv/100)*100)/100):"";
    setFiyatForm(p=>({...p,ongorulenM2KdvDahil:cleaned,ongorulenM2KdvHaric:haricStr}));
  };
  const fiyatKdvChange=(v)=>{
    const kdv=parseFloat(v);
    const haricN=parseFloat(fiyatForm.ongorulenM2KdvHaric);
    const dahilStr=!isNaN(haricN)?String(Math.round(haricN*(1+kdv/100)*100)/100):"";
    setFiyatForm(p=>({...p,varsayilanKdvOrani:v,ongorulenM2KdvDahil:dahilStr}));
  };
  const fiyatKaydet=async()=>{
    if(!selProjeId)return;
    try{
      await sbPatch('projeler',selProjeId,{
        ongorulen_m2_kdv_haric:fiyatForm.ongorulenM2KdvHaric!==""&&fiyatForm.ongorulenM2KdvHaric!=null?Number(fiyatForm.ongorulenM2KdvHaric):null,
        ongorulen_m2_kdv_dahil:fiyatForm.ongorulenM2KdvDahil!==""&&fiyatForm.ongorulenM2KdvDahil!=null?Number(fiyatForm.ongorulenM2KdvDahil):null,
        kar_marji_yuzde:fiyatForm.karMarjiYuzde!==""&&fiyatForm.karMarjiYuzde!=null?Number(fiyatForm.karMarjiYuzde):null,
        varsayilan_kdv_orani:fiyatForm.varsayilanKdvOrani||"20"
      });
      setProjeler(prev=>prev.map(p=>p.id===selProjeId?{...p,...fiyatForm}:p));
      setFiyatSaved(true);setTimeout(()=>setFiyatSaved(false),2000);
    }catch(e){console.error("Fiyatlandırma kayıt hatası:",e.message);alert("Kayıt başarısız: "+e.message);}
  };

  // Blok bazlı fiyatlandırma state
  const[blokFiyatForm,setBlokFiyatForm]=useState({});
  const[blokFiyatSaved,setBlokFiyatSaved]=useState({});
  useEffect(()=>{
    if(selProje&&selProje.bloklar){
      const m={};
      selProje.bloklar.forEach(bl=>{
        m[bl.id]={
          ongorulenM2KdvHaric:bl.ongorulenM2KdvHaric||"",
          ongorulenM2KdvDahil:bl.ongorulenM2KdvDahil||""
        };
      });
      setBlokFiyatForm(m);
    }
  },[selProjeId,selProje?.bloklar?.length]);
  const blokFiyatHaricChange=(blokId,v)=>{
    const cleaned=v.replace(/[^0-9.,]/g,"").replace(",",".");
    const kdv=parseFloat(fiyatForm.varsayilanKdvOrani||"20");
    const haricN=parseFloat(cleaned);
    const dahilStr=!isNaN(haricN)?String(Math.round(haricN*(1+kdv/100)*100)/100):"";
    setBlokFiyatForm(p=>({...p,[blokId]:{ongorulenM2KdvHaric:cleaned,ongorulenM2KdvDahil:dahilStr}}));
  };
  const blokFiyatDahilChange=(blokId,v)=>{
    const cleaned=v.replace(/[^0-9.,]/g,"").replace(",",".");
    const kdv=parseFloat(fiyatForm.varsayilanKdvOrani||"20");
    const dahilN=parseFloat(cleaned);
    const haricStr=!isNaN(dahilN)?String(Math.round(dahilN/(1+kdv/100)*100)/100):"";
    setBlokFiyatForm(p=>({...p,[blokId]:{ongorulenM2KdvHaric:haricStr,ongorulenM2KdvDahil:cleaned}}));
  };
  const blokFiyatKaydet=async(blokId)=>{
    const f=blokFiyatForm[blokId];if(!f)return;
    try{
      await sbPatch('bloklar',blokId,{
        ongorulen_m2_kdv_haric:f.ongorulenM2KdvHaric!==""&&f.ongorulenM2KdvHaric!=null?Number(f.ongorulenM2KdvHaric):null,
        ongorulen_m2_kdv_dahil:f.ongorulenM2KdvDahil!==""&&f.ongorulenM2KdvDahil!=null?Number(f.ongorulenM2KdvDahil):null
      });
      setProjeler(prev=>prev.map(p=>p.id===selProjeId?{...p,bloklar:(p.bloklar||[]).map(bl=>bl.id===blokId?{...bl,...f}:bl)}:p));
      setBlokFiyatSaved(p=>({...p,[blokId]:true}));
      setTimeout(()=>setBlokFiyatSaved(p=>({...p,[blokId]:false})),2000);
    }catch(e){console.error("Blok fiyat kayıt hatası:",e.message);alert("Kayıt başarısız: "+e.message);}
  };

  // Satılmayan daire fiyatlandırma state
  const[daireFiyatForm,setDaireFiyatForm]=useState({});
  const[daireFiyatSaved,setDaireFiyatSaved]=useState({});
  useEffect(()=>{
    if(selProje&&selProje.bolumler){
      const m={};
      selProje.bolumler.forEach(bo=>{
        m[bo.id]={
          katSerefiyesiTl:bo.katSerefiyesiTl||"",
          cepheSerefiyesiTl:bo.cepheSerefiyesiTl||"",
          listeFiyatiKdvHaric:bo.listeFiyatiKdvHaric||"",
          listeFiyatiKdvDahil:bo.listeFiyatiKdvDahil||"",
          kdvOrani:bo.kdvOrani||""
        };
      });
      setDaireFiyatForm(m);
    }
  },[selProjeId,selProje?.bolumler?.length]);
  // Yönetmelik: daire net m² < 150 → %10, ≥ 150 → %20
  const daireKdvHesapla=(netM2)=>{const n=parseFloat(netM2);return !isNaN(n)&&n>=150?"20":"10";};
  const daireEtkinKdv=(boId)=>{
    const bo=(selProje?.bolumler||[]).find(b=>b.id===boId);
    return parseFloat(daireKdvHesapla(bo?.netM2));
  };
  const daireListeHaricChange=(boId,v)=>{
    const cleaned=v.replace(/[^0-9.,]/g,"").replace(",",".");
    const kdv=daireEtkinKdv(boId);
    const haricN=parseFloat(cleaned);
    const dahilStr=!isNaN(haricN)?String(Math.round(haricN*(1+kdv/100)*100)/100):"";
    setDaireFiyatForm(p=>({...p,[boId]:{...(p[boId]||{}),listeFiyatiKdvHaric:cleaned,listeFiyatiKdvDahil:dahilStr}}));
  };
  const daireListeDahilChange=(boId,v)=>{
    const cleaned=v.replace(/[^0-9.,]/g,"").replace(",",".");
    const kdv=daireEtkinKdv(boId);
    const dahilN=parseFloat(cleaned);
    const haricStr=!isNaN(dahilN)?String(Math.round(dahilN/(1+kdv/100)*100)/100):"";
    setDaireFiyatForm(p=>({...p,[boId]:{...(p[boId]||{}),listeFiyatiKdvHaric:haricStr,listeFiyatiKdvDahil:cleaned}}));
  };
  const daireSerefiyeChange=(boId,alan,v)=>{
    const cleaned=v.replace(/[^0-9.,]/g,"").replace(",",".");
    setDaireFiyatForm(p=>({...p,[boId]:{...(p[boId]||{}),[alan]:cleaned}}));
  };
  const daireFiyatKaydet=async(boId)=>{
    const f=daireFiyatForm[boId];if(!f)return;
    const bo=(selProje?.bolumler||[]).find(b=>b.id===boId);
    const autoKdv=daireKdvHesapla(bo?.netM2);
    try{
      await sbPatch('bolumler',boId,{
        kat_serefiyesi_tl:f.katSerefiyesiTl!==""&&f.katSerefiyesiTl!=null?Number(f.katSerefiyesiTl):null,
        cephe_serefiyesi_tl:f.cepheSerefiyesiTl!==""&&f.cepheSerefiyesiTl!=null?Number(f.cepheSerefiyesiTl):null,
        liste_fiyati_kdv_haric:f.listeFiyatiKdvHaric!==""&&f.listeFiyatiKdvHaric!=null?Number(f.listeFiyatiKdvHaric):null,
        liste_fiyati_kdv_dahil:f.listeFiyatiKdvDahil!==""&&f.listeFiyatiKdvDahil!=null?Number(f.listeFiyatiKdvDahil):null,
        kdv_orani:autoKdv
      });
      setProjeler(prev=>prev.map(p=>p.id===selProjeId?{...p,bolumler:(p.bolumler||[]).map(b=>b.id===boId?{...b,...f,kdvOrani:autoKdv}:b)}:p));
      setDaireFiyatSaved(p=>({...p,[boId]:true}));
      setTimeout(()=>setDaireFiyatSaved(p=>({...p,[boId]:false})),2000);
    }catch(e){console.error("Daire fiyat kayıt hatası:",e.message);alert("Kayıt başarısız: "+e.message);}
  };
  // Yeni yapı: butceKalemleri ayrı tablodan global state'ten gelir, proje bazında filtrelenir
  const butceKalemleri=useMemo(()=>selProjeId?butceKalemleriGlobal.filter(b=>b.projeId===selProjeId):[],[butceKalemleriGlobal,selProjeId]);

  // Kalem listesi — sadece eklenen kalemleri göster
  const kalemListesi=useMemo(()=>{
    if(!selProje)return[];
    return butceKalemleri.map(bk=>{
      const mlz=malzemeler.find(m=>m.id===bk.malzemeId);
      return{...bk,mlzAd:mlz?.ad||bk.malzemeAd,mlzKodu:mlz?.malzemeKodu||bk.malzemeKodu,mlzBirim:mlz?.birim||bk.birim,mlzTip:mlz?.tip||"",mlzGrup:mlz?.grup||"",mlzGrupAd:mlz?.grupAd||""};
    });
  },[selProje,butceKalemleri,malzemeler]);

  // Filtrelenmiş + sıralanmış kalem listesi
  const filtrelenmis=useMemo(()=>{
    const list=kalemListesi.filter(k=>{
      // Arama filtresi
      if(kalemAra){const q=nTR(kalemAra);const ms=nTR(k.mlzKodu).includes(q)||nTR(k.mlzAd).includes(q)||nTR(k.mlzGrupAd).includes(q);if(!ms)return false;}
      if(filtre.startsWith("blok_")){const blokAd=filtre.replace("blok_","");return(k.bloklar||[]).includes(blokAd);}
      if(filtre==="ortak")return(k.bloklar||[]).length>1;
      if(filtre==="atanmamis")return(k.bloklar||[]).length===0;
      if(filtre==="planli")return parseFloat(k.planlananToplam||0)>0;
      if(filtre==="plansiz")return!parseFloat(k.planlananToplam||0);
      if(filtre==="tamamlandi"||filtre==="kapali")return k.tamamlandi===true;
      if(filtre==="manuelkapat")return k.tamamlandi===true&&k.tamamlandiKaynak!=="otomatik";
      if(filtre==="otokapali")return k.tamamlandi===true&&k.tamamlandiKaynak==="otomatik";
      // Durum bazlı filtreler (chip mantığı ile aynı)
      if(["siparisyok","siparisacik","sapma"].includes(filtre)){
        const pt=parseFloat(k.planlananToplam||0);
        if(pt<=0)return false;
        if(k.tamamlandi===true)return false;
        // Taahhüt ve gerçekleşen tutarları hesapla
        let bkT=0,bkG=0;
        siparisler.forEach(s=>{
          if(s.projeId===selProjeId&&s.durum!=="iptal"&&s.durum!=="tamamlandi"){
            (s.kalemler||[]).forEach(kl=>{if(kl.butceKalemiId===k.id)bkT+=(parseFloat(kl.netFiyat||0)*parseFloat(kl.miktar||0));});
          }
        });
        faturalar.forEach(f=>{
          if(f.projeId===selProjeId&&f.durum!=="iptal"){
            (f.kalemler||[]).forEach(kl=>{if(kl.butceKalemiId===k.id)bkG+=(parseFloat(kl.netFiyat||0)*parseFloat(kl.miktar||0));});
          }
        });
        if(filtre==="siparisyok")return bkT===0&&bkG===0;
        if(filtre==="sapma")return bkG>pt*1.05;
        if(filtre==="siparisacik")return(bkT>0||bkG>0)&&!(bkG>pt*1.05);
      }
      return true;
    });
    const{alan,yon}=siralama;
    const carp=yon==="asc"?1:-1;
    list.sort((a,b)=>{
      let va,vb;
      if(alan==="yuzde"){va=parseFloat(a.planlananToplam||0);vb=parseFloat(b.planlananToplam||0);}
      else if(alan==="blok"){va=(a.bloklar||[]).join("+");vb=(b.bloklar||[]).join("+");}
      else{va=a[alan]||"";vb=b[alan]||"";}
      if(typeof va==="number"&&typeof vb==="number")return(va-vb)*carp;
      return String(va).localeCompare(String(vb),"tr")*carp;
    });
    return list;
  },[kalemListesi,filtre,siralama,kalemAra,siparisler,faturalar,selProjeId]);

  // Gerçekleşen
  const gerceklesen=useMemo(()=>{
    if(!selProjeId)return[];
    return faturalar.filter(f=>f.projeId===selProjeId&&f.durum!=="iptal").flatMap(f=>(f.kalemler||[]).map(k=>({...k,faturaNo:f.faturaNo||f.afNo||"",firmaAd:f.firmaAd||"",butceKalemiId:k.butceKalemiId||null})));
  },[selProjeId,faturalar]);

  // Taahhüt
  const taahhut=useMemo(()=>{
    if(!selProjeId)return[];
    return siparisler.filter(s=>s.projeId===selProjeId&&s.durum!=="iptal"&&s.durum!=="tamamlandi").flatMap(s=>(s.kalemler||[]).map(k=>({...k,spNo:s.spNo||"",firmaAd:s.firmaAd||"",butceKalemiId:k.butceKalemiId||null})));
  },[selProjeId,siparisler]);

  // Blok m² hesabı
  const blokM2Harita=useMemo(()=>{
    if(!selProje)return{};
    const h={};
    (selProje.bloklar||[]).forEach(bl=>{
      h[bl.ad]=(selProje.bolumler||[]).filter(b=>b.blok===bl.ad).reduce((s,b)=>s+parseFloat(b.brutM2||0),0);
    });
    return h;
  },[selProje]);

  // Özet
  const ozet=useMemo(()=>{
    // Kalem bazlı KDV hariç/dahil yardımcısı (Maliyet Kalemleri portalındaki mantıkla aynı)
    const kalemKdvTutar=(k)=>{
      const plan=k.planlananSatirlari||[];
      let kdvHaric=0,kdv=0;
      if(plan.length>0){
        plan.forEach(s=>{
          const m=parseFloat(s.miktar||0);
          const bf=parseFloat(s.birimFiyat||0);
          const kh=m*bf;
          kdvHaric+=kh;
          kdv+=kh*(parseInt(s.kdvOrani||0)/100);
        });
      }else{
        kdvHaric=parseFloat(k.planlananToplam||0);
        const mlz=malzemeler.find(m=>m.id===k.malzemeId);
        kdv=kdvHaric*(parseInt(mlz?.kdvOrani||"20")/100);
      }
      return{kdvHaric,kdvDahil:kdvHaric+kdv};
    };
    // Sipariş/fatura kalemi için KDV hesabı
    const hareketKdvTutar=(k)=>{
      const tutarHaric=parseFloat(k.netFiyat||0)*parseFloat(k.miktar||0);
      let kdvOran=parseInt(k.kdvOrani);
      if(isNaN(kdvOran)){
        const mlz=malzemeler.find(m=>m.id===k.malzemeId);
        kdvOran=parseInt(mlz?.kdvOrani||"20");
      }
      return{kdvHaric:tutarHaric,kdvDahil:tutarHaric*(1+kdvOran/100)};
    };

    // Kalem bazlı önbellek
    const kalemTutar={};
    butceKalemleri.forEach(k=>{kalemTutar[k.id]=kalemKdvTutar(k);});

    const planlananTop=butceKalemleri.reduce((s,k)=>s+kalemTutar[k.id].kdvHaric,0);
    const planlananTopKdvDahil=butceKalemleri.reduce((s,k)=>s+kalemTutar[k.id].kdvDahil,0);
    const gerceklesenTop=gerceklesen.reduce((s,k)=>s+hareketKdvTutar(k).kdvHaric,0);
    const gerceklesenTopKdvDahil=gerceklesen.reduce((s,k)=>s+hareketKdvTutar(k).kdvDahil,0);
    const taahhutTop=taahhut.reduce((s,k)=>s+hareketKdvTutar(k).kdvHaric,0);
    const taahhutTopKdvDahil=taahhut.reduce((s,k)=>s+hareketKdvTutar(k).kdvDahil,0);
    const brutM2=selProje?(selProje.bolumler||[]).reduce((s,b)=>s+parseFloat(b.brutM2||0),0):0;
    const ortakM2=(selProje?.bloklar||[]).reduce((s,b)=>s+parseFloat(b.ortakAlanM2||0),0);
    const toplamM2=brutM2+ortakM2;

    // Blok bazlı maliyet hesabı (hem KDV hariç hem dahil)
    const blokMaliyet={};
    const blokMaliyetKdvDahil={};
    (selProje?.bloklar||[]).forEach(bl=>{blokMaliyet[bl.ad]=0;blokMaliyetKdvDahil[bl.ad]=0;});
    let ortakToplam=0,ortakToplamKdvDahil=0;
    // Hangi bloklara kalem girilmiş?
    const aktifBloklar=new Set();
    butceKalemleri.forEach(k=>{
      const tutar=kalemTutar[k.id].kdvHaric;
      const tutarDahil=kalemTutar[k.id].kdvDahil;
      const bloklar=k.bloklar||[];
      if(bloklar.length===0){/* atanmamış */}
      else if(bloklar.length===1){
        if(blokMaliyet[bloklar[0]]!==undefined){blokMaliyet[bloklar[0]]+=tutar;blokMaliyetKdvDahil[bloklar[0]]+=tutarDahil;}
        aktifBloklar.add(bloklar[0]);
      }
      else{
        const topBlokM2=bloklar.reduce((s,b)=>s+(blokM2Harita[b]||0),0);
        if(topBlokM2>0){bloklar.forEach(b=>{const oran=(blokM2Harita[b]||0)/topBlokM2;if(blokMaliyet[b]!==undefined){blokMaliyet[b]+=tutar*oran;blokMaliyetKdvDahil[b]+=tutarDahil*oran;}aktifBloklar.add(b);});}
        ortakToplam+=tutar;
        ortakToplamKdvDahil+=tutarDahil;
      }
    });

    // Blok efektif m² (her bloğun kendi ortak alanı dahil)
    const blokEfektifM2={};
    (selProje?.bloklar||[]).forEach(bl=>{
      const blokBrut=blokM2Harita[bl.ad]||0;
      const blokOrtak=parseFloat(bl.ortakAlanM2||0);
      blokEfektifM2[bl.ad]=blokBrut+blokOrtak;
    });

    // m² maliyet — brüt m²'ye göre (ortak alan hariç)
    const brutM2Toplam=brutM2;
    const muteahhitOran=parseFloat(selProje?.muteahhitPay||0)/100;
    const muteahhitM2=muteahhitOran>0?brutM2Toplam*muteahhitOran:0;
    const m2Maliyet=brutM2Toplam>0?planlananTop/brutM2Toplam:0;
    const m2MaliyetKdvDahil=brutM2Toplam>0?planlananTopKdvDahil/brutM2Toplam:0;
    const m2MaliyetNet=muteahhitM2>0?planlananTop/muteahhitM2:0;
    const m2MaliyetNetKdvDahil=muteahhitM2>0?planlananTopKdvDahil/muteahhitM2:0;

    // Kategori dağılımı
    const kategoriDagilim={};
    const blokKategoriDagilim={};
    butceKalemleri.forEach(k=>{
      const tutar=kalemTutar[k.id].kdvHaric;
      const mlz=malzemeler.find(m=>m.id===k.malzemeId);
      const katAd=mlz?.grupAd||"Diğer";
      if(!kategoriDagilim[katAd])kategoriDagilim[katAd]={tutar:0};
      kategoriDagilim[katAd].tutar+=tutar;
      // Blok bazında
      (k.bloklar||[]).forEach(b=>{
        if(!blokKategoriDagilim[b])blokKategoriDagilim[b]={};
        if(!blokKategoriDagilim[b][katAd])blokKategoriDagilim[b][katAd]={tutar:0};
        if((k.bloklar||[]).length===1){blokKategoriDagilim[b][katAd].tutar+=tutar;}
        else{const topBM2=(k.bloklar||[]).reduce((s,bl)=>s+(blokM2Harita[bl]||0),0);const oran=topBM2>0?(blokM2Harita[b]||0)/topBM2:0;blokKategoriDagilim[b][katAd].tutar+=tutar*oran;}
      });
    });
    // Yüzde hesapla
    Object.keys(kategoriDagilim).forEach(k=>{kategoriDagilim[k].yuzde=planlananTop>0?(kategoriDagilim[k].tutar/planlananTop*100):0;});
    Object.keys(blokKategoriDagilim).forEach(b=>{const blokTop=Object.values(blokKategoriDagilim[b]).reduce((s,v)=>s+v.tutar,0);Object.keys(blokKategoriDagilim[b]).forEach(k=>{blokKategoriDagilim[b][k].yuzde=blokTop>0?(blokKategoriDagilim[b][k].tutar/blokTop*100):0;});});

    return{planlananTop,planlananTopKdvDahil,gerceklesenTop,gerceklesenTopKdvDahil,taahhutTop,taahhutTopKdvDahil,kalanButce:planlananTop-taahhutTop-gerceklesenTop,kalanButceKdvDahil:planlananTopKdvDahil-taahhutTopKdvDahil-gerceklesenTopKdvDahil,brutM2,ortakM2,toplamM2,m2Maliyet,m2MaliyetKdvDahil,m2MaliyetNet,m2MaliyetNetKdvDahil,muteahhitM2,muteahhitOran,blokMaliyet,blokMaliyetKdvDahil,ortakToplam,ortakToplamKdvDahil,blokEfektifM2,kategoriDagilim,blokKategoriDagilim};
  },[butceKalemleri,gerceklesen,taahhut,selProje,blokM2Harita,malzemeler]);

  // Kaydet — satır bazlı POST/PATCH (yeni tablo)
  const saveButceKalemi=async(kalem)=>{
    if(!selProje)return;
    const mlzRef=malzemeler?.find(m=>m.id===kalem.malzemeId);
    const hesaplamaVarMi=mlzRef?.hesaplamaSablonu&&HESAPLAMA_SABLONLARI[mlzRef.hesaplamaSablonu];
    const toplam=hesaplamaVarMi?parseFloat(kalem.planlananToplam||0):parseFloat(kalem.planlananMiktar||0)*parseFloat(kalem.planlananBirimFiyat||0);
    const mevcut=butceKalemleri.find(b=>b.id===kalem.id);
    const kayit={...kalem,planlananToplam:toplam,projeId:selProjeId,_isNew:!mevcut};
    const savedId=await saveBKProp(kayit,selProjeId);
    if(savedId){
      setButceModal({...kayit,id:savedId,_isNew:undefined});
    }
  };

  const delButceKalemi=async(id)=>{
    if(!selProje||!confirm("Bu bütçe kalemini silmek istiyor musunuz?"))return;
    await delBKProp(id);
    setButceModal(null);
  };

  // Kalem ekle — malzeme picker'dan seçim (yeni tabloya POST)
  const kalemEkle=async(mlz)=>{
    if(!selProje)return;
    const yeniKalem={malzemeId:mlz.id,malzemeAd:mlz.ad,malzemeKodu:mlz.malzemeKodu,birim:mlz.birim,bloklar:[],planlananMiktar:"",planlananBirimFiyat:"",planlananToplam:0,planlananSatirlari:[],aciklama:"",tamamlandi:false,siraNo:butceKalemleri.length,projeId:selProjeId,_isNew:true};
    const savedId=await saveBKProp(yeniKalem,selProjeId);
    if(savedId){
      setButceModal({...yeniKalem,id:savedId,_isNew:undefined});
    }
  };

  // Omurga oluştur — modal açar
  const omurgaOlustur=()=>{
    if(!selProje)return;
    const projeTuru=selProje.tur;
    if(!projeTuru){alert("Önce proje türünü belirleyiniz!");return;}
    const omurgaMlz=malzemeler.filter(m=>(m.omurgaProjeTurleri||[]).includes(projeTuru));
    if(omurgaMlz.length===0){alert(`"${projeTuru}" proje türü için omurga malzemesi bulunamadı.`);return;}
    setOmurgaPickerOpen(true);
  };

  // Omurga picker'dan seçilenleri ekle (toplu POST)
  const omurgaKalemEkle=async(secilenler)=>{
    if(!selProje)return;
    const baseSiraNo=butceKalemleri.length;
    const yeniKalemler=secilenler.map((mlz,idx)=>({malzemeId:mlz.id,malzemeAd:mlz.ad,malzemeKodu:mlz.malzemeKodu,birim:mlz.birim,bloklar:[],planlananMiktar:"",planlananBirimFiyat:"",planlananToplam:0,planlananSatirlari:[],aciklama:"",tamamlandi:false,siraNo:baseSiraNo+idx,projeId:selProjeId}));
    await bulkSaveBKProp(yeniKalemler,selProjeId);
  };

  // Satıra tıkla — direkt düzenle
  const satirTikla=(kalem)=>{setButceModal(kalem);};

  return <div>
    {/* PROJE SEÇİMİ */}
    <div style={{display:"flex",gap:"10px",marginBottom:"16px",alignItems:"center"}}>
      <select style={{...iS,maxWidth:"400px"}} value={selProjeId||""} onChange={e=>setSelProjeId(e.target.value?parseInt(e.target.value):null)}>
        <option value="">— Proje Seçiniz —</option>
        {projeler.map(p=><option key={p.id} value={p.id}>{p.projeKodu?`[${p.projeKodu}] `:""}{p.ad}</option>)}
      </select>
    </div>

    {!selProje
      ?<div style={{padding:"80px",textAlign:"center",color:T.t3,fontSize:"16px",border:`1px dashed ${T.border}`,borderRadius:T.r}}>Maliyet takibi için bir proje seçiniz.</div>
      :<div>
        {pickerOpen&&<MalzemePickerModal malzemeler={malzemeler} onSelect={kalemEkle} onClose={()=>setPickerOpen(false)}/>}
        {omurgaPickerOpen&&<OmurgaPickerModal malzemeler={malzemeler} projeTuru={selProje.tur} mevcutIds={new Set(butceKalemleri.map(k=>k.malzemeId))} onEkle={omurgaKalemEkle} onClose={()=>setOmurgaPickerOpen(false)}/>}
        {butceModal&&<ButceKalemModal kalem={butceModal} onSave={saveButceKalemi} onDel={delButceKalemi} onClose={()=>setButceModal(null)} malzemeler={malzemeler} projeBloklar={selProje?.bloklar||[]} projeBolumler={selProje?.bolumler||[]} ortakAlanM2={String((selProje?.bloklar||[]).reduce((s,b)=>s+parseFloat(b.ortakAlanM2||0),0))} siparisler={siparisler.filter(s=>s.projeId===selProjeId)} faturalar={faturalar.filter(f=>f.projeId===selProjeId)} firmalar={firmalar}/>}

        {/* SEKME BARI */}
        <div style={{display:"flex",gap:"2px",marginBottom:"16px",borderBottom:`2px solid ${T.border}`}}>
          {[{id:"dashboard",label:"Dashboard"},{id:"kategoriler",label:"Kategoriler"},{id:"kalemler",label:"Maliyet Kalemleri"},{id:"fiyatlandirma",label:"Fiyatlandırma"}].map(s=><button key={s.id} onClick={()=>setAktifSekme(s.id)} style={{padding:"10px 20px",border:"none",background:aktifSekme===s.id?"#fff":"transparent",borderBottom:aktifSekme===s.id?`2px solid #1677ff`:"2px solid transparent",marginBottom:"-2px",fontSize:"14px",fontWeight:aktifSekme===s.id?600:400,color:aktifSekme===s.id?"#1677ff":T.t2,cursor:"pointer"}}>{s.label}</button>)}
        </div>

        {aktifSekme==="dashboard"&&<div>
          {/* ÖZET KARTLAR */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr) 1.3fr",gap:"12px",marginBottom:"16px"}}>
            {[
              {label:"Planlanan Bütçe",value:ozet.planlananTop,valueDahil:ozet.planlananTopKdvDahil,color:"#384248"},
              {label:"Taahhüt (Sipariş)",value:ozet.taahhutTop,valueDahil:ozet.taahhutTopKdvDahil,color:"#fa8c16"},
              {label:"Gerçekleşen",value:ozet.gerceklesenTop,valueDahil:ozet.gerceklesenTopKdvDahil,color:"#1677ff"},
              {label:"Kalan Bütçe",value:ozet.kalanButce,valueDahil:ozet.kalanButceKdvDahil,color:ozet.kalanButce>=0?"#52c41a":"#ff4d4f"},
            ].map((c,i)=><div key={i} style={{padding:"16px",borderRadius:"8px",border:`1px solid ${T.border}`,background:"#fff"}}>
              <div style={{fontSize:"12px",color:T.t3,marginBottom:"8px",textTransform:"uppercase"}}>{c.label}</div>
              <div style={{display:"flex",alignItems:"baseline",gap:"8px",marginBottom:"4px"}}>
                <span style={{fontSize:"10px",color:T.t3,textTransform:"uppercase",minWidth:"36px",fontWeight:600}}>Dahil</span>
                <span style={{fontSize:"18px",fontWeight:700,color:c.color}}>{c.valueDahil?c.valueDahil.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺":"—"}</span>
              </div>
              <div style={{display:"flex",alignItems:"baseline",gap:"8px"}}>
                <span style={{fontSize:"10px",color:T.t3,textTransform:"uppercase",minWidth:"36px",fontWeight:600}}>Hariç</span>
                <span style={{fontSize:"14px",fontWeight:600,color:c.color,opacity:0.7}}>{c.value?c.value.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺":"—"}</span>
              </div>
            </div>)}
            {/* m² MALİYET KARTI */}
            <div style={{padding:"16px",borderRadius:"8px",border:`1px solid ${T.border}`,background:"#fff"}}>
              <div style={{fontSize:"12px",color:T.t3,marginBottom:"8px",textTransform:"uppercase"}}>BRÜT m² MALİYET</div>
              <div style={{display:"flex",alignItems:"baseline",gap:"8px",marginBottom:"4px"}}>
                <span style={{fontSize:"10px",color:T.t3,textTransform:"uppercase",minWidth:"36px",fontWeight:600}}>Dahil</span>
                <span style={{fontSize:"18px",fontWeight:700,color:"#722ed1"}}>{ozet.m2MaliyetKdvDahil>0?ozet.m2MaliyetKdvDahil.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺/m²":"—"}</span>
              </div>
              <div style={{display:"flex",alignItems:"baseline",gap:"8px"}}>
                <span style={{fontSize:"10px",color:T.t3,textTransform:"uppercase",minWidth:"36px",fontWeight:600}}>Hariç</span>
                <span style={{fontSize:"14px",fontWeight:600,color:"#722ed1",opacity:0.7}}>{ozet.m2Maliyet>0?ozet.m2Maliyet.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺/m²":"—"}</span>
              </div>
              <div style={{fontSize:"11px",color:T.t3,marginTop:"4px"}}>Brüt: {ozet.brutM2.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})} m²</div>
              {ozet.muteahhitOran>0&&<>
                <div style={{borderTop:`1px solid ${T.border}`,marginTop:"8px",paddingTop:"8px"}}>
                  <div style={{fontSize:"11px",color:T.t3,textTransform:"uppercase",marginBottom:"4px"}}>NET m² MALİYET (Arsa payı düşülmüş)</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:"8px",marginBottom:"4px"}}>
                    <span style={{fontSize:"10px",color:T.t3,textTransform:"uppercase",minWidth:"36px",fontWeight:600}}>Dahil</span>
                    <span style={{fontSize:"16px",fontWeight:700,color:"#ff4d4f"}}>{ozet.m2MaliyetNetKdvDahil>0?ozet.m2MaliyetNetKdvDahil.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺/m²":"—"}</span>
                  </div>
                  <div style={{display:"flex",alignItems:"baseline",gap:"8px"}}>
                    <span style={{fontSize:"10px",color:T.t3,textTransform:"uppercase",minWidth:"36px",fontWeight:600}}>Hariç</span>
                    <span style={{fontSize:"13px",fontWeight:600,color:"#ff4d4f",opacity:0.7}}>{ozet.m2MaliyetNet>0?ozet.m2MaliyetNet.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺/m²":"—"}</span>
                  </div>
                  <div style={{fontSize:"11px",color:T.t3,marginTop:"2px"}}>Müteahhit: {ozet.muteahhitM2.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})} m² (%{(ozet.muteahhitOran*100).toFixed(0)})</div>
                </div>
              </>}
            </div>
          </div>

          {/* BLOK BAZLI ÖZET */}
          {(selProje?.bloklar||[]).length>0&&<div style={{display:"grid",gridTemplateColumns:`repeat(${(selProje.bloklar||[]).length+(ozet.ortakToplam>0?1:0)},1fr)`,gap:"12px",marginBottom:"16px"}}>
            {(selProje.bloklar||[]).map(bl=>{
              const blBrutM2=blokM2Harita[bl.ad]||0;
              const blMaliyet=ozet.blokMaliyet[bl.ad]||0;
              const blMaliyetDahil=ozet.blokMaliyetKdvDahil[bl.ad]||0;
              const blM2Maliyet=blBrutM2>0?blMaliyet/blBrutM2:0;
              const blM2MaliyetDahil=blBrutM2>0?blMaliyetDahil/blBrutM2:0;
              const blMutM2=ozet.muteahhitOran>0?blBrutM2*ozet.muteahhitOran:0;
              const blM2MaliyetNet=blMutM2>0?blMaliyet/blMutM2:0;
              const blM2MaliyetNetDahil=blMutM2>0?blMaliyetDahil/blMutM2:0;
              return <div key={bl.id} style={{padding:"12px 16px",borderRadius:"8px",border:`1px solid ${T.border}`,background:"#fff"}}>
                <div style={{fontSize:"13px",color:T.t3,marginBottom:"6px",fontWeight:600}}>{bl.ad} BLOK</div>
                <div style={{display:"flex",alignItems:"baseline",gap:"8px",marginBottom:"2px"}}>
                  <span style={{fontSize:"10px",color:T.t3,textTransform:"uppercase",minWidth:"36px",fontWeight:600}}>Dahil</span>
                  <span style={{fontSize:"16px",fontWeight:700,color:"#1677ff"}}>{blMaliyetDahil>0?blMaliyetDahil.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺":"—"}</span>
                </div>
                <div style={{display:"flex",alignItems:"baseline",gap:"8px",marginBottom:"6px"}}>
                  <span style={{fontSize:"10px",color:T.t3,textTransform:"uppercase",minWidth:"36px",fontWeight:600}}>Hariç</span>
                  <span style={{fontSize:"13px",fontWeight:600,color:"#1677ff",opacity:0.7}}>{blMaliyet>0?blMaliyet.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺":"—"}</span>
                </div>
                <div style={{fontSize:"12px",color:T.t2}}>Brüt m²: <strong>{blBrutM2>0?blBrutM2.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2}):0} m²</strong></div>
                <div style={{fontSize:"11px",color:"#722ed1",marginTop:"4px",fontWeight:600}}>Brüt m² Maliyet</div>
                <div style={{display:"flex",alignItems:"baseline",gap:"8px"}}>
                  <span style={{fontSize:"10px",color:T.t3,textTransform:"uppercase",minWidth:"36px",fontWeight:600}}>Dahil</span>
                  <span style={{fontSize:"13px",fontWeight:700,color:"#722ed1"}}>{blM2MaliyetDahil>0?blM2MaliyetDahil.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺/m²":"—"}</span>
                </div>
                <div style={{display:"flex",alignItems:"baseline",gap:"8px",marginBottom:"4px"}}>
                  <span style={{fontSize:"10px",color:T.t3,textTransform:"uppercase",minWidth:"36px",fontWeight:600}}>Hariç</span>
                  <span style={{fontSize:"11px",fontWeight:600,color:"#722ed1",opacity:0.7}}>{blM2Maliyet>0?blM2Maliyet.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺/m²":"—"}</span>
                </div>
                {ozet.muteahhitOran>0&&<>
                  <div style={{fontSize:"11px",color:"#ff4d4f",marginTop:"2px",fontWeight:600}}>Net m² Maliyet</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:"8px"}}>
                    <span style={{fontSize:"10px",color:T.t3,textTransform:"uppercase",minWidth:"36px",fontWeight:600}}>Dahil</span>
                    <span style={{fontSize:"13px",fontWeight:700,color:"#ff4d4f"}}>{blM2MaliyetNetDahil>0?blM2MaliyetNetDahil.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺/m²":"—"}</span>
                  </div>
                  <div style={{display:"flex",alignItems:"baseline",gap:"8px"}}>
                    <span style={{fontSize:"10px",color:T.t3,textTransform:"uppercase",minWidth:"36px",fontWeight:600}}>Hariç</span>
                    <span style={{fontSize:"11px",fontWeight:600,color:"#ff4d4f",opacity:0.7}}>{blM2MaliyetNet>0?blM2MaliyetNet.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺/m²":"—"}</span>
                  </div>
                </>}
              </div>;
            })}
            {ozet.ortakToplam>0&&<div style={{padding:"12px 16px",borderRadius:"8px",border:`1px solid #ffe58f`,background:"#fffbe6"}}>
              <div style={{fontSize:"12px",color:"#d48806",marginBottom:"6px",fontWeight:600}}>ORTAK GİDER</div>
              <div style={{display:"flex",alignItems:"baseline",gap:"8px",marginBottom:"2px"}}>
                <span style={{fontSize:"10px",color:"#d48806",textTransform:"uppercase",minWidth:"36px",fontWeight:600}}>Dahil</span>
                <span style={{fontSize:"16px",fontWeight:700,color:"#d48806"}}>{ozet.ortakToplamKdvDahil.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})} ₺</span>
              </div>
              <div style={{display:"flex",alignItems:"baseline",gap:"8px"}}>
                <span style={{fontSize:"10px",color:"#d48806",textTransform:"uppercase",minWidth:"36px",fontWeight:600}}>Hariç</span>
                <span style={{fontSize:"13px",fontWeight:600,color:"#d48806",opacity:0.7}}>{ozet.ortakToplam.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})} ₺</span>
              </div>
              <div style={{fontSize:"11px",color:"#d48806",marginTop:"4px"}}>Bloklara m² oranında dağıtılmış</div>
            </div>}
          </div>}
        </div>}
        {aktifSekme==="kategoriler"&&<div>
          {Object.keys(ozet.kategoriDagilim||{}).length>0&&<div style={{border:`1px solid ${T.border}`,borderRadius:"8px",overflow:"hidden",marginBottom:"16px"}}>
            <div style={{padding:"8px 16px",background:"#384248"}}><span style={{fontSize:"14px",fontWeight:600,color:"#fff"}}>Kategori Dağılımı</span></div>
            <div style={{padding:"4px 0"}}>
              {Object.entries(ozet.kategoriDagilim).sort((a,b)=>b[1].tutar-a[1].tutar).map(([kat,v],i)=><div key={kat} style={{display:"grid",gridTemplateColumns:"200px 120px 60px 1fr",gap:"12px",padding:"6px 16px",alignItems:"center",background:i%2===0?"#fff":"#fafafa"}}>
                <div style={{fontSize:"13px",fontWeight:500,color:T.text}}>{kat}</div>
                <div style={{fontSize:"13px",fontWeight:600,color:T.text,textAlign:"right"}}>{v.tutar.toLocaleString("tr-TR",{minimumFractionDigits:2})} ₺</div>
                <div style={{fontSize:"13px",fontWeight:600,color:T.primary,textAlign:"right"}}>{v.yuzde.toFixed(1)}%</div>
                <div style={{height:"8px",background:"#e5e7eb",borderRadius:"4px",overflow:"hidden"}}><div style={{height:"100%",width:`${v.yuzde}%`,background:T.primary,borderRadius:"4px",transition:"width .3s"}}></div></div>
              </div>)}
              <div style={{display:"grid",gridTemplateColumns:"200px 120px 60px 1fr",gap:"12px",padding:"6px 16px",alignItems:"center",borderTop:`1px solid ${T.border}`,background:"#fafafa"}}>
                <div style={{fontSize:"13px",fontWeight:700,color:T.text}}>TOPLAM</div>
                <div style={{fontSize:"13px",fontWeight:700,color:T.text,textAlign:"right"}}>{ozet.planlananTop.toLocaleString("tr-TR",{minimumFractionDigits:2})} ₺</div>
                <div style={{fontSize:"13px",fontWeight:700,color:T.primary,textAlign:"right"}}>100%</div>
                <div></div>
              </div>
            </div>
          </div>}
        </div>}
        {aktifSekme==="kalemler"&&<div>
        {/* FİLTRE + BUTONLAR */}
        <div style={{display:"flex",gap:"8px",marginBottom:"16px",alignItems:"center",flexWrap:"wrap"}}>
          <input style={{...iS,maxWidth:"220px",fontSize:"14px"}} value={kalemAra} onChange={e=>setKalemAra(e.target.value)} placeholder="Kod, ad veya grup ara..." onFocus={foc} onBlur={blr}/>
          <button onClick={()=>setFiltre("hepsi")} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${filtre==="hepsi"?"#384248":T.border}`,background:filtre==="hepsi"?"#384248":"#fff",color:filtre==="hepsi"?"#fff":T.t2,fontSize:"14px",cursor:"pointer"}}>Tümü ({kalemListesi.length})</button>
          {(selProje?.bloklar||[]).length>0&&<>
            {(selProje.bloklar||[]).map(bl=><button key={bl.id} onClick={()=>setFiltre(`blok_${bl.ad}`)} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${filtre===`blok_${bl.ad}`?"#1677ff":T.border}`,background:filtre===`blok_${bl.ad}`?"#1677ff":"#fff",color:filtre===`blok_${bl.ad}`?"#fff":T.t2,fontSize:"14px",cursor:"pointer"}}>{bl.ad} Blok</button>)}
            <button onClick={()=>setFiltre("ortak")} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${filtre==="ortak"?"#d48806":T.border}`,background:filtre==="ortak"?"#d48806":"#fff",color:filtre==="ortak"?"#fff":T.t2,fontSize:"14px",cursor:"pointer"}}>Ortak</button>
          </>}
          <div style={{flex:1}}></div>
          <button onClick={()=>setFiltre("siparisyok")} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${filtre==="siparisyok"?"#ff4d4f":T.border}`,background:filtre==="siparisyok"?"#fff1f0":"#fff",color:filtre==="siparisyok"?"#ff4d4f":T.t2,fontSize:"14px",cursor:"pointer"}}>Sipariş Yok</button>
          <button onClick={()=>setFiltre("siparisacik")} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${filtre==="siparisacik"?"#fa8c16":T.border}`,background:filtre==="siparisacik"?"#fff7e6":"#fff",color:filtre==="siparisacik"?"#fa8c16":T.t2,fontSize:"14px",cursor:"pointer"}}>Sipariş Açık</button>
          <button onClick={()=>setFiltre("sapma")} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${filtre==="sapma"?"#722ed1":T.border}`,background:filtre==="sapma"?"#f9f0ff":"#fff",color:filtre==="sapma"?"#722ed1":T.t2,fontSize:"14px",cursor:"pointer"}}>Sapma</button>
          <button onClick={()=>setFiltre("kapali")} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${filtre==="kapali"?"#52c41a":T.border}`,background:filtre==="kapali"?"#f6ffed":"#fff",color:filtre==="kapali"?"#52c41a":T.t2,fontSize:"14px",cursor:"pointer"}}>Kapalı</button>
          <button onClick={()=>setFiltre("manuelkapat")} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${filtre==="manuelkapat"?"#389e0d":T.border}`,background:filtre==="manuelkapat"?"#d9f7be":"#fff",color:filtre==="manuelkapat"?"#389e0d":T.t2,fontSize:"14px",cursor:"pointer"}}>Manuel Kapat</button>
          <button onClick={()=>setFiltre("planli")} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${filtre==="planli"?"#52c41a":T.border}`,background:filtre==="planli"?"#f6ffed":"#fff",color:filtre==="planli"?"#52c41a":T.t2,fontSize:"14px",cursor:"pointer"}}>Planlı</button>
          <button onClick={()=>setFiltre("plansiz")} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${filtre==="plansiz"?"#ff4d4f":T.border}`,background:filtre==="plansiz"?"#fff1f0":"#fff",color:filtre==="plansiz"?"#ff4d4f":T.t2,fontSize:"14px",cursor:"pointer"}}>Plansız</button>
          <button onClick={()=>setFiltre("hepsi")} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${filtre==="hepsi"?"#384248":T.border}`,background:filtre==="hepsi"?"#384248":"#fff",color:filtre==="hepsi"?"#fff":T.t2,fontSize:"14px",cursor:"pointer"}}>Hepsi</button>
          <button onClick={omurgaOlustur} style={{height:"36px",padding:"0 16px",borderRadius:T.r,border:`1px solid ${T.border}`,background:"#fff",color:T.t2,fontSize:"14px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"}}><Layers size={16}/> Omurga Oluştur</button>
        </div>

        {/* MALİYET PORTAL */}
        <div style={{border:`1px solid ${T.border}`,borderRadius:"8px",overflow:"hidden",display:"flex",flexDirection:"column",height:"calc(100vh - 250px)"}}>
          <div style={{flex:"0 0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",background:"#384248"}}>
            <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
              <span style={{fontSize:"16px",fontWeight:700,color:"#fff"}}>Maliyet Kalemleri</span>
              <span style={{fontSize:"13px",color:"#8799a3"}}>{filtrelenmis.length} kalem</span>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
              <button onClick={()=>{
                const rows=[["Kod","Malzeme/Hizmet","Blok","Birim","Pl. Miktar","Pl. B.Fiyat","Pl. Toplam"]];
                filtrelenmis.forEach(k=>{rows.push([k.mlzKodu||"",k.mlzAd||"",(k.bloklar||[]).join("+")||"—",k.mlzBirim||"",k.planlananMiktar||"",k.planlananBirimFiyat||"",k.planlananToplam||""]);});
                const csv=rows.map(r=>r.map(c=>`"${c}"`).join(";")).join("\n");
                const blob=new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8;"});
                const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`${selProje.ad||"proje"}_maliyet.csv`;a.click();
              }} title="Excel'e Aktar" style={{padding:"0",border:"none",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center"}}><img src={excelIcon} alt="Excel" style={{width:"35px",height:"35px"}}/></button>
              <button onClick={()=>setPickerOpen(true)} title="Kalem Ekle" style={{padding:"0",border:"none",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePlus size={35} color="#8799a3"/></button>
            </div>
          </div>
          {filtrelenmis.length===0
            ?<div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:"60px",textAlign:"center",color:T.t3,fontSize:"14px",background:"#fff"}}>{kalemListesi.length===0?"Henüz kalem eklenmemiş. \"Kalem Ekle\" veya \"Omurga Oluştur\" butonunu kullanın.":"Filtreye uygun kalem yok."}</div>
            :<>
              <div style={{flex:"0 0 auto",display:"grid",gridTemplateColumns:"30px 120px 0.7fr 100px 80px 60px 70px 80px 100px 80px 100px 90px 90px 90px 35px 25px",background:"#fafafa",borderBottom:`1px solid ${T.border}`,padding:"8px 12px",gap:"8px"}}>
                <div style={{fontSize:"11px",fontWeight:600,color:T.t2,textAlign:"center"}}>✓</div>
                {[{label:"Kod",alan:"mlzKodu",right:false},{label:"Malzeme/Hizmet",alan:"mlzAd",right:false},{label:"Durum",alan:null,right:false,center:true},{label:"Blok",alan:"blok",right:false},{label:"Birim",alan:null,right:false},{label:"Miktar",alan:null,right:true},{label:"B.Fiyat",alan:null,right:true},{label:"KDV Hariç",alan:null,right:true},{label:"KDV Tut.",alan:null,right:true},{label:"KDV Dahil",alan:null,right:true},{label:"Taahhüt",alan:null,right:true},{label:"Gerçekleşen",alan:null,right:true},{label:"Kalan",alan:null,right:true},{label:"%",alan:"yuzde",right:true},{label:"",alan:null,right:false}].map((h,i)=><div key={i} onClick={h.alan?()=>siraToggle(h.alan):undefined} style={{fontSize:"11px",fontWeight:600,color:siralama.alan===h.alan?"#1677ff":T.t2,textTransform:"uppercase",cursor:h.alan?"pointer":"default",userSelect:"none",display:"flex",alignItems:"center",gap:"4px",justifyContent:h.center?"center":(h.right?"flex-end":"flex-start")}}>{h.label}{h.alan&&siralama.alan===h.alan&&<span style={{fontSize:"10px"}}>{siralama.yon==="asc"?"▲":"▼"}</span>}</div>)}
              </div>
              {(()=>{
                let topMiktar=0,topKdvHaric=0,topKdv=0,topKdvDahil=0;
                const rows=filtrelenmis.map((k,idx)=>{
                  const bloklar=k.bloklar||[];
                  const blokStr=bloklar.length===0?"—":bloklar.join("+");
                  const plan=k.planlananSatirlari||[];
                  let satMiktar=0,satKdvHaric=0,satKdv=0;
                  if(plan.length>0){
                    plan.forEach(s=>{const m=parseFloat(s.miktar||0);const bf=parseFloat(s.birimFiyat||0);const kh=m*bf;satMiktar+=m;satKdvHaric+=kh;satKdv+=kh*(parseInt(s.kdvOrani||0)/100);});
                  }else{
                    satMiktar=parseFloat(k.planlananMiktar||0);satKdvHaric=parseFloat(k.planlananToplam||0);
                    const mlz=malzemeler.find(m=>m.id===k.malzemeId);satKdv=satKdvHaric*(parseInt(mlz?.kdvOrani||"20")/100);
                  }
                  const satKdvDahil=satKdvHaric+satKdv;
                  const bFiyat=satMiktar>0?satKdvHaric/satMiktar:0;
                  topMiktar+=satMiktar;topKdvHaric+=satKdvHaric;topKdv+=satKdv;topKdvDahil+=satKdvDahil;
                  const tamamlandi=k.tamamlandi===true;
                  const rowBg=tamamlandi?"#f6ffed":(idx%2===0?"#fff":"#fafafa");
                  return <div key={k.id} onClick={()=>satirTikla(k)} style={{display:"grid",gridTemplateColumns:"30px 120px 0.7fr 100px 80px 60px 70px 80px 100px 80px 100px 90px 90px 90px 35px 25px",padding:"8px 12px",gap:"8px",alignItems:"center",borderBottom:idx<filtrelenmis.length-1?`1px solid ${T.border}`:"none",background:rowBg,cursor:"pointer",height:"44px"}}
                    onMouseEnter={e=>e.currentTarget.style.background=tamamlandi?"#d9f7be":T.pBg}
                    onMouseLeave={e=>e.currentTarget.style.background=rowBg}>
                    <div onClick={async e=>{
                      e.stopPropagation();
                      const yeniTamamlandi=!tamamlandi;
                      const yeniKalem={...k,tamamlandi:yeniTamamlandi,tamamlandiKaynak:yeniTamamlandi?"manuel":""};
                      // Kapanma: alt satırları da kapat. Açılma: alt satırlar olduğu gibi kalır (B seçeneği)
                      if(yeniTamamlandi&&(k.planlananSatirlari||[]).length>0){
                        yeniKalem.planlananSatirlari=k.planlananSatirlari.map(s=>({...s,tamamlandi:true}));
                      }
                      await saveBKProp(yeniKalem,selProjeId);
                    }} title={tamamlandi?"Manuel kapatma işaretini kaldır":"Manuel kapat"} style={{display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
                      <div style={{width:"16px",height:"16px",borderRadius:"3px",border:`2px solid ${tamamlandi?"#52c41a":T.bDark}`,background:tamamlandi?"#52c41a":"transparent",display:"flex",alignItems:"center",justifyContent:"center",transition:"all .2s"}}>
                        {tamamlandi&&<span style={{color:"#fff",fontSize:"11px",fontWeight:700,lineHeight:1}}>✓</span>}
                      </div>
                    </div>
                    <div style={{fontSize:"13px",color:tamamlandi?"#52c41a":T.t3}}>{k.mlzKodu||"—"}</div>
                    <div style={{fontSize:"14px",fontWeight:500,color:tamamlandi?"#52c41a":T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{k.mlzAd}</div>
                    {(()=>{
                      const _bkT=taahhut.filter(t=>t.butceKalemiId===k.id).reduce((s,t)=>s+(parseFloat(t.netFiyat||0)*parseFloat(t.miktar||0)),0);
                      const _bkG=gerceklesen.filter(g=>g.butceKalemiId===k.id).reduce((s,g)=>s+(parseFloat(g.netFiyat||0)*parseFloat(g.miktar||0)),0);
                      let dLabel,dClr,dBg;
                      if(tamamlandi){dLabel="Kapalı";dClr="#52c41a";dBg="#f6ffed";}
                      else if(!satKdvHaric||satKdvHaric===0){dLabel="Plansız";dClr="#8c8c8c";dBg="#f5f5f5";}
                      else if(_bkT===0&&_bkG===0){dLabel="Sipariş Yok";dClr="#ff4d4f";dBg="#fff1f0";}
                      else if(_bkG>satKdvHaric*1.05){dLabel="Sapma";dClr="#722ed1";dBg="#f9f0ff";}
                      else{dLabel="Sipariş Açık";dClr="#fa8c16";dBg="#fff7e6";}
                      return <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <span style={{fontSize:"10px",fontWeight:700,color:dClr,background:dBg,border:`1px solid ${dClr}40`,borderRadius:"10px",padding:"2px 8px",whiteSpace:"nowrap"}}>{dLabel}</span>
                      </div>;
                    })()}
                    <div style={{fontSize:"13px",fontWeight:600,color:bloklar.length>1?"#d48806":"#1677ff"}}>{blokStr}</div>
                    <div style={{fontSize:"13px",color:T.t2}}>{k.mlzBirim||"—"}</div>
                    <div style={{fontSize:"13px",color:satMiktar?T.text:T.t3,textAlign:"right"}}>{satMiktar?satMiktar.toLocaleString("tr-TR"):"—"}</div>
                    <div style={{fontSize:"13px",color:bFiyat?T.text:T.t3,textAlign:"right"}}>{bFiyat?bFiyat.toLocaleString("tr-TR",{maximumFractionDigits:0}):"—"}</div>
                    <div style={{fontSize:"13px",fontWeight:600,color:satKdvHaric?T.text:T.t3,textAlign:"right"}}>{satKdvHaric?satKdvHaric.toLocaleString("tr-TR",{maximumFractionDigits:0}):"—"}</div>
                    <div style={{fontSize:"13px",color:satKdv?T.t2:T.t3,textAlign:"right"}}>{satKdv?satKdv.toLocaleString("tr-TR",{maximumFractionDigits:0}):"—"}</div>
                    <div style={{fontSize:"13px",fontWeight:700,color:satKdvDahil?T.text:T.t3,textAlign:"right"}}>{satKdvDahil?satKdvDahil.toLocaleString("tr-TR",{maximumFractionDigits:0}):"—"}</div>
                    {(()=>{
                      const bkTaahhut=taahhut.filter(t=>t.butceKalemiId===k.id).reduce((s,t)=>s+(parseFloat(t.netFiyat||0)*parseFloat(t.miktar||0)),0);
                      const bkGercek=gerceklesen.filter(g=>g.butceKalemiId===k.id).reduce((s,g)=>s+(parseFloat(g.netFiyat||0)*parseFloat(g.miktar||0)),0);
                      const bkKalan=satKdvHaric-bkTaahhut-bkGercek;
                      return <><div style={{fontSize:"12px",color:bkTaahhut?"#fa8c16":T.t3,fontWeight:bkTaahhut?600:400,textAlign:"right"}}>{bkTaahhut?bkTaahhut.toLocaleString("tr-TR",{maximumFractionDigits:0}):"—"}</div>
                      <div style={{fontSize:"12px",color:bkGercek?"#1677ff":T.t3,fontWeight:bkGercek?600:400,textAlign:"right"}}>{bkGercek?bkGercek.toLocaleString("tr-TR",{maximumFractionDigits:0}):"—"}</div>
                      <div style={{fontSize:"12px",fontWeight:600,color:bkKalan<0?"#ff4d4f":bkKalan>0?"#52c41a":T.t3,textAlign:"right"}}>{satKdvHaric?bkKalan.toLocaleString("tr-TR",{maximumFractionDigits:0}):"—"}</div></>;
                    })()}
                    <div style={{fontSize:"11px",fontWeight:600,color:T.primary,textAlign:"right"}}>{satKdvHaric&&ozet.planlananTop>0?(satKdvHaric/ozet.planlananTop*100).toFixed(1)+"%":"—"}</div>
                    <button onClick={e=>{e.stopPropagation();if(confirm("Bu kalemi silmek istiyor musunuz?"))delButceKalemi(k.id);}} style={{padding:"0",border:"none",background:"transparent",color:T.err,cursor:"pointer",display:"flex",alignItems:"center"}}><Trash2 size={14}/></button>
                  </div>;
                });
                return <>
                  {/* SATIRLAR — SCROLL EDİLEBİLİR */}
                  <div style={{flex:1,overflowY:"auto",minHeight:0,background:"#fff"}}>
                    {rows}
                  </div>
                  {/* ALT TOPLAMLAR — SABİT */}
                  <div style={{flex:"0 0 auto",display:"grid",gridTemplateColumns:"30px 120px 0.7fr 100px 80px 60px 70px 80px 100px 80px 100px 90px 90px 90px 35px 25px",padding:"9px 12px",gap:"8px",alignItems:"center",background:"#384248",borderTop:`2px solid ${T.border}`}}>
                    <div></div><div></div><div></div><div></div><div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div style={{fontSize:"15px",fontWeight:700,color:"#fff",textAlign:"right"}}>{topKdvHaric>0?topKdvHaric.toLocaleString("tr-TR",{maximumFractionDigits:0}):"—"}</div>
                    <div style={{fontSize:"15px",fontWeight:700,color:"#d1d9de",textAlign:"right"}}>{topKdv>0?topKdv.toLocaleString("tr-TR",{maximumFractionDigits:0}):"—"}</div>
                    <div style={{fontSize:"15px",fontWeight:700,color:"#52c41a",textAlign:"right"}}>{topKdvDahil>0?topKdvDahil.toLocaleString("tr-TR",{maximumFractionDigits:0}):"—"}</div>
                    {(()=>{
                      const tTop=taahhut.reduce((s,t)=>s+(parseFloat(t.netFiyat||0)*parseFloat(t.miktar||0)),0);
                      const gTop=gerceklesen.reduce((s,g)=>s+(parseFloat(g.netFiyat||0)*parseFloat(g.miktar||0)),0);
                      const kTop=topKdvHaric-tTop-gTop;
                      return <><div style={{fontSize:"14px",fontWeight:700,color:"#fa8c16",textAlign:"right"}}>{tTop>0?tTop.toLocaleString("tr-TR",{maximumFractionDigits:0}):"—"}</div>
                      <div style={{fontSize:"14px",fontWeight:700,color:"#1677ff",textAlign:"right"}}>{gTop>0?gTop.toLocaleString("tr-TR",{maximumFractionDigits:0}):"—"}</div>
                      <div style={{fontSize:"14px",fontWeight:700,color:kTop<0?"#ff4d4f":"#52c41a",textAlign:"right"}}>{topKdvHaric?kTop.toLocaleString("tr-TR",{maximumFractionDigits:0}):"—"}</div></>;
                    })()}
                    <div style={{fontSize:"13px",fontWeight:700,color:"#fff"}}>100%</div>
                    <div></div>
                  </div>
                </>;
              })()}
            </>
          }
        </div>
        </div>}

        {aktifSekme==="fiyatlandirma"&&<div>
          {!selProje?
            <div style={{padding:"40px",textAlign:"center",color:T.t3,border:`1px dashed ${T.border}`,borderRadius:T.r,background:"#fafafa"}}>
              <div style={{fontSize:"12px"}}>Lütfen önce bir proje seçin</div>
            </div>
          :<>
            {/* PROJE ÖZET KARTI — m² MALİYET PLANLAMA */}
            <div style={{padding:"16px",borderRadius:"8px",border:`1px solid ${T.border}`,background:"#fff",marginBottom:"16px"}}>
              <div style={{fontSize:"14px",fontWeight:600,color:T.text,marginBottom:"12px",display:"flex",alignItems:"center",gap:"6px"}}>📊 Proje Özet — m² Maliyet Planlaması</div>

              {/* Row 1: Hesaplanan referans + Sapma */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px",marginBottom:"14px"}}>
                <div style={{padding:"12px",borderRadius:"6px",border:`1px solid ${T.border}`,background:"#fafafa"}}>
                  <div style={{fontSize:"10px",color:T.t3,textTransform:"uppercase",fontWeight:600,marginBottom:"6px"}}>🖥️ Hesaplanan Brüt m² (Sistem)</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:"6px",marginBottom:"2px"}}>
                    <span style={{fontSize:"10px",color:T.t3,minWidth:"34px",fontWeight:600}}>Dahil</span>
                    <span style={{fontSize:"16px",fontWeight:700,color:"#722ed1"}}>{ozet.m2MaliyetKdvDahil>0?ozet.m2MaliyetKdvDahil.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺":"—"}</span>
                  </div>
                  <div style={{display:"flex",alignItems:"baseline",gap:"6px"}}>
                    <span style={{fontSize:"10px",color:T.t3,minWidth:"34px",fontWeight:600}}>Hariç</span>
                    <span style={{fontSize:"13px",fontWeight:600,color:"#722ed1",opacity:0.7}}>{ozet.m2Maliyet>0?ozet.m2Maliyet.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺":"—"}</span>
                  </div>
                </div>
                <div style={{padding:"12px",borderRadius:"6px",border:`1px solid ${T.border}`,background:"#fafafa"}}>
                  <div style={{fontSize:"10px",color:T.t3,textTransform:"uppercase",fontWeight:600,marginBottom:"6px"}}>🖥️ Hesaplanan Net m² (Müteahhit Payı)</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:"6px",marginBottom:"2px"}}>
                    <span style={{fontSize:"10px",color:T.t3,minWidth:"34px",fontWeight:600}}>Dahil</span>
                    <span style={{fontSize:"16px",fontWeight:700,color:"#ff4d4f"}}>{ozet.m2MaliyetNetKdvDahil>0?ozet.m2MaliyetNetKdvDahil.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺":"—"}</span>
                  </div>
                  <div style={{display:"flex",alignItems:"baseline",gap:"6px"}}>
                    <span style={{fontSize:"10px",color:T.t3,minWidth:"34px",fontWeight:600}}>Hariç</span>
                    <span style={{fontSize:"13px",fontWeight:600,color:"#ff4d4f",opacity:0.7}}>{ozet.m2MaliyetNet>0?ozet.m2MaliyetNet.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺":"—"}</span>
                  </div>
                </div>
                <div style={{padding:"12px",borderRadius:"6px",border:`1px solid ${T.border}`,background:"#fafafa"}}>
                  <div style={{fontSize:"10px",color:T.t3,textTransform:"uppercase",fontWeight:600,marginBottom:"6px"}}>📏 Sapma (Öngörülen − Hesaplanan Net)</div>
                  {(()=>{
                    const ong=parseFloat(fiyatForm.ongorulenM2KdvHaric);
                    const net=ozet.m2MaliyetNet;
                    if(isNaN(ong)||net<=0)return<div style={{fontSize:"13px",color:T.t3,paddingTop:"6px"}}>—</div>;
                    const sapma=ong-net;
                    const sapmaY=net>0?(sapma/net*100):0;
                    const col=Math.abs(sapmaY)<5?T.ok:Math.abs(sapmaY)<15?T.warn:T.err;
                    return<>
                      <div style={{fontSize:"16px",fontWeight:700,color:col}}>{(sapma>=0?"+":"")+sapma.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺"}</div>
                      <div style={{fontSize:"11px",color:col,opacity:0.85,fontWeight:600}}>%{(sapmaY>=0?"+":"")+sapmaY.toFixed(1)}</div>
                    </>;
                  })()}
                </div>
              </div>

              {/* Row 2: Input fields */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"12px",alignItems:"end"}}>
                <div>
                  <div style={{fontSize:"11px",color:T.t2,fontWeight:600,marginBottom:"4px"}}>🎯 Öngörülen m² (KDV Hariç)</div>
                  <input type="text" value={fiyatForm.ongorulenM2KdvHaric} onChange={e=>fiyatHaricChange(e.target.value)} placeholder="0,00" style={{width:"100%",padding:"8px 10px",border:`1px solid ${T.bDark}`,borderRadius:"6px",fontSize:"13px",boxSizing:"border-box",outline:"none"}}/>
                </div>
                <div>
                  <div style={{fontSize:"11px",color:T.t2,fontWeight:600,marginBottom:"4px"}}>🎯 Öngörülen m² (KDV Dahil)</div>
                  <input type="text" value={fiyatForm.ongorulenM2KdvDahil} onChange={e=>fiyatDahilChange(e.target.value)} placeholder="0,00" style={{width:"100%",padding:"8px 10px",border:`1px solid ${T.bDark}`,borderRadius:"6px",fontSize:"13px",boxSizing:"border-box",outline:"none"}}/>
                </div>
                <div>
                  <div style={{fontSize:"11px",color:T.t2,fontWeight:600,marginBottom:"4px"}}>📈 Kar Marjı (%)</div>
                  <input type="text" value={fiyatForm.karMarjiYuzde} onChange={e=>setFiyatForm(p=>({...p,karMarjiYuzde:e.target.value.replace(/[^0-9.,]/g,"").replace(",",".")}))} placeholder="0" style={{width:"100%",padding:"8px 10px",border:`1px solid ${T.bDark}`,borderRadius:"6px",fontSize:"13px",boxSizing:"border-box",outline:"none"}}/>
                </div>
                <div>
                  <div style={{fontSize:"11px",color:T.t2,fontWeight:600,marginBottom:"4px"}}>Varsayılan KDV Oranı</div>
                  <select value={fiyatForm.varsayilanKdvOrani} onChange={e=>fiyatKdvChange(e.target.value)} style={{width:"100%",padding:"8px 10px",border:`1px solid ${T.bDark}`,borderRadius:"6px",fontSize:"13px",background:"#fff",boxSizing:"border-box",outline:"none",cursor:"pointer"}}>
                    <option value="1">%1</option>
                    <option value="10">%10</option>
                    <option value="20">%20</option>
                  </select>
                </div>
              </div>

              {/* Save button */}
              <div style={{display:"flex",justifyContent:"flex-end",marginTop:"14px"}}>
                <button onClick={fiyatKaydet} disabled={!selProjeId} style={{padding:"8px 20px",background:fiyatSaved?T.ok:T.primary,color:"#fff",border:"none",borderRadius:"6px",fontSize:"13px",fontWeight:600,cursor:selProjeId?"pointer":"not-allowed",transition:"background 0.25s ease",opacity:selProjeId?1:0.5}}>{fiyatSaved?"✓ Kaydedildi":"💾 Kaydet"}</button>
              </div>
            </div>

            {/* BLOK BAZLI ÖNGÖRÜLEN m² OVERRIDE */}
            {(selProje.bloklar||[]).length>0&&<div style={{padding:"16px",borderRadius:"8px",border:`1px solid ${T.border}`,background:"#fff",marginBottom:"16px"}}>
              <div style={{fontSize:"14px",fontWeight:600,color:T.text,marginBottom:"4px"}}>🏢 Blok Bazında Öngörülen m² Maliyet</div>
              <div style={{fontSize:"11px",color:T.t3,marginBottom:"12px"}}>Boş bırakılan bloklarda proje seviyesi öngörülen m² kullanılır.</div>
              <div style={{display:"grid",gridTemplateColumns:`repeat(${Math.min(3,(selProje.bloklar||[]).length)},1fr)`,gap:"12px"}}>
                {(selProje.bloklar||[]).map(bl=>{
                  const blBrutM2=blokM2Harita[bl.ad]||0;
                  const blMaliyet=ozet.blokMaliyet[bl.ad]||0;
                  const blMaliyetDahil=ozet.blokMaliyetKdvDahil[bl.ad]||0;
                  const blMutM2=ozet.muteahhitOran>0?blBrutM2*ozet.muteahhitOran:blBrutM2;
                  const blM2MaliyetNet=blMutM2>0?blMaliyet/blMutM2:0;
                  const blM2MaliyetNetDahil=blMutM2>0?blMaliyetDahil/blMutM2:0;
                  const f=blokFiyatForm[bl.id]||{ongorulenM2KdvHaric:"",ongorulenM2KdvDahil:""};
                  const saved=blokFiyatSaved[bl.id];
                  const ong=parseFloat(f.ongorulenM2KdvHaric);
                  const hasOverride=f.ongorulenM2KdvHaric!=="";
                  const etkinHaric=hasOverride?ong:parseFloat(fiyatForm.ongorulenM2KdvHaric);
                  const sapma=!isNaN(etkinHaric)&&blM2MaliyetNet>0?etkinHaric-blM2MaliyetNet:null;
                  const sapmaY=sapma!=null&&blM2MaliyetNet>0?(sapma/blM2MaliyetNet*100):null;
                  const sapmaCol=sapmaY==null?T.t3:Math.abs(sapmaY)<5?T.ok:Math.abs(sapmaY)<15?T.warn:T.err;
                  return<div key={bl.id} style={{padding:"12px",borderRadius:"6px",border:`1px solid ${T.border}`,background:"#fafafa"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"}}>
                      <div style={{fontSize:"13px",fontWeight:700,color:T.text}}>{bl.ad} BLOK</div>
                      {!hasOverride&&<span style={{fontSize:"10px",color:T.t3,fontStyle:"italic"}}>(proje seviyesi)</span>}
                    </div>
                    <div style={{fontSize:"10px",color:T.t3,textTransform:"uppercase",fontWeight:600,marginBottom:"4px"}}>🖥️ Hesaplanan Net m²</div>
                    <div style={{display:"flex",alignItems:"baseline",gap:"6px",marginBottom:"2px"}}>
                      <span style={{fontSize:"10px",color:T.t3,minWidth:"34px",fontWeight:600}}>Dahil</span>
                      <span style={{fontSize:"14px",fontWeight:700,color:"#ff4d4f"}}>{blM2MaliyetNetDahil>0?blM2MaliyetNetDahil.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺":"—"}</span>
                    </div>
                    <div style={{display:"flex",alignItems:"baseline",gap:"6px",marginBottom:"10px"}}>
                      <span style={{fontSize:"10px",color:T.t3,minWidth:"34px",fontWeight:600}}>Hariç</span>
                      <span style={{fontSize:"12px",fontWeight:600,color:"#ff4d4f",opacity:0.7}}>{blM2MaliyetNet>0?blM2MaliyetNet.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺":"—"}</span>
                    </div>
                    <div style={{fontSize:"10px",color:T.t2,fontWeight:600,marginBottom:"3px"}}>🎯 Öngörülen m² (KDV Hariç)</div>
                    <input type="text" value={f.ongorulenM2KdvHaric} onChange={e=>blokFiyatHaricChange(bl.id,e.target.value)} placeholder={fiyatForm.ongorulenM2KdvHaric||"0,00"} style={{width:"100%",padding:"6px 8px",border:`1px solid ${T.bDark}`,borderRadius:"4px",fontSize:"12px",boxSizing:"border-box",outline:"none",marginBottom:"6px"}}/>
                    <div style={{fontSize:"10px",color:T.t2,fontWeight:600,marginBottom:"3px"}}>🎯 Öngörülen m² (KDV Dahil)</div>
                    <input type="text" value={f.ongorulenM2KdvDahil} onChange={e=>blokFiyatDahilChange(bl.id,e.target.value)} placeholder={fiyatForm.ongorulenM2KdvDahil||"0,00"} style={{width:"100%",padding:"6px 8px",border:`1px solid ${T.bDark}`,borderRadius:"4px",fontSize:"12px",boxSizing:"border-box",outline:"none",marginBottom:"8px"}}/>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"6px"}}>
                      <div style={{fontSize:"11px",color:sapmaCol,fontWeight:600}}>
                        {sapma==null?"—":"Sapma: "+(sapma>=0?"+":"")+sapma.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺ (%"+(sapmaY>=0?"+":"")+sapmaY.toFixed(1)+")"}
                      </div>
                      <button onClick={()=>blokFiyatKaydet(bl.id)} style={{padding:"4px 10px",background:saved?T.ok:T.primary,color:"#fff",border:"none",borderRadius:"4px",fontSize:"11px",fontWeight:600,cursor:"pointer",transition:"background 0.25s"}}>{saved?"✓":"💾"}</button>
                    </div>
                  </div>;
                })}
              </div>
            </div>}

            {/* SATILMAYAN DAİRELER TABLOSU */}
            {(()=>{
              const satilmayan=(selProje.bolumler||[]).filter(bo=>bo.tipi==="Daire"&&bo.sahiplik==="Müteahhit"&&bo.durum!=="satildi");
              if(satilmayan.length===0)return null;
              const karMarji=parseFloat(fiyatForm.karMarjiYuzde||"0");
              return <div style={{padding:"16px",borderRadius:"8px",border:`1px solid ${T.border}`,background:"#fff",marginBottom:"16px"}}>
                <div style={{fontSize:"14px",fontWeight:600,color:T.text,marginBottom:"4px"}}>🏠 Satılmayan Daireler — Liste Fiyatı ({satilmayan.length} daire)</div>
                <div style={{fontSize:"11px",color:T.t3,marginBottom:"12px"}}>Daire maliyet = brüt m² × etkin öngörülen m². Üretim S.F. = Maliyet × (1 + kâr marjı %). Hesap S.F. = Üretim + şerefiyeler. Liste fiyatı manuel girilir (pazarlık payı dahil).</div>
                <div style={{overflowX:"auto"}}>
                  <div style={{display:"grid",gridTemplateColumns:"60px 50px 40px 70px 90px 90px 80px 80px 90px 95px 95px 55px 40px",gap:"4px",fontSize:"10px",fontWeight:700,color:T.t3,textTransform:"uppercase",padding:"6px 4px",borderBottom:`2px solid ${T.border}`,alignItems:"end",minWidth:"920px"}}>
                    <div>Blok</div><div>No</div><div>Kat</div><div style={{textAlign:"right"}}>Brüt m²</div><div style={{textAlign:"right"}}>Daire Maliyet</div><div style={{textAlign:"right"}}>Üretim S.F.</div><div>Kat Şfye</div><div>Cephe Şfye</div><div style={{textAlign:"right"}}>Hesap S.F.</div><div>Liste Hariç</div><div>Liste Dahil</div><div>KDV</div><div></div>
                  </div>
                  {satilmayan.sort((a,b)=>(a.blok||"").localeCompare(b.blok||"")||(a.kat||0)-(b.kat||0)||(a.no||"").localeCompare(b.no||"")).map(bo=>{
                    const f=daireFiyatForm[bo.id]||{};
                    const saved=daireFiyatSaved[bo.id];
                    const blok=(selProje.bloklar||[]).find(bl=>bl.ad===bo.blok);
                    const blokOng=blok&&blok.ongorulenM2KdvHaric!==""?parseFloat(blok.ongorulenM2KdvHaric):NaN;
                    const projeOng=parseFloat(fiyatForm.ongorulenM2KdvHaric);
                    const etkinOng=!isNaN(blokOng)?blokOng:projeOng;
                    const brutM2=parseFloat(bo.brutM2)||0;
                    const daireMaliyet=!isNaN(etkinOng)&&brutM2>0?brutM2*etkinOng:0;
                    const uretimSF=daireMaliyet*(1+karMarji/100);
                    const katSrf=parseFloat(f.katSerefiyesiTl)||0;
                    const cepheSrf=parseFloat(f.cepheSerefiyesiTl)||0;
                    const hesapSF=uretimSF+katSrf+cepheSrf;
                    const durumMeta=BOLUM_DURUMLARI.find(d=>d.id===bo.durum);
                    return<div key={bo.id} style={{display:"grid",gridTemplateColumns:"60px 50px 40px 70px 90px 90px 80px 80px 90px 95px 95px 55px 40px",gap:"4px",fontSize:"11px",padding:"5px 4px",borderBottom:`1px solid ${T.border}`,alignItems:"center",minWidth:"920px"}}>
                      <div style={{fontWeight:600,color:T.text}}>{bo.blok}</div>
                      <div style={{fontWeight:600,color:T.text}}>{bo.no}{durumMeta&&durumMeta.id!=="musait"&&<span style={{marginLeft:"3px",padding:"1px 4px",borderRadius:"3px",background:durumMeta.bg,color:durumMeta.color,fontSize:"9px",fontWeight:700}}>{durumMeta.label.substring(0,3)}</span>}</div>
                      <div style={{color:T.t2}}>{bo.kat}</div>
                      <div style={{textAlign:"right",color:T.t2}}>{brutM2>0?brutM2.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2}):"—"}</div>
                      <div style={{textAlign:"right",color:"#722ed1",fontWeight:600}}>{daireMaliyet>0?daireMaliyet.toLocaleString("tr-TR",{maximumFractionDigits:0}):"—"}</div>
                      <div style={{textAlign:"right",color:"#1677ff",fontWeight:600}}>{uretimSF>0?uretimSF.toLocaleString("tr-TR",{maximumFractionDigits:0}):"—"}</div>
                      <input type="text" value={f.katSerefiyesiTl||""} onChange={e=>daireSerefiyeChange(bo.id,"katSerefiyesiTl",e.target.value)} placeholder="0" style={{padding:"4px 6px",border:`1px solid ${T.bDark}`,borderRadius:"3px",fontSize:"11px",boxSizing:"border-box",outline:"none",width:"100%",textAlign:"right"}}/>
                      <input type="text" value={f.cepheSerefiyesiTl||""} onChange={e=>daireSerefiyeChange(bo.id,"cepheSerefiyesiTl",e.target.value)} placeholder="0" style={{padding:"4px 6px",border:`1px solid ${T.bDark}`,borderRadius:"3px",fontSize:"11px",boxSizing:"border-box",outline:"none",width:"100%",textAlign:"right"}}/>
                      <div style={{textAlign:"right",color:"#52c41a",fontWeight:700}}>{hesapSF>0?hesapSF.toLocaleString("tr-TR",{maximumFractionDigits:0}):"—"}</div>
                      <input type="text" value={f.listeFiyatiKdvHaric||""} onChange={e=>daireListeHaricChange(bo.id,e.target.value)} placeholder="—" style={{padding:"4px 6px",border:`1px solid ${T.bDark}`,borderRadius:"3px",fontSize:"11px",boxSizing:"border-box",outline:"none",width:"100%",textAlign:"right"}}/>
                      <input type="text" value={f.listeFiyatiKdvDahil||""} onChange={e=>daireListeDahilChange(bo.id,e.target.value)} placeholder="—" style={{padding:"4px 6px",border:`1px solid ${T.bDark}`,borderRadius:"3px",fontSize:"11px",boxSizing:"border-box",outline:"none",width:"100%",textAlign:"right"}}/>
                      {(()=>{const autoKdv=daireKdvHesapla(bo.netM2);const net=parseFloat(bo.netM2);const hasNet=!isNaN(net);return <div title={hasNet?`Net ${net.toLocaleString("tr-TR",{maximumFractionDigits:2})} m² → %${autoKdv} (yönetmelik: <150→%10, ≥150→%20)`:"Net m² girilmemiş — varsayılan %10"} style={{padding:"4px 2px",borderRadius:"3px",fontSize:"11px",textAlign:"center",fontWeight:700,background:autoKdv==="20"?"#fff1f0":"#f6ffed",color:autoKdv==="20"?"#cf1322":"#389e0d",border:`1px solid ${autoKdv==="20"?"#ffa39e":"#b7eb8f"}`}}>%{autoKdv}</div>;})()}
                      <button onClick={()=>daireFiyatKaydet(bo.id)} style={{padding:"3px 6px",background:saved?T.ok:T.primary,color:"#fff",border:"none",borderRadius:"3px",fontSize:"10px",fontWeight:600,cursor:"pointer",transition:"background 0.25s"}}>{saved?"✓":"💾"}</button>
                    </div>;
                  })}
                </div>
              </div>;
            })()}

            {/* Info / Roadmap note */}
            <div style={{padding:"10px 12px",background:"#fffbe6",border:"1px solid #ffe58f",borderRadius:"6px",fontSize:"12px",color:"#8c6e00"}}>
              ℹ️ <b>Liste fiyatı:</b> manuel giriş (pazarlık payı dahil). Boş bırakılırsa daire listede "fiyat yok" olarak görünür. Sonraki adım: <b>Faz 1-C</b> — Satış sekmesinde liste fiyatlarının salt okunur görüntülenmesi.
            </div>
          </>}
        </div>}
      </div>
    }
  </div>;
};

const DosyaKategoriYonetim=({dosyaKategorileri,setDosyaKategorileri})=>{
  const kategoriler=dosyaKategorileri&&dosyaKategorileri.length>0?dosyaKategorileri:DOSYA_KATEGORILERI.map(k=>({...k,altKategoriler:[...k.altKategoriler]}));
  const[seciliKat,setSeciliKat]=useState(kategoriler[0]?.id||null);
  const[yeniAnaKat,setYeniAnaKat]=useState("");
  const[yeniAltKat,setYeniAltKat]=useState("");
  const varsayilanIds=DOSYA_KATEGORILERI.map(k=>k.id);
  const varsayilanAltlar=(katId)=>{const d=DOSYA_KATEGORILERI.find(k=>k.id===katId);return d?d.altKategoriler:[];};

  const addAnaKat=()=>{
    const ad=yeniAnaKat.trim();if(!ad)return;
    if(kategoriler.some(k=>k.ad.toLowerCase()===ad.toLowerCase())){alert("Bu kategori zaten var!");return;}
    const id="custom-"+Date.now();
    setDosyaKategorileri([...kategoriler,{id,ad,icon:"📁",altKategoriler:[]}]);
    setYeniAnaKat("");setSeciliKat(id);
  };
  const delAnaKat=(id)=>{
    if(varsayilanIds.includes(id)){alert("Varsayılan kategoriler silinemez!");return;}
    if(!confirm("Bu ana kategoriyi ve tüm alt kategorilerini silmek istiyor musunuz?"))return;
    const yeni=kategoriler.filter(k=>k.id!==id);
    setDosyaKategorileri(yeni);
    if(seciliKat===id)setSeciliKat(yeni[0]?.id||null);
  };
  const addAltKat=()=>{
    const ad=yeniAltKat.trim();if(!ad)return;
    const kat=kategoriler.find(k=>k.id===seciliKat);
    if(!kat)return;
    if(kat.altKategoriler.includes(ad)){alert("Bu alt kategori zaten var!");return;}
    setDosyaKategorileri(kategoriler.map(k=>k.id===seciliKat?{...k,altKategoriler:[...k.altKategoriler,ad]}:k));
    setYeniAltKat("");
  };
  const delAltKat=(altAd)=>{
    const defs=varsayilanAltlar(seciliKat);
    if(defs.includes(altAd)){alert("Varsayılan alt kategoriler silinemez!");return;}
    if(!confirm(`"${altAd}" alt kategorisini silmek istiyor musunuz?`))return;
    setDosyaKategorileri(kategoriler.map(k=>k.id===seciliKat?{...k,altKategoriler:k.altKategoriler.filter(a=>a!==altAd)}:k));
  };

  const aktifKat=kategoriler.find(k=>k.id===seciliKat);

  return <div style={{display:"grid",gridTemplateColumns:"375px 375px",gap:"16px",minHeight:"400px"}}>
    {/* SOL: ANA KATEGORİLER */}
    <div style={{border:`1px solid ${T.border}`,borderRadius:"8px",overflow:"hidden"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",background:"#384248"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <span style={{fontSize:"16px",fontWeight:700,color:"#fff"}}>Ana Kategoriler</span>
          <span style={{fontSize:"13px",color:"#8799a3"}}>{kategoriler.length}</span>
        </div>
        <button onClick={addAnaKat} title="Kategori Ekle" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePlus size={40}/></button>
      </div>
      <div style={{padding:"8px",borderBottom:`1px solid ${T.border}`}}>
        <input style={iS} value={yeniAnaKat} onChange={e=>setYeniAnaKat(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addAnaKat()} placeholder="Yeni kategori adı..." onFocus={foc} onBlur={blr}/>
      </div>
      <div style={{overflow:"auto",maxHeight:"calc(100vh - 200px)"}}>
        {kategoriler.map(k=><div key={k.id} onClick={()=>setSeciliKat(k.id)} style={{display:"flex",alignItems:"center",gap:"8px",padding:"10px 14px",cursor:"pointer",borderBottom:`1px solid ${T.border}`,background:seciliKat===k.id?"#384248":"#fff",borderLeft:seciliKat===k.id?"3px solid #8799a3":"3px solid transparent"}}>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontSize:"14px",fontWeight:seciliKat===k.id?600:400,color:seciliKat===k.id?"#fff":T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{k.ad}</div>
            <div style={{fontSize:"12px",color:seciliKat===k.id?"#8799a3":T.t3}}>{k.altKategoriler.length} alt kategori</div>
          </div>
          <div style={{display:"flex",gap:"8px",flexShrink:0}}>
            <button onClick={e=>{e.stopPropagation();const yeni=prompt("Kategori adını düzenleyin:",k.ad);if(!yeni||!yeni.trim()||yeni.trim()===k.ad)return;setDosyaKategorileri(kategoriler.map(x=>x.id===k.id?{...x,ad:yeni.trim()}:x));}} style={{background:"none",border:"none",color:seciliKat===k.id?"#8799a3":T.t3,cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePen size={16}/></button>
            {!varsayilanIds.includes(k.id)&&<button onClick={e=>{e.stopPropagation();delAnaKat(k.id);}} style={{background:"none",border:"none",color:seciliKat===k.id?"#ff6b6b":T.err,cursor:"pointer",display:"flex",alignItems:"center"}}><Trash2 size={16}/></button>}
          </div>
        </div>)}
      </div>
    </div>
    {/* SAĞ: ALT KATEGORİLER */}
    <div style={{border:`1px solid ${T.border}`,borderRadius:"8px",overflow:"hidden"}}>
      {aktifKat?<>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",background:"#384248"}}>
          <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
            <span style={{fontSize:"16px",fontWeight:700,color:"#fff"}}>{aktifKat.ad}</span>
            <span style={{fontSize:"13px",color:"#8799a3"}}>{aktifKat.altKategoriler.length} alt kategori</span>
          </div>
          {aktifKat.id!=="yapi-denetim"&&aktifKat.id!=="bagimsiz-bolumler"&&<button onClick={addAltKat} title="Alt Kategori Ekle" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePlus size={40}/></button>}
        </div>
        {aktifKat.id!=="yapi-denetim"&&aktifKat.id!=="bagimsiz-bolumler"&&<div style={{padding:"8px 16px",borderBottom:`1px solid ${T.border}`}}>
          <input style={iS} value={yeniAltKat} onChange={e=>setYeniAltKat(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addAltKat()} placeholder="Yeni alt kategori adı..." onFocus={foc} onBlur={blr}/>
        </div>}
        <div style={{padding:"0"}}>
          {aktifKat.altKategoriler.length===0
            ?<div style={{padding:"40px",textAlign:"center",color:T.t3,fontSize:"14px"}}>
              {(aktifKat.id==="yapi-denetim"||aktifKat.id==="bagimsiz-bolumler")
                ?"Bu kategorinin alt kategorileri projedeki blok ve bölüm tanımlarından otomatik oluşturulur."
                :"Henüz alt kategori eklenmemiş."}
            </div>
            :aktifKat.altKategoriler.map((alt,idx)=>{
              const varsayilan=varsayilanAltlar(aktifKat.id).includes(alt);
              return <div key={alt} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",borderBottom:idx<aktifKat.altKategoriler.length-1?`1px solid ${T.border}`:"none",background:idx%2===0?"#fff":"#fafafa"}}>
                <span style={{fontSize:"14px",color:T.text}}>{alt}</span>
                <div style={{display:"flex",gap:"8px"}}>
                  <button onClick={()=>{const yeni=prompt("Alt kategori adını düzenleyin:",alt);if(!yeni||!yeni.trim()||yeni.trim()===alt)return;setDosyaKategorileri(kategoriler.map(k=>k.id===seciliKat?{...k,altKategoriler:k.altKategoriler.map(a=>a===alt?yeni.trim():a)}:k));}} style={{background:"none",border:"none",color:T.t3,cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePen size={16}/></button>
                  {!varsayilan&&<button onClick={()=>delAltKat(alt)} style={{background:"none",border:"none",color:T.err,cursor:"pointer",display:"flex",alignItems:"center"}}><Trash2 size={16}/></button>}
                </div>
              </div>;
            })
          }
        </div>
      </>:<div style={{padding:"60px",textAlign:"center",color:T.t3,fontSize:"14px"}}>Kategori seçiniz</div>}
    </div>
  </div>;
};

/* ========== SATIŞ SUNUM MODÜLÜ ========== */

/* ---- MÜŞTERİ PICKER MODAL ---- */
const MusteriPickerModal=({firmalar,onSelect,onSaveFirma,onClose,baslik="MÜŞTERİ SEÇ"})=>{
  const[src,setSrc]=useState("");
  const[mode,setMode]=useState("list"); // list | yeni
  const[yeniForm,setYeniForm]=useState({ad:"",telefon:"",eposta:"",kanal:"",not:""});
  const aliciFirmalar=useMemo(()=>firmalar.filter(f=>(f.turler||[]).includes("alici")),[firmalar]);
  const filtered=useMemo(()=>{
    const q=nTR(src);
    return aliciFirmalar.filter(f=>
      nTR(f.ad).includes(q)||
      nTR(f.firmaKodu).includes(q)||
      nTR(f.telefon).includes(q)
    );
  },[aliciFirmalar,src]);

  const getNextKod=()=>{
    const pre="120.1.";
    const ex=firmalar.filter(f=>(f.firmaKodu||"").startsWith(pre)).map(f=>{
      const n=parseInt((f.firmaKodu||"").split(".")[2],10);
      return isNaN(n)?0:n;
    });
    return pre+String((ex.length>0?Math.max(...ex):0)+1).padStart(5,"0");
  };

  const kaydetVeSec=async()=>{
    if(!yeniForm.ad.trim()){alert("Müşteri adı zorunludur!");return;}
    if(yeniForm.telefon&&!phoneOk(yeniForm.telefon)){alert("Telefon 11 hane olmalı veya boş!");return;}
    const yeniFirma={
      id:Date.now(),firmaKodu:getNextKod(),ad:yeniForm.ad.trim(),kisaAd:"",aciklama:yeniForm.not||"",
      turler:["alici"],paraBirimi:"TL",firmaKisiTipi:"sahis",
      vergiDairesiIl:"",vergiDairesi:"",vergiNo:"",tcKimlikNo:"",sicilNo:"",kategori:"",
      telefon:yeniForm.telefon||"",sabitTelefon:"",telefon2:"",webAdresi:"",eposta:yeniForm.eposta||"",
      mahalle:"",adres:"",il:"",ilce:"",postaKodu:"",
      bankaAdi:"",iban:"",aktif:true,
      ilgilendigiProjeler:[],
      kisiler:[],notlar:yeniForm.not?[{id:Date.now(),tarih:new Date().toISOString().split("T")[0],yazar:"Admin",metin:`[${yeniForm.kanal||"Kanal?"}] ${yeniForm.not}`}]:[],
      belgeler:[],subeler:[],bankalar:[],iletisimler:[],adresler:[],
      createdAt:new Date().toISOString().split("T")[0],
      _isNew:true
    };
    try{
      await onSaveFirma(yeniFirma);
      onSelect(yeniFirma);
      onClose();
    }catch(e){
      alert("Müşteri kaydedilemedi: "+e.message);
    }
  };

  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1100,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}}>
    <div style={{background:"#fff",borderRadius:T.rl,width:"100%",maxWidth:"560px",maxHeight:"88vh",display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{padding:"12px 20px",background:"#384248",display:"flex",alignItems:"center",gap:"16px",borderRadius:`${T.rl} ${T.rl} 0 0`}}>
        <button onClick={onClose} style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><MoveLeft size={24}/></button>
        <span style={{fontSize:"15px",fontWeight:600,color:"#fff",flex:1,textAlign:"center"}}>{baslik}</span>
        <div style={{width:"24px"}}></div>
      </div>

      {mode==="list"?<>
        <div style={{padding:"12px 16px",borderBottom:`1px solid ${T.border}`}}>
          <input style={{...iS,width:"100%"}} value={src} onChange={e=>setSrc(e.target.value)} placeholder="Ara: ad, kod, telefon..." onFocus={foc} onBlur={blr} autoFocus/>
        </div>
        <div style={{flex:1,overflow:"auto"}}>
          {filtered.length===0
            ?<div style={{padding:"40px",textAlign:"center",color:T.t3,fontSize:"13px"}}>{aliciFirmalar.length===0?"Henüz alıcı müşteri kaydı yok":"Sonuç bulunamadı"}</div>
            :filtered.map(f=><div key={f.id} onClick={()=>{onSelect(f);onClose();}} style={{padding:"12px 16px",borderBottom:`1px solid ${T.border}`,cursor:"pointer",display:"flex",alignItems:"center",gap:"12px"}}
                onMouseEnter={e=>e.currentTarget.style.background=T.pBg} onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
                <div style={{width:"36px",height:"36px",borderRadius:"50%",background:T.pBg,color:T.primary,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:600,fontSize:"14px"}}>{(f.ad||"?").charAt(0).toUpperCase()}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:"14px",fontWeight:500,color:T.text}}>{f.ad}</div>
                  <div style={{fontSize:"11px",color:T.t3,fontFamily:"monospace"}}>{f.firmaKodu} {f.telefon?`• ${f.telefon}`:""}</div>
                </div>
                {(f.ilgilendigiProjeler||[]).length>0&&<span style={{fontSize:"10px",padding:"2px 6px",borderRadius:"3px",background:"#fff7e6",color:"#fa8c16",fontWeight:600}}>{(f.ilgilendigiProjeler||[]).length} proje</span>}
              </div>)
          }
        </div>
        <div style={{padding:"12px 16px",borderTop:`1px solid ${T.border}`,background:"#fafafa"}}>
          <button onClick={()=>setMode("yeni")} style={{width:"100%",padding:"10px",borderRadius:T.r,border:`1px dashed ${T.primary}`,background:"#fff",color:T.primary,fontSize:"14px",fontWeight:500,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"}}><Plus size={16}/> Yeni Müşteri Ekle</button>
        </div>
      </>:<>
        <div style={{padding:"16px 20px",flex:1,overflow:"auto",display:"flex",flexDirection:"column",gap:"12px"}}>
          <div><label style={lS}>Ad Soyad <span style={{color:T.err}}>*</span></label><input style={iS} value={yeniForm.ad} onChange={e=>setYeniForm(p=>({...p,ad:toTitleCase(e.target.value)}))} placeholder="Örn. Ahmet Yılmaz" autoFocus onFocus={foc} onBlur={blr}/></div>
          <div><label style={lS}>Telefon</label><input style={iS} value={yeniForm.telefon} onChange={e=>{const v=e.target.value.replace(/\D/g,"").slice(0,11);setYeniForm(p=>({...p,telefon:v}));}} placeholder="05XXXXXXXXX" onFocus={foc} onBlur={blr}/></div>
          <div><label style={lS}>E-posta <span style={{color:T.t3,fontSize:"11px"}}>(opsiyonel)</span></label><input style={iS} type="email" value={yeniForm.eposta} onChange={e=>setYeniForm(p=>({...p,eposta:e.target.value}))} placeholder="ornek@mail.com" onFocus={foc} onBlur={blr}/></div>
          <div><label style={lS}>Temas Kanalı</label>
            <select style={iS} value={yeniForm.kanal} onChange={e=>setYeniForm(p=>({...p,kanal:e.target.value}))}>
              <option value="">—</option>
              <option value="Telefon">Telefon</option>
              <option value="Tabela">Tabela / Dış Mekân</option>
              <option value="Instagram">Instagram / Sosyal Medya</option>
              <option value="Web Sitesi">Web Sitesi</option>
              <option value="Sahibinden">Sahibinden</option>
              <option value="Aracı / Emlakçı">Aracı / Emlakçı</option>
              <option value="Referans">Referans</option>
              <option value="Diğer">Diğer</option>
            </select>
          </div>
          <div><label style={lS}>Not</label><textarea style={{...iS,height:"60px",resize:"vertical"}} value={yeniForm.not} onChange={e=>setYeniForm(p=>({...p,not:e.target.value}))} placeholder="İlk temas notu..." onFocus={foc} onBlur={blr}/></div>
        </div>
        <div style={{padding:"12px 16px",borderTop:`1px solid ${T.border}`,background:"#fafafa",display:"flex",gap:"8px",justifyContent:"flex-end"}}>
          <button onClick={()=>setMode("list")} style={{padding:"8px 16px",borderRadius:T.r,border:`1px solid ${T.border}`,background:"#fff",color:T.t2,fontSize:"13px",cursor:"pointer"}}>← Listeye Dön</button>
          <button onClick={kaydetVeSec} style={{padding:"8px 20px",borderRadius:T.r,border:"none",background:T.primary,color:"#fff",fontSize:"13px",fontWeight:600,cursor:"pointer"}}>Kaydet ve Seç</button>
        </div>
      </>}
    </div>
  </div>;
};

/* ---- GÖRSEL SLIDER (yeniden kullanılabilir) ---- */
const GorselSlider=({gorseller=[],yukseklik="380px",otomatik=true,placeholderIcon="🏢",placeholderText="Henüz görsel eklenmemiş"})=>{
  const[idx,setIdx]=useState(0);
  const[duraklat,setDuraklat]=useState(false);
  const say=gorseller.length;

  useEffect(()=>{setIdx(0);},[gorseller]);

  useEffect(()=>{
    if(!otomatik||say<=1||duraklat)return;
    const t=setInterval(()=>setIdx(p=>(p+1)%say),5000);
    return()=>clearInterval(t);
  },[say,otomatik,duraklat]);

  const prev=()=>setIdx(p=>(p-1+say)%say);
  const next=()=>setIdx(p=>(p+1)%say);

  if(say===0){
    return <div style={{height:yukseklik,background:"linear-gradient(135deg,#e6f4ff 0%,#f9f0ff 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:T.rl,border:`1px dashed ${T.border}`,gap:"12px"}}>
      <div style={{fontSize:"64px",opacity:0.6}}>{placeholderIcon}</div>
      <div style={{color:T.t3,fontSize:"13px"}}>{placeholderText}</div>
    </div>;
  }

  const aktif=gorseller[idx];

  return <div onMouseEnter={()=>setDuraklat(true)} onMouseLeave={()=>setDuraklat(false)} style={{position:"relative",height:yukseklik,borderRadius:T.rl,overflow:"hidden",background:"#000",boxShadow:T.shM}}>
    <div style={{position:"absolute",inset:0,background:`url(${aktif?.url||""}) center/contain no-repeat, url(${aktif?.url||""}) center/cover`,backgroundBlendMode:"normal",transition:"background-image .4s ease"}}></div>
    {/* Başlık varsa alt kısımda */}
    {aktif?.aciklama&&<div style={{position:"absolute",bottom:0,left:0,right:0,padding:"16px 24px",background:"linear-gradient(180deg,transparent 0%,rgba(0,0,0,0.75) 100%)",color:"#fff",fontSize:"14px",fontWeight:500}}>{aktif.aciklama}</div>}
    {/* Sol / sağ oklar */}
    {say>1&&<>
      <button onClick={prev} style={{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",width:"42px",height:"42px",borderRadius:"50%",border:"none",background:"rgba(0,0,0,0.5)",color:"#fff",cursor:"pointer",fontSize:"22px",display:"flex",alignItems:"center",justifyContent:"center",transition:"background .2s"}} onMouseEnter={e=>e.currentTarget.style.background="rgba(0,0,0,0.75)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(0,0,0,0.5)"}>‹</button>
      <button onClick={next} style={{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",width:"42px",height:"42px",borderRadius:"50%",border:"none",background:"rgba(0,0,0,0.5)",color:"#fff",cursor:"pointer",fontSize:"22px",display:"flex",alignItems:"center",justifyContent:"center",transition:"background .2s"}} onMouseEnter={e=>e.currentTarget.style.background="rgba(0,0,0,0.75)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(0,0,0,0.5)"}>›</button>
    </>}
    {/* Dot indicator */}
    {say>1&&<div style={{position:"absolute",bottom:"14px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"6px",padding:"6px 10px",borderRadius:"16px",background:"rgba(0,0,0,0.4)"}}>
      {gorseller.map((_,i)=><button key={i} onClick={()=>setIdx(i)} style={{width:i===idx?"22px":"8px",height:"8px",borderRadius:"4px",border:"none",background:i===idx?"#fff":"rgba(255,255,255,0.5)",cursor:"pointer",transition:"all .25s",padding:0}}/>)}
    </div>}
    {/* Sayaç */}
    {say>1&&<div style={{position:"absolute",top:"12px",right:"12px",padding:"4px 10px",borderRadius:"12px",background:"rgba(0,0,0,0.5)",color:"#fff",fontSize:"11px",fontWeight:600}}>{idx+1} / {say}</div>}
  </div>;
};

/* ---- SATIŞ SUNUM PAGE ---- */
const SatisSunumPage=({projeler,setProjeler,firmalar,saveProje,saveFirma,setPage,goToFirma})=>{
  const[selProjeId,setSelProjeId]=useState(null);
  const[tanitimGecildi,setTanitimGecildi]=useState(false);
  const[selBlokAd,setSelBlokAd]=useState(null);
  const[selBolumId,setSelBolumId]=useState(null);
  const[tamEkran,setTamEkran]=useState(false);
  const[pickerAcik,setPickerAcik]=useState(false);
  const[pickerIslem,setPickerIslem]=useState(null); // "opsiyonla" | "satildi"

  const selProje=projeler.find(p=>p.id===selProjeId);
  const selBlok=selProje?.bloklar?.find(b=>b.ad===selBlokAd);
  const selBolum=selProje?.bolumler?.find(b=>b.id===selBolumId);

  // Proje özetleri (durum dağılımı)
  const projeOzet=(proje)=>{
    const b=proje.bolumler||[];
    const o={musait:0,opsiyonlu:0,satildi:0,kiralik:0};
    b.forEach(x=>{if(o[x.durum]!==undefined)o[x.durum]++;});
    return{...o,toplam:b.length};
  };

  // Blok özet (bu bloğa ait daireler)
  const blokOzet=(blokAd)=>{
    const b=(selProje?.bolumler||[]).filter(x=>x.blok===blokAd);
    const o={musait:0,opsiyonlu:0,satildi:0,kiralik:0};
    b.forEach(x=>{if(o[x.durum]!==undefined)o[x.durum]++;});
    return{...o,toplam:b.length};
  };

  // Bloğun daireleri
  const blokBolumler=useMemo(()=>{
    if(!selProje||!selBlokAd)return[];
    return(selProje.bolumler||[]).filter(b=>b.blok===selBlokAd).sort((a,b)=>{
      const na=parseInt(a.no||"0",10)||0;
      const nb=parseInt(b.no||"0",10)||0;
      if(na!==nb)return na-nb;
      return(a.no||"").localeCompare(b.no||"","tr");
    });
  },[selProje,selBlokAd]);

  // Durum rengi
  const durumRenk=(d)=>BOLUM_DURUMLARI.find(x=>x.id===d)||{color:"#8c8c8c",bg:"#fafafa",label:"—"};

  // Bir dosyanın görsel olup olmadığını anla
  const isResimDosyasi=(d)=>{
    if(!d)return false;
    const ad=(d.ad||"").toLowerCase();
    const tip=(d.tip||d.dosyaTuru||"").toLowerCase();
    if(tip.startsWith("image/"))return true;
    return/\.(jpe?g|png|gif|webp|bmp|svg)$/.test(ad);
  };
  // Proje görselleri (tüm) — Dosya Yönetimi'nden "Proje Görselleri" kategorisi + eski proje.gorseller[]
  const projeGorselleri=(proje)=>{
    const out=[];
    // 1) tumDosyalar'dan "Proje Görselleri" kategorisi
    (proje?.tumDosyalar||[]).forEach(d=>{
      const dosyaSrc=dosyaUrl(d);
      if(!dosyaSrc)return;
      if(d.anaKategori==="Proje Görselleri"||isResimDosyasi(d)){
        out.push({url:dosyaSrc,aciklama:d.aciklama||d.ad||""});
      }
    });
    // 2) Eski alan: proje.gorseller
    (proje?.gorseller||[]).forEach(g=>{
      const src=g.url||dosyaUrl(g);
      if(!src)return;
      if(!out.some(x=>x.url===src))out.push({url:src,aciklama:g.aciklama||g.ad||""});
    });
    return out;
  };
  // Daire görselleri
  const bolumGorselleri=(bolum)=>{
    const out=[];
    (bolum?.gorseller||[]).forEach(g=>{
      const src=g.url||dosyaUrl(g);
      if(!src)return;
      out.push({url:src,aciklama:g.aciklama||g.ad||""});
    });
    return out;
  };
  // İlk görsel (kart için)
  const projeIlkGorsel=(proje)=>{
    const g=projeGorselleri(proje);
    return g.length>0?g[0].url:null;
  };

  // Daire güncelle (tek bölüm değişikliği → saveProje)
  const bolumGuncelle=async(bolumId,degisiklik)=>{
    if(!selProje)return;
    const yeniBolumler=(selProje.bolumler||[]).map(b=>b.id===bolumId?{...b,...degisiklik}:b);
    const yeniProje={...selProje,bolumler:yeniBolumler};
    setProjeler(prev=>prev.map(p=>p.id===yeniProje.id?yeniProje:p));
    try{await saveProje(yeniProje);}catch(e){console.warn("Proje kayıt hatası:",e.message);}
  };

  // Firma'nın ilgilendiği projelere bu projeyi ekle
  const firmayaProjeEkle=async(firma)=>{
    const mevcut=firma.ilgilendigiProjeler||[];
    if(mevcut.some(x=>x.projeId===selProje.id))return;
    const yeniIlgi=[...mevcut,{projeId:selProje.id,projeAd:selProje.ad,ilkTemas:new Date().toISOString().split("T")[0],kanal:"",not:""}];
    const yeniFirma={...firma,ilgilendigiProjeler:yeniIlgi};
    try{await saveFirma(yeniFirma);}catch(e){console.warn("Firma güncelleme:",e.message);}
  };

  // Opsiyonlama veya satış
  const musteriSec=async(firma)=>{
    if(!selBolum)return;
    const yeniDurum=pickerIslem==="opsiyonla"?"opsiyonlu":"satildi";
    const degisiklik={
      durum:yeniDurum,
      aliciFirmaId:firma.id,
      aliciFirmaAd:firma.ad,
      sozlesmeTarihi:new Date().toISOString().split("T")[0]
    };
    await bolumGuncelle(selBolum.id,degisiklik);
    await firmayaProjeEkle(firma);
  };

  const musaitYap=async()=>{
    if(!selBolum||!confirm("Daire müsait durumuna döndürülsün mü? Müşteri bağlantısı kaldırılacak."))return;
    await bolumGuncelle(selBolum.id,{durum:"musait",aliciFirmaId:"",aliciFirmaAd:"",sozlesmeTarihi:""});
  };

  // Tam ekran toggle — parent'a bildir yok, sadece içeride gizle
  // (Sidebar ve üst bar App seviyesinde, biz içeride "sunum görünümü" uygulayacağız)

  // Adım: proje → tanıtım → blok → daire
  const adim=!selProjeId?1:(!tanitimGecildi?2:(!selBlokAd?3:4));

  // Para formatı
  const fmtPara=(v,pb="TL")=>{
    const n=parseFloat(v)||0;
    if(n===0)return"—";
    return n.toLocaleString("tr-TR",{minimumFractionDigits:0,maximumFractionDigits:0})+" "+(pb==="TL"?"₺":pb);
  };

  // Sıfırlama yardımcıları
  const sifirlaHepsi=()=>{setSelProjeId(null);setTanitimGecildi(false);setSelBlokAd(null);setSelBolumId(null);};
  const sifirlaTanitimSonra=()=>{setTanitimGecildi(false);setSelBlokAd(null);setSelBolumId(null);};
  const sifirlaBlokSonra=()=>{setSelBlokAd(null);setSelBolumId(null);};

  // Adım stilleri
  const adBtn=(no,label,aktif,gecmis,onClick,enabled)=>{
    const bg=!enabled?"#f5f5f5":(aktif?T.pBg:(gecmis?"#fff":"transparent"));
    const fg=!enabled?T.t3:(aktif?T.primary:(gecmis?T.primary:T.t2));
    const brd=!enabled?T.border:(aktif||gecmis?T.primary:T.border);
    return <button onClick={enabled?onClick:undefined} disabled={!enabled} style={{display:"flex",alignItems:"center",gap:"6px",background:bg,color:fg,border:`1px solid ${brd}`,padding:"6px 14px",borderRadius:"18px",fontSize:"13px",fontWeight:aktif?600:500,cursor:!enabled?"not-allowed":"pointer"}}>
      <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"20px",height:"20px",borderRadius:"50%",background:aktif?T.primary:(gecmis?T.primary:"#e8e8e8"),color:aktif||gecmis?"#fff":T.t3,fontSize:"11px",fontWeight:700}}>{gecmis&&!aktif?"✓":no}</span>
      {label}
    </button>;
  };

  // Breadcrumb (4 adım)
  const breadcrumb=<div style={{display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",marginBottom:"16px",flexWrap:"wrap"}}>
    {adBtn(1,"Proje",adim===1,adim>1,sifirlaHepsi,true)}
    <ChevronRight size={14} color={T.t3}/>
    {adBtn(2,"Tanıtım",adim===2,adim>2,sifirlaTanitimSonra,!!selProjeId)}
    <ChevronRight size={14} color={T.t3}/>
    {adBtn(3,"Blok",adim===3,adim>3,sifirlaBlokSonra,!!selProjeId&&tanitimGecildi)}
    <ChevronRight size={14} color={T.t3}/>
    {adBtn(4,"Daire",adim===4,false,()=>{},!!selBlokAd)}
  </div>;

  // TAM EKRAN overlay (position:fixed)
  const content=<div style={tamEkran?{position:"fixed",inset:0,background:"#fff",zIndex:900,overflow:"auto",padding:"24px"}:{}}>
    {pickerAcik&&<MusteriPickerModal firmalar={firmalar} onSaveFirma={saveFirma} onSelect={musteriSec} onClose={()=>setPickerAcik(false)} baslik={pickerIslem==="opsiyonla"?"OPSİYONLA — MÜŞTERİ SEÇ":"SATIŞ — MÜŞTERİ SEÇ"}/>}

    {/* ÜST BAR — proje adı + tam ekran toggle */}
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px",paddingBottom:"12px",borderBottom:`1px solid ${T.border}`}}>
      <div>
        <h2 style={{fontSize:tamEkran?"24px":"20px",fontWeight:600,color:T.text,margin:0}}>SATIŞ SUNUMU</h2>
        {selProje&&<div style={{fontSize:"13px",color:T.t2,marginTop:"2px"}}>{selProje.ad}{selBlokAd?` • ${selBlokAd} Blok`:""}{selBolum?` • Daire ${selBolum.no||"?"}`:""}</div>}
      </div>
      <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
        <label style={{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"6px 14px",borderRadius:"20px",border:`1px solid ${tamEkran?T.primary:T.border}`,background:tamEkran?T.pBg:"#fff",color:tamEkran?T.primary:T.t2,fontSize:"13px",fontWeight:500}}>
          <input type="checkbox" checked={tamEkran} onChange={e=>setTamEkran(e.target.checked)} style={{cursor:"pointer"}}/>
          🖥️ Sunum Modu
        </label>
        {tamEkran&&<button onClick={()=>setTamEkran(false)} style={{padding:"6px 14px",borderRadius:"20px",border:`1px solid ${T.border}`,background:"#fff",color:T.t2,fontSize:"13px",cursor:"pointer"}}>✕ Kapat</button>}
      </div>
    </div>

    {breadcrumb}

    {/* ADIM 1 — PROJE SEÇİMİ */}
    {adim===1&&<div>
      {projeler.length===0
        ?<div style={{padding:"80px",textAlign:"center",color:T.t3,fontSize:"15px",border:`1px dashed ${T.border}`,borderRadius:T.rl}}>Henüz proje tanımlanmamış. Önce Projeler sayfasından proje oluşturun.</div>
        :<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:"16px"}}>
          {projeler.map(p=>{
            const oz=projeOzet(p);
            const img=projeIlkGorsel(p);
            return <div key={p.id} onClick={()=>{setSelProjeId(p.id);}} style={{background:"#fff",borderRadius:T.rl,border:`1px solid ${T.border}`,overflow:"hidden",cursor:"pointer",transition:"all .2s",boxShadow:T.sh}}
              onMouseEnter={e=>e.currentTarget.style.boxShadow=T.shM} onMouseLeave={e=>e.currentTarget.style.boxShadow=T.sh}>
              {img
                ?<div style={{height:"160px",background:`url(${img}) center/cover`,position:"relative"}}><div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,transparent 50%,rgba(0,0,0,0.6) 100%)"}}></div></div>
                :<div style={{height:"160px",background:"linear-gradient(135deg,#e6f4ff 0%,#f9f0ff 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"48px"}}>🏢</div>
              }
              <div style={{padding:"16px"}}>
                <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"6px"}}>
                  {p.projeKodu&&<span style={{fontSize:"11px",color:T.t3,fontFamily:"monospace",background:"#f5f5f5",padding:"2px 6px",borderRadius:"3px"}}>{p.projeKodu}</span>}
                  {p.tur&&<span style={{fontSize:"11px",padding:"2px 8px",borderRadius:"3px",background:T.pBg,color:T.primary,fontWeight:500}}>{p.tur}</span>}
                </div>
                <div style={{fontSize:"16px",fontWeight:600,color:T.text,marginBottom:"4px"}}>{p.ad}</div>
                <div style={{fontSize:"12px",color:T.t2,marginBottom:"12px"}}>{p.il?`${p.il}${p.ilce?` / ${p.ilce}`:""}`:"—"}{p.tahminiTeslim?` • Teslim: ${p.tahminiTeslim}`:""}</div>
                {oz.toplam>0?<div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
                  <span style={{fontSize:"11px",padding:"3px 8px",borderRadius:"3px",background:"#f6ffed",color:"#52c41a",fontWeight:600}}>{oz.musait} müsait</span>
                  <span style={{fontSize:"11px",padding:"3px 8px",borderRadius:"3px",background:"#fff7e6",color:"#fa8c16",fontWeight:600}}>{oz.opsiyonlu} opsiyonlu</span>
                  <span style={{fontSize:"11px",padding:"3px 8px",borderRadius:"3px",background:"#e6f4ff",color:"#1677ff",fontWeight:600}}>{oz.satildi} satıldı</span>
                </div>:<div style={{fontSize:"11px",color:T.t3}}>Daire tanımı yok</div>}
              </div>
            </div>;
          })}
        </div>}
    </div>}

    {/* ADIM 2 — PROJE TANITIM (kayar görsel slider) */}
    {adim===2&&selProje&&(()=>{
      const pgor=projeGorselleri(selProje);
      return <div>
        {/* Büyük görsel slider */}
        <GorselSlider gorseller={pgor} yukseklik={tamEkran?"58vh":"440px"} otomatik={true} placeholderIcon="🏢" placeholderText="Bu proje için henüz tanıtım görseli eklenmemiş"/>

        {/* Proje özet bilgileri */}
        <div style={{marginTop:"16px",padding:"20px 24px",background:"#fff",borderRadius:T.rl,border:`1px solid ${T.border}`,boxShadow:T.sh}}>
          <div style={{display:"flex",alignItems:"flex-start",gap:"20px",flexWrap:"wrap"}}>
            <div style={{flex:"1 1 260px",minWidth:"260px"}}>
              <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"6px"}}>
                {selProje.projeKodu&&<span style={{fontSize:"11px",color:T.t3,fontFamily:"monospace",background:"#f5f5f5",padding:"2px 6px",borderRadius:"3px"}}>{selProje.projeKodu}</span>}
                {selProje.tur&&<span style={{fontSize:"11px",padding:"2px 8px",borderRadius:"3px",background:T.pBg,color:T.primary,fontWeight:500}}>{selProje.tur}</span>}
              </div>
              <div style={{fontSize:tamEkran?"26px":"22px",fontWeight:700,color:T.text,marginBottom:"6px"}}>{selProje.ad}</div>
              <div style={{fontSize:"14px",color:T.t2,marginBottom:"4px",display:"flex",alignItems:"center",gap:"6px"}}><MapPin size={14}/> {selProje.il?`${selProje.il}${selProje.ilce?` / ${selProje.ilce}`:""}`:"—"}{selProje.mahalle?` • ${selProje.mahalle}`:""}</div>
              {selProje.tahminiTeslim&&<div style={{fontSize:"14px",color:T.t2,display:"flex",alignItems:"center",gap:"6px"}}><Calendar size={14}/> Tahmini Teslim: <strong style={{color:T.text}}>{selProje.tahminiTeslim}</strong></div>}
              {selProje.aciklama&&<div style={{fontSize:"13px",color:T.t2,marginTop:"10px",lineHeight:"1.5",fontStyle:"italic"}}>"{selProje.aciklama}"</div>}
            </div>
            <div style={{flex:"0 0 auto",display:"flex",gap:"12px",flexWrap:"wrap"}}>
              {(()=>{const oz=projeOzet(selProje);return<>
                <div style={{padding:"10px 16px",borderRadius:T.r,background:"#f6ffed",border:"1px solid #b7eb8f",textAlign:"center",minWidth:"88px"}}>
                  <div style={{fontSize:"22px",fontWeight:700,color:"#52c41a"}}>{oz.musait}</div>
                  <div style={{fontSize:"11px",color:"#52c41a",fontWeight:500}}>Müsait</div>
                </div>
                <div style={{padding:"10px 16px",borderRadius:T.r,background:"#fff7e6",border:"1px solid #ffd591",textAlign:"center",minWidth:"88px"}}>
                  <div style={{fontSize:"22px",fontWeight:700,color:"#fa8c16"}}>{oz.opsiyonlu}</div>
                  <div style={{fontSize:"11px",color:"#fa8c16",fontWeight:500}}>Opsiyonlu</div>
                </div>
                <div style={{padding:"10px 16px",borderRadius:T.r,background:"#e6f4ff",border:"1px solid #91caff",textAlign:"center",minWidth:"88px"}}>
                  <div style={{fontSize:"22px",fontWeight:700,color:"#1677ff"}}>{oz.satildi}</div>
                  <div style={{fontSize:"11px",color:"#1677ff",fontWeight:500}}>Satıldı</div>
                </div>
              </>;})()}
            </div>
          </div>

          {/* Devam butonu */}
          <div style={{marginTop:"20px",paddingTop:"16px",borderTop:`1px solid ${T.border}`,display:"flex",justifyContent:"space-between",alignItems:"center",gap:"12px"}}>
            <button onClick={sifirlaHepsi} style={{padding:"10px 20px",borderRadius:T.r,border:`1px solid ${T.border}`,background:"#fff",color:T.t2,fontSize:"14px",cursor:"pointer"}}>← Proje Seçimine Dön</button>
            <button onClick={()=>setTanitimGecildi(true)} style={{padding:"12px 28px",borderRadius:T.r,border:"none",background:T.primary,color:"#fff",fontSize:"15px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",boxShadow:T.shM}}>Bloklara Geç <ChevronRight size={18}/></button>
          </div>
        </div>
      </div>;
    })()}

    {/* ADIM 3 — BLOK SEÇİMİ */}
    {adim===3&&selProje&&<div>
      <div style={{marginBottom:"16px",padding:"16px 20px",background:T.pBg,borderRadius:T.rl,border:`1px solid ${T.primary}33`}}>
        <div style={{fontSize:"18px",fontWeight:600,color:T.text,marginBottom:"4px"}}>{selProje.ad}</div>
        <div style={{fontSize:"13px",color:T.t2}}>{selProje.il||""}{selProje.ilce?` / ${selProje.ilce}`:""}{selProje.tahminiTeslim?` • Tahmini Teslim: ${selProje.tahminiTeslim}`:""}</div>
        {selProje.aciklama&&<div style={{fontSize:"12px",color:T.t3,marginTop:"6px",fontStyle:"italic"}}>{selProje.aciklama}</div>}
      </div>
      {(selProje.bloklar||[]).length===0
        ?<div style={{padding:"80px",textAlign:"center",color:T.t3,fontSize:"15px",border:`1px dashed ${T.border}`,borderRadius:T.rl}}>Bu projede blok tanımı yok.</div>
        :<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:"16px"}}>
          {(selProje.bloklar||[]).sort((a,b)=>(a.ad||"").localeCompare(b.ad||"","tr")).map(bl=>{
            const oz=blokOzet(bl.ad);
            return <div key={bl.id} onClick={()=>setSelBlokAd(bl.ad)} style={{background:"#fff",borderRadius:T.rl,border:`1px solid ${T.border}`,padding:"20px",cursor:"pointer",transition:"all .2s",boxShadow:T.sh}}
              onMouseEnter={e=>{e.currentTarget.style.boxShadow=T.shM;e.currentTarget.style.borderColor=T.primary;}} onMouseLeave={e=>{e.currentTarget.style.boxShadow=T.sh;e.currentTarget.style.borderColor=T.border;}}>
              <div style={{fontSize:"28px",fontWeight:700,color:T.primary,marginBottom:"4px"}}>{bl.ad} Blok</div>
              <div style={{fontSize:"12px",color:T.t3,marginBottom:"14px"}}>{oz.toplam} daire</div>
              <div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span style={{fontSize:"12px",color:T.t2}}>🟢 Müsait</span>
                  <span style={{fontSize:"14px",fontWeight:700,color:"#52c41a"}}>{oz.musait}</span>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span style={{fontSize:"12px",color:T.t2}}>🟡 Opsiyonlu</span>
                  <span style={{fontSize:"14px",fontWeight:700,color:"#fa8c16"}}>{oz.opsiyonlu}</span>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span style={{fontSize:"12px",color:T.t2}}>🔵 Satıldı</span>
                  <span style={{fontSize:"14px",fontWeight:700,color:"#1677ff"}}>{oz.satildi}</span>
                </div>
              </div>
            </div>;
          })}
        </div>}
    </div>}

    {/* ADIM 4 — DAİRE SEÇİMİ + DETAY */}
    {adim===4&&selProje&&selBlok&&<div style={{display:"grid",gridTemplateColumns:selBolum?"1fr 400px":"1fr",gap:"16px"}}>
      <div>
        {/* Durum filtre rozetleri */}
        <div style={{marginBottom:"12px",padding:"12px 16px",background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`,display:"flex",alignItems:"center",gap:"20px",flexWrap:"wrap"}}>
          <div style={{fontSize:"14px",fontWeight:600,color:T.text}}>{selBlokAd} Blok — {blokBolumler.length} daire</div>
          <div style={{flex:1}}></div>
          {BOLUM_DURUMLARI.map(d=><div key={d.id} style={{display:"flex",alignItems:"center",gap:"6px",fontSize:"12px"}}>
            <div style={{width:"12px",height:"12px",borderRadius:"3px",background:d.color}}></div>
            <span style={{color:T.t2}}>{d.label}</span>
          </div>)}
        </div>
        {blokBolumler.length===0
          ?<div style={{padding:"60px",textAlign:"center",color:T.t3,fontSize:"14px",border:`1px dashed ${T.border}`,borderRadius:T.rl}}>Bu blokta daire tanımı yok.</div>
          :<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))",gap:"12px"}}>
            {blokBolumler.map(b=>{
              const d=durumRenk(b.durum);
              const sec=selBolumId===b.id;
              return <div key={b.id} onClick={()=>setSelBolumId(b.id)} style={{background:d.bg,border:`2px solid ${sec?d.color:(d.color+"55")}`,borderRadius:T.rl,padding:"14px",cursor:"pointer",transition:"all .15s",position:"relative",transform:sec?"scale(1.02)":"scale(1)",boxShadow:sec?T.shM:"none"}}
                onMouseEnter={e=>{if(!sec)e.currentTarget.style.transform="scale(1.02)";}} onMouseLeave={e=>{if(!sec)e.currentTarget.style.transform="scale(1)";}}>
                <div style={{fontSize:"11px",color:T.t3,marginBottom:"4px",fontWeight:500}}>Daire No</div>
                <div style={{fontSize:"22px",fontWeight:700,color:d.color,marginBottom:"8px"}}>{b.no||"—"}</div>
                <div style={{fontSize:"12px",color:T.t2,marginBottom:"2px"}}>{b.odaSayisi||"—"}{b.kat?` • K:${b.kat}`:""}</div>
                <div style={{fontSize:"12px",color:T.t2,marginBottom:"8px"}}>{b.brutM2?`${b.brutM2} m²`:"—"}</div>
                {(()=>{
                  const lst=parseFloat(b.listeFiyatiKdvDahil)||0;
                  const sat=parseFloat(b.satisFiyati)||0;
                  const tutar=lst>0?lst:sat;
                  if(tutar<=0||tamEkran)return null;
                  return <div style={{fontSize:"13px",fontWeight:700,color:T.text,marginBottom:"6px"}}>{lst>0?tutar.toLocaleString("tr-TR")+" ₺":fmtPara(sat,b.paraBirimi)}</div>;
                })()}
                <div style={{fontSize:"10px",padding:"3px 8px",borderRadius:"3px",background:d.color,color:"#fff",fontWeight:600,textTransform:"uppercase",display:"inline-block"}}>{d.label}</div>
              </div>;
            })}
          </div>}
      </div>

      {/* DAİRE DETAY PANEL */}
      {selBolum&&<div style={{background:"#fff",borderRadius:T.rl,border:`1px solid ${T.border}`,overflow:"hidden",alignSelf:"start",position:"sticky",top:"16px"}}>
        {/* GÖRSEL SLIDER — daire görselleri yoksa proje görsellerine fallback */}
        <div style={{position:"relative"}}>
          {(()=>{
            const daireG=bolumGorselleri(selBolum);
            const gorseller=daireG.length>0?daireG:projeGorselleri(selProje);
            return <GorselSlider gorseller={gorseller} yukseklik="240px" otomatik={true} placeholderIcon="🏠" placeholderText="Bu daire için görsel yok"/>;
          })()}
          <div style={{position:"absolute",top:"12px",right:"12px",padding:"4px 12px",borderRadius:"4px",background:durumRenk(selBolum.durum).color,color:"#fff",fontSize:"11px",fontWeight:700,textTransform:"uppercase",zIndex:5}}>{durumRenk(selBolum.durum).label}</div>
        </div>

        <div style={{padding:"16px"}}>
          <div style={{fontSize:"11px",color:T.t3,textTransform:"uppercase",letterSpacing:"0.5px"}}>{selBlokAd} Blok</div>
          <div style={{fontSize:"28px",fontWeight:700,color:T.text,marginBottom:"12px"}}>Daire {selBolum.no||"—"}</div>

          {/* Özellikler */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px 16px",marginBottom:"14px",padding:"12px",background:"#fafafa",borderRadius:T.r,border:`1px solid ${T.border}`}}>
            <div><div style={{fontSize:"10px",color:T.t3,textTransform:"uppercase"}}>Kat</div><div style={{fontSize:"14px",fontWeight:600,color:T.text}}>{selBolum.kat||"—"}</div></div>
            <div><div style={{fontSize:"10px",color:T.t3,textTransform:"uppercase"}}>Oda Sayısı</div><div style={{fontSize:"14px",fontWeight:600,color:T.text}}>{selBolum.odaSayisi||"—"}</div></div>
            <div><div style={{fontSize:"10px",color:T.t3,textTransform:"uppercase"}}>Brüt m²</div><div style={{fontSize:"14px",fontWeight:600,color:T.text}}>{selBolum.brutM2?`${selBolum.brutM2} m²`:"—"}</div></div>
            <div><div style={{fontSize:"10px",color:T.t3,textTransform:"uppercase"}}>Net m²</div><div style={{fontSize:"14px",fontWeight:600,color:T.text}}>{selBolum.netM2?`${selBolum.netM2} m²`:"—"}</div></div>
            <div style={{gridColumn:"1 / -1"}}><div style={{fontSize:"10px",color:T.t3,textTransform:"uppercase"}}>Cephe</div><div style={{fontSize:"14px",fontWeight:600,color:T.text}}>{selBolum.cephe||"—"}</div></div>
          </div>

          {/* FİYAT — Liste Fiyatı (yönetici belirler, salt okunur) */}
          {(()=>{
            const listeDahil=parseFloat(selBolum.listeFiyatiKdvDahil)||0;
            const listeHaric=parseFloat(selBolum.listeFiyatiKdvHaric)||0;
            const satFiyat=parseFloat(selBolum.satisFiyati)||0;
            if(listeDahil>0)return<div style={{padding:"14px",background:"linear-gradient(135deg,#e6f4ff 0%,#bae7ff 100%)",borderRadius:T.r,marginBottom:"14px",textAlign:"center"}}>
              <div style={{fontSize:"11px",color:"#0050b3",textTransform:"uppercase",letterSpacing:"0.5px",fontWeight:600}}>Liste Fiyatı</div>
              <div style={{fontSize:"26px",fontWeight:700,color:"#0050b3"}}>{listeDahil.toLocaleString("tr-TR")+" ₺"}</div>
              <div style={{fontSize:"10px",color:"#0050b3",opacity:0.75,marginTop:"2px"}}>{(()=>{const n=parseFloat(selBolum.netM2);const k=!isNaN(n)&&n>=150?"20":"10";return `KDV Dahil (%${k})`;})()}{listeHaric>0?` • Hariç: ${listeHaric.toLocaleString("tr-TR")} ₺`:""}</div>
            </div>;
            if(satFiyat>0)return<div style={{padding:"14px",background:"linear-gradient(135deg,#e6f4ff 0%,#bae7ff 100%)",borderRadius:T.r,marginBottom:"14px",textAlign:"center"}}>
              <div style={{fontSize:"11px",color:"#0050b3",textTransform:"uppercase",letterSpacing:"0.5px",fontWeight:600}}>Satış Fiyatı</div>
              <div style={{fontSize:"26px",fontWeight:700,color:"#0050b3"}}>{fmtPara(selBolum.satisFiyati,selBolum.paraBirimi)}</div>
            </div>;
            return null;
          })()}

          {/* Müşteri bilgisi (tam ekran sunum modunda gizli) */}
          {!tamEkran&&selBolum.aliciFirmaAd&&<div style={{padding:"10px 12px",background:"#fff7e6",borderRadius:T.r,border:"1px solid #ffd591",marginBottom:"14px",fontSize:"12px"}}>
            <div style={{color:"#d48806",fontWeight:600,marginBottom:"2px"}}>👤 {selBolum.durum==="satildi"?"Alıcı":"Opsiyon Sahibi"}</div>
            <div style={{color:T.text}}>{selBolum.aliciFirmaAd}</div>
            {selBolum.sozlesmeTarihi&&<div style={{color:T.t3,fontSize:"11px"}}>Tarih: {selBolum.sozlesmeTarihi}</div>}
          </div>}

          {/* BUTONLAR */}
          <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
            {selBolum.durum==="musait"&&<>
              <button onClick={()=>{setPickerIslem("opsiyonla");setPickerAcik(true);}} style={{padding:"12px",borderRadius:T.r,border:"none",background:"#fa8c16",color:"#fff",fontSize:"14px",fontWeight:600,cursor:"pointer"}}>🟡 Opsiyonla</button>
              <button onClick={()=>{setPickerIslem("satildi");setPickerAcik(true);}} style={{padding:"12px",borderRadius:T.r,border:"none",background:"#1677ff",color:"#fff",fontSize:"14px",fontWeight:600,cursor:"pointer"}}>🔵 Satıldı İşaretle</button>
            </>}
            {selBolum.durum==="opsiyonlu"&&<>
              <button onClick={()=>{setPickerIslem("satildi");setPickerAcik(true);}} style={{padding:"12px",borderRadius:T.r,border:"none",background:"#1677ff",color:"#fff",fontSize:"14px",fontWeight:600,cursor:"pointer"}}>🔵 Satışa Çevir</button>
              <button onClick={musaitYap} style={{padding:"10px",borderRadius:T.r,border:`1px solid ${T.border}`,background:"#fff",color:T.t2,fontSize:"13px",cursor:"pointer"}}>Müsait Yap</button>
            </>}
            {selBolum.durum==="satildi"&&<button onClick={musaitYap} style={{padding:"10px",borderRadius:T.r,border:`1px solid ${T.border}`,background:"#fff",color:T.t2,fontSize:"13px",cursor:"pointer"}}>Müsait Yap (Satışı iptal)</button>}
          </div>

          {!tamEkran&&selBolum.aliciFirmaId&&<button onClick={()=>goToFirma&&goToFirma(selBolum.aliciFirmaId)} style={{marginTop:"10px",width:"100%",padding:"8px",borderRadius:T.r,border:"none",background:"transparent",color:T.primary,fontSize:"12px",cursor:"pointer",textDecoration:"underline"}}>Müşteri Kartına Git →</button>}
        </div>
      </div>}
    </div>}
  </div>;

  return content;
};

/* --- Projeler Liste Sayfası --- */
const ProjelerPage=({projeler,setProjeler,onSave,onDel,firmalar,dosyaKategorileri,setDosyaKategorileri,setPage,goToFirma,setEditMode})=>{
  const[secili,setSecili]=useState(null);
  const[ara,setAra]=useState("");
  const[durumFil,setDurumFil]=useState("hepsi");
  const[turFil,setTurFil]=useState("hepsi");
  const[mainTab,setMainTab]=useState("projeler");
  const[aktifFil,setAktifFil]=useState("aktif");

  if(secili==="yeni") return <ProjeKarti proje={null} isNew={true} onSave={async p=>{await onSave(p);setSecili(p.id);}} onBack={()=>{setSecili(null);setEditMode?.(false);}} firmalar={firmalar} setPage={setPage} goToFirma={goToFirma}/>;
  if(secili) {
    const p=projeler.find(x=>x.id===secili);
    if(p) return <ProjeKarti proje={p} isNew={false} onSave={onSave} onDel={(id)=>{onDel(id);setSecili(null);setEditMode?.(false);}} onBack={()=>{setSecili(null);setEditMode?.(false);}} firmalar={firmalar} setPage={setPage} goToFirma={goToFirma}/>;
  }

  const mainTabs=[
    {id:"projeler",label:"Projeler",icon:"📁",count:projeler.length},
    {id:"dosyaKategorileri",label:"Dosya Kategorileri",icon:"📂",count:(dosyaKategorileri||DOSYA_KATEGORILERI).length},
  ];

  if(mainTab==="dosyaKategorileri") return <div>
    <div style={{display:"flex",gap:"0",marginBottom:"16px"}}>
      {mainTabs.map(t=><button key={t.id} onClick={()=>setMainTab(t.id)} style={{flex:1,padding:"10px 0",border:`1px solid #8799a3`,borderBottom:"none",borderRadius:"12px 12px 0 0",background:mainTab===t.id?"#8799a3":"#384248",color:mainTab===t.id?"#000":"#fff",fontWeight:mainTab===t.id?600:400,fontSize:"14px",fontFamily:"'Inter',sans-serif",cursor:"pointer",whiteSpace:"nowrap",transition:"all .15s"}}
        onMouseEnter={e=>{if(mainTab!==t.id){e.currentTarget.style.background="#8799a3";e.currentTarget.style.color="#000";}}}
        onMouseLeave={e=>{if(mainTab!==t.id){e.currentTarget.style.background="#384248";e.currentTarget.style.color="#fff";}}}
      >{t.label} ({t.count})</button>)}
    </div>
    <DosyaKategoriYonetim dosyaKategorileri={dosyaKategorileri} setDosyaKategorileri={setDosyaKategorileri}/>
  </div>;

  const fil=projeler.filter(p=>{
    const q=nTR(ara);const araOk=!q||nTR(p.ad).includes(q)||nTR(p.projeKodu).includes(q)||nTR(p.il).includes(q);
    const durumOk=durumFil==="hepsi"||(p.durum||"")===(durumFil);
    const turOk=turFil==="hepsi"||(p.tur||"")===(turFil);
    const aktifOk=aktifFil==="all"||(aktifFil==="aktif"?p.aktif!==false:p.aktif===false);
    return araOk&&durumOk&&turOk&&aktifOk;
  });

  return <div>
    {/* ÜST SEKMELER — bizim standart tab stili */}
    <div style={{display:"flex",gap:"0",marginBottom:"0"}}>
      {mainTabs.map(t=><button key={t.id} onClick={()=>setMainTab(t.id)} style={{flex:1,padding:"10px 0",border:`1px solid #8799a3`,borderBottom:"none",borderRadius:"12px 12px 0 0",background:mainTab===t.id?"#8799a3":"#384248",color:mainTab===t.id?"#000":"#fff",fontWeight:mainTab===t.id?600:400,fontSize:"14px",fontFamily:"'Inter',sans-serif",cursor:"pointer",whiteSpace:"nowrap",transition:"all .15s",letterSpacing:"0.2px"}}
        onMouseEnter={e=>{if(mainTab!==t.id){e.currentTarget.style.background="#8799a3";e.currentTarget.style.color="#000";}}}
        onMouseLeave={e=>{if(mainTab!==t.id){e.currentTarget.style.background="#384248";e.currentTarget.style.color="#fff";}}}
      >{t.label} ({t.count})</button>)}
    </div>

    {/* FİLTRE BAR */}
    <div style={{display:"flex",gap:"10px",marginBottom:"16px",marginTop:"16px",flexWrap:"wrap",alignItems:"center"}}>
      <input style={{...iS,maxWidth:"260px"}} value={ara} onChange={e=>setAra(e.target.value)} placeholder="Proje ara..." onFocus={foc} onBlur={blr}/>
      <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
        <button onClick={()=>setDurumFil("hepsi")} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${durumFil==="hepsi"?"#384248":T.bDark}`,background:durumFil==="hepsi"?"#384248":"#fff",color:durumFil==="hepsi"?"#fff":T.t2,fontSize:"14px",cursor:"pointer"}}>Tümü</button>
        {PROJE_DURUMLARI.map(d=><button key={d.id} onClick={()=>setDurumFil(d.label)} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${durumFil===d.label?"#384248":T.bDark}`,background:durumFil===d.label?"#384248":"#fff",color:durumFil===d.label?"#fff":T.t2,fontSize:"14px",cursor:"pointer"}}>{d.label}</button>)}
      </div>
      <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
        {PROJE_TURLERI.map(t=><button key={t.id} onClick={()=>setTurFil(turFil===t.label?"hepsi":t.label)} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${turFil===t.label?"#384248":T.bDark}`,background:turFil===t.label?"#384248":"#fff",color:turFil===t.label?"#fff":T.t2,fontSize:"14px",cursor:"pointer"}}>{t.label}</button>)}
      </div>
      <div style={{display:"flex",gap:"6px"}}>
        {[{k:"aktif",l:"Aktif"},{k:"pasif",l:"Pasif"},{k:"all",l:"Tümü"}].map(d=><button key={d.k} onClick={()=>setAktifFil(d.k)} style={{height:"36px",padding:"0 14px",borderRadius:T.r,border:`1px solid ${aktifFil===d.k?(d.k==="aktif"?T.ok:d.k==="pasif"?T.err:"#384248"):T.bDark}`,background:aktifFil===d.k?(d.k==="aktif"?"#f6ffed":d.k==="pasif"?"#fff1f0":"#384248"):"#fff",color:aktifFil===d.k?(d.k==="aktif"?T.ok:d.k==="pasif"?T.err:"#fff"):T.t2,fontSize:"14px",cursor:"pointer",fontWeight:aktifFil===d.k?600:400}}>{d.l}</button>)}
      </div>
    </div>

    {/* PROJE PORTAL */}
    <div style={{border:`1px solid ${T.border}`,borderRadius:"8px",overflow:"hidden"}}>
      {/* PORTAL HEADER */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",background:"#384248"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <span style={{fontSize:"16px",fontWeight:700,color:"#fff"}}>Projeler</span>
          <span style={{fontSize:"13px",color:"#8799a3"}}>{fil.length} proje</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
          <button onClick={()=>{setSecili("yeni");setEditMode?.(true);}} title="Yeni Proje" style={{padding:"0",border:"none",background:"transparent",color:"#8799a3",cursor:"pointer",display:"flex",alignItems:"center"}}><SquarePlus size={30}/></button>
          <button onClick={()=>{
            const rows=[["Kod","Proje Adı","Tür","Durum","Brüt m²","Net m²","Bölüm","Teslim","Kayıt"]];
            fil.forEach(p=>{const topBolum=(p.bolumler||[]).length;const satilan=(p.bolumler||[]).filter(b=>b.durum==="satildi").length;const brutToplam=(p.bolumler||[]).reduce((s,b)=>s+parseFloat(b.brutM2||0),0);const netToplam=(p.bolumler||[]).reduce((s,b)=>s+parseFloat(b.netM2||0),0);rows.push([p.projeKodu||"",p.ad||"",p.tur||"",p.durum||"",brutToplam||"",netToplam||"",topBolum>0?`${topBolum} (${satilan})`:"",p.tahminiTeslim||"",p.aktif===false?"Pasif":"Aktif"]);});
            const csv=rows.map(r=>r.map(c=>`"${c}"`).join(";")).join("\n");
            const blob=new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8;"});
            const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="projeler.csv";a.click();
          }} title="Excel'e Aktar" style={{padding:"0",border:"none",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center"}}><img src={excelIcon} alt="Excel" style={{width:"35px",height:"35px"}}/></button>
        </div>
      </div>

      {/* LİSTE */}
      {fil.length===0
        ?<div style={{padding:"60px",textAlign:"center",color:T.t3,fontSize:"14px",background:"#fff"}}>
          {projeler.length===0?"Henüz proje eklenmemiş.":"Sonuç bulunamadı."}
        </div>
        :<>
          <div style={{display:"grid",gridTemplateColumns:"90px 1fr 100px 100px 90px 90px 80px 90px 70px",background:"#fafafa",borderBottom:`1px solid ${T.border}`,padding:"8px 12px",gap:"8px"}}>
            {["Kod","Proje Adı","Tür","Durum","Brüt m²","Net m²","Bölüm","Teslim","Kayıt"].map((h,i)=><div key={i} style={{fontSize:"12px",fontWeight:600,color:T.t2,textTransform:"uppercase",letterSpacing:"0.3px"}}>{h}</div>)}
          </div>
          {fil.map((p,idx)=>{
            const turObj=PROJE_TURLERI.find(t=>t.label===p.tur);
            const durumObj=PROJE_DURUMLARI.find(d=>d.label===p.durum);
            const isPasif=p.aktif===false;
            const topBolum=(p.bolumler||[]).length;
            const satilan=(p.bolumler||[]).filter(b=>b.durum==="satildi").length;
            const brutToplam=(p.bolumler||[]).reduce((s,b)=>s+parseFloat(b.brutM2||0),0);
            const netToplam=(p.bolumler||[]).reduce((s,b)=>s+parseFloat(b.netM2||0),0);
            return <div key={p.id} onClick={()=>{setSecili(p.id);setEditMode?.(true);}}
              style={{display:"grid",gridTemplateColumns:"90px 1fr 100px 100px 90px 90px 80px 90px 70px",padding:"8px 12px",gap:"8px",alignItems:"center",borderBottom:idx<fil.length-1?`1px solid ${T.border}`:"none",background:isPasif?"#fafafa":(idx%2===0?"#fff":"#fafafa"),cursor:"pointer",height:"44px",opacity:isPasif?0.45:1}}
              onMouseEnter={e=>e.currentTarget.style.background=T.pBg}
              onMouseLeave={e=>e.currentTarget.style.background=isPasif?"#fafafa":(idx%2===0?"#fff":"#fafafa")}>
              <div style={{fontSize:"14px",color:T.t3,fontWeight:500}}>{p.projeKodu||"—"}</div>
              <div style={{fontSize:"14px",fontWeight:600,color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.ad}{p.il?` (${p.ilce?p.ilce+"/":""}${p.il})`:""}</div>
              <div style={{fontSize:"14px",color:T.t2}}>{turObj?turObj.label:(p.tur||"—")}</div>
              <div style={{fontSize:"14px",color:T.t2}}>{durumObj?durumObj.label:(p.durum||"—")}</div>
              <div style={{fontSize:"14px",color:T.text,fontWeight:600}}>{brutToplam>0?brutToplam.toLocaleString("tr-TR"):"—"}</div>
              <div style={{fontSize:"14px",color:T.text,fontWeight:600}}>{netToplam>0?netToplam.toLocaleString("tr-TR"):"—"}</div>
              <div style={{fontSize:"14px",color:T.t2}}>{topBolum>0?`${topBolum} (${satilan})` :"—"}</div>
              <div style={{fontSize:"13px",color:T.t3}}>{p.tahminiTeslim?fmtDate(p.tahminiTeslim):"—"}</div>
              <div style={{fontSize:"12px",fontWeight:600,color:isPasif?T.err:T.ok}}>{isPasif?"Pasif":"Aktif"}</div>
            </div>;
          })}
        </>
      }
    </div>
  </div>;
};

export default function App(){
  const[page,setPage]=useState("dashboard");
  const[editMode,setEditMode]=useState(false);
  const[goToId,setGoToId]=useState(null);
  const goToFirma=(firmaId)=>{setGoToId(firmaId);setPage("firmalar");};
  const[sbOpen,setSbOpen]=useState(true);
  const[loading,setLoading]=useState(true);
  const firmaSavingRef=useRef(false);
  const malzemeSavingRef=useRef(false);
  const katSavingRef=useRef(false);
  const altGrpSavingRef=useRef(false);
  const teklifSavingRef=useRef(false);
  const siparisSavingRef=useRef(false);
  const faturaSavingRef=useRef(false);
  const projeSavingRef=useRef(false);
  const butceKalemiSavingRef=useRef(false);
  const backfillDoneRef=useRef(false);
  const[butceKalemleri,setButceKalemleri]=useState([]);
  const[firmalar,setFirmalar]=useState([]);
  const[malzemeler,setMalzemeler]=useState([]);
  const[teklifler,setTeklifler]=useState([]);
  const[altKategoriler,setAltKategoriler]=useState([]);
  const[altGruplar,setAltGruplar]=useState([]);
  const[projeler,setProjeler]=useState([]);
  const[dosyaKategorileri,setDosyaKategorileri]=useState(DOSYA_KATEGORILERI.map(k=>({...k,altKategoriler:[...k.altKategoriler]})));
  const[siparisler,setSiparisler]=useState([]);
  const[faturalar,setFaturalar]=useState([]);

  /* ---- VERİTABANINDAN YÜKLEMELERi ---- */
  const loadAll = useCallback(async (ilkYukleme=false) => {
    if(ilkYukleme) setLoading(true);
    try {
      const [fDb, kDb, nDb, mDb, katDb, agDb, tDb, tkDb, sbDb, bkDb, ilDb, adDb, pDb, spDb, spkDb, afDb, afkDb, bkalDb, blokDb, bolumDb] = await Promise.all([
        sbGet('firmalar','order=id.asc'),
        sbGet('kisiler','order=id.asc'),
        sbGet('notlar','order=id.asc'),
        sbGet('malzemeler','order=id.asc'),
        sbGet('kategoriler','order=kod.asc'),
        sbGet('alt_gruplar','order=id.asc'),
        sbGet('teklifler','order=id.asc'),
        sbGet('teklif_kalemleri','order=id.asc'),
        sbGet('firma_subeler','order=sira_no.asc,id.asc'),
        sbGet('firma_bankalar','order=sira_no.asc,id.asc'),
        sbGet('firma_iletisim','order=sira_no.asc,id.asc'),
        sbGet('firma_adresler','order=sira_no.asc,id.asc'),
        sbGet('projeler','order=id.asc'),
        sbGet('satinalma_siparisleri','order=id.asc'),
        sbGet('satinalma_siparis_kalemleri','order=id.asc'),
        sbGet('alis_faturalari','order=id.asc'),
        sbGet('alis_fatura_kalemleri','order=id.asc'),
        sbGet('butce_kalemleri','order=proje_id.asc,sira_no.asc'),
        sbGet('bloklar','order=proje_id.asc,id.asc'),
        sbGet('bolumler','order=proje_id.asc,id.asc'),
      ]);
      const firmaList = fDb.map(f => {
        const loc = firmaToLocal(f);
        loc.kisiler = kDb.filter(k=>k.firma_id===f.id).map(kisiToLocal);
        loc.notlar = nDb.filter(n=>n.firma_id===f.id).map(notToLocal);
        loc.belgeler = [];
        loc.subeler = sbDb.filter(s=>s.firma_id===f.id);
        loc.bankalar = bkDb.filter(b=>b.firma_id===f.id);
        loc.iletisimler = ilDb.filter(i=>i.firma_id===f.id);
        loc.adresler = adDb.filter(a=>a.firma_id===f.id);
        return loc;
      });
      const teklifList = tDb.map(t => {
        const kalemler = tkDb.filter(k=>k.teklif_id===t.id).map(kalemToLocal);
        return teklifToLocal(t, kalemler);
      });
      setFirmalar(firmaList);
      setMalzemeler(mDb.map(malzemeToLocal));
      setAltKategoriler(katDb.map(katToLocal));
      setAltGruplar(agDb.map(altGrpToLocal));
      setTeklifler(teklifList);
      setSiparisler(spDb.map(s=>{const kalemler=spkDb.filter(k=>k.siparis_id===s.id).map(siparisKalemToLocal);return siparisToLocal(s,kalemler);}));
      setFaturalar(afDb.map(f=>{const kalemler=afkDb.filter(k=>k.fatura_id===f.id).map(faturaKalemToLocal);return faturaToLocal(f,kalemler);}));
      setProjeler(pDb.map(p=>{
        const loc=projeToLocal(p);
        loc.bloklar=(blokDb||[]).filter(b=>b.proje_id===p.id).map(blokToLocal);
        loc.bolumler=(bolumDb||[]).filter(b=>b.proje_id===p.id).map(bolumToLocal);
        return loc;
      }));
      setButceKalemleri((bkalDb||[]).map(butceKalemiToLocal));
    } catch(e) {
      // Supabase bağlantısı yoksa sessizce devam et — local state ile çalışır
      console.warn("Supabase bağlantısı yok, local modda çalışılıyor:", e.message);
    }
    setLoading(false);
  }, []);

  useEffect(()=>{ loadAll(true); },[loadAll]);

  // BACKFILL — eski kayıtlar için bir kez oto-kapatma kontrolü (yeni auto-close mantığı eklenmeden önce kaydedilenler)
  useEffect(()=>{
    if(backfillDoneRef.current) return;
    if(loading) return;
    if(butceKalemleri.length===0) return;
    backfillDoneRef.current = true;
    (async()=>{
      for(const bk of butceKalemleri) {
        const anaKapali=bk.tamamlandi===true;
        const altlar=bk.planlananSatirlari||[];
        const altlarKapali=altlar.length===0||altlar.every(s=>s.tamamlandi===true);
        // Durum 1: Ana kapalı, altlardan biri açık — alt satırları senkronize et
        if(anaKapali&&!altlarKapali){
          const yeniSat=altlar.map(s=>({...s,tamamlandi:true}));
          try {
            await sbPatch('butce_kalemleri', bk.id, {planlanan_satirlari:yeniSat});
            setButceKalemleri(prev=>prev.map(b=>b.id===bk.id?{...b,planlananSatirlari:yeniSat}:b));
          } catch(e) { console.warn("Backfill alt satır senkronizasyon hatası:", e.message); }
          continue;
        }
        // Durum 2: Ana açık, oto-kapatma koşulu sağlanıyorsa kapat
        if(!anaKapali&&isBkAutoClosed(bk, faturalar)){
          const yeniSat=altlar.map(s=>({...s,tamamlandi:true}));
          try {
            await sbPatch('butce_kalemleri', bk.id, {tamamlandi:true, tamamlandi_kaynak:'otomatik', planlanan_satirlari:yeniSat});
            setButceKalemleri(prev=>prev.map(b=>b.id===bk.id?{...b,tamamlandi:true,tamamlandiKaynak:'otomatik',planlananSatirlari:yeniSat}:b));
          } catch(e) { console.warn("Backfill oto-kapatma hatası:", e.message); }
        }
      }
    })();
  },[loading,butceKalemleri,faturalar]);

  const saveFirma = async (form) => {
    if(firmaSavingRef.current) { console.warn("Firma kayıt işlemi devam ediyor, çift çağrı engellendi"); return; }
    firmaSavingRef.current = true;
    try {
      const dbData = firmaToDb(form);
      let firmaId;
      if(form._isNew) {
        const [saved] = await sbPost('firmalar', dbData);
        firmaId = saved.id;
      } else {
        await sbPatch('firmalar', form.id, dbData);
        firmaId = form.id;
        await sbReq(`kisiler?firma_id=eq.${firmaId}`, {method:'DELETE', prefer:'', headers:{'Prefer':'count=none'}});
        await sbReq(`firma_subeler?firma_id=eq.${firmaId}`, {method:'DELETE', prefer:'', headers:{'Prefer':'count=none'}});
        await sbReq(`firma_bankalar?firma_id=eq.${firmaId}`, {method:'DELETE', prefer:'', headers:{'Prefer':'count=none'}});
        await sbReq(`firma_iletisim?firma_id=eq.${firmaId}`, {method:'DELETE', prefer:'', headers:{'Prefer':'count=none'}});
        await sbReq(`firma_adresler?firma_id=eq.${firmaId}`, {method:'DELETE', prefer:'', headers:{'Prefer':'count=none'}});
      }
      if(form.kisiler && form.kisiler.length > 0) {
        // Dedupe: aynı ad+soyad+cep kombinasyonundan sadece bir kayıt kalsın (UNIQUE constraint'e karşı ek güvence)
        const seen = {};
        const temizKisiler = form.kisiler.filter(k=>{
          if(!k.ad && !k.soyad) return false;
          const key = `${k.ad||""}|${k.soyad||""}|${k.cep||""}`;
          if(seen[key]) return false;
          seen[key] = true;
          return true;
        });
        const kisilerDb = temizKisiler.map(k=>kisiToDb(k, firmaId));
        if(kisilerDb.length > 0) await sbPost('kisiler', kisilerDb);
      }
      if(form.subeler && form.subeler.length > 0) {
        const subeDb = form.subeler.filter(s=>s.ad).map((s,i)=>({
          firma_id:firmaId, ad:s.ad, tipi:s.tipi||'ŞUBE', vergi_no:s.vergi_no||'',
          vergi_dairesi:s.vergi_dairesi||'', vergi_dairesi_il:s.vergi_dairesi_il||'',
          ulke:s.ulke||'Türkiye', il:s.il||'',
          ilce:s.ilce||'', mahalle:s.mahalle||'', adres:s.adres||'', posta_kodu:s.posta_kodu||'',
          telefon:s.telefon||'', eposta:s.eposta||'',
          yetkili_kisi_id:s.yetkili_kisi_id||null, yetkili_kisi_ad:s.yetkili_kisi_ad||'',
          aktif:s.aktif!==false, notlar:s.notlar||'', sira_no:i
        }));
        if(subeDb.length>0) await sbPost('firma_subeler', subeDb);
      }
      if(form.bankalar && form.bankalar.length > 0) {
        const bankaDb = form.bankalar.filter(b=>b.banka_adi||b.iban).map((b,i)=>({
          firma_id:firmaId, banka_adi:b.banka_adi||'', sube_adi:b.sube_adi||'',
          sube_kodu:b.sube_kodu||'', hesap_adi:b.hesap_adi||'', hesap_no:b.hesap_no||'',
          iban:b.iban||'', swift:b.swift||'', para_birimi:b.para_birimi||'TL',
          varsayilan:b.varsayilan||false, aktif:b.aktif!==false, notlar:b.notlar||'', sira_no:i
        }));
        if(bankaDb.length>0) await sbPost('firma_bankalar', bankaDb);
      }
      if(form.iletisimler && form.iletisimler.length > 0) {
        const ilDb2 = form.iletisimler.filter(il=>il.bilgi).map((il,i)=>({
          firma_id:firmaId, tipi:il.tipi||'', bilgi:il.bilgi||'',
          aciklama:il.aciklama||'', varsayilan:il.varsayilan||false, aktif:il.aktif!==false, sira_no:i
        }));
        if(ilDb2.length>0) await sbPost('firma_iletisim', ilDb2);
      }
      if(form.adresler && form.adresler.length > 0) {
        const adDb2 = form.adresler.filter(a=>a.adres||a.il).map((a,i)=>({
          firma_id:firmaId, ad:a.ad||'', tipi:a.tipi||'MERKEZ', ulke:a.ulke||'Türkiye',
          il:a.il||'', ilce:a.ilce||'', mahalle:a.mahalle||'', adres:a.adres||'',
          posta_kodu:a.posta_kodu||'', tel:a.tel||'',
          yetkili_kisi_id:a.yetkili_kisi_id||null, yetkili_kisi_ad:a.yetkili_kisi_ad||'',
          aktif:a.aktif!==false, notlar:a.notlar||'', sira_no:i
        }));
        if(adDb2.length>0) await sbPost('firma_adresler', adDb2);
      }
      if(form._isNew && form.notlar && form.notlar.length > 0) {
        const notlarDb = form.notlar.map(n=>({firma_id:firmaId,tarih:n.tarih,yazar:n.yazar,metin:n.metin}));
        await sbPost('notlar', notlarDb);
      }
      await loadAll();
    } catch(e) {
      // Duplicate key hatası — kullanıcıya bildir, local state'i güncelleme
      if(e.message && (e.message.includes("duplicate key") || e.message.includes("kisiler_unique_person"))) {
        alert("Aynı ad, soyad ve telefonla bir kişi zaten kayıtlı. Lütfen kişi listesini kontrol edin.");
      } else {
        // Supabase yoksa local state'e yaz
        setFirmalar(prev => {
          const exists = prev.find(f=>f.id===form.id);
          if(exists) return prev.map(f=>f.id===form.id?form:f);
          return [...prev, form];
        });
      }
    } finally {
      firmaSavingRef.current = false;
    }
  };

  const delFirma = async (id) => {
    if(!confirm("Bu firmayı silmek istediğinize emin misiniz?")) return;
    try { await sbDel('firmalar', id); await loadAll(); }
    catch(e) { setFirmalar(prev=>prev.filter(f=>f.id!==id)); }
  };

  /* ---- MALZEME KAYDET ---- */
  const saveMalzeme = async (form) => {
    if(malzemeSavingRef.current){console.warn("Malzeme kayıt işlemi devam ediyor, çift çağrı engellendi");return;}
    malzemeSavingRef.current = true;
    try {
      const dbData = malzemeToDb(form);
      if(!form.id || form._isNew) {
        const [saved] = await sbPost('malzemeler', dbData);
        form.id = saved.id;
        form._isNew = false;
      } else {
        await sbPatch('malzemeler', form.id, dbData);
      }
      setMalzemeler(prev => {
        const exists = prev.find(m=>m.id===form.id);
        if(exists) return prev.map(m=>m.id===form.id?form:m);
        return [...prev, form];
      });
    } catch(e) {
      console.error("Malzeme kaydetme hatası:", e.message);
      alert(`❌ Malzeme Supabase'e kaydedilemedi!\n\nHata: ${e.message}\n\nKayıt YAPILMADI. Bağlantıyı kontrol edip tekrar deneyin.`);
    } finally {
      malzemeSavingRef.current = false;
    }
  };

  const delMalzeme = async (id) => {
    if(!confirm("Bu malzemeyi silmek istediğinize emin misiniz?")) return;
    try { await sbDel('malzemeler', id); await loadAll(); }
    catch(e) { setMalzemeler(prev=>prev.filter(m=>m.id!==id)); }
  };

  /* ---- KATEGORİ KAYDET ---- */
  const saveKat = async (kat) => {
    if(katSavingRef.current){console.warn("Kategori kayıt işlemi devam ediyor, çift çağrı engellendi");return;}
    katSavingRef.current = true;
    try {
      const [saved] = await sbPost('kategoriler', {kod:kat.kod, ad:kat.ad});
      setAltKategoriler(prev=>[...prev, {id:saved.id, kod:kat.kod, ad:kat.ad}]);
    } catch(e) {
      setAltKategoriler(prev=>[...prev, {id:Date.now(), kod:kat.kod, ad:kat.ad}]);
    } finally {
      katSavingRef.current = false;
    }
  };
  const delKat = async (id) => {
    try { await sbDel('kategoriler', id); }
    catch(e) {}
    setAltKategoriler(prev=>prev.filter(a=>a.id!==id));
  };

  /* ---- ALT GRUP KAYDET ---- */
  const saveAltGrp = async (grp) => {
    if(altGrpSavingRef.current){console.warn("Alt grup kayıt işlemi devam ediyor, çift çağrı engellendi");return;}
    altGrpSavingRef.current = true;
    try {
      const [saved] = await sbPost('alt_gruplar', {grup_kod:grp.grupKod, grup_ad:grp.grupAd, kod:grp.kod, ad:grp.ad});
      setAltGruplar(prev=>[...prev, {id:saved.id, grupKod:grp.grupKod, grupAd:grp.grupAd, kod:grp.kod, ad:grp.ad}]);
    } catch(e) {
      setAltGruplar(prev=>[...prev, {id:Date.now(), grupKod:grp.grupKod, grupAd:grp.grupAd, kod:grp.kod, ad:grp.ad}]);
    } finally {
      altGrpSavingRef.current = false;
    }
  };
  const delAltGrp = async (id) => {
    try { await sbDel('alt_gruplar', id); }
    catch(e) {}
    setAltGruplar(prev=>prev.filter(g=>g.id!==id));
  };

  /* ---- TEKLİF KAYDET ---- */
  const saveTeklif = async (form) => {
    if(teklifSavingRef.current){console.warn("Teklif kayıt işlemi devam ediyor, çift çağrı engellendi");return null;}
    teklifSavingRef.current = true;
    try {
      const tDb = {
        teklif_no: form.teklifNo,
        firma_id: form.firmaId, firma_ad: form.firmaAd,
        yetkili_kisi_id: form.yetkiliKisiId || null,
        yetkili_kisi_ad: form.yetkiliKisiAd || "",
        yetkili_telefon: form.yetkiliTelefon || "",
        yetkili_eposta: form.yetkiliEposta || "",
        proje_id: form.projeId || null,
        proje_ad: form.projeAd || "",
        teklif_tarihi: form.teklifTarihi,
        gecerlilik_gun: form.gecerlilikGun ? parseInt(form.gecerlilikGun) : null,
        gecerlilik_tarihi: form.gecerlilikTarihi || null,
        para_birimi: form.paraBirimi,
        odeme_sekli: form.odemeSekli || "",
        teslimat_sahip: form.teslimatSahip || "",
        teslimat_adres_id: form.teslimatAdresId && form.teslimatAdresId !== "__serbest__" ? form.teslimatAdresId : null,
        teslimat_adres_serbest: form.teslimatAdresSerbest || "",
        aciklama: form.aciklama || "",
        durum: form.durum
      };
      let teklifId;
      if(!form.id || form._isNew) {
        const [saved] = await sbPost('teklifler', tDb);
        teklifId = saved.id;
      } else {
        await sbPatch('teklifler', form.id, tDb);
        teklifId = form.id;
        await sbReq(`teklif_kalemleri?teklif_id=eq.${teklifId}`, {method:'DELETE', prefer:'', headers:{'Prefer':'count=none'}});
      }
      if(form.kalemler && form.kalemler.length > 0) {
        const kDb2 = form.kalemler.map(k=>({
          teklif_id: teklifId, malzeme_id: k.malzemeId||null, malzeme_ad: k.malzemeAd,
          malzeme_kodu: k.malzemeKodu, birim: k.birim, miktar: k.miktar,
          fiyat_tipi: k.fiyatTipi, liste_fiyati: k.listeFiyati, iskonto1: k.iskonto1,
          iskonto2: k.iskonto2, net_fiyat: k.netFiyat, kdv_orani: k.kdvOrani,
          maliyet_esas: k.maliyetEsas, kalem_notu: k.not||"",
          temin_tarihi: k.teminTarihi || null
        }));
        await sbPost('teklif_kalemleri', kDb2);
      }
      await loadAll();
      return teklifId;
    } catch(e) {
      console.error("Teklif Supabase kayıt hatası:", e.message);
      alert(`❌ Teklif Supabase'e kaydedilemedi!\n\nHata: ${e.message}\n\nKayıt YAPILMADI. Bağlantıyı kontrol edip tekrar deneyin.`);
      return null;
    } finally {
      teklifSavingRef.current = false;
    }
  };

  const delTeklif = async (id) => {
    if(!confirm("Bu teklifi silmek istediğinize emin misiniz?")) return;
    try { await sbDel('teklifler', id); await loadAll(); }
    catch(e) { setTeklifler(prev=>prev.filter(t=>t.id!==id)); }
  };

  // Sipariş kaydet/sil
  const saveSiparis = async (form) => {
    if(siparisSavingRef.current){console.warn("Sipariş kayıt işlemi devam ediyor, çift çağrı engellendi");return;}
    siparisSavingRef.current = true;
    try {
      const dbData = siparisToDb(form);
      let siparisId;
      if(!form.id || form._isNew) {
        const [saved] = await sbPost('satinalma_siparisleri', dbData);
        siparisId = saved.id;
        form.id = siparisId;
        form._isNew = false;
      } else {
        await sbPatch('satinalma_siparisleri', form.id, dbData);
        siparisId = form.id;
        await sbReq(`satinalma_siparis_kalemleri?siparis_id=eq.${siparisId}`, {method:'DELETE', prefer:'', headers:{'Prefer':'count=none'}});
      }
      if(form.kalemler && form.kalemler.length > 0) {
        const kDb = form.kalemler.filter(k=>k.malzemeAd||k.malzemeId).map(k=>siparisKalemToDb(k, siparisId));
        if(kDb.length>0) await sbPost('satinalma_siparis_kalemleri', kDb);
      }
      setSiparisler(prev => {
        const exists = prev.find(s=>s.id===form.id);
        if(exists) return prev.map(s=>s.id===form.id?form:s);
        return [...prev, form];
      });
    } catch(e) {
      console.error("Sipariş kaydetme hatası:", e.message);
      alert(`❌ Sipariş Supabase'e kaydedilemedi!\n\nHata: ${e.message}\n\nKayıt YAPILMADI. Bağlantıyı kontrol edip tekrar deneyin.`);
    } finally {
      siparisSavingRef.current = false;
    }
  };
  const delSiparis = async (id) => {
    if(!confirm("Bu siparişi silmek istediğinize emin misiniz?")) return;
    try { await sbDel('satinalma_siparisleri', id); }
    catch(e) { console.warn("Sipariş silme hatası:", e.message); }
    setSiparisler(prev=>prev.filter(s=>s.id!==id));
  };

  // Fatura kaydet/sil
  const saveFatura = async (form) => {
    if(faturaSavingRef.current){console.warn("Fatura kayıt işlemi devam ediyor, çift çağrı engellendi");return;}
    faturaSavingRef.current = true;
    try {
      const dbData = faturaToDb(form);
      let faturaId;
      if(!form.id || form._isNew) {
        const [saved] = await sbPost('alis_faturalari', dbData);
        faturaId = saved.id;
        form.id = faturaId;
        form._isNew = false;
      } else {
        await sbPatch('alis_faturalari', form.id, dbData);
        faturaId = form.id;
        await sbReq(`alis_fatura_kalemleri?fatura_id=eq.${faturaId}`, {method:'DELETE', prefer:'', headers:{'Prefer':'count=none'}});
      }
      if(form.kalemler && form.kalemler.length > 0) {
        const kDb = form.kalemler.filter(k=>k.malzemeAd||k.malzemeId).map(k=>faturaKalemToDb(k, faturaId));
        if(kDb.length>0) await sbPost('alis_fatura_kalemleri', kDb);
      }
      // Otomatik sipariş kapatma — fatura SP'ye bağlı ve sipariş açık durumda ise
      if(form.spId) {
        const spId = parseInt(form.spId);
        const sp = siparisler.find(s=>s.id===spId);
        if(sp && sp.durum!=='iptal' && sp.durum!=='tamamlandi') {
          const tumFaturalar = [...faturalar.filter(f=>f.id!==form.id), form];
          const spFaturalari = tumFaturalar.filter(f=>String(f.spId)===String(spId) && f.durum!=='iptal');
          const spKalemleri = sp.kalemler||[];
          let tumKapali = spKalemleri.length>0;
          let enAzBir = false;
          for(const sk of spKalemleri) {
            const skMiktar = parseFloat(sk.miktar)||0;
            if(skMiktar<=0){tumKapali=false;continue;}
            const faturalanan = spFaturalari.reduce((t,f)=>t+(f.kalemler||[]).filter(fk=>sk.malzemeId && String(fk.malzemeId)===String(sk.malzemeId)).reduce((s,fk)=>s+(parseFloat(fk.miktar)||0),0), 0);
            if(faturalanan>0) enAzBir = true;
            if(faturalanan<skMiktar) tumKapali = false;
          }
          let yeniDurum = sp.durum;
          if(tumKapali) yeniDurum = 'tamamlandi';
          else if(enAzBir) yeniDurum = 'kismen_teslim';
          if(yeniDurum!==sp.durum) {
            try { await sbPatch('satinalma_siparisleri', spId, {durum: yeniDurum}); } catch(e) { console.warn("Sipariş durum güncelleme hatası:", e.message); }
            setSiparisler(prev=>prev.map(s=>s.id===spId?{...s,durum:yeniDurum}:s));
          }
        }
      }
      // OTOMATİK MALİYET KALEMİ KAPATMA — isBkAutoClosed helper (saveFatura + backfill ortak)
      {
        const bkIds = new Set();
        (form.kalemler||[]).forEach(k=>{if(k.butceKalemiId)bkIds.add(k.butceKalemiId);});
        const tumFaturalar = [...faturalar.filter(f=>f.id!==form.id), form];
        for(const bkId of bkIds) {
          const bk = butceKalemleri.find(b=>b.id===bkId);
          if(!bk || bk.tamamlandi) continue;
          if(isBkAutoClosed(bk, tumFaturalar)) {
            const yeniSat=(bk.planlananSatirlari||[]).map(s=>({...s,tamamlandi:true}));
            try { await sbPatch('butce_kalemleri', bkId, {tamamlandi:true, tamamlandi_kaynak:'otomatik', planlanan_satirlari:yeniSat}); } catch(e) { console.warn("Maliyet kalemi oto-kapatma hatası:", e.message); }
            setButceKalemleri(prev=>prev.map(b=>b.id===bkId?{...b,tamamlandi:true,tamamlandiKaynak:'otomatik',planlananSatirlari:yeniSat}:b));
          }
        }
      }
      setFaturalar(prev => {
        const exists = prev.find(f=>f.id===form.id);
        if(exists) return prev.map(f=>f.id===form.id?form:f);
        return [...prev, form];
      });
    } catch(e) {
      console.error("Fatura kaydetme hatası:", e.message);
      alert(`❌ Fatura Supabase'e kaydedilemedi!\n\nHata: ${e.message}\n\nKayıt YAPILMADI. Bağlantıyı kontrol edip tekrar deneyin.`);
    } finally {
      faturaSavingRef.current = false;
    }
  };
  const delFatura = async (id) => {
    if(!confirm("Bu faturayı silmek istediğinize emin misiniz?")) return;
    try { await sbDel('alis_faturalari', id); }
    catch(e) { console.warn("Fatura silme hatası:", e.message); }
    setFaturalar(prev=>prev.filter(f=>f.id!==id));
  };

  /* ---- NOT EKLE ---- */
  const addNote = async (firmaId, metin) => {
    try {
      await sbPost('notlar', {firma_id:firmaId, tarih:new Date().toISOString().split("T")[0], yazar:"Admin", metin});
      await loadAll();
    } catch(e) {
      // local fallback
      const yeniNot = {id:Date.now(), tarih:new Date().toISOString().split("T")[0], yazar:"Admin", metin};
      setFirmalar(prev=>prev.map(f=>f.id===firmaId?{...f,notlar:[...(f.notlar||[]),yeniNot]}:f));
    }
  };

  /* ---- PROJE KAYDET (local state) ---- */
  const saveProje = async (form) => {
    if(projeSavingRef.current){console.warn("Proje kayıt işlemi devam ediyor, çift çağrı engellendi");return;}
    projeSavingRef.current = true;
    try {
      const dbData = projeToDb(form);
      if(!form.id || form._isNew) {
        const [saved] = await sbPost('projeler', dbData);
        form.id = saved.id;
        form._isNew = false;
      } else {
        await sbPatch('projeler', form.id, dbData);
      }
      // Bloklar sync (delete all + reinsert, yeni server ID'lerini al)
      try {
        await sbReq(`bloklar?proje_id=eq.${form.id}`, {method:'DELETE', headers:{'Prefer':'count=none'}});
        if(form.bloklar && form.bloklar.length > 0) {
          const blokDbRows = form.bloklar.map(b => blokToDb(b, form.id));
          const savedBloklar = await sbPost('bloklar', blokDbRows);
          form.bloklar = (savedBloklar||[]).map(blokToLocal);
        }
      } catch(e) { console.warn("Bloklar sync hatası:", e.message); }
      // Bolumler sync (delete all + reinsert)
      try {
        await sbReq(`bolumler?proje_id=eq.${form.id}`, {method:'DELETE', headers:{'Prefer':'count=none'}});
        if(form.bolumler && form.bolumler.length > 0) {
          const bolumDbRows = form.bolumler.map(b => bolumToDb(b, form.id));
          const savedBolumler = await sbPost('bolumler', bolumDbRows);
          form.bolumler = (savedBolumler||[]).map(bolumToLocal);
        }
      } catch(e) { console.warn("Bolumler sync hatası:", e.message); }
      setProjeler(prev => {
        const exists = prev.find(p=>p.id===form.id);
        if(exists) return prev.map(p=>p.id===form.id?form:p);
        return [...prev, form];
      });
    } catch(e) {
      console.error("Proje kaydetme hatası:", e.message);
      alert(`❌ Proje Supabase'e kaydedilemedi!\n\nHata: ${e.message}\n\nKayıt YAPILMADI. Bağlantıyı kontrol edip tekrar deneyin.`);
    } finally {
      projeSavingRef.current = false;
    }
  };
  const delProje = async (id) => {
    if(!confirm("Bu projeyi silmek istediğinize emin misiniz?")) return;
    try {
      await sbDel('projeler', id);
      await loadAll();
    } catch(e) {
      console.warn("Proje silme hatası:", e.message);
      setProjeler(prev=>prev.filter(p=>p.id!==id));
    }
  };

  /* ---- BÜTÇE KALEMİ KAYDET/SİL/TOPLU KAYDET ---- */
  const saveButceKalemi = async (kalem, projeId) => {
    if(butceKalemiSavingRef.current){console.warn("Bütçe kalemi kayıt işlemi devam ediyor, çift çağrı engellendi");return null;}
    butceKalemiSavingRef.current = true;
    try {
      const dbData = butceKalemiToDb(kalem, projeId||kalem.projeId);
      let savedId = kalem.id;
      if(!kalem.id || kalem._isNew) {
        const [saved] = await sbPost('butce_kalemleri', dbData);
        savedId = saved.id;
        setButceKalemleri(prev=>[...prev, butceKalemiToLocal(saved)]);
      } else {
        await sbPatch('butce_kalemleri', kalem.id, dbData);
        setButceKalemleri(prev=>prev.map(b=>b.id===kalem.id?{...b,...butceKalemiToLocal({...dbData,id:kalem.id,proje_id:dbData.proje_id})}:b));
      }
      return savedId;
    } catch(e) {
      console.error("Bütçe kalemi kayıt hatası:", e.message);
      return null;
    } finally {
      butceKalemiSavingRef.current = false;
    }
  };

  const delButceKalemi = async (id) => {
    try {
      await sbDel('butce_kalemleri', id);
      setButceKalemleri(prev=>prev.filter(b=>b.id!==id));
    } catch(e) {
      console.error("Bütçe kalemi silme hatası:", e.message);
    }
  };

  const bulkSaveButceKalemleri = async (kalemler, projeId) => {
    if(butceKalemiSavingRef.current){console.warn("Bütçe kalemi toplu kayıt işlemi devam ediyor");return [];}
    if(!kalemler || kalemler.length===0) return [];
    butceKalemiSavingRef.current = true;
    try {
      const dbRows = kalemler.map(k=>butceKalemiToDb(k, projeId||k.projeId));
      const saved = await sbPost('butce_kalemleri', dbRows);
      setButceKalemleri(prev=>[...prev, ...saved.map(butceKalemiToLocal)]);
      return saved.map(butceKalemiToLocal);
    } catch(e) {
      console.error("Bütçe kalemi toplu kayıt hatası:", e.message);
      return [];
    } finally {
      butceKalemiSavingRef.current = false;
    }
  };

  /* ---- TEKLİFTEN SP OLUŞTUR ---- */
  const spOlusturTeklifden = async (teklif) => {
    // Teklifi SP'ye dönüştürüldü olarak işaretle
    setTeklifler(prev=>prev.map(t=>t.id===teklif.id?{...t,durum:"sp_donustu"}:t));
    // SP sayfasına geç - SatinalmaSiparisleriPage otomatik doldurur
    const yilSp=new Date().getFullYear();
    const mevcutSp=siparisler.filter(s=>(s.spNo||"").includes(`-${yilSp}-`)).map(s=>parseInt((s.spNo||"").split("-")[2])||0);
    const nSp=mevcutSp.length>0?Math.max(...mevcutSp)+1:1;
    const spNo=`SP-${yilSp}-${String(nSp).padStart(3,"0")}`;
    const frm=firmalar.find(f=>f.id===teklif.firmaId);
    const prj=projeler.find(p=>p.id===teklif.projeId);
    const yeniSp={id:Date.now(),spNo,teklifId:teklif.id,teklifNo:teklif.teklifNo,
      firmaId:teklif.firmaId,firmaAd:teklif.firmaAd,
      projeId:teklif.projeId||null,projeAd:teklif.projeAd||"",
      siparisTarihi:new Date().toISOString().split("T")[0],terminTarihi:"",
      teslimatAdresi:"",teslimKosulu:"Şantiye Teslim",odemeSekli:teklif.odemeSekli||"",vadeGun:"",vadeTarihi:"",
      paraBirimi:teklif.paraBirimi,aciklama:`${teklif.teklifNo} teklifinden oluşturuldu`,
      durum:"taslak",
      kalemler:(teklif.kalemler||[]).map(k=>({...k,id:Date.now()+Math.random(),teslimMiktar:0,aciklama:"",butceKalemiId:null}))
    };
    await saveSiparis(yeniSp);
    setPage("satinalma");
    alert(`✅ ${spNo} numaralı Satınalma Siparişi oluşturuldu!\nSatınalma Siparişleri sayfasına yönlendiriliyorsunuz.`);
  };

  if(loading) return <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:T.bg,fontFamily:T.f,flexDirection:"column",gap:"16px"}}>
    <div style={{width:"48px",height:"48px",border:`4px solid ${T.pBg}`,borderTop:`4px solid ${T.primary}`,borderRadius:"50%",animation:"spin 1s linear infinite"}}></div>
    <div style={{color:T.t2,fontSize:"14px"}}>Veriler yükleniyor...</div>
    <style>{`@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`}</style>
  </div>;

  return <div style={{display:"flex",height:"100vh",width:"100vw",background:T.bg,fontFamily:T.f,overflow:"hidden"}}>
    <Sidebar page={page} setPage={(p)=>{setEditMode(false);setPage(p);}} open={sbOpen} editMode={editMode}/>
    <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{height:"56px",minHeight:"56px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 24px",background:"#fff",borderBottom:`1px solid ${T.border}`,boxShadow:T.sh}}>
        <button onClick={()=>setSbOpen(!sbOpen)} style={{background:"none",border:"none",color:T.t2,cursor:"pointer",padding:"6px",fontSize:"18px",borderRadius:"6px"}} onMouseEnter={e=>e.currentTarget.style.background="#f5f5f5"} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>☰</button>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <div style={{padding:"6px 14px",borderRadius:"6px",border:`1px solid ${T.border}`,fontSize:"13px",color:T.t3,display:"flex",alignItems:"center",gap:"6px"}}>🗄️ Supabase Bağlı</div>
          <div style={{width:"32px",height:"32px",borderRadius:"50%",background:T.primary,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:600,fontSize:"13px"}}>A</div>
        </div>
      </div>
      <div style={{flex:1,overflow:"auto",padding:"24px"}}>
        {page==="dashboard"&&<DashPage firmalar={firmalar} malzemeler={malzemeler} teklifler={teklifler} setPage={setPage}/>}
        {page==="firmalar"&&<FirmalarPage firmalar={firmalar} setFirmalar={setFirmalar} onSave={saveFirma} onDel={delFirma} addNote={addNote} initialFirmaId={goToId} onClearInitial={()=>setGoToId(null)} projeler={projeler} setPage={setPage} setEditMode={setEditMode}/>}
        {page==="malzemeler"&&<MalzemelerPage malzemeler={malzemeler} setMalzemeler={setMalzemeler} onSaveMalzeme={saveMalzeme} onDelMalzeme={delMalzeme} firmalar={firmalar} altKategoriler={altKategoriler} setAltKategoriler={setAltKategoriler} altGruplar={altGruplar} setAltGruplar={setAltGruplar} teklifler={teklifler} setTeklifler={setTeklifler} onSaveKat={saveKat} onDelKat={delKat} onSaveAltGrp={saveAltGrp} onDelAltGrp={delAltGrp} onSaveTeklif={saveTeklif} onDelTeklif={delTeklif} projeler={projeler} setEditMode={setEditMode}/>}
        {page==="projeler"&&<ProjelerPage projeler={projeler} setProjeler={setProjeler} onSave={saveProje} onDel={delProje} firmalar={firmalar} dosyaKategorileri={dosyaKategorileri} setDosyaKategorileri={setDosyaKategorileri} setPage={setPage} goToFirma={goToFirma} setEditMode={setEditMode}/>}
        {page==="teklifler"&&<AlinanTekliflerYonetim teklifler={teklifler} setTeklifler={setTeklifler} onSave={saveTeklif} onDel={delTeklif} malzemeler={malzemeler} firmalar={firmalar} projeler={projeler} onSpOlustur={spOlusturTeklifden}/>}
        {page==="teklif_verme"&&<div style={{padding:"80px",textAlign:"center",color:T.t3,fontSize:"16px",border:`1px dashed ${T.border}`,borderRadius:T.rl}}><div style={{fontSize:"32px",marginBottom:"12px"}}>📋</div>Teklif Verme modülü hazırlanıyor...</div>}
        {page==="satinalma"&&<SatinalmaSiparisleriPage siparisler={siparisler} setSiparisler={setSiparisler} onSave={saveSiparis} onDel={delSiparis} teklifler={teklifler} firmalar={firmalar} projeler={projeler} malzemeler={malzemeler} butceKalemleri={butceKalemleri} faturalar={faturalar}/>}
        {page==="alis_fatura"&&<AlisFaturalariPage faturalar={faturalar} setFaturalar={setFaturalar} onSave={saveFatura} onDel={delFatura} siparisler={siparisler} teklifler={teklifler} firmalar={firmalar} projeler={projeler} malzemeler={malzemeler} butceKalemleri={butceKalemleri}/>}
        {page==="maliyet"&&<MaliyetPage projeler={projeler} setProjeler={setProjeler} malzemeler={malzemeler} faturalar={faturalar} siparisler={siparisler} firmalar={firmalar} butceKalemleri={butceKalemleri} saveButceKalemi={saveButceKalemi} delButceKalemi={delButceKalemi} bulkSaveButceKalemleri={bulkSaveButceKalemleri}/>}
        {page==="satis_sunum"&&<SatisSunumPage projeler={projeler} setProjeler={setProjeler} firmalar={firmalar} saveProje={saveProje} saveFirma={saveFirma} setPage={setPage} goToFirma={goToFirma}/>}
      </div>
    </div>
  </div>;
}
