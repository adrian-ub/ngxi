import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerChip2CoreMicroprocessorDeviceElectronicsChipComputerIcon],svg[streamline-computer-chip-2-core-microprocessor-device-electronics-chip-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="8" height="13" x="3" y=".5" rx="1"></svg:rect><svg:path d="M3 3.5H.5M3 7H.5M3 10.5H.5m13-7H11M13.5 7H11m2.5 3.5H11m-4.5 0h2"></svg:path></svg:g>`,
})
export class StreamlineComputerChip2CoreMicroprocessorDeviceElectronicsChipComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
