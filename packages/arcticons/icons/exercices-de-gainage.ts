import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsExercicesDeGainageIcon],svg[arcticons-exercices-de-gainage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 26.829l27.943-5.859m-4.247.89v10.416h7.126m2.716-8.03a4.355 4.355 0 1 1-1.787-8.524a4.355 4.355 0 0 1 1.787 8.525M5.5 32.372V26.83"></svg:path>`,
})
export class ArcticonsExercicesDeGainageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
