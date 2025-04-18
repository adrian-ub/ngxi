import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeTealIcon],svg[vscode-icons-file-type-teal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="14" fill="#00aab4"></svg:circle><svg:path fill="#fff" d="M16.42 7.32h7v7h-7z"></svg:path>`,
})
export class VscodeIconsFileTypeTealIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
