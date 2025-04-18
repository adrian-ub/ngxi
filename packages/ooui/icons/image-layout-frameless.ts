import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiImageLayoutFramelessIcon],svg[ooui-image-layout-frameless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H1v14h18zM3 14l3.5-4.5l2.5 3L12.5 8l4.5 6z"></svg:path><svg:path fill="currentColor" d="M19 5H1V3h18zm0 12H1v-2h18z"></svg:path>`,
})
export class OouiImageLayoutFramelessIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
