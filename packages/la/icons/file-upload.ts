import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFileUploadIcon],svg[la-file-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM16 13l-4 4h3v5h2v-5h3zm-4 10v2h8v-2z"></svg:path>`,
})
export class LaFileUploadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
