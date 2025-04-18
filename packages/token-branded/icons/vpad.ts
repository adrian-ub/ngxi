import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedVpadIcon],svg[token-branded-vpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#68FFD2" fill-rule="evenodd" d="m3 4.125l9 15.75l9-15.75zm4.972 2.812L9.384 9.57l-1.322 1.867h2.402L12 14.25l3.853-7.313z" clip-rule="evenodd"></svg:path>`,
})
export class TokenBrandedVpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
