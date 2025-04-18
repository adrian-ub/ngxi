import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiOutlineRtlIcon],svg[ooui-outline-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12h18v7H1zM11 1v8h8V1zm2 2h4v4h-4z"></svg:path>`,
})
export class OouiOutlineRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
