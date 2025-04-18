import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpTabletIcon],svg[ic-sharp-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 4H1v16h21.99zm-4 14H5V6h14z"></svg:path>`,
})
export class IcSharpTabletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
