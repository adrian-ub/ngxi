import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsDoubleArrowDownIcon],svg[radix-icons-double-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.854 2.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7.5 5.793zm0 6a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7.5 11.793z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsDoubleArrowDownIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
