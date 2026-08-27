import { CdkCopyToClipboard } from '@angular/cdk/clipboard';
import { Component, computed, input, signal } from '@angular/core';

/**
 * The copyable `pnpm add <package>` pill. Presentational: the package name is
 * provided by the shell (from the selected set, if any); an empty value falls
 * back to the placeholder package.
 */
@Component({
  selector: 'app-install-pill',
  imports: [CdkCopyToClipboard],
  templateUrl: './install-pill.html',
})
export class InstallPill {
  readonly packageName = input('');

  readonly installCopied = signal(false);

  readonly installCommand = computed(() => {
    const pkg = this.packageName() || '@ngxi/<collection>';
    return `pnpm add ${pkg}`;
  });

  onInstallCopied(): void {
    this.installCopied.set(true);
    setTimeout(() => this.installCopied.set(false), 1500);
  }
}
