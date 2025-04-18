import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPrivacyideaAuthenticatorIcon],svg[arcticons-privacyidea-authenticator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.736 5.977S20.033 9.016 23.73 9.09c3.92.08 17.534-3.59 17.534-3.59M6.736 17.67h34.528l-.382 15c-.689 13.875-33.414 12.205-33.732.349z"></svg:path>`,
})
export class ArcticonsPrivacyideaAuthenticatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
