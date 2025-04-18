import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSubtractSelectionOneIcon],svg[icon-park-subtract-selection-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 16H41C42.1046 16 43 16.8954 43 18V41C43 42.1046 42.1046 43 41 43H18C16.8954 43 16 42.1046 16 41V32"></svg:path><svg:rect width="27" height="27" x="5" y="5" rx="2"></svg:rect><svg:path d="M18 5L5 19"></svg:path><svg:path d="M27 5L5 29"></svg:path><svg:path d="M32 10L12 32"></svg:path><svg:path d="M32 21L22 32"></svg:path></svg:g>`,
})
export class IconParkSubtractSelectionOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
