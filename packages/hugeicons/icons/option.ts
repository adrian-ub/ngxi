import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsOptionIcon],svg[hugeicons-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5h1.044c1.918 0 2.878 0 3.63.495c.75.496 1.129 1.378 1.885 3.141l2.883 6.728c.755 1.763 1.133 2.645 1.885 3.14c.751.496 1.71.496 3.63.496H20M14 5h6" color="currentColor"></svg:path>`,
})
export class HugeiconsOptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
