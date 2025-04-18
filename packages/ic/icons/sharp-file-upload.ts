import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFileUploadIcon],svg[ic-sharp-file-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10h4v6h6v-6h4l-7-7zm0 8v2h14v-2z"></svg:path>`,
})
export class IcSharpFileUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
