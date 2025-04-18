import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeBoltIcon],svg[vscode-icons-file-type-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbc02d" d="M9.012 2h13.967q-2.787 5.6-5.593 11.194q2.8.014 5.6.009q-4.9 8.4-9.794 16.8c-.019-4.192-.009-8.375-.009-12.567c-1.391 0-2.782 0-4.173-.009Z"></svg:path>`,
})
export class VscodeIconsFileTypeBoltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
