import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerChip1ComputerDeviceChipElectronicsCpuMicroprocessorIcon],svg[streamline-computer-chip-1-computer-device-chip-electronics-cpu-microprocessor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="8" height="8" x="3" y="3" rx="1"></svg:rect><svg:path d="M5 3V.5M9 3V.5M3 9H.5M3 5H.5M9 11v2.5M5 11v2.5M11 5h2.5M11 9h2.5m-5-1.5h-2"></svg:path></svg:g>`,
})
export class StreamlineComputerChip1ComputerDeviceChipElectronicsCpuMicroprocessorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
