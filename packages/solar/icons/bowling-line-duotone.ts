import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBowlingLineDuotoneIcon],svg[solar-bowling-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="7" r="1.5" opacity=".5" transform="rotate(-90 12 7)"></svg:circle><svg:circle cx="12" cy="12" r="1.5" opacity=".5" transform="rotate(-90 12 12)"></svg:circle><svg:path d="M8 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBowlingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
