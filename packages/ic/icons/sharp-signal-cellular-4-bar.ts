import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSignalCellular4BarIcon],svg[ic-sharp-signal-cellular-4-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22h20V2z"></svg:path>`,
})
export class IcSharpSignalCellular4BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
