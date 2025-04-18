import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiImageLayoutBasicIcon],svg[ooui-image-layout-basic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3v14h18V3zm17 13H2V4h16z"></svg:path><svg:path fill="currentColor" d="M8.58 14h.81l3.11-4l3 4H17l-4.5-6L9 12.51L6.5 9.5L3 14h1.56l1.94-2.5z"></svg:path>`,
})
export class OouiImageLayoutBasicIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
