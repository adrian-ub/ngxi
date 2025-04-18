import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRuleTestIcon],svg[carbon-rule-test-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 30a7 7 0 1 1 7-7a7.01 7.01 0 0 1-7 7m0-12a5 5 0 1 0 5 5a5.006 5.006 0 0 0-5-5"></svg:path><svg:path fill="currentColor" d="m26 24.586l-2-2V20h-2v3.414L24.586 26zM8 16h6v2H8zm0-6h12v2H8z"></svg:path><svg:path fill="currentColor" d="M26 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13a10.98 10.98 0 0 0 5.824 9.707L13 29.467V27.2l-4.234-2.258A8.99 8.99 0 0 1 4 17V4h20v9h2Z"></svg:path>`,
})
export class CarbonRuleTestIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
