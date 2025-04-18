import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeAlIcon],svg[vscode-icons-file-type-al-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2ea98e" d="M11.616 7.986A1.56 1.56 0 0 0 10.16 7h-.06a1.56 1.56 0 0 0-1.456.986L2 25h3.806l1.015-2.834h6.621L14.457 25h3.8Zm-3.672 10.97l2.188-6.111l2.188 6.116Zm15.885 2.715V7.129H20.3v15.618A2.346 2.346 0 0 0 22.57 25H30v-3.328Z"></svg:path>`,
})
export class VscodeIconsFileTypeAlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
