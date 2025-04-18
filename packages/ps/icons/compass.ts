import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psCompassIcon],svg[ps-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0Q150 0 75 75T0 256t75 181t181 75t181-75t75-181t-75-181T256 0m0 469q-88 0-150.5-62.5T43 256t62.5-150.5T256 43t150.5 62.5T469 256t-62.5 150.5T256 469m-85-245v203l162-122q8-5 8-17V85L179 207q-8 5-8 17m42 19q0-9 7-13l91-85l-12 124q0 9-7 13l-91 85zm64 13q0 9-6 15t-15 6t-15-6t-6-15t6-15t15-6t15 6t6 15"></svg:path>`,
})
export class PsCompassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
