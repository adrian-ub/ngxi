import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMailInboxEmailOutboxDrawerEmptyOpenInboxIcon],svg[streamline-mail-inbox-email-outbox-drawer-empty-open-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M.5 8H4a1 1 0 0 1 1 1a2 2 0 0 0 4 0a1 1 0 0 1 1-1h3.5"></svg:path></svg:g>`,
})
export class StreamlineMailInboxEmailOutboxDrawerEmptyOpenInboxIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
