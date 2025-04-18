import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsQrCodePrintIcon],svg[pepicons-qr-code-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".8"><svg:path d="M5 5.5a.5.5 0 0 1 .5-.5H18a.5.5 0 0 1 .5.5V18a.5.5 0 0 1-.5.5H5.5A.5.5 0 0 1 5 18V5.5Z"></svg:path><svg:path fill-rule="evenodd" d="M6.5 6.5V17H17V6.5H6.5ZM5.5 5a.5.5 0 0 0-.5.5V18a.5.5 0 0 0 .5.5H18a.5.5 0 0 0 .5-.5V5.5A.5.5 0 0 0 18 5H5.5Z" clip-rule="evenodd"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M5.5 5.5v3h3v-3h-3Zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5Zm6.5 1v3h3v-3h-3Zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5h-4Zm-5.5 7v3h3v-3h-3Zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H5Z" clip-rule="evenodd"></svg:path><svg:path d="M10.5 11a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4Z"></svg:path><svg:path fill-rule="evenodd" d="M11.5 11.5v3h3v-3h-3Zm-.5-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-4ZM2.5 3a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3 2.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5Zm0 15a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 1 0V17a.5.5 0 0 1-.5.5Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2.5 17a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm15 0a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1 0-1H17a.5.5 0 0 1 .5.5Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17 17.5a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 1 0V17a.5.5 0 0 1-.5.5Zm0-15a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.5 3a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1 0-1H17a.5.5 0 0 1 .5.5Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsQrCodePrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
