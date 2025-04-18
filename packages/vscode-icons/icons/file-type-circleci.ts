import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeCircleciIcon],svg[vscode-icons-file-type-circleci-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#064c64" d="M12.458 16a3.332 3.332 0 1 1 3.332 3.332A3.33 3.33 0 0 1 12.458 16M15.79 2A14.015 14.015 0 0 0 2.224 12.528a.4.4 0 0 0-.014.14a.67.67 0 0 0 .672.672h5.642a.645.645 0 0 0 .6-.392a7.336 7.336 0 1 1 0 6.1a.68.68 0 0 0-.6-.392H2.882a.67.67 0 0 0-.672.672c0 .042.014.084.014.14A14 14 0 1 0 15.79 2"></svg:path>`,
})
export class VscodeIconsFileTypeCircleciIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
