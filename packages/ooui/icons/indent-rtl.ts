import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiIndentRtlIcon],svg[ooui-indent-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 16h18v2H1zm0-9h10v2H1zm0 4h10v2H1zm0-9h18v2H1zm18 4v8l-5-4z"></svg:path>`,
})
export class OouiIndentRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
