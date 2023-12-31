import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://pesmania.web.id/", // replace this with your deployed domain
  author: "FDSEVEN",
  desc: "A website for Pro Evolution Soccer gamers, PESMania is a sharing content for Pro Evolution Soccer (PES) community - Patches, Tools, Kits, Stadiums, and many other Mods, News & Updates.",
  title: "PESMania",
  coverImage: "pes-2021-cover-mods-patch-scoreboard-kits-stadium.png",
  lightAndDarkMode: true,
  postPerPage: 9,
  tags: ["fdseven", "design enthusiast", "gamer blog", "gamers"],
};
export const BASE_URL = import.meta.env.BASE_URL;

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const navList = [
  {
    name: "Posts",
    url: `${BASE_URL}posts`,
  },
  {
    name: "Tags",
    url: `${BASE_URL}tags`,
    submenu: [
      // { name: "Movie News", url: `${BASE_URL}indeks-subkanal.html`},
      // { name: "Movie Review", url: `${BASE_URL}indeks-review-movie.html`},
      // { name: "Series Update", url: `#`},
      // { name: "Behind The Scene", url: `#`},
      // { name: "Cinema Talk", url: `#`},
    ],
  },
  {
    name: "Football Info",
    url: `${BASE_URL}football-info`,
  },
  {
    name: "About",
    url: `${BASE_URL}about`,
  },
];

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/fdseven",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/fd.seven",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/fdseven",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ferdy-setiady-62937125",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:fd.se7en@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/madamextr",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "#",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "#",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "#",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "#",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://id.pinterest.com/fdseven",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "#",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://codepen.io/fdseven",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "#",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "#",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "#",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "#",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "#",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "#",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "#",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
