/**
 * The header and page metadata. Section text lives in src/content/sections/.
 */
export const site = {
  name: "Jordan Bayles",
  description:
    "Jordan Bayles: software engineer on Chrome's audio stack, electronic music producer as Chasma Sound, and DJ, in Portland, Oregon.",
  shareDescription: "Software engineer on Chrome's audio stack, electronic music producer as Chasma Sound, and DJ.",
  roles: ["software engineer", "producer", "dj"],
  place: "portland, or",
  links: [
    { label: "email", href: "mailto:bayles.jordan@gmail.com" },
    { label: "soundcloud", href: "https://soundcloud.com/chasmasound" },
    { label: "instagram", href: "https://instagram.com/chasmasound" },
    { label: "github", href: "https://github.com/baylesj" },
  ],
  lede: "By day I work on the plumbing that lets Chrome play sound. By night I make and play electronic music.",
} as const;
