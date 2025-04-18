import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeRacketIcon],svg[vscode-icons-file-type-racket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="14" fill="#fff"></svg:circle><svg:path fill="#3e5ba9" d="M27.016 24.641a14 14 0 0 0-15.8-21.8c5.684 2.981 13.197 12.708 15.8 21.8"></svg:path><svg:path fill="#9f1d20" d="M13.995 10.93a24.3 24.3 0 0 0-7.22-5.46a14 14 0 0 0-1.312 19.747a39.6 39.6 0 0 1 8.532-14.287m2.58 3.17A32.65 32.65 0 0 0 9.43 28.365a14.02 14.02 0 0 0 13.3-.089A38.6 38.6 0 0 0 16.575 14.1"></svg:path>`,
})
export class VscodeIconsFileTypeRacketIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
