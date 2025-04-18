import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeNgTailwindIcon],svg[vscode-icons-file-type-ng-tailwind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#dd0031" d="M16 2L2.966 6.648l1.988 17.234L16 30l11.046-6.118l1.988-17.234z"></svg:path><svg:path fill="#c3002f" d="M16 2v3.108v-.014V30l11.046-6.118l1.988-17.234z"></svg:path><svg:path fill="#fff" d="m16 5.094l-8.148 18.27h3.038l1.638-4.088h6.916l1.638 4.088h3.038Zm2.38 11.662h-4.76L16 11.03Z"></svg:path><svg:path fill="#44a8b3" d="M16 23a4.726 4.726 0 0 1 5-4c4 0 4.5 3 6.5 3.5A3.21 3.21 0 0 0 31 21a4.726 4.726 0 0 1-5 4c-4 0-4.5-3-6.5-3.5A3.21 3.21 0 0 0 16 23m-5 6a4.726 4.726 0 0 1 5-4c4 0 4.5 3 6.5 3.5A3.21 3.21 0 0 0 26 27a4.726 4.726 0 0 1-5 4c-4 0-4.5-3-6.5-3.5A3.21 3.21 0 0 0 11 29"></svg:path>`,
})
export class VscodeIconsFileTypeNgTailwindIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
