import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsZigbeeIcon],svg[simple-icons-zigbee-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.988 0a11.85 11.85 0 0 0-8.617 3.696c7.02-.875 11.401-.583 13.289-.34c3.752.583 3.558 3.404 3.558 3.404L8.237 19.112c2.299.22 6.897.366 13.796-.631a11.86 11.86 0 0 0 1.912-6.469C23.945 5.374 18.595 0 11.988 0m.232 4.31c-2.451-.014-5.772.146-9.963.723C.854 7.003.055 9.41.055 12.012C.055 18.626 5.38 24 11.988 24c3.63 0 6.85-1.63 9.053-4.182c-7.286.948-11.813.631-13.75.388c-3.775-.56-3.557-3.404-3.557-3.404L15.691 4.474a39 39 0 0 0-3.471-.163Z"></svg:path>`,
})
export class SimpleIconsZigbeeIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
