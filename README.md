# webdev-client

Harsh Dalal — Web Development course work.

This is the Next.js app I build through the course. Chapter 1 covered plain HTML
in React components. Chapter 2 adds CSS, React Icons, and Tailwind. Tailwind is
still not loaded globally: the global import in `app/layout.tsx` stays commented
out, and only the pages that need it import it (the Tailwind lab and Kambaz).

Deployed at https://webdev-client-tau-nine.vercel.app

## What is in here

**Labs** — `/labs`

- `/labs/lab1` is the HTML work: headings and spans, paragraphs, ordered and
  unordered lists, tables, images, the form controls (text fields, textarea,
  radio buttons, checkboxes, dropdowns, typed inputs, buttons), a Student
  Profile form, props with `HighlightedParagraph`, children with
  `HighlightedBox`, and anchor tags.
- `/labs/lab2` is the CSS work: the style attribute, id, class and structure
  selectors, the cascade, colors, borders, padding, margins, the box model,
  corners, dimensions, display, positions, z-index, float, a float grid, flex,
  media queries, and a React Icons sampler.
- `/labs/lab2/tailwind` is a separate page for the Tailwind samples: spacing,
  typography, background colors, responsive prefixes, a responsive card,
  filters, and grids.
- `/labs/lab3` through `/labs/lab5` are placeholders for later chapters.
- `app/labs/TOC.tsx` and `app/labs/layout.tsx` put the table of contents
  beside every lab page through `children`.

**Kambaz** — a rough prototype of a learning management system

- `/account/signin`, `/account/signup`, `/account/profile` with an account
  navigation sidebar. `/` and `/account` both redirect to sign in.
- `/dashboard` shows the courses as `CourseCard`s in a responsive grid.
- `/courses/[cid]/home` puts the modules list next to Course Status.
- `/courses/[cid]/modules` nests weeks, lessons and content items.
- `/courses/[cid]/assignments` and `/courses/[cid]/assignments/[aid]` for the
  assignment list and the assignment editor.
- `/courses/[cid]/people/table` is the People roster table.
- Piazza, Zoom, Quizzes and Grades are heading-only placeholders.
- `app/not-found.tsx` handles Calendar and Inbox, which do not exist yet.

Everything under `app/(kambaz)` is a route group, so the parentheses do not
show up in the URL.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.
