import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiIndentLtrIcon],svg[ooui-indent-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 16h18v2H1zm8-9h10v2H9zm0 4h10v2H9zM1 2h18v2H1zm5 8l-5 4V6z"></svg:path>`,
})
export class OouiIndentLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
