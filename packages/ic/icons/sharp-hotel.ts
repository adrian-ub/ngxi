import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpHotelIcon],svg[ic-sharp-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3s1.34 3 3 3m16-6H11v7H3V5H1v15h2v-3h18v3h2z"></svg:path>`,
})
export class IcSharpHotelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
