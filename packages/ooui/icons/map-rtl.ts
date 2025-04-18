import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiMapRtlIcon],svg[ooui-map-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1v16l6 2l6-2l6 2V3l-6-2l-6 2zm12 2l4 1.36v11.9l-4-1.36zM3 3.74L7 5.1V17l-4-1.36z"></svg:path>`,
})
export class OouiMapRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
