import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAncIcon],svg[token-branded-anc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#43B543" d="M3.601 20.333c-1.53-.858-2.056-2.756-1.171-4.24L9.26 4.82c.884-1.484 2.733-2.012 4.264-1.155s2.056 2.756 1.172 4.24l-6.722 11.29C7.09 20.682 5.132 21.19 3.6 20.334"></svg:path><svg:path fill="#306A30" d="M20.399 20.333c1.53-.858 2.056-2.756 1.171-4.24L14.737 4.83c-.885-1.484-2.73-2.022-4.26-1.165c-1.531.857-2.056 2.756-1.172 4.24l6.722 11.29c.884 1.485 2.842 1.994 4.373 1.137"></svg:path><svg:path fill="#5FCE5F" fill-rule="evenodd" d="M14.525 8.216a3.125 3.125 0 1 0-5.05.001L12 12.437z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class TokenBrandedAncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
