import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSignalCellularNoSimIcon],svg[ic-sharp-signal-cellular-no-sim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-9L7.95 5.06L19 16.11zm-15.21.74L2.38 5.15L5 7.77V21h13.23l1.62 1.62l1.41-1.41z"></svg:path>`,
})
export class IcSharpSignalCellularNoSimIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
