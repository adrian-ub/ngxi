import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUploadFillIcon],svg[ri-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19h18v2H3zm10-9v8h-2v-8H4l8-8l8 8z"></svg:path>`,
})
export class RiUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
