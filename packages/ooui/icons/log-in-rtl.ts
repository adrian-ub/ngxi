import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiLogInRtlIcon],svg[ooui-log-in-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v6h-8V5l-4.75 5L11 15v-4z"></svg:path>`,
})
export class OouiLogInRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
