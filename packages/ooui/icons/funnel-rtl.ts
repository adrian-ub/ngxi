import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiFunnelRtlIcon],svg[ooui-funnel-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h18l-9 12z"></svg:path><svg:path fill="currentColor" d="m8 19l4-2V9H8z"></svg:path>`,
})
export class OouiFunnelRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
