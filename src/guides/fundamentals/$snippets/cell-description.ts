// #region describe-string
import { Cell } from "@starbeam/core";

// #highlight:next
const person = Cell({ name: "John", age: 30 }, "person");
// #endregion describe-string

{
  // #region describe-with-equals
  const person = Cell(
    { name: "John", age: 30 },
    {
      equals: (a, b) => a.name === b.name && a.age === b.age,
      description: "person",
    }
  );
  // #endregion describe-with-equals
}
