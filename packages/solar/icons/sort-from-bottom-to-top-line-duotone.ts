import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSortFromBottomToTopLineDuotoneIcon],svg[solar-sort-from-bottom-to-top-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 8h9"></svg:path><svg:path d="M6 13h7" opacity=".7"></svg:path><svg:path d="M8 18h5" opacity=".4"></svg:path><svg:path stroke-linejoin="round" d="M17 20V4l3 4"></svg:path></svg:g>`,
})
export class SolarSortFromBottomToTopLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
