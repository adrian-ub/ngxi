import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiOutlineLtrIcon],svg[ooui-outline-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12h18v7H1zM1 1v8h8V1zm6 6H3V3h4z"></svg:path>`,
})
export class OouiOutlineLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
