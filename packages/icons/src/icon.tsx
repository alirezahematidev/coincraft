import { useMemo } from "react";
import { CurrencyName } from "./currency.ts";

interface IconProps {
  name: CurrencyName;
  format?: "svg" | "png";
  size?: number | "small" | "medium" | "large";
}

const Icon = ({ name, format = "svg", size = "small" }: IconProps) => {
  const { path$, size$ } = useMemo(() => {
    const sizeMap: Record<Exclude<typeof size, number>, string> = {
      small: "32",
      medium: "64",
      large: "128",
    };

    const size$ = typeof size === "number" ? size.toString() : sizeMap[size];

    const path$ = `../images/${format}/${name}.${format}`;

    return { size$, path$ };
  }, [format, name, size]);

  return <img width={size$} height={size$} src={import.meta.resolve(path$)} alt={name} />;
};

export type { IconProps };
export { Icon };
