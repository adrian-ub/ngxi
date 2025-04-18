import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsComponentNoneIcon],svg[radix-icons-component-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.854 1.49a.5.5 0 0 0-.708 0L1.49 7.146a.5.5 0 0 0 0 .708l2.475 2.474l-2.319 2.318a.5.5 0 0 0 .708.708l2.318-2.318l2.475 2.474a.5.5 0 0 0 .707 0l5.657-5.656a.5.5 0 0 0 0-.708l-2.475-2.474l2.318-2.318a.5.5 0 1 0-.708-.708l-2.318 2.318zM9.62 4.672L7.5 2.55L2.55 7.5l2.122 2.121zm-4.24 5.656L7.5 12.45l4.95-4.95l-2.121-2.121z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsComponentNoneIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
