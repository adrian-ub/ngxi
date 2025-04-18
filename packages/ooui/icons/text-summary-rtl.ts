import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTextSummaryRtlIcon],svg[ooui-text-summary-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7h18v2H1zm4 4h14v2H5z"></svg:path>`,
})
export class OouiTextSummaryRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
