import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNoCreditCardFillIcon],svg[ri-no-credit-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.586 21l1.607 1.607l1.414-1.415l-19.8-19.799l-1.413 1.415l.726.726A1 1 0 0 0 2.005 4v3h3.58l4 4h-7.58v9a1 1 0 0 0 1 1zm2.419-10v6.762L15.243 11zm0-4H11.243l-4-4h13.762a1 1 0 0 1 1 1z"></svg:path>`,
})
export class RiNoCreditCardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
