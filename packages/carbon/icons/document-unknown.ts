import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentUnknownIcon],svg[carbon-document-unknown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="28.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M10 25H8v-4h2a2 2 0 0 0 0-4H8a2 2 0 0 0-2 2v.5H4V19a4.005 4.005 0 0 1 4-4h2a4 4 0 0 1 0 8Z"></svg:path><svg:path fill="currentColor" d="m27.7 9.3l-7-7A.9.9 0 0 0 20 2H10a2.006 2.006 0 0 0-2 2v8h2V4h8v6a2.006 2.006 0 0 0 2 2h6v16H14v2h12a2.006 2.006 0 0 0 2-2V10a.91.91 0 0 0-.3-.7M20 10V4.4l5.6 5.6Z"></svg:path>`,
})
export class CarbonDocumentUnknownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
