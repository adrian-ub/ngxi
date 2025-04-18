import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCardReciveLineDuotoneIcon],svg[solar-card-recive-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M19 14v6m0 0l2-2m-2 2l-2-2"></svg:path><svg:path d="M22 12c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4"></svg:path><svg:path d="M10 16H6m7 0h-.5M2 10h20" opacity=".4"></svg:path></svg:g>`,
})
export class SolarCardReciveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
