function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}
const ROOTS = "/";

export const PATH_DASHBOARD = {
  products: path(ROOTS, "products"),
};
