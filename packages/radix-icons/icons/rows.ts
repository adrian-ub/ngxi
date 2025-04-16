import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsRowsIcon],svg[radix-icons-rows-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 12.85H1v1.3h13zm0-4H1v1.3h13zm-13-4h13v1.3H1zm13-4H1v1.3h13z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsRowsIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
