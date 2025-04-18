import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiLayoutRtlIcon],svg[ooui-layout-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12v7h18V1h-7v11z"></svg:path><svg:path fill="currentColor" d="M1 1v8h8V1zm2 2h4v4H3z"></svg:path>`,
})
export class OouiLayoutRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
