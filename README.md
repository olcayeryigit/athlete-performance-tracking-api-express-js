# Sporcu Performans Takip API

Bu proje, sporcu performansını takip eden bir REST API'dir.

## Kurulum

1. `npm install` ile bağımlılıkları yükleyin.
2. `.env` dosyasında ortam değişkenlerinizi ayarlayın.
3. MySQL'de `database.sql` dosyasını çalıştırarak veritabanını oluşturun.
4. `npm run dev` ile API'yi başlatın.

## Kullanım

- **Postman Koleksiyonu**: API endpointlerini test etmek için Postman kullanabilirsiniz.
- **Kullanıcı Rolleri**: `coach`, `athlete`, `admin`.

## Özellikler

- **Repository Katmanı**: Veri erişim işlemleri tamamen repository sınıflarında kapsüllenmiş durumda.

- **Şifreleme**: bcrypt ile şifreler hash'lenerek saklanıyor, güvenli bir yapı sağlıyor.
  Repository Katmanı: Veri erişim işlemleri tamamen repository sınıflarında kapsüllenmiş durumda.

- **JWT** : Kullanıcı girişinde JWT token üretiliyor ve diğer endpoint'lerde kimlik doğrulama için kullanılıyor.

## Kullanılan Kütüphaneler

Aşağıda, projede kullanılan başlıca kütüphaneler ve bunların işlevleri yer almaktadır:

1. **dotenv** (`^16.4.7`):  
   Bu kütüphane, `.env` dosyasındaki çevresel değişkenleri yükler. Veritabanı bağlantıları, API anahtarları gibi hassas bilgileri güvenli bir şekilde yönetmek için kullanılır.

2. **express** (`^4.21.2`):  
   Web uygulamaları ve API'ler geliştirmek için kullanılan minimal ve esnek bir Node.js web çerçevesidir. Uygulamanın sunucu tarafı işlevselliğini sağlar.

3. **joi** (`^17.13.3`):  
   Veri doğrulama ve şemalar oluşturmak için kullanılan bir kütüphanedir. API giriş verilerini doğrulamak için kullanılır, bu da kullanıcı hatalarını önlemeye yardımcı olur.

4. **jsdoc** (`^4.0.4`):  
   JavaScript kodlarına açıklamalar eklemek ve otomatik olarak API belgeleri oluşturmak için kullanılan bir araçtır. Projedeki kodun ne yaptığını daha iyi anlamak için dokümantasyon sağlar.

5. **mysql2** (`^3.14.0`):  
   Node.js için MySQL veritabanı istemcisidir. Veritabanına bağlantı kurmak ve SQL sorguları çalıştırmak için kullanılır.

6. **sequelize** (`^6.37.6`):  
   Node.js için bir ORM (Object-Relational Mapping) kütüphanesidir. Veritabanı tablolarıyla etkileşimde bulunmak, sorgular yazmak ve veritabanı ilişkilerini yönetmek için kullanılır.

7. **swagger-jsdoc** (`^6.2.8`):  
   API belgelerini oluşturmak için kullanılan bir araçtır. Swagger/OpenAPI formatında dokümantasyon sağlar, böylece API'niz hakkında kullanıcı dostu bir açıklama sunabilirsiniz.

8. **swagger-ui-express** (`^5.0.1`):  
   Express.js uygulamanızda Swagger UI'ı entegre etmek için kullanılır. Bu, API'nizin interaktif bir şekilde görüntülenmesini sağlar ve geliştiricilerin API'nizi kolayca keşfetmesini mümkün kılar.
9. **bcrypt** (`^5.1.0`):  
   Kullanıcı şifrelerini güvenli bir şekilde hash'lemek ve doğrulamak için kullanılır. Şifrelerinizi veritabanında güvenli bir şekilde saklamak için yaygın olarak kullanılan bir şifreleme kütüphanesidir.

## Geliştirici Bağımlılıkları

1. **nodemon** (`^3.1.9`):  
   Geliştirme ortamında kullanılan bir araçtır. Uygulamanın değişiklikleri otomatik olarak algılayarak yeniden başlatılmasını sağlar. Bu sayede her değişiklikte manuel olarak sunucuyu yeniden başlatmanıza gerek kalmaz.

## Endpointler

- `POST /api/register`: Yeni kullanıcı kaydı
- `POST /api/login`: Kullanıcı girişi (JWT token döndürür)
- `GET /api/me`: Giriş yapmış kullanıcının bilgilerini getirir (kimlik doğrulama gerektirir)
- `POST /api/programs`: Yeni antrenman programı oluştur (coach)
- `GET /api/programs`: Tüm programları listele (coach)
- `GET /api/programs/:id`: Belirli bir programı getir (coach & athlete)
- `PUT /api/programs/:id`: Programı güncelle (coach)
- `DELETE /api/programs/:id`: Programı sil (coach)
- `POST /api/programs/:id/assign`: Programı sporcuya ata (coach)
- `POST /api/feedbacks`: Yeni geri bildirim ekle (athlete)
- `GET /api/feedbacks`: Tüm geri bildirimleri listele (coach)
- `POST /api/feedbacks/:id/respond`: Geri bildirime yanıt ekle (coach)
- `GET /api/athletes/:id/stats`: Sporcu performans istatistikleri (coach & athlete)
- `GET /api/athletes/:id/progress`: Sporcu gelişim raporu (coach & athlete)
- `GET /api/team/stats`: Takım istatistikleri (coach)
