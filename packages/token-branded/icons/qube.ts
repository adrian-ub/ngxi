import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedQubeIcon],svg[token-branded-qube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0057FF" d="M19.941 7.362v6.004l-2.647-1.53V9.109L12 6.176L6.706 8.998v5.729L12 17.559l3.97-2.118l3.971 2.118V21l-3.97-2.118L12 21l-7.942-4.362V7.362L12 3z"></svg:path>`,
})
export class TokenBrandedQubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
