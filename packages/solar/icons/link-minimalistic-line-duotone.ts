import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalisticLineDuotoneIcon],svg[solar-link-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9 12h6"></svg:path><svg:path d="M9 18H8A6 6 0 0 1 8 6h1m6 0h1a6 6 0 0 1 0 12h-1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLinkMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
