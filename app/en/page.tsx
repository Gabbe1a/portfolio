import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";
import { t } from "@/lib/copy";

const text = t("en");

export const metadata: Metadata = {
  title: text.metaTitle,
  description: text.metaDescription,
};

export default function Page() {
  return <HomeView locale="en" />;
}
