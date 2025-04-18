import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBookOpen24Icon],svg[fluent-color-book-open-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBookOpen240)" d="M2 6a2 2 0 0 1 2-2h6c.768 0 2 1 2 2l1 6.5l-1 6.736A3 3 0 0 1 10 20H4a2 2 0 0 1-2-2z"></svg:path><svg:path fill="url(#fluentColorBookOpen241)" d="M22 6a2 2 0 0 0-2-2h-6c-.768 0-2 1-2 2l-1 6.5l1 6.736c.53.475 1.232.764 2 .764h6a2 2 0 0 0 2-2z"></svg:path><svg:path fill="url(#fluentColorBookOpen242)" d="M3.5 5a1 1 0 0 1 1-1h6A1.5 1.5 0 0 1 12 5.5l.555 5.5L12 16.5a2 2 0 0 1-2 2H4.5a1 1 0 0 1-1-1z"></svg:path><svg:path fill="url(#fluentColorBookOpen243)" d="M20.5 5a1 1 0 0 0-1-1h-6A1.5 1.5 0 0 0 12 5.5v11a2 2 0 0 0 2 2h5.5a1 1 0 0 0 1-1z"></svg:path><svg:defs><svg:lineargradient id="fluentColorBookOpen240" x1="3.875" x2="7.289" y1="4.571" y2="24.157" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#20AC9D"></svg:stop><svg:stop offset=".908" stop-color="#2052CB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBookOpen241" x1="20.125" x2="16.711" y1="4.571" y2="24.157" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#20AC9D"></svg:stop><svg:stop offset=".908" stop-color="#2052CB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBookOpen242" x1="2.286" x2="27.658" y1="3.442" y2="15.213" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B6EFFF"></svg:stop><svg:stop offset=".851" stop-color="#58AAFE"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBookOpen243" x1="19.969" x2=".231" y1="4.906" y2="9.077" gradientUnits="userSpaceOnUse"><svg:stop offset=".123" stop-color="#9DEAFF"></svg:stop><svg:stop offset=".616" stop-color="#4894FE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBookOpen24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
