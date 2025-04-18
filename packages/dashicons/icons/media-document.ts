import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsMediaDocumentIcon],svg[dashicons-media-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2l4 4v12H4V2zM5 3v1h6V3zm7 3h3l-3-3zM5 5v1h6V5zm10 3V7H5v1zM5 9v1h4V9zm10 3V9h-5v3zM5 11v1h4v-1zm10 3v-1H5v1zm-3 2v-1H5v1z"></svg:path>`,
})
export class DashiconsMediaDocumentIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
