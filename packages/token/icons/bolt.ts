import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBoltIcon],svg[token-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.2 17.196v-8.56l5.28 4.404z"></svg:path><svg:path fill="currentColor" d="M21 3L7.2 8.192l5.838 4.847L3 21l13.5-5.193l-1.385-7.961z"></svg:path>`,
})
export class TokenBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
