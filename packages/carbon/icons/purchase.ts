import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPurchaseIcon],svg[carbon-purchase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 2v3H4V8ZM4 24V13h24v11Z"></svg:path><svg:path fill="currentColor" d="M6 20h10v2H6z"></svg:path>`,
})
export class CarbonPurchaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
