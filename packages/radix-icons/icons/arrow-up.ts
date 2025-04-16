import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsArrowUpIcon],svg[radix-icons-arrow-up-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.146 2.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L8 3.707V12.5a.5.5 0 0 1-1 0V3.707L3.854 6.854a.5.5 0 1 1-.708-.708z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsArrowUpIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
