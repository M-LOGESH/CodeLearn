export default [
  {
    title: "Introduction",
    slug: "index",
    type: "page"
  },

  {
    title: "CSS Fundamentals",
    type: "group",
    children: [
      { title: "Selectors", slug: "selectors" },
      { title: "Box Model", slug: "box-model" },
      { title: "Colors & Backgrounds", slug: "colors-backgrounds" },
      { title: "Typography", slug: "typography" }
    ]
  },

  {
    title: "Layout & Positioning",
    type: "group",
    children: [
      { title: "Flexbox", slug: "flexbox" },
      { title: "CSS Grid", slug: "css-grid" },
      { title: "Position Property", slug: "position" }
    ]
  },

  {
    title: "Responsive Design",
    slug: "responsive-design",
    type: "page"
  },
  {
    title: "Transitions & Animations",
    slug: "transitions-animations",
    type: "page"
  },

  {
    title: "Advanced CSS",
    type: "group",
    children: [
      { title: "CSS Variables", slug: "css-variables" },
      { title: "Transforms", slug: "transforms" },
      { title: "Filters & Blend Modes", slug: "filters-blend-modes" }
    ]
  }
];