import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarListCrossLineDuotoneIcon],svg[solar-list-cross-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 18.5l5-5m0 5l-5-5"></svg:path><svg:path d="M21 6H3m18 4H3m8 4H3m8 4H3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarListCrossLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
