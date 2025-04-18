import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedXorIcon],svg[token-branded-xor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#E3232C"><svg:path d="M7.715 19.914A8.94 8.94 0 0 0 12 21a8.94 8.94 0 0 0 4.284-1.086L12 13.532z"></svg:path><svg:path d="M6.375 12v-1.687h5.063V9.187H6.375V7.5h11.25v1.687h-5.062v1.126h5.062V12h-4.882l4.778 7.109A9 9 0 0 0 21 12a9 9 0 0 0-9-9a9 9 0 0 0-5.522 16.109L11.258 12z"></svg:path></svg:g>`,
})
export class TokenBrandedXorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
