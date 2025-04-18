import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeSyncpackIcon],svg[vscode-icons-file-type-syncpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#84cc16"><svg:path id="vscodeIconsFileTypeSyncpack0" d="M2 13.15h2.5C7-.1 26 .6 27.7 13.7l-3.6-4l-2.7 3.25C19 7.5 12 9 10.7 13.15h2.95L7.8 20"></svg:path></svg:g><svg:use fill="#365314" href="#vscodeIconsFileTypeSyncpack0" transform="rotate(180 16 16)"></svg:use>`,
})
export class VscodeIconsFileTypeSyncpackIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
