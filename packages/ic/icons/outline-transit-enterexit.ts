import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineTransitEnterexitIcon],svg[ic-outline-transit-enterexit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18H6V8h3v4.77L15.98 6L18 8.03L11.15 15H16z"></svg:path>`,
})
export class IcOutlineTransitEnterexitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
