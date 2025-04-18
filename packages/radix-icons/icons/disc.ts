import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsDiscIcon],svg[radix-icons-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877M1.827 7.5a5.673 5.673 0 1 1 11.346 0a5.673 5.673 0 0 1-11.346 0m6.546 0a.873.873 0 1 1-1.745 0a.873.873 0 0 1 1.745 0m.95 0a1.823 1.823 0 1 1-3.645 0a1.823 1.823 0 0 1 3.645 0" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsDiscIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
