// Typescript Improvs
// https://www.youtube.com/watch?v=ZCllX1p763U

// #region UNKNOWN VS ANY VS NEVER
/*
  any -> assign any type
  unknown -> does not assign any type
  never -> does not match any type
*/ 
let catAny: any;
let catUnknown: unknown;
let catNever: never;

catAny.meow();
// it fits to an object with 'meow' function inside of it

catUnknown.meow();
//  ↑  'catUnknown' variable is not object type

catNever.meow();
//  ↑  'catNever' is not a value
      //  ↑  'meow' is not a function inside of 'catNever'

// #endregion
