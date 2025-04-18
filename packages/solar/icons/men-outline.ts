import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMenOutlineIcon],svg[solar-men-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.25 2a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V3.81l-4.555 4.556a8.75 8.75 0 1 1-1.06-1.06l4.554-4.556H17a.75.75 0 0 1-.75-.75M10 6.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarMenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
