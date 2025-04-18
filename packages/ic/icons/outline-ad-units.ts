import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineAdUnitsIcon],svg[ic-outline-ad-units-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M7 4V3h10v1zm0 14V6h10v12zm0 3v-1h10v1z"></svg:path><svg:path fill="currentColor" d="M16 7H8v2h8z"></svg:path>`,
})
export class IcOutlineAdUnitsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
