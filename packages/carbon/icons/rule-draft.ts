import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRuleDraftIcon],svg[carbon-rule-draft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.707 19.293l-3-3a1 1 0 0 0-1.414 0L16 25.586V30h4.414l9.293-9.293a1 1 0 0 0 0-1.414M19.586 28H18v-1.586l5-5L24.586 23zM26 21.586L24.414 20L26 18.414L27.586 20zM8 16h10v2H8zm0-6h12v2H8z"></svg:path><svg:path fill="currentColor" d="M26 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13a10.98 10.98 0 0 0 5.824 9.707L13 29.467V27.2l-4.234-2.258A8.99 8.99 0 0 1 4 17V4h20v9h2Z"></svg:path>`,
})
export class CarbonRuleDraftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
