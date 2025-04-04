import { getPackageManagerCommand, logger } from "@nx/devkit";
import { execSync } from "child_process";
import { getLatestVersion } from "fast-npm-meta";
import { getPackageInfo } from 'local-pkg';

function getLatestVersionFromNpm(pkgName: string): string {
  try {
    const result = execSync(`npm view ${pkgName} version`, { encoding: 'utf8' });
    return result.trim();
  } catch (error) {
    logger.error(`Failed to get version from npm view: ${error.message}`);
    throw error;
  }
}

export async function updatePkgToLatestVersion(pkgName: string, options = { maxRetries: 3, skipVersionCheck: false }) {
  logger.info(`Checking for latest version of ${pkgName}...`);

  const pkgInfo = await getPackageInfo(pkgName);
  if (!pkgInfo) {
    throw new Error(`Package ${pkgName} not found`);
  }
  const currentPkgVersion = pkgInfo.version;
  if (!currentPkgVersion) {
    throw new Error(`Version not found for package ${pkgName}`);
  }

  if (options.skipVersionCheck) {
    logger.info(`Skipping version check and updating ${pkgName}...`);
    const packageManager = getPackageManagerCommand();
    execSync(`${packageManager.addDev} ${pkgName}@latest`);
    logger.info(`Updated ${pkgName} to latest version`);
    return;
  }

  let latestVersion: string | null = null;
  let retryCount = 0;

  while (retryCount < options.maxRetries) {
    try {
      const pkgVersionResult = await getLatestVersion(pkgName);

      if ('error' in pkgVersionResult) {
        throw new Error(`Failed to fetch version: ${pkgVersionResult.error}`);
      }

      latestVersion = pkgVersionResult.version;
      break;
    } catch (error) {
      retryCount++;
      logger.warn(`Attempt ${retryCount}/${options.maxRetries} failed: ${error.message}`);

      if (retryCount >= options.maxRetries) {
        logger.warn("Using fallback method to get version...");
        try {
          latestVersion = getLatestVersionFromNpm(pkgName);
        } catch (fallbackError) {
          throw new Error(`Failed to get latest version after ${options.maxRetries} attempts, and fallback also failed`);
        }
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000 * retryCount));
      }
    }
  }

  if (!latestVersion) {
    throw new Error(`Could not determine latest version for ${pkgName}`);
  }

  if (latestVersion === currentPkgVersion) {
    logger.info(`${pkgName} is already at the latest version: ${latestVersion}`);
    return;
  }

  logger.info(`Updating ${pkgName} from ${currentPkgVersion} to ${latestVersion}...`);
  const packageManager = getPackageManagerCommand();

  execSync(`${packageManager.addDev} ${pkgName}@${latestVersion}`);
  logger.info(`Updated ${pkgName} to version ${latestVersion}`);
}
