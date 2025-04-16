import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsTriangleDownIcon],svg[radix-icons-triangle-down-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h7l-3.5 4.5z"></svg:path>`,
})
export class RadixIconsTriangleDownIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
