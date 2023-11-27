import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, ogImage, pubDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-xl font-bold text-skin-inverted",
  };

  return (
    <li className="my-6">
      <a
        href={href}
        className="relative grid grid-cols-1 text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        <span className="relative overflow-hidden image row-start-1 col-start-1">
          <img src={`${ogImage}`} className="aspect-video object-cover" />
        </span>
        <span className="relative row-start-1 col-start-1 place-self-end w-full p-4 pt-[15%] bg-gradient-to-t from-skin-invert to-transparent">
          {secHeading ? (
            <h2 {...headerProps}>{title}</h2>
          ) : (
            <h3 {...headerProps}>{title}</h3>
          )}
        </span>
      </a>
      <Datetime datetime={pubDatetime} className="my-3" />
      <p>{description}</p>
    </li>
  );
}
