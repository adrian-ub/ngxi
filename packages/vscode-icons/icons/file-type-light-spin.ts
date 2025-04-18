import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeLightSpinIcon],svg[vscode-icons-file-type-light-spin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11.012 2.002h2.9v27.997h-2.9z"></svg:path><svg:path d="M16 4.326A11.576 11.637 0 0 0 4.424 15.965A11.576 11.637 0 0 0 16 27.602a11.576 11.637 0 0 0 11.576-11.637A11.576 11.637 0 0 0 16 4.325m.035 2.797a8.831 8.878 0 0 1 8.832 8.877a8.831 8.878 0 0 1-8.832 8.879a8.831 8.878 0 0 1-8.83-8.88a8.831 8.878 0 0 1 8.83-8.876"></svg:path>`,
})
export class VscodeIconsFileTypeLightSpinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
