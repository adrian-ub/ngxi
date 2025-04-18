import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeDrawioIcon],svg[vscode-icons-file-type-drawio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="28" height="28" x="2" y="2" fill="#f08705" rx="1.12"></svg:rect><svg:path fill="#df6c0c" fill-rule="evenodd" d="m16.861 9.168l3.02-3.187L30 16.094V28.88A1.12 1.12 0 0 1 28.88 30H11.316l-5.385-5.407Z"></svg:path><svg:path fill="#fff" d="M25.24 17.96h-3.294l-3.071-5.32h.2a1.12 1.12 0 0 0 1.12-1.12V6.76a1.12 1.12 0 0 0-1.12-1.12H12.92a1.12 1.12 0 0 0-1.12 1.12v4.76a1.12 1.12 0 0 0 1.12 1.12h.205l-3.071 5.32H6.76a1.12 1.12 0 0 0-1.12 1.12v4.76a1.12 1.12 0 0 0 1.12 1.12h6.16a1.12 1.12 0 0 0 1.12-1.12v-4.76a1.12 1.12 0 0 0-1.12-1.12h-.927l3.072-5.32h1.87l3.071 5.32h-.926a1.12 1.12 0 0 0-1.12 1.12v4.76a1.12 1.12 0 0 0 1.12 1.12h6.16a1.12 1.12 0 0 0 1.12-1.12v-4.76a1.12 1.12 0 0 0-1.12-1.12"></svg:path>`,
})
export class VscodeIconsFileTypeDrawioIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
