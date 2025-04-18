import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarScissorsLineDuotoneIcon],svg[solar-scissors-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16.401 20.5L6 2m16 17a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" opacity=".5"></svg:path><svg:path d="M7.599 20.5L18 2M2 19a3 3 0 1 0 6 0a3 3 0 0 0-6 0Z"></svg:path></svg:g>`,
})
export class SolarScissorsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
