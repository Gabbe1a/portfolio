import data from "../wave1-projects.json";

export type Locale = "ru" | "en";

export type Project = {
  slug: string;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  visitUrl: string;
  tags: string[];
  status: "preview" | "live";
};

export const projects = data as Project[];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function homePath(locale: Locale) {
  return locale === "en" ? "/en" : "/";
}

export function casePath(locale: Locale, slug: string) {
  return locale === "en" ? `/en/projects/${slug}` : `/projects/${slug}`;
}

export function otherLocalePath(pathname: string, locale: Locale) {
  const bare = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  if (locale === "en") {
    return bare === "/" ? "/en" : `/en${bare}`;
  }
  return bare;
}
