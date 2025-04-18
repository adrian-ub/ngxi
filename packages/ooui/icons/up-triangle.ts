import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiUpTriangleIcon],svg[ooui-up-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 5l8 10H2z"></svg:path>`,
})
export class OouiUpTriangleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
