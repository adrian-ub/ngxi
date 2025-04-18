import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSpotcoCarrionIcon],svg[arcticons-spotco-carrion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.287 24.704c5.186 0 9.398 4.212 9.398 9.398S36.473 43.5 31.287 43.5c-5.197 0-9.398-4.212-9.398-9.398s4.2-9.398 9.398-9.398"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.448 39.375q-.932.367-2.036.834C12.491 36.45 7.315 33.636 7.315 21.412V11.083L21.412 4.5l14.098 6.583v10.33q0 2.512-.25 4.135m-3.973 14.054v-11m-5.5 5.5h11"></svg:path>`,
})
export class ArcticonsSpotcoCarrionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
