import type from "@unction/type";
export default function isEnumerable(value) {
  switch (type(value)) {
    case "Array":
    case "Object":
    case "Map":
    case "Set":
    case "String":
    case "Stream":
      {
        return true;
      }

    default:
      {
        return false;
      }
  }
}
