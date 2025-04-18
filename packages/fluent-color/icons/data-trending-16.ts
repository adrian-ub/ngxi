import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDataTrending16Icon],svg[fluent-color-data-trending-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDataTrending160)" d="M9.75 4.75c0 .414.336.75.75.75h.94L9 7.94L7.53 6.47a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 0 0 1.06 1.06L7 8.06l1.47 1.47a.75.75 0 0 0 1.06 0l2.97-2.97v1.017a.75.75 0 0 0 1.5 0V4.75a.75.75 0 0 0-.75-.75H10.5a.75.75 0 0 0-.75.75"></svg:path><svg:path fill="url(#fluentColorDataTrending161)" d="M3.5 2.75a.75.75 0 0 0-1.5 0v8.5A2.75 2.75 0 0 0 4.75 14h8.5a.75.75 0 0 0 0-1.5h-8.5c-.69 0-1.25-.56-1.25-1.25z"></svg:path><svg:defs><svg:lineargradient id="fluentColorDataTrending160" x1="4.038" x2="16.501" y1="9.431" y2="4.419" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset=".445" stop-color="#9C6CFE"></svg:stop><svg:stop offset=".957" stop-color="#E656EB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataTrending161" x1="12.875" x2="2.374" y1="2.75" y2="18.387" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#70777D"></svg:stop><svg:stop offset="1" stop-color="#B9C0C7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDataTrending16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
