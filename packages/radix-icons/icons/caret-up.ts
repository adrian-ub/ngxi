import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsCaretUpIcon],svg[radix-icons-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.182 8.818a.45.45 0 0 1 0-.636l3-3a.45.45 0 0 1 .636 0l3 3a.45.45 0 0 1-.636.636L7.5 6.136L4.818 8.818a.45.45 0 0 1-.636 0" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsCaretUpIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
