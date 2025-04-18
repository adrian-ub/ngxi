import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsOpacityIcon],svg[radix-icons-opacity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 1.5C4.5 4.25 3 6.5 3 9a4.5 4.5 0 1 0 9 0c0-2.5-1.5-4.75-4.5-7.5M11 9c0-1.888-1.027-3.728-3.5-6.126C5.027 5.272 4 7.112 4 9a3.5 3.5 0 1 0 7 0" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsOpacityIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
