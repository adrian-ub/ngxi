import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeIncIcon],svg[vscode-icons-file-type-inc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="gray" d="M26 29H6V3h14l6 6z"></svg:path><svg:path fill="#c5c5c5" d="M20.414 2H5v28h22V8.586ZM7 28V4h12v6h6v18Z"></svg:path><svg:path fill="#c5c5c5" d="M2 15v5h9v4l7-7l-7-6v4z"></svg:path>`,
})
export class VscodeIconsFileTypeIncIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
