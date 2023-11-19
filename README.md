# The Essentialist Template

Hey! Thank you for your interest in my work. Feel free to experiment with this template and to make it your own. 

The goal and the idea was to made as flexible template as possible so that anyone could use it to create a stylish hq on the internet. I wanted it to become a noise-cancelling anchor for someone focused on building a high-signal and meaningful life. 

For those interested, the "spirited man" — comes from the "[Shop Class as Soulcraft](https://www.amazon.com/Shop-Class-Soulcraft-Inquiry-Value/dp/0143117467?keywords=soulcraft&qid=1700379052&sr=8-3)" book. 

This template is created with [Astro](https://astro.build/) and [Tailwind](https://tailwindcss.com/).

![Essentialist: both themes](/public/two-themes.webp)

## Structure
You'll find the following folders and files structure inside your project. 

```text
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Footer.astro
│   │   └── Header.astro
│   │   └── Link.astro
│   │   └── List.astro
│   │   └── ListItem.astro
│   │   └── Navigation.astro
│   │   └── Section.astro
│   │   └── SectionTitle.astro
│   │   └── Story.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── info.js
└── package.json
└── tailwind.config.mjs
```
![Essentialist: mobile](/public/mobile.webp)

## Customize

Most of the data displayed (name, contacts, etc) on the page exists in one single file — `persona.js` (`src/persona.js`). Here you can add your own info such as name, email, and much more. 

Mind that there is a an object here, where you can create additional sections. Jut don't forget to create them in the `index.astro` as well.

This template is designed to be a single-screen website. Yet you still can add more sections, and customize it further if needed. For example, there is an `Navigation` component (`src/componetnts/Navigation.astro`) that depends on the `nav.js` (`src/nav.js`) data. So if you want to add pages to the website, consider reading [this](https://docs.astro.build/en/core-concepts/astro-pages/) and [this](https://docs.astro.build/en/core-concepts/routing/) first.

If you want to costomize color theme, go to `tailwind.config.mjs`. All the changes will be automaticall applied to the whole theme.

![Essentialist: dark theme](/public/e-dark.webp)

## Plugins
Currently, this project contains several plugins:
- [Astro + Tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/);
- [Astro Compress](https://github.com/astro-community/AstroCompress#readme);
- [Astro Robots](https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme);

![Essentialist: light theme](/public/e-light.webp)

## Ideas
Here are a couple of ideas if you want to add more sections. 
- Recent projects;
- Recent work experience;
- Hobbies;
- Books you recommend;
- Recent articles you have written;

## Help
If you need any help with customization, design or anything, feel free to [reach out](mailto:shapeshifter@skiff.com)