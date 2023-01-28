// bad
const catBad: { [key: string]: string } = {
  name: '',
  // ...any object property
};

// nice
const catNice = {
  name: '',
  // ...any object property
} satisfies { [key: string]: string };
