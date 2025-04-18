import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsFontRomanIcon],svg[radix-icons-font-roman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.8 3.5a.45.45 0 0 1 .45-.45h4.5a.45.45 0 0 1 0 .9H8.1v7.1h1.65a.45.45 0 0 1 0 .9h-4.5a.45.45 0 1 1 0-.9H6.9v-7.1H5.25a.45.45 0 0 1-.45-.45" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsFontRomanIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
