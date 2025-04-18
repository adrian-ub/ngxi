import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextMiningIcon],svg[carbon-text-mining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 28h8v2h-8zm0-4h12v2H18zm0-4h12v2H18z"></svg:path><svg:path fill="currentColor" d="M16.001 26.473H16L4.284 12.955L9.5 6h13l5.216 6.955l-3.24 3.737l1.513 1.31l4.295-4.957L23.5 4h-15l-6.784 9.045l12.772 14.737z"></svg:path>`,
})
export class CarbonTextMiningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
