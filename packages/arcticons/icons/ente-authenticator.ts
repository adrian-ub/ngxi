import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEnteAuthenticatorIcon],svg[arcticons-ente-authenticator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="13.432" height="10.294" x="17.284" y="22.119" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.177" ry="1.177"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.056 22.12v-3.073a3.944 3.944 0 1 1 7.888 0v3.072"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c6.914-1.65 16.116-9.964 16.116-20.127V11.561L24 4.5L7.884 11.56v11.813C7.884 33.536 17.086 41.85 24 43.5"></svg:path>`,
})
export class ArcticonsEnteAuthenticatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
