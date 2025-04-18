import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkExcludeSelectionIcon],svg[icon-park-exclude-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="27" height="27" x="16" y="16" rx="2"></svg:rect><svg:rect width="27" height="27" x="5" y="5" rx="2"></svg:rect><svg:path d="M25.0005 32L16.0005 41"></svg:path><svg:path d="M41.0005 16L32.0005 25"></svg:path><svg:path d="M16.0005 23L7.00049 32"></svg:path><svg:path d="M32.0005 7L23.0005 16"></svg:path><svg:path d="M43.0005 24L24.0005 43"></svg:path><svg:path d="M24.0005 5L5.00049 24"></svg:path><svg:path d="M43.0005 34L34.0005 43"></svg:path><svg:path d="M14 5L5 14"></svg:path></svg:g>`,
})
export class IconParkExcludeSelectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
