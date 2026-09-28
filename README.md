# webdev-client

Harsh Dalal — Web Development course work.

This is the Next.js app I build through the course. Chapter 1 covers plain HTML
in React components, so Tailwind is imported but commented out in
`app/layout.tsx` and the pages render with the browser's default styling. CSS
comes in Chapter 2.

Deployed at https://webdev-client-tau-nine.vercel.app

## What is in here

**Labs** — `/labs`

- `/labs/lab1` is the HTML work: headings and spans, paragraphs, ordered and
  unordered lists, tables, images, the form controls (text fields, textarea,
  radio buttons, checkboxes, dropdowns, typed inputs, buttons), a Student
  Profile form, props with `HighlightedParagraph`, children with
  `HighlightedBox`, and anchor tags.
- `/labs/lab2` through `/labs/lab5` are placeholders for later chapters.
- `app/labs/TOC.tsx` and `app/labs/layout.tsx` put the table of contents
  beside every lab page through `children`.

**Kambaz** — a rough prototype of a learning management system

- `/account/signin`, `/account/signup`, `/account/profile` with an account
  navigation sidebar. `/` and `/account` both redirect to sign in.
- `/dashboard` lists three courses with a `CourseCard` component.
- `/courses/[cid]/home` puts the modules list next to Course Status.
- `/courses/[cid]/modules` nests weeks, lessons and content items.
- `/courses/[cid]/assignments` and `/courses/[cid]/assignments/[aid]` for the
  assignment list and the assignment editor.
- Piazza, Zoom, Quizzes, Grades and People are heading-only placeholders.
- `app/not-found.tsx` handles Calendar and Inbox, which do not exist yet.

Everything under `app/(kambaz)` is a route group, so the parentheses do not
show up in the URL.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.
