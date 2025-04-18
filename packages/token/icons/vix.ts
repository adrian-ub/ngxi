import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenVixIcon],svg[token-vix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.187 20.157L3 3.878c3.19-.382 5.389 2.396 6.564 5.27l4.686 11.009z"></svg:path><svg:path fill="currentColor" d="M14.25 20.157L21 3.878c-3.19-.382-5.389 2.396-6.564 5.27L9.75 20.158z"></svg:path>`,
})
export class TokenVixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
