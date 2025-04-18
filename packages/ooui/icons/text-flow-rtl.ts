import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTextFlowRtlIcon],svg[ooui-text-flow-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h18v2H1zm4 4h14v2H5zm4 4h10v2H9zm-8 4h18v2H1z"></svg:path>`,
})
export class OouiTextFlowRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
