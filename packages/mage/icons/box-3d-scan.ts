import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageBox3dScanIcon],svg[mage-box-3d-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11.008 5.758L6.933 8.02a2.04 2.04 0 0 0-1.046 1.786v4.388a2.04 2.04 0 0 0 1.046 1.786l4.075 2.262a2.04 2.04 0 0 0 1.984 0l4.075-2.262a2.04 2.04 0 0 0 1.046-1.786V9.806a2.04 2.04 0 0 0-1.046-1.786l-4.075-2.262a2.04 2.04 0 0 0-1.984 0Z"></svg:path><svg:path d="M17.699 8.577L12 12L6.301 8.577M12 18.494V12"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21.25 7.889V5.833a3.083 3.083 0 0 0-3.083-3.083h-3.084m0 18.5h3.084a3.083 3.083 0 0 0 3.083-3.083V16.11m-18.5.001v2.056a3.083 3.083 0 0 0 3.083 3.083h3.084m0-18.5H5.833A3.083 3.083 0 0 0 2.75 5.833V7.89"></svg:path></svg:g>`,
})
export class MageBox3dScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
