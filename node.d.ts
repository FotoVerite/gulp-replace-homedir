declare module "node:os" {
  function homedir(): string;
}

declare module "node:path" {
  const sep: string;
  function isAbsolute(p1: string): boolean;
  function normalize(path: string): string;
}
