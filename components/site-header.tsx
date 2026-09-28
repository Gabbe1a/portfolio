"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { t } from "@/lib/copy";
import { homePath, otherLocalePath, type Locale } from "@/lib/projects";

const telegram = "https://t.me/Gabbela_chat";

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname() || homePath(locale);
  const text = t(locale);
  const home = homePath(locale);

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "ru";
  }, [locale]);

  return (
    <header className="flex items-center justify-between gap-6 px-6 py-6 md:px-10 lg:px-14">
      <Link href={home} className="text-xs tracking-[0.18em] uppercase">
        {text.wordmark}
      </Link>
      <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm">
        <Link href={`${home}#work`} className="hover:opacity-60">
          {text.nav.work}
        </Link>
        <Link href={`${home}#about`} className="hover:opacity-60">
          {text.nav.about}
        </Link>
        <Link href={`${home}#contact`} className="hover:opacity-60">
          {text.nav.contact}
        </Link>
        <a href={telegram} className="hover:opacity-60" target="_blank" rel="noreferrer">
          {text.cta}
        </a>
        <span className="text-ink/30" aria-hidden>
          /
        </span>
        <Link
          href={otherLocalePath(pathname, "ru")}
          hrefLang="ru"
          className={locale === "ru" ? "font-semibold" : "opacity-45 hover:opacity-100"}
          aria-current={locale === "ru" ? "page" : undefined}
        >
          RU
        </Link>
        <Link
          href={otherLocalePath(pathname, "en")}
          hrefLang="en"
          className={locale === "en" ? "font-semibold" : "opacity-45 hover:opacity-100"}
          aria-current={locale === "en" ? "page" : undefined}
        >
          EN
        </Link>
      </nav>
    </header>
  );
}
