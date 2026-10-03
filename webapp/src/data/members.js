// Auto-loads every JSON file in ./profiles
const modules = import.meta.glob("./profiles/*.json", {
  eager: true,
  import: "default",
});

// "prelim-hoa1.pdf" -> "/docs/nikko/prelim-hoa1.pdf"
const withPath = (file, folder) =>
  !file || file.startsWith("/") || file.startsWith("http")
    ? file
    : `${folder}${file}`;

export const members = Object.values(modules)
  .map((m) => {
    const docs = `/docs/${m.id}/`;
    return {
      ...m,
      photo: withPath(m.photo, "/photos/"),
      hoa: Object.fromEntries(
        Object.entries(m.hoa).map(([term, items]) => [
          term,
          items.map((h) => ({ ...h, file: withPath(h.file, docs) })),
        ])
      ),
      exams: Object.fromEntries(
        Object.entries(m.exams).map(([term, e]) => [
          term,
          { ...e, file: withPath(e.file, docs) },
        ])
      ),
    };
  })
  .sort((a, b) => a.order - b.order);