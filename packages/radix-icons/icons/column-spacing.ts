import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsColumnSpacingIcon],svg[radix-icons-column-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0zM3.318 5.818a.45.45 0 1 0-.636-.636l-2 2a.45.45 0 0 0 0 .636l2 2a.45.45 0 1 0 .636-.636L2.086 7.95H5.5a.45.45 0 1 0 0-.9H2.086zm9-.636a.45.45 0 1 0-.636.636l1.232 1.232H9.5a.45.45 0 0 0 0 .9h3.414l-1.232 1.232a.45.45 0 0 0 .636.636l2-2a.45.45 0 0 0 0-.636z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsColumnSpacingIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
