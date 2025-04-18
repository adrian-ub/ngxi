import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSortFromBottomToTopLinearIcon],svg[solar-sort-from-bottom-to-top-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 8h9m-7 5h7m-5 5h5"></svg:path><svg:path stroke-linejoin="round" d="M17 20V4l3 4"></svg:path></svg:g>`,
})
export class SolarSortFromBottomToTopLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
