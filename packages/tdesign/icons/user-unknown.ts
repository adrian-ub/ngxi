import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserUnknownIcon],svg[tdesign-user-unknown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M18 14c-.93 0-1.5.656-1.5 1.249v1h-2v-1C14.5 13.358 16.17 12 18 12s3.5 1.358 3.5 3.249a3.13 3.13 0 0 1-1.027 2.3L19 18.939v.683h-2v-1.546l2.112-1.993c.256-.235.388-.53.388-.834c0-.593-.57-1.249-1.5-1.249M8 16a4 4 0 0 0-4 4h8.8v2H2v-2a6 6 0 0 1 6-6h4.75v2zm9 4.996h2.003V23h-2.004z"></svg:path>`,
})
export class TdesignUserUnknownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
