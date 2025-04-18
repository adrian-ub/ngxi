import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBringForwardIcon],svg[icon-park-bring-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="8" x="6" y="34" fill="#2F88FF"></svg:rect><svg:rect width="36" height="8" x="6" y="20" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M30 12L24 6L18 12V12"></svg:path><svg:path stroke-linecap="round" d="M24 28V34"></svg:path><svg:path stroke-linecap="round" d="M24 6V20"></svg:path></svg:g>`,
})
export class IconParkBringForwardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
