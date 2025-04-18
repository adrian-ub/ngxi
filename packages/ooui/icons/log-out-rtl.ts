import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiLogOutRtlIcon],svg[ooui-log-out-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17H9v2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9v2h8z"></svg:path><svg:path fill="currentColor" d="M7 15v-4h8V9H7V5l-6 5z"></svg:path>`,
})
export class OouiLogOutRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
