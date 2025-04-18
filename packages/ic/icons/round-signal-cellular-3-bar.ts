import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSignalCellular3BarIcon],svg[ic-round-signal-cellular-3-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M4.41 22H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71"></svg:path><svg:path fill="currentColor" d="M17 7L3.71 20.29c-.63.63-.19 1.71.7 1.71H17z"></svg:path>`,
})
export class IcRoundSignalCellular3BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
