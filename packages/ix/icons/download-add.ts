import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDownloadAddIcon],svg[ix-download-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 320l-.001 64h64v42.667h-64v64H384v-64h-64V384h64v-64zm-128.001 64v42.666L64 426.667V384zM256 42.667v210.56l93.013-77.653l27.307 32.853L234.667 326.4L93.013 208.427l27.307-32.853l93.013 77.653V42.667z"></svg:path>`,
})
export class IxDownloadAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
