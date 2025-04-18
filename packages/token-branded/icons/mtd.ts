import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMtdIcon],svg[token-branded-mtd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF1826" d="M3 16.5h13.5V3H21v18H3zM3 3h4.5v7.072H3zm6.429 0h4.5v7.072h-4.5z"></svg:path>`,
})
export class TokenBrandedMtdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
