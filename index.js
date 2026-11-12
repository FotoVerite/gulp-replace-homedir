"use strict";

import os from "node:os";
import path from "node:path";

export default function replaceHomedir(filepath, replacement) {
  if (typeof filepath !== "string") {
    throw new Error("Path for replace-homedir must be a string.");
  }

  if (!path.isAbsolute(filepath)) {
    return filepath;
  }

  var home = os.homedir();

  if (!path.isAbsolute(home)) {
    return filepath;
  }

  var lookupHome = path.normalize(home + path.sep);
  var lookupPath = path.normalize(filepath + path.sep);

  if (lookupPath.indexOf(lookupHome) !== 0) {
    return filepath;
  }

  var output = filepath.replace(lookupHome, function () {
    var result = replacement;
    if (typeof replacement === "function") {
      result = replacement.apply(this, arguments);
    }

    return result + path.sep;
  });

  return path.normalize(output);
}
