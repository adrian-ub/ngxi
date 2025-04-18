import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsScienceIcon],svg[gridicons-science-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.211 19.7Q3.773 21 5.12 21h13.76q1.348 0 1.909-1.3t-.37-2.367L15.465 11V5h1.668a.92.92 0 0 0 .69-.283A1 1 0 0 0 18.096 4a1 1 0 0 0-.273-.717a.92.92 0 0 0-.69-.283H6.867a.92.92 0 0 0-.69.283A1 1 0 0 0 5.905 4q0 .434.273.717a.92.92 0 0 0 .69.283h1.668v6L3.58 17.333q-.93 1.066-.369 2.367m4.457-4.423h8.664l-2.792-3.544V5h-3.08v6.733z" clip-rule="evenodd"></svg:path>`,
})
export class GridiconsScienceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
