import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAlertBadge32Icon],svg[fluent-color-alert-badge-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAlertBadge320)" d="M20 24a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path fill="url(#fluentColorAlertBadge321)" d="M7 13a9 9 0 0 1 18 0v3.807l1.928 4.822A1 1 0 0 1 26 23H6a1 1 0 0 1-.928-1.371L7 16.807z"></svg:path><svg:path fill="url(#fluentColorAlertBadge323)" fill-opacity=".2" d="M7 13a9 9 0 0 1 18 0v3.807l1.928 4.822A1 1 0 0 1 26 23H6a1 1 0 0 1-.928-1.371L7 16.807z"></svg:path><svg:path fill="#212121" d="M27 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="url(#fluentColorAlertBadge322)" d="M27 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorAlertBadge320" x1="16" x2="16.026" y1="22.857" y2="27.999" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F" stop-opacity=".988"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAlertBadge321" x1="24.243" x2="8.48" y1="20.889" y2="5.769" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAlertBadge322" x1="21.214" x2="25.929" y1="7.125" y2="10.875" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F83F54"></svg:stop><svg:stop offset="1" stop-color="#B91D6B"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorAlertBadge323" cx="0" cy="0" r="1" gradientTransform="matrix(-5.50014 5.93836 -6.48802 -6.00924 23.942 9.34)" gradientUnits="userSpaceOnUse"><svg:stop offset=".253" stop-color="#FFE994"></svg:stop><svg:stop offset=".648" stop-color="#FFE994" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorAlertBadge32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
