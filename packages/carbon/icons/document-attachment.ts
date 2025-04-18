import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentAttachmentIcon],svg[carbon-document-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30H11a2 2 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.006 5.006 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.006 5.006 0 0 1-5 5"></svg:path>`,
})
export class CarbonDocumentAttachmentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
