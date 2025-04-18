import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiCopyRtlIcon],svg[ooui-copy-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3H9v2H7V3c0-1.1.895-2 2-2h8c1.1 0 2 .895 2 2v8c0 1.1-.895 2-2 2h-2v-2h2z"></svg:path><svg:path fill="currentColor" d="M3 9v8h8V9zm8-2c1.1 0 2 .895 2 2v8c0 1.1-.895 2-2 2H3c-1.1 0-2-.895-2-2V9c0-1.1.895-2 2-2z"></svg:path>`,
})
export class OouiCopyRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
