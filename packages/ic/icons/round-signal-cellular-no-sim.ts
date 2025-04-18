import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSignalCellularNoSimIcon],svg[ic-round-signal-cellular-no-sim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5c0-1.1-.9-2-2-2h-6.17c-.53 0-1.04.21-1.42.59L7.95 5.06L19 16.11zM3.09 4.44a.996.996 0 0 0 0 1.41L5 7.78V19a2 2 0 0 0 2 2h11.23l.91.91a.996.996 0 1 0 1.41-1.41L4.5 4.44a.996.996 0 0 0-1.41 0"></svg:path>`,
})
export class IcRoundSignalCellularNoSimIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
