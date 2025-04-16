import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsStretchHorizontallyIcon],svg[radix-icons-stretch-horizontally-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5V6H1V1.5a.5.5 0 1 0-1 0v12a.5.5 0 0 0 1 0V9h13v4.5a.5.5 0 1 0 1 0v-12a.5.5 0 0 0-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsStretchHorizontallyIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
