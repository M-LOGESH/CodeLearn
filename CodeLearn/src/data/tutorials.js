const topics = [
  "C",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "Django",
  "React",
  "SQL",
];

const tutorials = topics.map((topic) => {
  const slug = `tutorials/${topic.toLowerCase()}`;
  const image = `/assets/img/tutorial/${topic.toLowerCase()}.svg`;
  const alt = `${topic} Tutorial`;

  return {
    title: topic,
    slug,
    image,
    alt,
  };
});

export default tutorials;
