import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedVixIcon],svg[token-branded-vix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#BDE6F3" d="M9.188 20.158L3 3.878c3.19-.382 5.389 2.397 6.565 5.271l4.686 11.009z"></svg:path><svg:path fill="#32B5E1" d="M14.25 20.158L21 3.878c-3.19-.382-5.389 2.397-6.565 5.271L9.75 20.158z"></svg:path></svg:g>`,
})
export class TokenBrandedVixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
