/**
 * The header and page metadata. Section text lives in src/content/sections/.
 */
export const site = {
  name: "Jordan Bayles",
  description:
    "Jordan Bayles: software engineer on Chrome's audio stack, electronic music producer & dj as Chasma Sound, in Portland, Oregon.",
  shareDescription: "Software engineer on Chrome's audio stack, electronic music producer & dj as Chasma Sound.",
  roles: ["software engineer", "producer", "dj", "photographer"],
  place: "portland, or",
  links: [
    { label: "email", href: "mailto:bayles.jordan@gmail.com" },
    { label: "soundcloud", href: "https://soundcloud.com/chasmasound" },
    { label: "instagram", href: "https://instagram.com/chasmasound" },
    { label: "github", href: "https://github.com/baylesj" },
  ],
  lede: "Amateur producer/dj, photographer, bicyclist. Professional nerd",
} as const;
