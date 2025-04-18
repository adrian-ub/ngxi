import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAlgorandIcon],svg[token-branded-algorand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="m6.142 21l8.221-14.227l.99 3.683L9.267 21h3.116l3.953-6.844L18.181 21h2.792l-2.729-10.166L20.18 7.2h-2.836L16.137 3h-2.72L3.028 21z"></svg:path>`,
})
export class TokenBrandedAlgorandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
