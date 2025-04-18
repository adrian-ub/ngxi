import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUserBlockRoundedBoldIcon],svg[solar-user-block-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="6" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M18 15.75a2.25 2.25 0 0 0-2.03 3.22l3-3a2.24 2.24 0 0 0-.97-.22m2.03 1.28l-3 3a2.25 2.25 0 0 0 3-3m-5.78.97a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.327 13.48A5.25 5.25 0 0 0 12.75 18c0 1.07.32 2.064.869 2.893q-.782.107-1.619.108c-3.866 0-7-1.79-7-4s3.134-4 7-4c1.204 0 2.337.174 3.327.48"></svg:path>`,
})
export class SolarUserBlockRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
