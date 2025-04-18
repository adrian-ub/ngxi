import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psUpArrowCircleIcon],svg[ps-up-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0Q150 0 75 75T0 256t75 181t181 75t181-75t75-181t-75-181T256 0m0 469q-88 0-150.5-62.5T43 256t62.5-150.5T256 43t150.5 62.5T469 256t-62.5 150.5T256 469m13-315l-2-3h-22q-2 0-2 3l-64 42q-14 12-4 30t30 7l30-22v130q0 22 21 22t21-22V211l30 22q20 11 30-7q10-19-6-30z"></svg:path>`,
})
export class PsUpArrowCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
