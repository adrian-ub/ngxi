import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAlertBadge16Icon],svg[fluent-color-alert-badge-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAlertBadge160)" d="M10 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="url(#fluentColorAlertBadge161)" d="M8 2a4.5 4.5 0 0 0-4.5 4.5v2.401l-.964 2.414A.5.5 0 0 0 3 12h10a.5.5 0 0 0 .464-.685L12.5 8.9V6.5A4.5 4.5 0 0 0 8 2"></svg:path><svg:path fill="url(#fluentColorAlertBadge163)" fill-opacity=".2" d="M8 2a4.5 4.5 0 0 0-4.5 4.5v2.401l-.964 2.414A.5.5 0 0 0 3 12h10a.5.5 0 0 0 .464-.685L12.5 8.9V6.5A4.5 4.5 0 0 0 8 2"></svg:path><svg:path fill="url(#fluentColorAlertBadge162)" d="M12.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:defs><svg:lineargradient id="fluentColorAlertBadge160" x1="8.013" x2="8.013" y1="11.5" y2="14" gradientUnits="userSpaceOnUse"><svg:stop offset=".152" stop-color="#EB4824"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F" stop-opacity=".988"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAlertBadge161" x1="13.516" x2="3.687" y1="11.996" y2="3.538" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAlertBadge162" x1="11.107" x2="13.464" y1="3.563" y2="5.438" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F83F54"></svg:stop><svg:stop offset="1" stop-color="#B91D6B"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorAlertBadge163" cx="0" cy="0" r="1" gradientTransform="rotate(130.601 5.1 5.375)scale(4.60977 4.99197)" gradientUnits="userSpaceOnUse"><svg:stop offset=".253" stop-color="#FFE994"></svg:stop><svg:stop offset=".648" stop-color="#FFE994" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorAlertBadge16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
