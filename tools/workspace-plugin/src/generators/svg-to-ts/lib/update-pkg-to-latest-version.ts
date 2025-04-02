import { getPackageManagerCommand, logger } from "@nx/devkit";
import { execSync } from "child_process";
import { getLatestVersion } from "fast-npm-meta";

export async function updatePkgToLatestVersion(pkgName: string) {
  logger.info(`Updating ${pkgName} to latest version...`);
  const pkgVersionResult = await getLatestVersion(pkgName);

  if ('error' in pkgVersionResult) {
    throw new Error(`Failed to fetch version for ${pkgName}: ${pkgVersionResult.error}`);
  }
  const packageManager = getPackageManagerCommand();

  execSync(`${packageManager.addDev} ${pkgName}@${pkgVersionResult.version}`);
  logger.info(`Updated ${pkgName} to version ${pkgVersionResult.version}`);
}
