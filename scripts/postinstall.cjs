const { execSync } = require("node:child_process");

const projectRoot = process.env.INIT_CWD || process.cwd();

console.log("[saas-pm-ceo-auditor-skill] Syncing skills to detected agents...");
execSync("npx -y skills experimental_sync -a '*' -y", {
  cwd: projectRoot,
  stdio: "inherit",
});
console.log("[saas-pm-ceo-auditor-skill] Skill synced. Use /saas-pm-ceo-auditor.");
