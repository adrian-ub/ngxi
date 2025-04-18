import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineSignalCellular1BarIcon],svg[ic-baseline-signal-cellular-1-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M2 22h20V2z"></svg:path><svg:path fill="currentColor" d="M12 12L2 22h10z"></svg:path>`,
})
export class IcBaselineSignalCellular1BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
