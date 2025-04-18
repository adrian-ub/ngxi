import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiSubtractIcon],svg[ooui-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9h12v2H4z"></svg:path>`,
})
export class OouiSubtractIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
