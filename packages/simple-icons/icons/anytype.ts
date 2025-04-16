import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAnytypeIcon],svg[simple-icons-anytype-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.333 0h13.334A5.32 5.32 0 0 1 24 5.333v13.334A5.32 5.32 0 0 1 18.667 24H5.333A5.32 5.32 0 0 1 0 18.667V5.333A5.32 5.32 0 0 1 5.333 0m10.334 7.667v-3H6.344v3zm0 0v11.666h3V7.667ZM9.5 19.333a4.833 4.833 0 1 0 0-9.666a4.833 4.833 0 0 0 0 9.666"></svg:path>`,
})
export class SimpleIconsAnytypeIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
