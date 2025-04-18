import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsFaceIcon],svg[radix-icons-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877M1.827 7.5a5.673 5.673 0 1 1 11.346 0a5.673 5.673 0 0 1-11.346 0m3.21 1.714a.5.5 0 1 0-.82.572A4 4 0 0 0 7.5 11.5c1.36 0 2.56-.679 3.283-1.714a.5.5 0 0 0-.82-.572A3 3 0 0 1 7.5 10.5a3 3 0 0 1-2.463-1.286m.338-2.364a.875.875 0 1 0 0-1.75a.875.875 0 0 0 0 1.75m5.125-.875a.875.875 0 1 1-1.75 0a.875.875 0 0 1 1.75 0" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsFaceIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
