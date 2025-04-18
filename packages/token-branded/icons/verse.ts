import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedVerseIcon],svg[token-branded-verse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0085FF" d="m12.402 6.706l-1.64-2.647H3l8.92 15.882l1.668-2.78L7.664 6.707zm-2.54 1.588h3.218l1.287 2.139l3.414-6.374H21l-6.633 11.795z"></svg:path>`,
})
export class TokenBrandedVerseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
