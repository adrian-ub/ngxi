import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBzzIcon],svg[token-bzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.813 4.541l2.25-1.26l2.25 1.271v2.532l-2.25 1.26l-.006-.012l-2.244-1.26zM7.219 20.72L3 18.469v-4.5l4.219-2.25l4.218 2.25v4.5zM21 13.969l-4.219-2.25l-4.218 2.25v4.5l4.218 2.25L21 18.469zM8.062 6.229l3.932-2.11l1.693.85v2.48l2.25 1.457v1.536L12 12.552l-3.938-2.11V6.223z"></svg:path>`,
})
export class TokenBzzIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
