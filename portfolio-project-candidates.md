# Portfolio candidates — consolidation VPS

Checked: 2026-09-28 23:32 MSK (target `13.143.162.71`; local HTTP probes to `127.0.0.1`). Only running projects with a public/mapped application port are listed. Docker DB/cache/worker ports and the unused default nginx page on host port 80 are omitted.

| Project | Path on target | Host port(s) | What it is | HTTP `/` | Portfolio |
|---|---|---:|---|---:|---|
| **Helmet Atelier** | `/opt/helmet-atelier` | 3012 | Bespoke helmet studio/product marketing site. | 200 | **INCLUDE** — polished client-facing landing page. |
| **КнигаСвет** | `/opt/knigasvet` | 3010 | Online photobook builder and print-order site. | 200 | **INCLUDE** — real product/service front page. |
| **Sporklany** | `/srv/sporklany` | 8080 | Miniatures brand with product sets, lore and comics. | 200 | **INCLUDE** — finished brand/product site. |
| **Выгодные Квартиры** | `/srv/vygodnye-kvartiry` | 8081 | Krasnodar below-market apartment lead-generation site. | 200 | **INCLUDE** — clear real-estate marketing landing. |
| **Кофе — место силы** | `/opt/kofe-mama` | 8082 / 8445 | Coffee-to-go brand/order site. | 200 | **INCLUDE** — finished consumer-facing site. |
| **TROOMS Outdoor** | `/srv/trooms-outdoor` | 8088 | Modular outdoor kitchens and living spaces. | 200 | **INCLUDE** — finished marketing site. |
| **Darbin WP** | `/srv/darbin-wp` | 8181 | Sochi private barber studio site. | 200 | **INCLUDE** — client-facing local-business site. |
| **Tony Montana WP** | `/srv/tony-montana-wp` | 8182 | Krasnodar classic barbershop site. | 200 | **INCLUDE** — client-facing local-business site. |
| **МаскКостюм** | `/opt/maskkostum` | 8288 | Camouflage clothing/maskhalat catalog and inquiry site. | 200 | **INCLUDE** — real product showcase. |
| **Rubliss** | `/opt/rubliss` | 8289 | Mortgage/debt refinancing service site. | 200 | **INCLUDE** — finished lead-generation landing. |
| **Один к Одному** | `/opt/odin-k-odnomu` | 8291 | Digital dentistry clinic site. | 200 | **INCLUDE** — substantial finished service site. |
| **Arutiun** | `/opt/arutiun` + `/var/www/arutiun` | 8292 / 8443 | Online psychotherapy practice site. | 200 | **INCLUDE** — finished personal-service site. |
| **Эко-Вкус** | `/opt/eko-vkus-web` | 8293 | Nuts and dried-fruit storefront/brand site. | 200 | **INCLUDE** — real consumer-facing storefront. |
| **SUP Rostov** | `/opt/sup-rostov` | 8389 | SUP/outdoor recreation business site. | 200 | **INCLUDE** — finished local-business landing. |
| **Мамкин Пёс** | `/opt/mamkin-pes` | 8391 | Rostov grooming studio site. | 200 | **INCLUDE** — finished local-business site. |
| **Денис Иванов / Archviz** | `/opt/denis-archviz` | 8392 | Architecture/interior 3D visualization portfolio. | 200 | **INCLUDE** — directly suitable as a portfolio example. |
| **Феникс** | `/var/www/fenix-swim-draft` + `/opt/fenix-swim-draft` | 8388 | Swimming school for children and adults. | 200 | **INCLUDE** — finished service/marketing site. |
| **АвтоПро** | `/opt/autopro` | 8488 | Kazan auto-service lead-generation site. | 200 | **INCLUDE** — finished client-facing landing. |
| **АкваМед** | `/opt/Kapelnica-med` | 8481 | IV-drip clinic site in Saint Petersburg. | 200 | **INCLUDE** — finished clinic marketing site. |
| **Kate Prolife** | `/opt/kate-wp-b` | 8493 | Personal-brand/wellness presentation site. | 200 | **INCLUDE** — real public personal-brand page. |
| **Столярная мастерская** | `/opt/kate-wp` | 8491 | Custom woodwork/carpentry workshop site. | 200 | **INCLUDE** — finished product/service site. |
| **De Keeting** | `/opt/dekeeting-wp` | 8494 | Café/community venue site. | 200 | **INCLUDE** — finished public business site. |
| **TROOMS kitchen MVP** | `/opt/kitchen-mvp` | 8487 | TROOMS kitchen quote/application form. | 200 | **SKIP** — standalone form, not a full public marketing front page. |
| **MiGarden Bot** | `/opt/migarden-bot` | 8099 | Landscape-project cost calculator tied to a Telegram bot. | 200 | **SKIP** — mini-app/bot experience only. |
| **Эко-Вкус miniapp** | `/opt/eko-vkus-miniapp` | 8787 | Eко-Вкус mini-app frontend. | 200 | **SKIP** — mini-app alone; main site is 8293. |
| **TROOMS CMS** | `/srv/trooms-cms` | 8090 | Same TROOMS Outdoor public front page served by the CMS stack. | 200 | **SKIP** — idle/duplicate of TROOMS Outdoor (8088). |
| **bani-article** | `/var/www/bani-article` + `/opt/bani-article-compose` | 8380 | Single article about a modular house/bath project. | 200 | **SKIP** — article-only site. |
| **kofe backend** | `/opt/kofe` | 8190 / 8444 | Kofe application backend/API; root returns FastAPI-style JSON 404. | 404 | **SKIP** — bare backend/API; no public front page. |
| **kofe-112** | `/opt/kofe-112` | 8390 / 8544 | Second migrated copy of the Kofe backend/API. | 404 | **SKIP** — duplicate bare backend and idle comparison copy. |
| **Agregator / Gabbela AI webhook** | `/opt/agregator` | 8480; admin 8485 localhost-only | Telegram/webhook service with a private admin panel. | 404 | **SKIP** — bot/webhook plus admin, not a public site. |
| **TROOMS Telegram relay** | `/opt/trooms-tg-relay` | 8788 | Telegram relay/health service. | 404 | **SKIP** — relay/API only. |
| **AI Contact backend** | `/opt/ai-contact-backend` | 8510 | InternetLab contact/request form backed by an API. | 200 | **SKIP** — backend/task form, not a finished marketing site. |
| **Доступное Право CRM** | `/opt/legal-crm-demo` | 8520 | Legal CRM demo/application. | 200 | **SKIP** — CRM/admin-style application, not portfolio public site. |
| **FNS Nalog Agent** | `/opt/FNS-Nalog-Agent` | 8500 | FNS tax-agent API; root returns JSON service metadata. | 200 | **SKIP** — backend/API only. |

## Recommended first 8

1. **Helmet Atelier** — strongest premium/product presentation.
2. **КнигаСвет** — clear product flow and useful interaction.
3. **TROOMS Outdoor** — polished niche B2C marketing site.
4. **Sporklany** — distinctive brand, catalog, lore and visual identity.
5. **Один к Одному** — substantial clinic/service presentation.
6. **Кофе — место силы** — recognizable consumer brand/order experience.
7. **Выгодные Квартиры** — clear high-conversion real-estate landing.
8. **АвтоПро** — focused local-service lead-generation site.

All listed `200` values are fresh root-page probes on the target at the check time; the migration logs also reported successful bring-up. HTTPS secondary ports were recorded where mapped but the status column is for the requested HTTP root probe.
