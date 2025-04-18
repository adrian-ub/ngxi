import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLaIcon],svg[token-branded-la-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F355B" d="m11.8 5.912l-4.317 9.53h3.209l4.356-9.53h4.041L21 18.09h-3.527l-.203-2.647h-3.324l-.902 2.647H3L8.456 5.912zm2.788 7.941h2.402l-.435-5.823z"></svg:path>`,
})
export class TokenBrandedLaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
