const idl = JSON.parse(
  JSON.stringify(require("./../../../target/idl/saffle.json"))
);
// const idl = {
//   version: "0.0.0",
//   name: "saffle",
//   instructions: [
//     {
//       name: "initialize",
//       accounts: [],
//       args: [],
//     },
//   ],
// };

export default idl;
