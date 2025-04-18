import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneUploadFileIcon],svg[ic-twotone-upload-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4H6v16h12V9h-5zm3 11h-3v4h-2v-4H8l4.01-4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z"></svg:path><svg:path fill="currentColor" d="M8 15h3v4h2v-4h3l-3.99-4z"></svg:path>`,
})
export class IcTwotoneUploadFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
