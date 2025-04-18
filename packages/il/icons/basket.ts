import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilBasketIcon],svg[il-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M718 191q10 0 17 7t6 17v92H0v-92q0-10 7-17t16-7h328L530 13q7-7 17-7t16 7l33 33q7 7 7 16t-7 16L483 191zM46 354h649l-43 258q-2 8-8 14t-15 6H112q-8 0-14-6t-9-14z"></svg:path>`,
})
export class IlBasketIcon {
  readonly viewBox = input("0 0 750 790")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
