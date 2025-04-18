import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiZoomOutIcon],svg[ooui-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15a7 7 0 0 0 4.2-1.4l5.4 5.4l1.4-1.4l-5.4-5.4A7 7 0 1 0 8 15m0-2A5 5 0 1 1 8 3a5 5 0 0 1 0 10M5 7h6v2H5Z"></svg:path>`,
})
export class OouiZoomOutIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
