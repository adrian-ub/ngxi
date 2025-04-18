import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCreditCardFrontIcon],svg[bx-credit-card-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2M4 18V6h16l.001 12z"></svg:path><svg:path fill="currentColor" d="M6.5 11h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5M6 14h6v2.001H6zm7 0h5v2.001h-5z"></svg:path>`,
})
export class BxCreditCardFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
