import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAutotaggerIcon],svg[arcticons-autotagger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.9 18.72v13.15m4.93-13.15v13.15m-6.36-13.15v-4.1m8.43 4.1v-4.1m-4.22 4.1v-4.1m-7.29 0h14.59"></svg:path><svg:rect width="21.8" height="10.57" x="12.78" y="18.72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.28"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.07 18.72H4.5m0 2.14v-4.29m29.61 9.6l9.39 8V13.83l-9.39 8.01"></svg:path>`,
})
export class ArcticonsAutotaggerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
