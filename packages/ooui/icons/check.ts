import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiCheckIcon],svg[ooui-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14.2L2.8 10l-1.4 1.4L7 17L19 5l-1.4-1.4z"></svg:path>`,
})
export class OouiCheckIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
