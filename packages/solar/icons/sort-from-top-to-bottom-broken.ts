import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSortFromTopToBottomBrokenIcon],svg[solar-sort-from-top-to-bottom-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 16h9m-7-5h7M8 6h5"></svg:path><svg:path stroke-linejoin="round" d="M17 4v16l3-4"></svg:path></svg:g>`,
})
export class SolarSortFromTopToBottomBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
