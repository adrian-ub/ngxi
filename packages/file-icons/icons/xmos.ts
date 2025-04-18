import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsXmosIcon],svg[file-icons-xmos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 492.863L186.98 240L36.392 19.137H189.49l71.53 119.843l70.274-119.843h154.358L336.311 240L512 492.863H357.647L259.765 338.51L154.353 492.863z"></svg:path>`,
})
export class FileIconsXmosIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
