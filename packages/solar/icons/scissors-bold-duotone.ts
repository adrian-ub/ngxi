import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarScissorsBoldDuotoneIcon],svg[solar-scissors-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.654 1.633a.75.75 0 1 0-1.308.735L15.704 20.79a3.75 3.75 0 1 0-.136-3.303z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.346 1.633a.75.75 0 0 1 1.308.735L8.296 20.79a3.75 3.75 0 1 1 .136-3.303z"></svg:path>`,
})
export class SolarScissorsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
