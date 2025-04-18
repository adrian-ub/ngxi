import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedWingIcon],svg[token-branded-wing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="m14.773 9.917l-1.565 2.813l-1.565 2.815l-1.567 2.808L8.51 15.54l1.565-2.814l1.567-2.812l-2.377-4.268h3.13l.813 1.457zm-8.64-4.27H3l3.943 7.081L8.51 9.917zm13.302 1.457l-.812-1.457h-3.131l2.378 4.27l-1.568 2.813l-1.564 2.815l1.564 2.808l1.567-2.812l1.566-2.814L21 9.915z"></svg:path>`,
})
export class TokenBrandedWingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
