import { getPackageManagerCommand, logger } from "@nx/devkit";
import { execSync } from "child_process";
import { getLatestVersion } from "fast-npm-meta";

export async function updatePkgToLatestVersion(pkgName: string) {
  logger.info(`Checking for latest version of ${pkgName}...`);

  const pkgVersionResult = await getLatestVersion(pkgName);

  if ('error' in pkgVersionResult) {
    throw new Error(`Failed to fetch version for ${pkgName}: ${pkgVersionResult.error}`);
  }

  const currentVersion = pkgVersionResult.version;
  const currentPkgVersion = (await import(`${pkgName}/package.json`)).version;

  if (currentVersion === currentPkgVersion) {
    logger.info(`${pkgName} is already at the latest version: ${currentVersion}`);
    return;
  }

  logger.info(`Updating ${pkgName} to latest version...`);
  const packageManager = getPackageManagerCommand();

  execSync(`${packageManager.addDev} ${pkgName}@${pkgVersionResult.version}`);
  logger.info(`Updated ${pkgName} to version ${pkgVersionResult.version}`);
}
