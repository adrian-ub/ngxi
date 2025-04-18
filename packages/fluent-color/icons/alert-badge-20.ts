import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAlertBadge20Icon],svg[fluent-color-alert-badge-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAlertBadge200)" d="M12.99 15a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="url(#fluentColorAlertBadge201)" d="M9.988 2c3.15 0 5.744 2.335 5.985 5.356l.013.222l.005.224l-.001 3.606l.954 2.588l.025.084l.016.087l.005.088c0 .315-.196.59-.522.707l-.113.033l-.115.01H3.742a.8.8 0 0 1-.26-.046c-.286-.106-.475-.372-.482-.716l.005-.118l.033-.13l.951-2.584l.002-3.618l.004-.225C4.117 4.451 6.762 2 9.988 2"></svg:path><svg:path fill="url(#fluentColorAlertBadge203)" fill-opacity=".2" d="M9.988 2c3.15 0 5.744 2.335 5.985 5.356l.013.222l.005.224l-.001 3.606l.954 2.588l.025.084l.016.087l.005.088c0 .315-.196.59-.522.707l-.113.033l-.115.01H3.742a.8.8 0 0 1-.26-.046c-.286-.106-.475-.372-.482-.716l.005-.118l.033-.13l.951-2.584l.002-3.618l.004-.225C4.117 4.451 6.762 2 9.988 2"></svg:path><svg:path fill="url(#fluentColorAlertBadge202)" d="M15 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:defs><svg:lineargradient id="fluentColorAlertBadge200" x1="10.01" x2="10.01" y1="14.5" y2="18" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F" stop-opacity=".988"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAlertBadge201" x1="17.01" x2="4.51" y1="15" y2="4" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAlertBadge202" x1="13.143" x2="16.286" y1="3.75" y2="6.25" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F83F54"></svg:stop><svg:stop offset="1" stop-color="#B91D6B"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorAlertBadge203" cx="0" cy="0" r="1" gradientTransform="matrix(-3.99997 5.50003 -5.91658 -4.3029 15 5)" gradientUnits="userSpaceOnUse"><svg:stop offset=".253" stop-color="#FFE994"></svg:stop><svg:stop offset=".648" stop-color="#FFE994" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorAlertBadge20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
