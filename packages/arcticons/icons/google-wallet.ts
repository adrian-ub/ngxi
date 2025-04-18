import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoogleWalletIcon],svg[arcticons-google-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 21.09v-7.465a6.21 6.21 0 0 0-6.2-6.2H10.7a6.25 6.25 0 0 0-6.2 6.2v7.719"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 18.844a6.21 6.21 0 0 0-6.2-6.2H10.7a6.21 6.21 0 0 0-6.2 6.2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.953 21.488a6.21 6.21 0 0 0-5.653-3.656H10.7a6.21 6.21 0 0 0-5.645 3.64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.298 27.1L4.5 21.343v13.032a6.21 6.21 0 0 0 6.2 6.2h26.601a6.21 6.21 0 0 0 6.2-6.2V21.09l-5.915 4.302a10.2 10.2 0 0 1-8.288 1.708"></svg:path>`,
})
export class ArcticonsGoogleWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
