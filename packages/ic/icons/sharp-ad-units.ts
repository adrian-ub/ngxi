import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAdUnitsIcon],svg[ic-sharp-ad-units-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 1H5v22h14zm-2 18H7V5h10z"></svg:path><svg:path fill="currentColor" d="M8 6h8v2H8z"></svg:path>`,
})
export class IcSharpAdUnitsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
