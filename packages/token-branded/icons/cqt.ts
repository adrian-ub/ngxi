import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCqtIcon],svg[token-branded-cqt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="M12.844 3a9 9 0 0 0 0 18v-3.938A5.06 5.06 0 0 1 7.78 12a5.063 5.063 0 0 1 5.063-5.063zm0 14.062a5.06 5.06 0 0 0 4.677-7a5.06 5.06 0 0 0-4.677-3.125"></svg:path><svg:path fill="#00D8D5" d="M17.906 7.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"></svg:path><svg:path fill="#F2548B" d="M17.906 21a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"></svg:path></svg:g>`,
})
export class TokenBrandedCqtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
