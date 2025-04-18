import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKalmIcon],svg[token-branded-kalm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E6403B" d="M6.938 6.375a1.688 1.688 0 1 0 0-3.375a1.688 1.688 0 0 0 0 3.375"></svg:path><svg:path fill="#FCB82B" d="M6.938 11.438a1.687 1.687 0 1 0 0-3.375a1.687 1.687 0 0 0 0 3.374"></svg:path><svg:path fill="#40D27E" d="M6.938 16.5a1.688 1.688 0 1 0 0-3.375a1.688 1.688 0 0 0 0 3.375"></svg:path><svg:path fill="#2BA5F8" d="M6.938 21a1.687 1.687 0 1 0 0-3.375a1.687 1.687 0 0 0 0 3.375"></svg:path><svg:path fill="#414141" d="M15.375 8.063h3.375l-5.625 6.187L18.75 21h-3.375L9.75 14.25z"></svg:path></svg:g>`,
})
export class TokenBrandedKalmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
