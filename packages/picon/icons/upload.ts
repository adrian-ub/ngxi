import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconUploadIcon],svg[picon-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7v1h6V7M3 3v3h2V3h2L4 0L1 3"></svg:path>`,
})
export class PiconUploadIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
