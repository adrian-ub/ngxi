import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAlertBadge24Icon],svg[fluent-color-alert-badge-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAlertBadge240)" d="M15 18a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="url(#fluentColorAlertBadge241)" d="M12 2.004a7.5 7.5 0 0 1 7.5 7.5v3.998l1.418 3.16a.95.95 0 0 1-.866 1.34h-16.1a.95.95 0 0 1-.867-1.339l1.415-3.16V9.49l.005-.25A7.5 7.5 0 0 1 12 2.004"></svg:path><svg:path fill="url(#fluentColorAlertBadge243)" fill-opacity=".2" d="M12 2.004a7.5 7.5 0 0 1 7.5 7.5v3.998l1.418 3.16a.95.95 0 0 1-.866 1.34h-16.1a.95.95 0 0 1-.867-1.339l1.415-3.16V9.49l.005-.25A7.5 7.5 0 0 1 12 2.004"></svg:path><svg:path fill="url(#fluentColorAlertBadge242)" d="M18.5 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:defs><svg:lineargradient id="fluentColorAlertBadge240" x1="12" x2="12.019" y1="17.5" y2="20.999" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F" stop-opacity=".988"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAlertBadge241" x1="21.027" x2="4.945" y1="17.995" y2="4.464" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAlertBadge242" x1="16.179" x2="20.107" y1="3.938" y2="7.063" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F83F54"></svg:stop><svg:stop offset="1" stop-color="#B91D6B"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorAlertBadge243" cx="0" cy="0" r="1" gradientTransform="rotate(131.987 7.803 7.37)scale(6.72681 7.33035)" gradientUnits="userSpaceOnUse"><svg:stop offset=".253" stop-color="#FFE994"></svg:stop><svg:stop offset=".648" stop-color="#FFE994" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorAlertBadge24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
