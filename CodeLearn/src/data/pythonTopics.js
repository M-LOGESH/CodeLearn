export default [
  {
    title: "Introduction",
    slug: "index",
    type: "page"
  },

  {
    title: "Python Basics",
    type: "group",
    children: [
      { title: "Hello World", slug: "hello-world" },
      { title: "Variables & Data Types", slug: "variables-data-types" },
      { title: "Operators", slug: "operators" },
      { title: "Input & Output", slug: "input-output" }
    ]
  },

  {
    title: "Control Flow",
    type: "group",
    children: [
      { title: "If Statements", slug: "if-statements" },
      { title: "Loops", slug: "loops" },
      { title: "Functions", slug: "functions" }
    ]
  },

  {
    title: "Data Structures",
    type: "group",
    children: [
      { title: "Lists", slug: "lists" },
      { title: "Tuples", slug: "tuples" },
      { title: "Dictionaries", slug: "dictionaries" },
      { title: "Sets", slug: "sets" }
    ]
  }
];