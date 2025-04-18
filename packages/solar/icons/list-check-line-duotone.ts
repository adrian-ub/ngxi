import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarListCheckLineDuotoneIcon],svg[solar-list-check-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m14 16l2.1 2.5l3.9-5"></svg:path><svg:path d="M21 6H3m18 4H3m7 4H3m7 4H3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarListCheckLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
