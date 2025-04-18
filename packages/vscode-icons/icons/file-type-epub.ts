import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeEpubIcon],svg[vscode-icons-file-type-epub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#86b918" d="M16 24.8L7.2 16L16 7.2l2.93 2.93L13.07 16L16 18.93l8.8-8.8l-7.67-7.66a1.6 1.6 0 0 0-2.26 0l-12.4 12.4a1.6 1.6 0 0 0 0 2.26l12.4 12.4a1.6 1.6 0 0 0 2.26 0l12.4-12.4a1.6 1.6 0 0 0 0-2.26l-1.8-1.8z"></svg:path>`,
})
export class VscodeIconsFileTypeEpubIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
