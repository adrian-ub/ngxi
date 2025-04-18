import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsTokensIcon],svg[radix-icons-tokens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 2a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M3 4.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M10.5 2a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M9 4.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m-7 6a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M4.5 9a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m6-1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M9 10.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsTokensIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
