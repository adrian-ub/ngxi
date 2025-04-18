import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPropaneTankIcon],svg[ic-sharp-propane-tank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15v3c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-3zm16-2v-3c0-1.86-1.28-3.41-3-3.86V2H7v4.14c-1.72.45-3 2-3 3.86v3zM9 4h6v2h-2V5h-2v1H9z"></svg:path>`,
})
export class IcSharpPropaneTankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
