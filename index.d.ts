/** Pack RGBA channels into uint32. */
declare function to(rgba: number[], normalized?: boolean): number;
declare namespace to {
  /** Unpack uint32 to RGBA channels. */
  var from: typeof import('./index.js').from;
}
export default to;
export { to };
/** Unpack uint32 to RGBA channels. */
export function from(n: number, normalized?: boolean): number[];
