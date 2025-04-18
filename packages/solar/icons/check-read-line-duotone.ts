import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCheckReadLineDuotoneIcon],svg[solar-check-read-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m4 12.9l3.143 3.6L15 7.5" opacity=".5"></svg:path><svg:path d="m20 7.563l-8.571 9L11 16"></svg:path></svg:g>`,
})
export class SolarCheckReadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
