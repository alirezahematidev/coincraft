import { useMemo } from "react";
import { CurrencyName } from "./currency.ts";

interface IconProps {
  name: CurrencyName;
  format?: "svg" | "png";
  size?: number | "small" | "medium" | "large";
}

type MetaKey = "size" | "path";

type SizeMap = "32" | "64" | "128";

type Metadata = {
  [K in MetaKey]: string;
};

function path$(name: string, format: NonNullable<IconProps["format"]>, variant: SizeMap) {
  if (format === "svg") return `../images/svg/${name}.svg`;

  return `../images/png/${variant}/${name}.png`;
}

const Icon = ({ name, format = "svg", size = "small" }: IconProps) => {
  const meta = useMemo<Metadata>(() => {
    const data: Map<MetaKey, string> = new Map();

    const sizeMap: Record<Exclude<typeof size, number>, SizeMap> = {
      small: "32",
      medium: "64",
      large: "128",
    };

    data.set("size", typeof size === "number" ? size.toString() : sizeMap[size]);

    data.set("path", path$(name, format, sizeMap[typeof size === "number" ? "small" : size]));

    return Object.fromEntries(data.entries()) as Metadata;
  }, [format, name, size]);

  return <img width={meta.size} height={meta.size} src={import.meta.resolve(meta.path)} alt={name} />;
};

export type { IconProps };
export { Icon };
