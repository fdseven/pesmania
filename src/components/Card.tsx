import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, coverImage, pubDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-2xl lg:text-3xl font-semibold",
  };

  return (
    <li className="my-6">
      <a
        href={href}
        className="relative overflow-hidden grid grid-cols-1 gap-4 sm:gap-6 text-lg font-medium decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0 text-skin-base hover:text-skin-accent transition duration-500"
      >
        <span className="relative overflow-hidden image rounded-r-lg rounded-tl-lg">
          <img src={`${coverImage}`} className="aspect-video object-cover" />
        </span>
        <span className="relative place-self-end w-full">
          {secHeading ? (
            <h2 {...headerProps}>{title}</h2>
          ) : (
            <h3 {...headerProps}>{title}</h3>
          )}
        </span>
      </a>
      <Datetime datetime={pubDatetime} className="my-3 opacity-50" />
      <p>{description}</p>
    </li>
  );
}
