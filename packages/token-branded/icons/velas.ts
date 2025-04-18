import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedVelasIcon],svg[token-branded-velas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0137C1" d="m15.375 9.975l-3.37 6.075l-3.38-6.075zM18.75 7.95l-13.5-.004L12.005 20.1zM3 3.9l1.125 2.03h15.75L21 3.9z"></svg:path>`,
})
export class TokenBrandedVelasIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
