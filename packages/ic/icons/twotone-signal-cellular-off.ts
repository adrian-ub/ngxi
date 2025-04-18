import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSignalCellularOffIcon],svg[ic-twotone-signal-cellular-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 1l-8.31 8.31l8.31 8.3zM4.91 4.36L3.5 5.77l6.36 6.37L1 21h17.73l2 2l1.41-1.41z"></svg:path>`,
})
export class IcTwotoneSignalCellularOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
