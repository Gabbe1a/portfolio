import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { t } from "@/lib/copy";
import { getProject, homePath, type Locale } from "@/lib/projects";

export function ProjectView({ locale, slug }: { locale: Locale; slug: string }) {
  const project = getProject(slug);
  if (!project) notFound();

  const text = t(locale);

  return (
    <>
      <SiteHeader locale={locale} />
      <main className="px-6 pb-24 md:px-10 lg:px-14">
        <Link
          href={`${homePath(locale)}#work`}
          className="text-sm text-ink/55 hover:text-ink"
        >
          {text.back}
        </Link>
        <p className="mt-10 text-xs uppercase tracking-[0.16em] text-ink/45">
          {text.status[project.status]}
        </p>
        <h1 className="mt-3 max-w-4xl text-[clamp(2.8rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
          {project.title[locale]}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
          {project.summary[locale]}
        </p>
        <a
          href={project.visitUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex bg-ink px-5 py-3 text-sm text-paper hover:opacity-80"
        >
          {text.visit}
        </a>
        <div className="mt-16 grid min-h-[420px] place-items-center border border-ink/10 bg-white/50">
          <p className="px-6 text-center text-sm tracking-[0.14em] uppercase text-ink/45">
            {text.caseSoon}
          </p>
        </div>
      </main>
    </>
  );
}
