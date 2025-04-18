import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDiscountPercentFireIcon],svg[streamline-discount-percent-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.247 8.462c0-5.008-4.423-7.326-6.506-7.868c.78 1.95.737 3.393-.27 5.171a.478.478 0 0 1-.777.069l-1.28-1.452c-3.35 3.558-1.422 9.281 3.881 9.015c4.057-.25 4.952-2.952 4.952-4.935m-6.58 2.462L8.951 7.64"></svg:path><svg:path d="M6.065 8.118a.25.25 0 1 1 0-.5m0 .5a.25.25 0 0 0 0-.5m2.659 3.329a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineDiscountPercentFireIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
