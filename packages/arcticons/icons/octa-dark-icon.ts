import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOctaDarkIconIcon],svg[arcticons-octa-dark-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.294 24a5.25 5.25 0 0 0-5.25 5.25h0c0 2.9 2.35 5.25 5.25 5.25h3.412c2.9 0 5.25-2.35 5.25-5.25h0c0-2.9-2.35-5.25-5.25-5.25m0 0c2.9 0 5.25-2.35 5.25-5.25h0c0-2.9-2.35-5.25-5.25-5.25h-3.412a5.25 5.25 0 0 0-5.25 5.25h0c0 2.9 2.35 5.25 5.25 5.25m0 0h3.412"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.663 5.5H16.337L5.5 16.337v15.326L16.337 42.5h15.326L42.5 31.663V16.337z"></svg:path>`,
})
export class ArcticonsOctaDarkIconIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
