import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenEqbIcon],svg[token-eqb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 18.75a6.75 6.75 0 0 0 1.125-13.404v4.078a2.812 2.812 0 1 1-2.25 0V5.346A6.75 6.75 0 0 0 12 18.75M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18" clip-rule="evenodd"></svg:path>`,
})
export class TokenEqbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
