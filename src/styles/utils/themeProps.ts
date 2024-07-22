import type { Tokens } from "@pandacss/dev";
import { theme } from "../theme";

export const themeProps = (themeKey: keyof Tokens, tokenKey: string) => {
  if (!(theme?.extend?.tokens)) return {}

  const tokens = theme?.extend?.tokens[themeKey]

  return Object.entries(tokens).reduce((acc, [key, obj]) => {
    acc[key] = { [tokenKey]: obj.value};
    console.log(acc[key] = { [tokenKey]: obj.value})
    return acc;
  }, {})
}
