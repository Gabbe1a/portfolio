# Portfolio — бриф для Cursor Agent

Дата: 2026-09-28 (Europe/Moscow)  
Владелец: Михаил Табунщиков (Treo Falkin / Gabbela)  
Репозиторий: https://github.com/Gabbe1a/portfolio (уже есть README на `main`)

Ты — coding agent. Сам собери Next.js сайт по этому брифу. Не спрашивай лишнего, если данные уже здесь. Код пиши в этом репозитории, открой PR.

---

## 1. Цель

Личное портфолио full-stack разработчика / автоматизатора.  
Стек: **Next.js (App Router) + TypeScript + Tailwind**.  
Языки: **RU + EN** (по умолчанию RU на `/`, EN на `/en`, переключатель языка).  
Деплой позже: Docker на VPS, пока **только HTTP**, без домена/HTTPS.

Визуальный референс №1 (обязательно смотреть и держать стиль):  
https://pamidordesign.co/

Референс макетов кейсов (для следующих итераций, не блокер первой версии):  
https://www.behance.net/gallery/253711315/sajt-dlja-tinkova-I-lending-veb-dizajn-Landing-Page

Скриншоты референсов лежат в `assets/`:
- `assets/ref-pamidor-homepage.png`
- `assets/ref-behance-hero.png`
- `assets/ref-behance-devices.png`

Hero-фото (утверждено): `assets/hero-mikhail.png` (+ web-версия `assets/hero-mikhail-web.jpg`).  
Поза: почти спиной к камере, тёмный минимализм как у Pamidor. Положи в `public/images/hero-mikhail.jpg`.

---

## 2. Позиционирование и копирайт

**Имя:** Михаил Табунщиков / Mikhail Tabunshchikov  

**Роль RU:** Full-stack разработчик · сайты, магазины, CRM и SEO  
**Роль EN:** Full-stack developer · websites, stores, CRM & SEO  

**Суть:** делает лендинги, сайты, интернет-магазины, интеграции с CRM, SEO-статьи; также no-code/AI-автоматизация (Make, боты, контент-пайплайны) для блогеров и бизнеса. Тон практичный, живой, не корпоративный.

Каналы (из TG «Дневник Автоматизатора» / YouTube / IG):
- автоматизация жизни блогера и бизнеса через no-code
- кейсы на Make: автопостинг, CRM
- нейросети, Cursor, генерация контента/видео

---

## 3. Контакты на сайте

- Личный Telegram (кнопка «Написать»): https://t.me/Gabbela_chat  
- Канал: https://t.me/gabbela_ai  
- Instagram: https://www.instagram.com/gabbela_ai/  
- YouTube: https://www.youtube.com/@gabbe1a  

---

## 4. Структура сайта (первая версия)

### Homepage
1. Минимальный nav: имя/лого, Work, About, Contact, переключатель RU/EN  
2. **Hero** в духе Pamidor: огромное имя, роль, короткий intro, CTA → Telegram; справа/сбоку hero-фото, много воздуха, тёмный/минимальный фон  
3. **Selected Projects** — 7 проектов из `wave1-projects.json`  
   - карточка → `/projects/[slug]`  
   - кнопка «Посетить сайт» / «Visit site» → `visitUrl` в новой вкладке  
4. Skills / services: сайты и лендинги, магазины, CRM, SEO-статьи, автоматизация/AI  
5. Contact + соцсети  

### Project page `/projects/[slug]`
- title, summary, visit button  
- плейсхолдер «Макет кейса — скоро» (мок-апы устройств будут во 2-й волне через GPT Image; сейчас не генерировать)  

### Motion
Лёгкий Framer Motion / CSS (fade, hover). **Без тяжёлого WebGL.**

### Docker
`Dockerfile` + `docker-compose.yml`, `next start` на порту **3000**. README с run/build/docker.

`npm run build` должен проходить.

---

## 5. Первая волна проектов

Файл: `wave1-projects.json` (использовать как источник правды).

| slug | Название | Visit URL | Статус |
|------|----------|-----------|--------|
| helmet-atelier | Helmet Atelier | http://13.143.162.71:3012/ | preview на VPS |
| trooms-outdoor | TROOMS Outdoor | http://13.143.162.71:8088/ | preview на VPS |
| sporklany | Спорящие кланы / Sporklany | https://sporklany.ru/ | **live**, хостинг клиента |
| odin-k-odnomu | Один к Одному | http://13.143.162.71:8291/ | preview на VPS |
| darbin | Darbin | http://13.143.162.71:8181/ | preview на VPS |
| tony-montana | Tony Montana | http://13.143.162.71:8182/ | preview на VPS |
| ella-koroleva | Элла Королёва | https://ellakoroleva.com/ | **live**, хостинг клиента |

Важно:
- Sporklany и Ella — **сданные** сайты на хостинге владельцев. В портфолио только как кейсы со ссылкой на домен. Копии на нашем VPS для них не искать.
- Остальные preview-URL на IP:port — это нормально для текущего этапа (домен к портфолио ещё не прикручиваем).

Полный инвентарь кандидатов (22 INCLUDE / SKIP): `portfolio-project-candidates.md` — остальные добавим позже.

---

## 6. VPS (деплой портфолио — после кода)

Консолидационный сервер проектов:

- **Host:** `13.143.162.71`  
- **SSH:** `root` / `[REDACTED — not in git]`  
- **OS:** Ubuntu  
- Портфолио выкатить Docker’ом на свободный порт (например **3090** или **3000**, если свободен), **только HTTP**, без HTTPS и без домена.  
- Не трогать чужие контейнеры клиентов.  
- Папка проектов на сервере в основном `/opt/...` и `/srv/...`.

Временные фото-рефы (можно снести после): `/opt/portfolio-tmp` + python http на `:8799`.

---

## 7. Стиль Pamidor (кратко)

- Много воздуха, крупная display-типографика, минимальный nav  
- Hero: имя + специализации + большой портрет (у нас — тёмная палитра / спина)  
- Список кейсов с метаданными, не «шаблонный Bootstrap portfolio»  
- Лёгкие scroll/hover reveals  

Не копировать тексты Pamidor. Взять каркас и ощущение.

---

## 8. Что НЕ делать сейчас

- Не генерировать device mockups для каждого проекта (это этап 2)  
- Не прикручивать домен / SSL  
- Не тащить в портфолио админки, ботов, mini-app only, API-only (см. SKIP в candidates)  
- Не коммитить секреты `.env` с паролями в публичный репо — VPS-креды только для деплоя локально/в secrets, не в git  

---

## 9. Порядок работы для агента

1. Прочитать этот BRIEF + `wave1-projects.json` + картинки в `assets/`  
2. Собрать Next.js приложение в репо `Gabbe1a/portfolio`  
3. Вложить hero в `public/images/`  
4. i18n RU/EN, секции как выше  
5. Docker-файлы  
6. `npm run build`  
7. PR в `main`  

Критерий готовности первой версии: открывается главная RU/EN, видны 7 проектов, кнопки «Посетить» ведут по JSON URL, hero на месте, build зелёный.

---

## 10. Следующие этапы (после merge)

A. Скриншоты live/preview сайтов → GPT Image 2 device mockups (разные композиции, не один шаблон) → страницы кейсов  
B. Docker deploy на `13.143.162.71` HTTP  
C. Добавить остальные INCLUDE-проекты из candidates  
D. Домен + HTTPS (делает владелец сам)

---

## Файлы в этом архиве

```
BRIEF.md                          ← этот файл
wave1-projects.json               ← проекты первой волны
portfolio-project-candidates.md   ← полный фильтр INCLUDE/SKIP
assets/hero-mikhail.png           ← утверждённый hero
assets/hero-mikhail-web.jpg
assets/ref-pamidor-homepage.png
assets/ref-behance-hero.png
assets/ref-behance-devices.png
```

Конец брифа.
