import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHomeNetworkIcon],svg[arcticons-home-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsHomeNetwork0" fill="none" stroke="currentColor" d="M27.465 34.326L24 37.79l-3.465-3.465c.88-.881 2.102-1.433 3.465-1.433s2.584.552 3.465 1.433"></svg:path></svg:defs><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 32.893a4.88 4.88 0 0 1 3.465 1.433L24 37.79l-3.465-3.465A4.88 4.88 0 0 1 24 32.893m-8.552-3.653c2.197-2.186 5.216-3.537 8.552-3.537s6.355 1.351 8.552 3.536M4.5 18.291c4.98-4.992 11.888-8.082 19.5-8.082s14.52 3.09 19.5 8.082"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.535 34.326L24 37.791l3.465-3.465"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 32.893a4.88 4.88 0 0 1 3.465 1.433L24 37.79l-3.465-3.465A4.88 4.88 0 0 1 24 32.893m-8.552-3.653c2.197-2.186 5.216-3.537 8.552-3.537s6.355 1.351 8.552 3.536m-22.449-5.345c3.56-3.559 8.47-5.756 13.897-5.756s10.337 2.197 13.897 5.756"></svg:path><svg:use href="#arcticonsHomeNetwork0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:use href="#arcticonsHomeNetwork0" stroke-linecap="round" stroke-linejoin="round"></svg:use>`,
})
export class ArcticonsHomeNetworkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
