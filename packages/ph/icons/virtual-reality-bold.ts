import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVirtualRealityBoldIcon],svg[ph-virtual-reality-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m127 104.73l-24 56a12 12 0 0 1-22.06 0l-24-56A12 12 0 0 1 79 95.27l13 30.27l13-30.27a12 12 0 0 1 22 9.46M256 128a84.09 84.09 0 0 1-84 84H84a84 84 0 0 1 0-168h88a84.09 84.09 0 0 1 84 84m-24 0a60.07 60.07 0 0 0-60-60H84a60 60 0 0 0 0 120h88a60.07 60.07 0 0 0 60-60m-32-8a31.85 31.85 0 0 1-7.93 21.05l5.69 8A12 12 0 1 1 178.24 163l-7.91-11.06c-.77.05-1.55.09-2.33.09h-8v4a12 12 0 0 1-24 0V100a12 12 0 0 1 12-12h20a32 32 0 0 1 32 32m-40 8h8a8 8 0 0 0 0-16h-8Z"></svg:path>`,
})
export class PhVirtualRealityBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
