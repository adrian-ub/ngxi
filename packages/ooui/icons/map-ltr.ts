import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiMapLtrIcon],svg[ooui-map-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3L7 1L1 3v16l6-2l6 2l6-2V1zM7 14.89l-4 1.36V4.35L7 3zm10 .75L13 17V5.1l4-1.36z"></svg:path>`,
})
export class OouiMapLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
