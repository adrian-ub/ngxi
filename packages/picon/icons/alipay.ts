import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAlipayIcon],svg[picon-alipay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4V3h6v1C3 12-3 5 3 5l5 1v1L3 6c-4 0 1 3 3-2M1 2V1h6v1M3 0h1v3H3"></svg:path>`,
})
export class PiconAlipayIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
