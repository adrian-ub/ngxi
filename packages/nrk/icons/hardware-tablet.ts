import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkHardwareTabletIcon],svg[nrk-hardware-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1h18v22H3zm2 20h14V3H5zm8.5-3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></svg:path>`,
})
export class NrkHardwareTabletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
