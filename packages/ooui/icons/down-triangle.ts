import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiDownTriangleIcon],svg[ooui-down-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15L2 5h16z"></svg:path>`,
})
export class OouiDownTriangleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
