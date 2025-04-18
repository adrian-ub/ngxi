import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeCursorrulesIcon],svg[vscode-icons-file-type-cursorrules-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#444" d="M3.75 9v14h24.5V9L16 2"></svg:path><svg:path fill="#939393" d="M16 16V2L3.75 9l24.5 14L16 30L3.75 23"></svg:path><svg:path fill="#e3e3e3" d="M28.25 9H16v21"></svg:path><svg:path fill="#fff" d="M3.75 9h24.5L16 16"></svg:path>`,
})
export class VscodeIconsFileTypeCursorrulesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
