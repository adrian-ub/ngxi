import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePrinterSolidIcon],svg[streamline-printer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.25.5V3h7.5V.5a.5.5 0 0 0-.5-.5h-6.5a.5.5 0 0 0-.5.5m.638 9V13c0 .133.047.26.13.354a.42.42 0 0 0 .314.146h5.336a.42.42 0 0 0 .314-.146a.53.53 0 0 0 .13-.354V9.5zM.45 4.804a1.53 1.53 0 0 1 1.049-.41h11c.388 0 .766.144 1.05.41c.284.267.45.636.45 1.029v4.227c0 .393-.166.762-.45 1.03c-.284.265-.662.41-1.05.41h-1.138v-2c0-.69-.56-1.25-1.25-1.25H3.888c-.69 0-1.25.56-1.25 1.25v2H1.5c-.388 0-.766-.145-1.05-.41A1.4 1.4 0 0 1 0 10.06V5.833c0-.393.166-.762.45-1.029m8.864 1.444c0-.345.28-.625.625-.625h1.637a.625.625 0 1 1 0 1.25H9.94a.625.625 0 0 1-.625-.625Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePrinterSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
