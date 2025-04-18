import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsQrCodeIcon],svg[pepicons-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6 6v2h2V6H6ZM5 4.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5ZM12 6v2h2V6h-2Zm-1-1.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5h-4ZM6 12v2h2v-2H6Zm-1-1.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H5Z" clip-rule="evenodd"></svg:path><svg:path d="M10.5 11a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4Z"></svg:path><svg:path fill-rule="evenodd" d="M2 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3 2a1 1 0 0 1 1 1v3.5a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1Zm0 16a1 1 0 0 1-1-1v-3.5a1 1 0 1 1 2 0V17a1 1 0 0 1-1 1Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2 17a1 1 0 0 1 1-1h3.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm16 0a1 1 0 0 1-1 1h-3.5a1 1 0 1 1 0-2H17a1 1 0 0 1 1 1Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17 18a1 1 0 0 1-1-1v-3.5a1 1 0 1 1 2 0V17a1 1 0 0 1-1 1Zm0-16a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M18 3a1 1 0 0 1-1 1h-3.5a1 1 0 1 1 0-2H17a1 1 0 0 1 1 1Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsQrCodeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
