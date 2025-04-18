import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAiVehicleSpark1Icon],svg[streamline-ai-vehicle-spark-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.513 4.963H4.77a1 1 0 0 0-1 .68L3 7.963H1.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1H2m10-4h.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H12"></svg:path><svg:path d="M10.499 13.463a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002m-7 0a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002m5.499-1.5H5M7.416 3.97c-.351-.06-.351-.564 0-.625A3.18 3.18 0 0 0 9.974.895l.022-.097c.075-.347.57-.349.648-.003l.026.113a3.19 3.19 0 0 0 2.565 2.435c.353.062.353.568 0 .63a3.19 3.19 0 0 0-2.565 2.435l-.026.112c-.079.347-.572.344-.648-.002l-.022-.097a3.18 3.18 0 0 0-2.558-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiVehicleSpark1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
