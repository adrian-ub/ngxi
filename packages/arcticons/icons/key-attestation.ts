import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeyAttestationIcon],svg[arcticons-key-attestation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.68 15.457c0 4.747-3.846 8.597-8.59 8.597h0c-4.744 0-8.59-3.85-8.59-8.597h0c0-4.748 3.845-8.598 8.589-8.598h.001c4.744 0 8.59 3.849 8.59 8.597zm-.05-.901l19.87-2.797m-5.382.758l.812 5.778M17.019 34.701l6.434 6.44l11.56-11.569"></svg:path>`,
})
export class ArcticonsKeyAttestationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
