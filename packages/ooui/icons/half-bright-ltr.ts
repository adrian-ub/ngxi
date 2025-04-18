import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiHalfBrightLtrIcon],svg[ooui-half-bright-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6.67V3h-4.2L9.87.07L6.94 3H3v3.67L.07 9.6L3 12.53V17h3.94l2.93 2.93L12.8 17H17v-4.47l2.93-2.93zm-7 8.93v-12a6.21 6.21 0 0 1 6 6a6.21 6.21 0 0 1-6 6"></svg:path>`,
})
export class OouiHalfBrightLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
