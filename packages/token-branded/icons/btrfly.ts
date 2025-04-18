import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBtrflyIcon],svg[token-branded-btrfly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="m11.745 10.175l.275 1.075l.235-1.075L18.17 5.75H21l-.77 3.905l-2.73 2.085v.51h.67l.515 2.35l-2.83 3.65H15.6l-1.8-2.6l-1.03 1.6h-.255l-.26-.5h-.505l-.26.5h-.255l-1.03-1.6l-1.8 2.6H8.15L5.32 14.6l.515-2.35H6.5v-.51L3.77 9.655L3 5.75h2.83z"></svg:path>`,
})
export class TokenBrandedBtrflyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
