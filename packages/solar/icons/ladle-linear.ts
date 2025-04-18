import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLadleLinearIcon],svg[solar-ladle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 5.684a3.684 3.684 0 0 1 7.368 0v10a6.316 6.316 0 0 0 12.632 0V14.5"></svg:path><svg:path d="M22 14.5c0 1.38-2.946 2.5-6 2.5s-6.5-1.12-6.5-2.5S12.946 12 16 12s6 1.12 6 2.5Z"></svg:path></svg:g>`,
})
export class SolarLadleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
