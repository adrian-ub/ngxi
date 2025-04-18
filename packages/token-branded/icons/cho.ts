import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedChoIcon],svg[token-branded-cho-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#1C4C06" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path><svg:path fill="#CEFF72" d="M12.001 8.295c-3.706 0-4.765 2.382-4.765 3.706s.97 3.705 4.765 3.705c3.616 0 4.765-2.382 4.765-3.705c0-1.324-1.06-3.706-4.765-3.706"></svg:path></svg:g>`,
})
export class TokenBrandedChoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
