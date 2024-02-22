import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
  desc?: boolean;
}

export default function Card({
  href,
  frontmatter,
  secHeading = true,
  desc = true,
}: Props) {
  const { title, coverImage, pubDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-2xl lg:text-3xl font-semibold",
  };

  return (
    <li className="my-6">
      <a
        href={href}
        className="relative overflow-hidden grid gap-4 sm:gap-6 text-lg font-medium decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0 text-skin-base hover:text-skin-accent hover:[&>.image>img]:opacity-100 transition duration-500"
      >
        <span className="relative overflow-hidden image bg-black rounded-r-2xl rounded-tl-2xl">
          <img
            src={`${coverImage}`}
            className="w-full aspect-video object-cover opacity-90 transition-opacity duration-700"
          />
        </span>
        <span className="relative w-full text-article block pb-2">
          {secHeading ? (
            <h2 {...headerProps}>{title}</h2>
          ) : (
            <h3 className="text-xl lg:text-2xl font-semibold">{title}</h3>
          )}
        </span>
      </a>
      <Datetime datetime={pubDatetime} className="my-3 opacity-50" />
      {desc ? <p>{description}</p> : null}
    </li>
  );
}
