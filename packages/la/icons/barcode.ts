import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBarcodeIcon],svg[la-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v18h2V7zm4 0v18h6V7zm8 0v18h2V7zm4 0v18h4V7zm6 0v18h2V7zm4 0v18h2V7z"></svg:path>`,
})
export class LaBarcodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
