import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsBeaconIcon],svg[grommet-icons-beacon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6zm0 0v11M7.05 4.05A6.98 6.98 0 0 0 5 9c0 1.933.784 3.683 2.05 4.95m9.9 0A6.98 6.98 0 0 0 19 9a6.98 6.98 0 0 0-2.05-4.95M4.222 1.222A10.97 10.97 0 0 0 1 9c0 3.037 1.231 5.787 3.222 7.778m15.556 0A10.97 10.97 0 0 0 23 9c0-3.038-1.231-5.788-3.222-7.778"></svg:path>`,
})
export class GrommetIconsBeaconIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
