import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneTransitEnterexitIcon],svg[ic-twotone-transit-enterexit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.98 6L9 12.77V8H6v10h10v-3h-4.85L18 8.03z"></svg:path>`,
})
export class IcTwotoneTransitEnterexitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
