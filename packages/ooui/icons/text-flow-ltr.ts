import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTextFlowLtrIcon],svg[ooui-text-flow-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h18v2H1zm0 4h14v2H1zm0 4h10v2H1zm0 4h18v2H1z"></svg:path>`,
})
export class OouiTextFlowLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
