import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsConnectYouIcon],svg[arcticons-connect-you-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.97 39.04v-3.719c2.974-2.974 5.467-3.918 9.265-3.918h0c3.798 0 6.29.944 9.265 3.918v3.719z"></svg:path><svg:circle cx="34.235" cy="22.893" r="4.975" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.97 39.04H4.5v-6.289c5.03-5.03 9.245-6.625 15.668-6.625h0c5.765 0 9.752 1.286 14.146 5.188"></svg:path><svg:circle cx="20.168" cy="15.809" r="6.848" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsConnectYouIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
