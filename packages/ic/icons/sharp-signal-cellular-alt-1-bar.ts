import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSignalCellularAlt1BarIcon],svg[ic-sharp-signal-cellular-alt-1-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 14h3v6H5z"></svg:path>`,
})
export class IcSharpSignalCellularAlt1BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
