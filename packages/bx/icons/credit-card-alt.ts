import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCreditCardAltIcon],svg[bx-credit-card-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15.5" cy="13.5" r="2.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 13.5c0-.815.396-1.532 1-1.988A2.47 2.47 0 0 0 11.5 11a2.5 2.5 0 1 0 0 5a2.47 2.47 0 0 0 1.5-.512a2.49 2.49 0 0 1-1-1.988"></svg:path><svg:path fill="currentColor" d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2M4 18V6h16l.002 12z"></svg:path>`,
})
export class BxCreditCardAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
