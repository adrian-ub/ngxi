import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRadioupnpIcon],svg[arcticons-radioupnp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.59 9.51a12.02 12.02 0 0 1 20.82 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.745 12.107a8.415 8.415 0 0 1 14.575 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.874 15.225a4.808 4.808 0 0 1 8.328 0m-7.732 5.981a3.606 3.606 0 0 1 3.606-3.607h0a3.606 3.606 0 0 1 3.606 3.606h0m.001 10.577a3.606 3.606 0 1 1-7.213 0m7.213-10.576v10.576M20.47 21.206v10.576"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.25 32.201a7.213 7.213 0 0 1-14.424 0m7.328 7.212v5.068m-3.296.019h6.399m3.993-15.402v3.103m-14.424-3.103v3.103"></svg:path>`,
})
export class ArcticonsRadioupnpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
