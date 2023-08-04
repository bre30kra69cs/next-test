export type ClassName = string | number | undefined | null | boolean;

export const cn = (...classNames: ClassName[]) => {
  return classNames
    .filter((className) => {
      return typeof className === "string" && !!className.trim();
    })
    .join(" ");
};
