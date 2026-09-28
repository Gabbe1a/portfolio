import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { t } from "@/lib/copy";
import { casePath, projects, type Locale } from "@/lib/projects";

const telegram = "https://t.me/Gabbela_chat";
const channel = "https://t.me/gabbela_ai";
const instagram = "https://www.instagram.com/gabbela_ai/";
const youtube = "https://www.youtube.com/@gabbe1a";

export function HomeView({ locale }: { locale: Locale }) {
  const text = t(locale);

  return (
    <>
      <SiteHeader locale={locale} />
      <main>
        <section className="grid items-end gap-10 px-6 pb-16 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-14 lg:pb-24">
          <div className="rise max-w-3xl">
            <h1 className="text-[clamp(3.4rem,8vw,7.4rem)] font-semibold leading-[0.9] tracking-[-0.045em]">
              {text.nameLine1}
              <br />
              {text.nameLine2}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-snug md:text-xl">{text.role}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70 md:text-base">
              {text.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {text.skills.map((skill) => (
                <span
                  key={skill.title}
                  className="rounded-full border border-ink/15 px-3.5 py-1.5 text-sm"
                >
                  {skill.title}
                </span>
              ))}
            </div>
            <a
              href={telegram}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex bg-ink px-5 py-3 text-sm text-paper transition-opacity hover:opacity-80"
            >
              {text.cta}
            </a>
          </div>
          <div className="rise rise-delay relative min-h-[68vh] bg-ink">
            <Image
              src="/images/hero-mikhail.jpg"
              alt={locale === "ru" ? "Михаил Табунщиков" : "Mikhail Tabunshchikov"}
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-[72%_18%]"
            />
          </div>
        </section>

        <section id="work" className="px-6 py-20 md:px-10 lg:px-14">
          <p className="text-xs tracking-[0.18em] uppercase text-ink/50">{text.workKicker}</p>
          <p className="mt-3 max-w-xl text-sm text-ink/70">{text.workLead}</p>
          <ol className="mt-10">
            {projects.map((project, index) => (
              <li key={project.slug} className="border-t border-ink/10">
                <div className="grid gap-4 py-7 md:grid-cols-[4rem_1fr_auto] md:items-center md:gap-8">
                  <span className="text-sm tabular-nums text-ink/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Link href={casePath(locale, project.slug)} className="group block min-w-0">
                    <span className="block text-2xl font-semibold tracking-tight transition-opacity group-hover:opacity-60 md:text-3xl">
                      {project.title[locale]}
                    </span>
                    <span className="mt-2 block max-w-xl text-sm leading-relaxed text-ink/65">
                      {project.summary[locale]}
                    </span>
                    <span className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs uppercase tracking-[0.12em] text-ink/45">
                      <span>{text.status[project.status]}</span>
                      {project.tags.map((tag) => (
                        <span key={tag}>{text.tags[tag] ?? tag}</span>
                      ))}
                    </span>
                  </Link>
                  <a
                    href={project.visitUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="justify-self-start text-sm underline decoration-ink/30 underline-offset-4 hover:decoration-ink md:justify-self-end"
                  >
                    {text.visit}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="about" className="grid gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-14">
          <h2 className="text-xs tracking-[0.18em] uppercase text-ink/50">{text.aboutTitle}</h2>
          <p className="max-w-2xl text-2xl leading-snug tracking-tight md:text-3xl">{text.about}</p>
        </section>

        <section id="skills" className="px-6 py-8 md:px-10 lg:px-14">
          <h2 className="text-xs tracking-[0.18em] uppercase text-ink/50">{text.skillsTitle}</h2>
          <ul className="mt-8 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-5">
            {text.skills.map((skill) => (
              <li key={skill.title} className="bg-paper p-5">
                <h3 className="text-lg font-semibold tracking-tight">{skill.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{skill.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="px-6 py-24 md:px-10 lg:px-14">
          <h2 className="text-xs tracking-[0.18em] uppercase text-ink/50">{text.contactTitle}</h2>
          <p className="mt-4 max-w-md text-3xl tracking-tight md:text-5xl">{text.contactLead}</p>
          <ul className="mt-10 flex flex-col gap-3 text-lg">
            <li>
              <a href={telegram} target="_blank" rel="noreferrer" className="hover:opacity-60">
                {text.links.telegram}
              </a>
            </li>
            <li>
              <a href={channel} target="_blank" rel="noreferrer" className="hover:opacity-60">
                {text.links.channel}
              </a>
            </li>
            <li>
              <a href={instagram} target="_blank" rel="noreferrer" className="hover:opacity-60">
                {text.links.instagram}
              </a>
            </li>
            <li>
              <a href={youtube} target="_blank" rel="noreferrer" className="hover:opacity-60">
                {text.links.youtube}
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
