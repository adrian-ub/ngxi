import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFileUploadIcon],svg[ic-twotone-file-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.83 8H11v6h2V8h1.17L12 5.83z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 18h14v2H5zm0-8h4v6h6v-6h4l-7-7zm8-2v6h-2V8H9.83L12 5.83L14.17 8z"></svg:path>`,
})
export class IcTwotoneFileUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
