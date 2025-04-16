import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsStrikethroughIcon],svg[radix-icons-strikethrough-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 3.25a.5.5 0 0 0-1 0V7.1H2.5a.4.4 0 1 0 0 .8H4v.65a3.5 3.5 0 1 0 7 0V7.9h1.5a.4.4 0 0 0 0-.8H11V3.25a.5.5 0 1 0-1 0V7.1H5zM5 7.9v.65a2.5 2.5 0 0 0 5 0V7.9z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsStrikethroughIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
