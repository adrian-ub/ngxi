import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCard2LineDuotoneIcon],svg[solar-card-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M10 16.5H6m2-3H6M2 10h20" opacity=".5"></svg:path><svg:path d="M14 15c0-.943 0-1.414.293-1.707S15.057 13 16 13s1.414 0 1.707.293S18 14.057 18 15s0 1.414-.293 1.707S16.943 17 16 17s-1.414 0-1.707-.293S14 15.943 14 15Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCard2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
