import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlizzardAuthenticatorIcon],svg[arcticons-blizzard-authenticator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c1.69 0 15.25-7.77 15.25-16.94v-20c-4 0-15.25-2-15.25-2s-11.26 2-15.25 2v20C8.75 35.73 22.31 43.5 24 43.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.39 18.9a3.39 3.39 0 1 0-6.78 0a3.33 3.33 0 0 0 2.07 3.1v3.13a1.32 1.32 0 0 0 2.64 0V22a3.39 3.39 0 0 0 2.07-3.1"></svg:path>`,
})
export class ArcticonsBlizzardAuthenticatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
