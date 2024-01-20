"use strict";

// Third Party
const include = require("include")(__dirname);

// Project
const commitsPath = include("api/projects/repos/commits/path");

module.exports = (projectKey, repositorySlug, commitId, filePath) =>
  `${commitsPath(projectKey, repositorySlug, commitId)}/diff/${filePath || ""}`;
