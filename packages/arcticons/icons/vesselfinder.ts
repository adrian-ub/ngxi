import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVesselfinderIcon],svg[arcticons-vesselfinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.743 33.088l30.93-17.858l-10.268 17.784z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.404 33.014L3.325 15.071l10.416 18.017m5.128-9.045l5.271-9.13l5.272 9.13m-5.273-9.131v12.173M3.327 15.071l17.45 5.66m6.749.048l17.149-5.549"></svg:path>`,
})
export class ArcticonsVesselfinderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
