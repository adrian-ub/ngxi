import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageInboxNotificationFillIcon],svg[mage-inbox-notification-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#mageInboxNotificationFill0)"><svg:path d="M21.875 10.495v4.88a6.76 6.76 0 0 1-6.75 6.75h-6.5a6.76 6.76 0 0 1-6.75-6.75v-6.5a6.76 6.76 0 0 1 6.75-6.75h4.87a.75.75 0 1 1 0 1.5h-4.87a5.25 5.25 0 0 0-5.25 5.25v2.5h2.5a2.75 2.75 0 0 1 2.75 2.75a1.25 1.25 0 0 0 1.25 1.25h4a1.26 1.26 0 0 0 1.25-1.25a2.73 2.73 0 0 1 2.75-2.75h2.5v-.88a.75.75 0 1 1 1.5 0"></svg:path><svg:path d="M18.875 8.375a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5"></svg:path></svg:g><svg:defs><svg:clippath id="mageInboxNotificationFill0"><svg:path fill="#fff" d="M1.875 1.875h20.25v20.25H1.875z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MageInboxNotificationFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
