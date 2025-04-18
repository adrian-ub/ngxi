import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineUploadIcon],svg[ic-outline-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16h6v-6h4l-7-7l-7 7h4zm3-10.17L14.17 8H13v6h-2V8H9.83zM5 18h14v2H5z"></svg:path>`,
})
export class IcOutlineUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
