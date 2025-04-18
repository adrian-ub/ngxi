import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkEmailUnreadSharpIcon],svg[material-symbols-mark-email-unread-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8q-1.25 0-2.125-.875T16 5t.875-2.125T19 2t2.125.875T22 5t-.875 2.125T19 8M2 20V4h12.1q-.1.5-.1 1t.1 1q.175.8.575 1.488T15.65 8.7L12 11L4 6v2l8 5l5.275-3.3q.425.15.85.225T19 10q.8 0 1.575-.25T22 9v11z"></svg:path>`,
})
export class MaterialSymbolsMarkEmailUnreadSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
