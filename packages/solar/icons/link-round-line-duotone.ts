import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundLineDuotoneIcon],svg[solar-link-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 9h-2a6 6 0 0 0 0 12h4a6 6 0 0 0 4.472-10" opacity=".5"></svg:path><svg:path d="M10 15h2a6 6 0 0 0 0-12H8a6 6 0 0 0-4.472 10"></svg:path></svg:g>`,
})
export class SolarLinkRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
