import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLibrofmIcon],svg[arcticons-librofm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.81 22.952l12.053-12.053v19.384L26.811 42.336a3.975 3.975 0 0 1-5.622 0L9.137 30.283V10.9l12.052 12.053a3.975 3.975 0 0 0 5.622 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.835 17.298a6.126 6.126 0 0 0-7.827-.02v.02m11.562-4.246a12.045 12.045 0 0 0-15.33 0m19.013-4.458a17.81 17.81 0 0 0-22.72 0"></svg:path>`,
})
export class ArcticonsLibrofmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
