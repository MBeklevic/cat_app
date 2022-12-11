import bengalKedisi from "../images/bengalKedisi.jpg"
import britishShorthair from "../images/britishShorthair.jpg"
import siyamKedisi from "../images/siyamKedisi.jpg"
import devonRex from "../images/devonRex.jpg"
import maviRus from "../images/maviRus.jpg"
import scottishFold from "../images/scottishFold.jpg"
import exoticShorthair from "../images/exotic.jpg"
import iranKedisi from "../images/iranKedisi.jpg"
import vanKedisi from "../images/vanKedisi.jpg"
import maineCoon from "../images/maineCoon.jpg"
import ragdoll from "../images/ragdoll.jpg"
import munchkin from "../images/muchkin.jpg"
import sfenksKedisi from "../images/sfenksKedisi.jpg"

const CatList = [
    {
        id: 1,
        name: "Bengal Kedisi",
        img_src: bengalKedisi,
        info: "Tüylerindeki desenlerle adeta ‘büyük kedilere’ gönderme yapan Bengal kedileri görünümlerinin aksine oldukça uysaldırlar. Oyuncu ve hareket etmeyi seven bu kedi cinsi diğerlerine kıyasla çok daha meraklı ve atletik olmasıyla tanınıyor. Bu nedenle de geniş alanlarda yaşadıklarında çok daha mutlu oluyorlar. Bengal ismi Hindistan’da bir bölge olsa da aslında bu kedilerin anavatanı orası değil. Bengal kedileri, çitaların görünümünü kedilere aktarmak için 1980’li yıllarda yapılan genetik çalışmalarla ortaya çıkan bir kedi cinsi olarak kabul ediliyor. Vahşi görünümünün aksine oldukça uysal olan Bengaller ilgi seven ve meraklı kedilerden.",
        kind: "bengalKedisi",
        sci_name: "Felis catus x Prinaillurus bengalensis",
        homeland: "Amerika Birleşik Devletleri"
    },
    {
        id: 2,
        name: "British Shortair",
        img_src: britishShorthair,
        info: "Bilinen en eski kedi ırklarından biri British Shorthair’ler. Adından da anlaşılabileceği gibi İngiliz kökenli kabul edilen bu kedi türünün aslında Eski Mısır’dan geldiği; Romalılarla birlikte şimdiki Britanya’ya taşındığı kabul ediliyor. Yuvarlak yüz hatları, sık ve kısa tüyleri, mavi-gri rengi British Shorthair’lerin en ayırt edici özelliklerinden. Hareket etmeyi çok sevmedikleri için kolaylıkla kilo alabilen British Shorthair kedilerin düzenli olarak oyun oynatılması ve hareket ettirilmesi öneriliyor. Zeki ve arkadaş canlısı olan British Shorthair kediler çocuklarla da çok iyi anlaşabilen cinslerden.",
        kind: "britishShorthair",
        sci_name: "Felis catus",
        homeland: "Büyük Britanya"
    },
    {
        id: 3,
        name: "Siyam Kedisi",
        img_src: siyamKedisi,
        info: "Siyah yüzü ve badem şekilli mavi gözleriyle Siyam kedileri, tüm cinsler arasında farklı bir güzelliğe sahip. Tayland kökenli kedilerin tapınaklarda 1400’lü yıllardan beri var oldukları bilinse de tanınmaları 19. yüzyılın sonunda hediye olarak İngiltere’ye gitmeleriyle başlıyor. Üçgen şekilli yüzü, atletik yapısı olan Siyam kedileri ilk doğduklarında krem rengi oluyorlar. Zaman geçip büyüdükçe yüzü, kulakları, kuyruğu ve arka patileri koyulaşıyor. Siyam kedilerini diğer cinslerden farklılaştıran en büyük özellikleri de oldukça konuşkan olmaları. Çoğu Siyam kedisi sahibinden, kedileriyle adeta sohbet eder gibi konuştuklarını duymak yüksek bir ihtimal. Oldukça dost canlısı olan Siyam kedileri genel huy itibariyle de sakin ve dost canlısıdırlar.",
        kind: "siyamKedisi",
        sci_name: "Felis catus",
        homeland: "Tayland"
    },
    {
        id: 4,
        name: "Devon Rex",
        img_src: devonRex,
        info: "Tüylerindeki desenlerle adeta ‘büyük kedilere’ gönderme yapan Bengal kedileri görünümlerinin aksine oldukça uysaldırlar. Oyuncu ve hareket etmeyi seven bu kedi cinsi diğerlerine kıyasla çok daha meraklı ve atletik olmasıyla tanınıyor. Bu nedenle de geniş alanlarda yaşadıklarında çok daha mutlu oluyorlar. Bengal ismi Hindistan’da bir bölge olsa da aslında bu kedilerin anavatanı orası değil. Bengal kedileri, çitaların görünümünü kedilere aktarmak için 1980’li yıllarda yapılan genetik çalışmalarla ortaya çıkan bir kedi cinsi olarak kabul ediliyor. Vahşi görünümünün aksine oldukça uysal olan Bengaller ilgi seven ve meraklı kedilerden.",
        kind: "devonRex",
        sci_name: "Buckfastleigh",
        homeland: "Büyük Britanya"
    },
    {
        id: 5,
        name: "Mavi Rus Kedisi",
        img_src: maviRus,
        info: "Siyah yüzü ve badem şekilli mavi gözleriyle Siyam kedileri, tüm cinsler arasında farklı bir güzelliğe sahip. Tayland kökenli kedilerin tapınaklarda 1400’lü yıllardan beri var oldukları bilinse de tanınmaları 19. yüzyılın sonunda hediye olarak İngiltere’ye gitmeleriyle başlıyor. Üçgen şekilli yüzü, atletik yapısı olan Siyam kedileri ilk doğduklarında krem rengi oluyorlar. Zaman geçip büyüdükçe yüzü, kulakları, kuyruğu ve arka patileri koyulaşıyor. Siyam kedilerini diğer cinslerden farklılaştıran en büyük özellikleri de oldukça konuşkan olmaları. Çoğu Siyam kedisi sahibinden, kedileriyle adeta sohbet eder gibi konuştuklarını duymak yüksek bir ihtimal. Oldukça dost canlısı olan Siyam kedileri genel huy itibariyle de sakin ve dost canlısıdırlar.",
        kind: "maviRus",
        sci_name: "Felis catus",
        homeland: "Rusya"
    },
    {
        id: 6,
        name: "Scottish Fold",
        img_src: scottishFold,
        info: "Tüylerindeki desenlerle adeta ‘büyük kedilere’ gönderme yapan Bengal kedileri görünümlerinin aksine oldukça uysaldırlar. Oyuncu ve hareket etmeyi seven bu kedi cinsi diğerlerine kıyasla çok daha meraklı ve atletik olmasıyla tanınıyor. Bu nedenle de geniş alanlarda yaşadıklarında çok daha mutlu oluyorlar. Bengal ismi Hindistan’da bir bölge olsa da aslında bu kedilerin anavatanı orası değil. Bengal kedileri, çitaların görünümünü kedilere aktarmak için 1980’li yıllarda yapılan genetik çalışmalarla ortaya çıkan bir kedi cinsi olarak kabul ediliyor. Vahşi görünümünün aksine oldukça uysal olan Bengaller ilgi seven ve meraklı kedilerden.",
        kind: "scottishFold",
        sci_name: "Felis catus",
        homeland: "İskoçya"
    },
    {
        id: 7,
        name: "Exotic Shorthair",
        img_src: exoticShorthair,
        info: "Siyah yüzü ve badem şekilli mavi gözleriyle Siyam kedileri, tüm cinsler arasında farklı bir güzelliğe sahip. Tayland kökenli kedilerin tapınaklarda 1400’lü yıllardan beri var oldukları bilinse de tanınmaları 19. yüzyılın sonunda hediye olarak İngiltere’ye gitmeleriyle başlıyor. Üçgen şekilli yüzü, atletik yapısı olan Siyam kedileri ilk doğduklarında krem rengi oluyorlar. Zaman geçip büyüdükçe yüzü, kulakları, kuyruğu ve arka patileri koyulaşıyor. Siyam kedilerini diğer cinslerden farklılaştıran en büyük özellikleri de oldukça konuşkan olmaları. Çoğu Siyam kedisi sahibinden, kedileriyle adeta sohbet eder gibi konuştuklarını duymak yüksek bir ihtimal. Oldukça dost canlısı olan Siyam kedileri genel huy itibariyle de sakin ve dost canlısıdırlar.",
        kind: "exoticShorthair",
        sci_name: "Felis catus",
        homeland: "Amerika Birleşik Devletleri"
    },
    {
        id: 8,
        name: "İran Kedisi",
        img_src: iranKedisi,
        info: "Tüylerindeki desenlerle adeta ‘büyük kedilere’ gönderme yapan Bengal kedileri görünümlerinin aksine oldukça uysaldırlar. Oyuncu ve hareket etmeyi seven bu kedi cinsi diğerlerine kıyasla çok daha meraklı ve atletik olmasıyla tanınıyor. Bu nedenle de geniş alanlarda yaşadıklarında çok daha mutlu oluyorlar. Bengal ismi Hindistan’da bir bölge olsa da aslında bu kedilerin anavatanı orası değil. Bengal kedileri, çitaların görünümünü kedilere aktarmak için 1980’li yıllarda yapılan genetik çalışmalarla ortaya çıkan bir kedi cinsi olarak kabul ediliyor. Vahşi görünümünün aksine oldukça uysal olan Bengaller ilgi seven ve meraklı kedilerden.",
        kind: "iranKedisi",
        sci_name: "Felis catus",
        homeland: "İran"
    },
    {
        id: 9,
        name: "Van Kedisi",
        img_src: vanKedisi,
        info: "Tüylerindeki desenlerle adeta ‘büyük kedilere’ gönderme yapan Bengal kedileri görünümlerinin aksine oldukça uysaldırlar. Oyuncu ve hareket etmeyi seven bu kedi cinsi diğerlerine kıyasla çok daha meraklı ve atletik olmasıyla tanınıyor. Bu nedenle de geniş alanlarda yaşadıklarında çok daha mutlu oluyorlar. Bengal ismi Hindistan’da bir bölge olsa da aslında bu kedilerin anavatanı orası değil. Bengal kedileri, çitaların görünümünü kedilere aktarmak için 1980’li yıllarda yapılan genetik çalışmalarla ortaya çıkan bir kedi cinsi olarak kabul ediliyor. Vahşi görünümünün aksine oldukça uysal olan Bengaller ilgi seven ve meraklı kedilerden.",
        kind: "vanKedisi",
        sci_name: "Felis catus",
        homeland: "Türkiye"
    },
    {
        id: 10,
        name: "Maine Coon",
        img_src: maineCoon,
        info: "Tüylerindeki desenlerle adeta ‘büyük kedilere’ gönderme yapan Bengal kedileri görünümlerinin aksine oldukça uysaldırlar. Oyuncu ve hareket etmeyi seven bu kedi cinsi diğerlerine kıyasla çok daha meraklı ve atletik olmasıyla tanınıyor. Bu nedenle de geniş alanlarda yaşadıklarında çok daha mutlu oluyorlar. Bengal ismi Hindistan’da bir bölge olsa da aslında bu kedilerin anavatanı orası değil. Bengal kedileri, çitaların görünümünü kedilere aktarmak için 1980’li yıllarda yapılan genetik çalışmalarla ortaya çıkan bir kedi cinsi olarak kabul ediliyor. Vahşi görünümünün aksine oldukça uysal olan Bengaller ilgi seven ve meraklı kedilerden.",
        kind: "maineCoon",
        sci_name: "Felis catus",
        homeland: "Amerika Birleşik Devletleri"
    },
    {
        id: 11,
        name: "Ragdoll Kedisi",
        img_src: ragdoll,
        info: "Tüylerindeki desenlerle adeta ‘büyük kedilere’ gönderme yapan Bengal kedileri görünümlerinin aksine oldukça uysaldırlar. Oyuncu ve hareket etmeyi seven bu kedi cinsi diğerlerine kıyasla çok daha meraklı ve atletik olmasıyla tanınıyor. Bu nedenle de geniş alanlarda yaşadıklarında çok daha mutlu oluyorlar. Bengal ismi Hindistan’da bir bölge olsa da aslında bu kedilerin anavatanı orası değil. Bengal kedileri, çitaların görünümünü kedilere aktarmak için 1980’li yıllarda yapılan genetik çalışmalarla ortaya çıkan bir kedi cinsi olarak kabul ediliyor. Vahşi görünümünün aksine oldukça uysal olan Bengaller ilgi seven ve meraklı kedilerden.",
        kind: "ragdoll",
        sci_name: "Felis catus",
        homeland: "Amerika Birleşik Devletleri"
    },
    {
        id: 12,
        name: "Munchkin",
        img_src: munchkin,
        info: "Tüylerindeki desenlerle adeta ‘büyük kedilere’ gönderme yapan Bengal kedileri görünümlerinin aksine oldukça uysaldırlar. Oyuncu ve hareket etmeyi seven bu kedi cinsi diğerlerine kıyasla çok daha meraklı ve atletik olmasıyla tanınıyor. Bu nedenle de geniş alanlarda yaşadıklarında çok daha mutlu oluyorlar. Bengal ismi Hindistan’da bir bölge olsa da aslında bu kedilerin anavatanı orası değil. Bengal kedileri, çitaların görünümünü kedilere aktarmak için 1980’li yıllarda yapılan genetik çalışmalarla ortaya çıkan bir kedi cinsi olarak kabul ediliyor. Vahşi görünümünün aksine oldukça uysal olan Bengaller ilgi seven ve meraklı kedilerden.",
        kind: "munchkin",
        sci_name: "Felis catus",
        homeland: "Amerika Birleşik Devletleri"
    },
    {
        id: 13,
        name: "Sfenks Kedisi",
        img_src: sfenksKedisi,
        info: "Tüylerindeki desenlerle adeta ‘büyük kedilere’ gönderme yapan Bengal kedileri görünümlerinin aksine oldukça uysaldırlar. Oyuncu ve hareket etmeyi seven bu kedi cinsi diğerlerine kıyasla çok daha meraklı ve atletik olmasıyla tanınıyor. Bu nedenle de geniş alanlarda yaşadıklarında çok daha mutlu oluyorlar. Bengal ismi Hindistan’da bir bölge olsa da aslında bu kedilerin anavatanı orası değil. Bengal kedileri, çitaların görünümünü kedilere aktarmak için 1980’li yıllarda yapılan genetik çalışmalarla ortaya çıkan bir kedi cinsi olarak kabul ediliyor. Vahşi görünümünün aksine oldukça uysal olan Bengaller ilgi seven ve meraklı kedilerden.",
        kind: "sfenksKedisi",
        sci_name: "Felis catus",
        homeland: "Kanada"
    }
]


export default CatList;