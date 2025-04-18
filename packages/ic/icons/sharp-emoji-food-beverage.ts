import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpEmojiFoodBeverageIcon],svg[ic-sharp-emoji-food-beverage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19h18v2H2zM20 3H9v2.4L11 7v5H6V7l2-1.6V3H4v14h14v-7h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 5h-2V5h2z"></svg:path>`,
})
export class IcSharpEmojiFoodBeverageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
