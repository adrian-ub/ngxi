import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUnionSelectionIcon],svg[icon-park-union-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 16H41C42.1046 16 43 16.8954 43 18V41C43 42.1046 42.1046 43 41 43H18C16.8954 43 16 42.1046 16 41V32"></svg:path><svg:path d="M32 16V7C32 5.89543 31.1046 5 30 5H7C5.89543 5 5 5.89543 5 7V30C5 31.1046 5.89543 32 7 32H16"></svg:path><svg:path d="M41.0005 16L17.0005 40"></svg:path><svg:path d="M32.0005 7L7.00049 32"></svg:path><svg:path d="M32.0005 16L16.0005 32"></svg:path><svg:path d="M43.0005 24L24.0005 43"></svg:path><svg:path d="M24.0005 5L5.00049 24"></svg:path><svg:path d="M43.0005 34L34.0005 43"></svg:path><svg:path d="M14.0005 5L5.00049 14"></svg:path></svg:g>`,
})
export class IconParkUnionSelectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
