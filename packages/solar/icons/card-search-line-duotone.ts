import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCardSearchLineDuotoneIcon],svg[solar-card-search-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 13v-1c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3"></svg:path><svg:path stroke-linecap="round" d="M10 16H6m-4-6h20" opacity=".4"></svg:path><svg:circle cx="18" cy="17" r="3"></svg:circle><svg:path stroke-linecap="round" d="m20.5 19.5l1 1"></svg:path></svg:g>`,
})
export class SolarCardSearchLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
