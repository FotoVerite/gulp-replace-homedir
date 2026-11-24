/**
 * Replace user home in a string with another string.
 *
 * @param {string} filepath The user-provided filepath.
 * @param {string | ((match: string, offset: number, input: string) => string)} replacement String to use as the replacement or function to run to produce a replacement string.
 * @returns {string} The updated file-path.
 */
export default function replaceHomedir(filepath: string, replacement: string | ((match: string, offset: number, input: string) => string)): string;
//# sourceMappingURL=index.d.ts.map