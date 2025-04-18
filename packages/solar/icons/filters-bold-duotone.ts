import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarFiltersBoldDuotoneIcon],svg[solar-filters-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0"></svg:path><svg:path fill="currentColor" d="M13.58 13.79a6 6 0 0 1-7.16-3.58a6 6 0 1 0 7.16 3.58" opacity=".7"></svg:path><svg:path fill="currentColor" d="M13.58 13.79c.271.684.42 1.43.42 2.21a6 6 0 0 1-2 4.472a6 6 0 1 0 5.58-10.262a6.01 6.01 0 0 1-4 3.58" opacity=".4"></svg:path>`,
})
export class SolarFiltersBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
