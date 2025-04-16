import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsCornerBottomRightIcon],svg[radix-icons-corner-bottom-right-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.123 12H3.5a.5.5 0 0 1 0-1h1.6c1.128 0 1.945 0 2.586-.053c.637-.052 1.057-.152 1.403-.328a3.5 3.5 0 0 0 1.53-1.53c.176-.346.276-.766.328-1.403C11 7.045 11 6.228 11 5.1V3.5a.5.5 0 0 1 1 0v1.623c0 1.1 0 1.958-.056 2.645c-.057.698-.175 1.265-.435 1.775a4.5 4.5 0 0 1-1.966 1.967c-.51.26-1.077.377-1.775.434C7.08 12 6.224 12 5.123 12" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsCornerBottomRightIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
