import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageBarCodeScanIcon],svg[mage-bar-code-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.25 8.917V5.833a3.083 3.083 0 0 0-3.083-3.083h-3.084m0 18.5h3.084a3.083 3.083 0 0 0 3.083-3.083v-3.084m-18.5 0v3.084a3.083 3.083 0 0 0 3.083 3.083h3.084m0-18.5H5.833A3.083 3.083 0 0 0 2.75 5.833v3.084m3.189-.835v7.836M8.97 8.082v7.836M12 8.082v7.836m3.03-7.836v7.836m3.031-7.836v7.836"></svg:path>`,
})
export class MageBarCodeScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
