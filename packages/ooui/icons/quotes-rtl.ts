import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiQuotesRtlIcon],svg[ooui-quotes-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9v7h7V9c0-2.2-1.8-5-4-5h-2l1 2s2 0 2 3zM2 9v7h7V9c0-2.2-1.8-5-4-5H3l1 2s2 0 2 3z"></svg:path>`,
})
export class OouiQuotesRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
