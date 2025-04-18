import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFiberManualRecordIcon],svg[ic-sharp-fiber-manual-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="8" fill="currentColor"></svg:circle>`,
})
export class IcSharpFiberManualRecordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
