import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSortFromTopToBottomLineDuotoneIcon],svg[solar-sort-from-top-to-bottom-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 16h9"></svg:path><svg:path d="M6 11h7" opacity=".7"></svg:path><svg:path d="M8 6h5" opacity=".3"></svg:path><svg:path stroke-linejoin="round" d="M17 4v16l3-4"></svg:path></svg:g>`,
})
export class SolarSortFromTopToBottomLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
