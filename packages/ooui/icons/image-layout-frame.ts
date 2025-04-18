import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiImageLayoutFrameIcon],svg[ooui-image-layout-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1z"></svg:path><svg:path fill="currentColor" d="M17 4H3v12h14zM5 13l2.5-3l2 2L12 9l3 4z"></svg:path>`,
})
export class OouiImageLayoutFrameIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
